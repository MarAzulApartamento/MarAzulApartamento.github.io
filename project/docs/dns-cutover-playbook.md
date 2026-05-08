# DNS cutover playbook — Namecheap → Cloudflare Pages

**Last updated:** 2026-05-08
**Status:** Sprint 9 deliverable; runs once after `pre-launch-qa-checklist.md` passes.
**Estimated time:** 30 minutes of work, plus 1–24 hours of DNS propagation.
**Owner:** Luis executes the technical steps; Stefania confirms readiness and ratifies the move.
**Goal:** swing `apartamentomarazul.com` from the existing GitHub Pages site to the new Cloudflare Pages deploy without a serving outage.

This doc covers the happy path AND the rollback path. We assume the redesign on `redesign/v2` is already passing the pre-launch QA checklist on its current preview URL.

---

## Pre-flight (the day before cutover)

- [ ] `pre-launch-qa-checklist.md` is fully ticked. Zero blocking issues.
- [ ] The redesign branch (likely `redesign/v2`) has been merged into `main` (or whichever branch Cloudflare Pages serves as Production). **Cloudflare Pages Production deploys from `main`** — so a merge from `redesign/v2` → `main` triggers the production build.
- [ ] Confirm the `main` deployment is green in Cloudflare Pages → Deployments.
- [ ] Snapshot the current GitHub Pages site: `wget --recursive --no-clobber https://apartamentomarazul.com/ -P ./gh-pages-snapshot/` (rollback safety net).
- [ ] Lower the **TTL on the existing DNS records** at Namecheap to 300 seconds (5 minutes) at least 24 hours before the cutover. This shrinks propagation time when we change records.
- [ ] Stefania is reachable on cutover day in case anything looks wrong.

---

## The cutover (~20 minutes of active work)

### Step 1 — Add the custom domain to Cloudflare Pages

1. Cloudflare dashboard → Workers & Pages → the Mar Azul project → **Custom domains** → **Set up a custom domain**.
2. Enter `apartamentomarazul.com`. Cloudflare prompts you to add a domain to Cloudflare (zone) first — say **Yes, add it**.
3. Cloudflare assigns two nameservers like:
   ```
   alex.ns.cloudflare.com
   diane.ns.cloudflare.com
   ```
   Copy both. **You'll need them in Step 3.**
