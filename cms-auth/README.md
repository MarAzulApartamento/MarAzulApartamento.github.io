# Sveltia CMS auth worker

Handles GitHub OAuth so Stefania can log into `/admin/` on the live site and edit content (reviews, FAQs) without touching git directly. The worker is the small redirect-and-token-exchange piece between the static site and GitHub; no other backend needed.

## One-time setup playbook

### 1. Deploy the worker (gets you a URL)

```
cd cms-auth
npx wrangler login        # if not already authenticated against the Cloudflare account
npx wrangler deploy
```

Note the URL printed at the end, e.g. `https://marazul-cms-auth.<account>.workers.dev`. That's the worker URL.

### 2. Register a GitHub OAuth App

Go to https://github.com/settings/developers → **New OAuth App**.

| Field | Value |
|---|---|
| Application name | `Apartamento Mar Azul CMS` |
| Homepage URL | `https://apartamentomarazul.com` |
| Authorization callback URL | `https://marazul-cms-auth.<account>.workers.dev/callback` (use the URL from step 1) |

Save → copy **Client ID** → click **Generate a new client secret** → copy the secret (it's only shown once).

### 3. Set the secrets on the worker

```
cd cms-auth
npx wrangler secret put GITHUB_CLIENT_ID
# paste the Client ID, hit enter
npx wrangler secret put GITHUB_CLIENT_SECRET
# paste the Client Secret, hit enter
```

### 4. Wire the worker URL into the CMS config

Open `project/site/public/admin/config.yml` and set:

```yaml
backend:
  name: github
  repo: MarAzulApartamento/MarAzulApartamento.github.io
  branch: redesign/v2
  base_url: https://marazul-cms-auth.<account>.workers.dev
  auth_endpoint: auth
```

Commit and push so Cloudflare Pages rebuilds the site.

### 5. Give Stefania access to the GitHub repo

Stefania needs a GitHub account (free). Once she has one, on the repo settings:

`MarAzulApartamento/MarAzulApartamento.github.io` → Settings → Collaborators → **Add people** → enter her username → **Write** access (so the CMS can commit on her behalf).

She'll get an email invite; she accepts, and her account is now allowed to push to the repo via the OAuth app.

### 6. Test end-to-end

1. Visit `https://apartamentomarazul.com/admin/` (or whatever Cloudflare Pages URL is currently serving the site)
2. Click **Login with GitHub**
3. GitHub asks her to authorize "Apartamento Mar Azul CMS" → she approves
4. Popup closes, she lands in the Sveltia editor
5. Test: open **Reviews**, add a fake review, click **Save**, verify a new commit appears in the GitHub repo. Delete the test review afterwards.

## Architecture

```
Stefania's browser            Worker                    GitHub
─────────────────             ──────                    ──────
visits /admin/
clicks "Login with GitHub"
   ↓ popup opens
   ↓ /auth?provider=github
   ──────────────────────────►
                              redirects to GitHub authorize
                                                        ↓
                              ◄────────────────────────── shows "authorize this app?"
   approves
                              receives /callback?code=…
                              POSTs code+secret to GitHub
                              ──────────────────────────►
                              ◄────────────────────────── access_token
                              postMessage(token) → /admin/
   editor unlocks
   edits commit via GitHub API directly from the browser using the token
```

The worker holds the client secret; the token never touches the static site source. Once issued, the token lives in browser localStorage on Stefania's machine.

## Troubleshooting

- **"Worker missing GITHUB_CLIENT_ID secret"** → step 3 wasn't run on the deployed worker (check `wrangler secret list`).
- **Popup closes but admin still says "Login"** → wrong `base_url` in `config.yml`, or the OAuth callback URL on GitHub doesn't match the worker URL exactly (trailing slashes matter).
- **"Bad credentials" when saving** → Stefania isn't a collaborator on the repo, or her invitation hasn't been accepted yet.
- **Editing the wrong branch** → `branch: redesign/v2` in `config.yml`. Switch to `main` once the redesign is live and merged.
