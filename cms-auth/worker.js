/**
 * Sveltia CMS GitHub OAuth handler.
 *
 * Sveltia's editor at /admin/ opens a popup to <worker>/auth?provider=github&site_id=...
 * We redirect to GitHub's OAuth screen, then GitHub redirects back to /callback?code=...
 * with the user's authorization code. We exchange that code for an access token
 * and post the result back to the opener window so the CMS can use it.
 *
 * Secrets (set via `wrangler secret put`):
 *   GITHUB_CLIENT_ID
 *   GITHUB_CLIENT_SECRET
 *
 * Optional (vars in wrangler.toml):
 *   ALLOWED_DOMAINS  comma-separated list (e.g. "apartamentomarazul.com,*.pages.dev")
 */

const ALLOWED_PROVIDERS = ['github'];

function corsHeaders(origin) {
  return {
    'Access-Control-Allow-Origin': origin || '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

function postMessageHtml(provider, status, payload) {
  // Sveltia listens for: "authorization:<provider>:<status>:<json>"
  const msg = `authorization:${provider}:${status}:${JSON.stringify(payload)}`;
  // Escape for safe embedding in a <script> string literal.
  const safe = JSON.stringify(msg);
  return `<!doctype html>
<html><head><meta charset="utf-8"><title>Authorising…</title></head>
<body>
<p>Authorising. You can close this window if it does not close automatically.</p>
<script>
(function () {
  function send() {
    if (!window.opener) return false;
    window.opener.postMessage(${safe}, '*');
    return true;
  }
  // Sveltia first sends a handshake; reply once it does.
  window.addEventListener('message', function (e) {
    if (e.data === 'authorizing:github') send();
  });
  // Best-effort immediate send too.
  send();
  setTimeout(function () { window.close(); }, 800);
})();
</script>
</body></html>`;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get('Origin') || '';

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders(origin) });
    }

    // Step 1: /auth — redirect user to GitHub authorize endpoint.
    if (url.pathname === '/auth' || url.pathname === '/oauth/authorize') {
      const provider = url.searchParams.get('provider') || 'github';
      if (!ALLOWED_PROVIDERS.includes(provider)) {
        return new Response('Unsupported provider', { status: 400 });
      }
      if (!env.GITHUB_CLIENT_ID) {
        return new Response('Worker missing GITHUB_CLIENT_ID secret', { status: 500 });
      }
      const ghAuthorize = new URL('https://github.com/login/oauth/authorize');
      ghAuthorize.searchParams.set('client_id', env.GITHUB_CLIENT_ID);
      ghAuthorize.searchParams.set('scope', 'repo,user');
      ghAuthorize.searchParams.set('redirect_uri', `${url.origin}/callback`);
      // Pass through Sveltia's `site_id` as opaque state for round-trip integrity.
      const siteId = url.searchParams.get('site_id') || '';
      if (siteId) ghAuthorize.searchParams.set('state', siteId);
      return Response.redirect(ghAuthorize.toString(), 302);
    }

    // Step 2: /callback — GitHub returns ?code=… → exchange for access token.
    if (url.pathname === '/callback') {
      const code = url.searchParams.get('code');
      if (!code) {
        return new Response(postMessageHtml('github', 'error', { error: 'missing_code' }), {
          headers: { 'Content-Type': 'text/html; charset=utf-8' },
        });
      }
      if (!env.GITHUB_CLIENT_ID || !env.GITHUB_CLIENT_SECRET) {
        return new Response(postMessageHtml('github', 'error', { error: 'worker_misconfigured' }), {
          headers: { 'Content-Type': 'text/html; charset=utf-8' },
        });
      }
      try {
        const tokenResp = await fetch('https://github.com/login/oauth/access_token', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'User-Agent': 'apartamento-mar-azul-cms-auth',
          },
          body: JSON.stringify({
            client_id: env.GITHUB_CLIENT_ID,
            client_secret: env.GITHUB_CLIENT_SECRET,
            code,
          }),
        });
        const json = await tokenResp.json();
        if (json.error || !json.access_token) {
          return new Response(
            postMessageHtml('github', 'error', { error: json.error || 'token_exchange_failed' }),
            { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
          );
        }
        return new Response(
          postMessageHtml('github', 'success', { token: json.access_token, provider: 'github' }),
          { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
        );
      } catch (err) {
        return new Response(
          postMessageHtml('github', 'error', { error: 'token_request_threw' }),
          { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
        );
      }
    }

    // Health check / root
    if (url.pathname === '/' || url.pathname === '/health') {
      return new Response('Sveltia CMS auth worker. OK.', {
        headers: { 'Content-Type': 'text/plain' },
      });
    }

    return new Response('Not found', { status: 404 });
  },
};