4. Cloudflare also asks you to add a DNS CNAME record:
   ```
   apartamentomarazul.com → <project>.pages.dev
   ```
   Add this through the Cloudflare zone DNS panel (it'll have prefilled it for you — accept).
5. Repeat for `www.apartamentomarazul.com` if guests might type that:
   ```
   www.apartamentomarazul.com → apartamentomarazul.com (CNAME) — proxied
   ```

At this point Cloudflare is ready to serve `apartamentomarazul.com`, but the public internet still routes that domain through Namecheap's nameservers.

### Step 2 — Verify Cloudflare can serve the domain (before swapping nameservers)

Before we change nameservers globally, prove Cloudflare can serve our content:

```bash
curl -H "Host: apartamentomarazul.com" https://<project>.pages.dev/ -I
```

Should return `200 OK`, with our security headers. If yes, proceed.

### Step 3 — Change the nameservers at Namecheap

1. Namecheap account → **Domain List** → click `apartamentomarazul.com` → **Manage**.
2. Under **Nameservers**, switch from `BasicDNS` (or whatever's set) to **Custom DNS**.
3. Enter the two Cloudflare nameservers from Step 1 (in the order Cloudflare gave them).
4. Save.

Namecheap warns the change may take up to 48 hours to propagate. With the TTL lowered to 300 seconds the day before, it's usually 5–60 minutes in practice.

### Step 4 — Watch propagation

Monitor with:

```bash
dig +short apartamentomarazul.com NS
```

You're waiting for the response to show the Cloudflare nameservers. Once it does, the world starts routing the domain through Cloudflare.

Also useful: https://www.whatsmydns.net/#NS/apartamentomarazul.com — visualises propagation across global DNS resolvers.

### Step 5 — Verify the cutover from a clean state

Once propagation is done:

```bash
curl -I https://apartamentomarazul.com/
```

Should return:
- `HTTP/2 200` (or `HTTP/1.1 200`)
- `server: cloudflare`
- Our brand security headers (`x-frame-options: SAMEORIGIN`, etc.)

In a browser:
- [ ] Open `https://apartamentomarazul.com/` — new redesign loads.
- [ ] Open `http://apartamentomarazul.com/` — auto-redirects to HTTPS.
- [ ] Open `https://www.apartamentomarazul.com/` — also serves the redesign (or 301-redirects to apex, depending on Cloudflare config).

### Step 6 — Update production-only references

These can't be tested on the preview URL; they're only meaningful on the real domain.

- [ ] **GBP website link:** Cloudflare → Web Analytics → confirm the apartamentomarazul.com hostname is now collecting (vs. the preview URL).
- [ ] **GBP "Website" field:** GBP dashboard → switch from `https://apartamento-mar-azul.lodgify.com/` to `https://apartamentomarazul.com`. (See `gbp-playbook.md` Action #4.)
- [ ] **GBP "Book" button URL:** swap to the production URL with UTM parameters (See `gbp-playbook.md` Action #5).
- [ ] **OTA listings (Booking.com, Airbnb, Vrbo)** that reference a website: update to the production URL.
- [ ] **Sveltia CMS** GitHub OAuth callback URL — the OAuth app on github.com/settings/developers needs `apartamentomarazul.com/admin/` added if it isn't already. Check `cms-auth/README.md` for the configured callback URLs.
- [ ] **Lodgify dashboard** website field: update if it points to a stale URL.

### Step 7 — Smoke test the production site

Re-run the most critical checks from `pre-launch-qa-checklist.md`:
- [ ] Hero loads.
- [ ] Calendar renders with current Lodgify availability.
- [ ] Continue to booking opens Lodgify checkout.
- [ ] WhatsApp link works.
- [ ] Cookie banner appears in incognito.
- [ ] All 7 languages serve correctly.
- [ ] `/admin/` works (Sveltia loads, GitHub OAuth completes).

---

## Rollback (if something is wrong post-cutover)

If a critical issue surfaces in the first 60 minutes — booking flow broken, all 5xx errors, total outage — roll back **before** the user community notices.

### Option 1: revert at the nameserver level (full rollback)

1. Namecheap → Domain List → `apartamentomarazul.com` → Manage → Nameservers.
2. Switch from **Custom DNS** back to whatever was there before (likely `BasicDNS` or Namecheap defaults).
3. Re-add the original DNS records that pointed at GitHub Pages (the `gh-pages-snapshot` from pre-flight has them).
4. Wait 5–60 minutes for propagation back.
5. Verify `https://apartamentomarazul.com/` serves the old GitHub Pages site.

### Option 2: hotfix at the Cloudflare layer (partial rollback)

If only one route is broken (e.g. `/book` is 500'ing), don't roll back DNS — fix the underlying issue and redeploy via Cloudflare Pages. Pages deploys take 1–2 minutes from a `git push`, much faster than a DNS rollback.

### Option 3: temporary "site is being updated" page

If the issue is non-critical but user-facing (e.g. legal page placeholders made it through), add a temporary banner via the CMS or a quick PR to `main`. Pages redeploys in ~2 minutes.

---

## Post-cutover monitoring (first 48 hours)

- [ ] GA4 Realtime — confirm traffic is flowing on the production hostname (not the preview URL).
- [ ] Cloudflare Web Analytics — confirm hits are being logged.
- [ ] Cloudflare Pages → Deployments → green for production.
- [ ] No spike in 4xx/5xx errors in Cloudflare Analytics.
- [ ] No spike in support inquiries / WhatsApp messages saying "your site is broken".
- [ ] Search Console (Google) — no critical issues, sitemap is accepted within 48h.
- [ ] Booking attempts continue at the rate seen pre-launch.

---

## After 30 days (cleanup)

- [ ] Delete the old GitHub Pages site source (`MarAzulApartamento.github.io` repo previous content) — Cloudflare Pages now owns the production source.
- [ ] Archive the `redesign/v2` branch (its content is now on `main`).
- [ ] Update `CLAUDE.md`'s **Tech Stack** section to remove "GitHub Pages" references.
- [ ] Update memory: project facts noting the production worker.

---

## Common gotchas

- **Email forwarding breaks during cutover.** If `hello@apartamentomarazul.com` was email-forwarded via Namecheap, swapping nameservers to Cloudflare can break that forwarding unless you also re-add the email MX records in Cloudflare DNS. Check Namecheap → Email Forwarding → note the existing settings → recreate them in Cloudflare DNS as MX records before the swap.
- **Lodgify webhook URL.** Lodgify sometimes pings webhooks at `apartamentomarazul.com/lodgify-hook` or similar. We don't currently have one configured, but if Stefania ever did, the URL keeps working through the cutover (same hostname).
- **Caching.** Browsers + ISPs cache DNS records aggressively. If `apartamentomarazul.com` looks broken on someone's machine but works elsewhere, it's almost always cached DNS. Tell them to flush: `ipconfig /flushdns` (Windows) or `sudo killall -HUP mDNSResponder` (macOS).
- **HSTS preload.** Our `Strict-Transport-Security` header has `preload` enabled. After 6+ months on production, we can submit to https://hstspreload.org for browsers to hardcode HTTPS for our domain. Don't submit until 6+ months in — getting off the list is hard.

---

## Cross-references

- `pre-launch-qa-checklist.md` — must be 100% green before this playbook starts.
- `gbp-playbook.md` Actions #4 and #5 — Website URL + Book button updates that pair with this cutover.
- `cms-auth/README.md` — GitHub OAuth callback URL settings that may need updating.
- `nap-audit.md` — every NAP citation needs updating to the production URL post-cutover.
- `questions-for-stefania.md` items #14 (DNS access — confirmed at Namecheap), #15 (Cloudflare account — confirmed).
