# Pre-launch QA checklist

**Last updated:** 2026-05-08
**When to run:** twice — once a few days before launch (to surface issues early), then again the morning of launch (final smoke test before the DNS cutover).
**Estimated time:** 60–90 minutes for a full pass.
**Goal:** zero surprises on launch day.

This doc walks the live preview at `https://marazul.marazulapartamento.workers.dev/` (or whatever the current preview URL is). Tick each box. Anything failing goes into the "blocking" section at the end and gets fixed before the DNS cutover.

---

## 1. Booking flow (most critical)

The single highest-impact path on the site. Test the whole journey end-to-end on at least one device.

- [ ] Homepage **Check availability** button scrolls smoothly to the calendar section.
- [ ] Calendar shows real availability (not all days greyed; not all days available — check matches Lodgify dashboard).
- [ ] Picking a check-in date shows correct check-out prompt with the right minimum-stay number.
- [ ] Picking check-out shows correct nights count, total price, and average per-night.
- [ ] Picking a range that includes blocked dates shows the blocked-error banner.
- [ ] **Continue to booking** button opens Lodgify checkout in a new tab with the right arrival + departure dates already selected.
- [ ] Lodgify checkout looks complete (price, fees, taxes appear).
- [ ] Try at least one full booking on a test/staging Lodgify property (or use a credit card you can refund) — verify the confirmation email arrives.
- [ ] **Sticky CTA** at the bottom of the page works on mobile (appears after scrolling past hero, hides over footer, links to /book).
- [ ] **WhatsApp Stefy** button on hero opens WhatsApp app/web with Stefania's correct number.
- [ ] **Book direct** on `/book` page lands on the same Lodgify checkout flow.

---

## 2. Multilingual coverage

For each of the 7 locales, spot-check the homepage and `/book`:

- [ ] 🇬🇧 English (`/`) — copy reads cleanly, hero headline correct, no `[TO CONFIRM]` placeholders left in legal pages.
- [ ] 🇵🇹 Portuguese (`/pt/`) — translation looks natural, no English fragments.
- [ ] 🇪🇸 Spanish (`/es/`) — same.
- [ ] 🇮🇹 Italian (`/it/`) — same. Bonus: ask Stefania directly since IT is her native language.
- [ ] 🇩🇪 German (`/de/`) — same.
- [ ] 🇳🇱 Dutch (`/nl/`) — same.
- [ ] 🇫🇷 French (`/fr/`) — same.

Per locale, also verify:
- [ ] Top-bar language switcher correctly highlights the current language.
- [ ] Switching between languages preserves your position (e.g. `/pt/book` ↔ `/de/book`, not always-back-to-homepage).
- [ ] Footer "Cookie settings" link triggers the consent banner in the right language.
- [ ] FAQ entries appear in the language (or fall back to EN if not yet translated).
- [ ] Reviews appear in the language (or fall back to EN if not yet localised).

---

## 3. Legal pages

- [ ] `/privacy/` renders with no `[TO CONFIRM]` placeholders. Same for `/cookies/`, `/terms/`.
- [ ] Privacy contact email (`hello@apartamentomarazul.com` or chosen alternative) is functional — send a test email.
- [ ] AL number appears on the Terms page and in the Footer (Portuguese law requirement).
- [ ] Privacy notice processors list is current — Cloudflare, Lodgify, Google, GitHub, Meta (via WhatsApp) all listed.
- [ ] CNPD (Portuguese DPA) link still resolves: https://www.cnpd.pt
- [ ] Lodgify privacy policy link still resolves: https://www.lodgify.com/privacy-policy

---

## 4. Cookie banner + analytics

- [ ] Open the site in **incognito** mode (no leftover Klaro cookie). Banner appears within 1 second of page load.
- [ ] Banner copy reads brand-voice (e.g. "We use a couple of small tools..."), no Klaro defaults visible.
- [ ] Click **Cookie settings**, modal opens with Atlantic Blue surface, brand colours throughout.
- [ ] Toggle Google Analytics on, click **Save selection**. Modal closes.
- [ ] DevTools → Application → Cookies — confirm `klaro` (1 yr), `_ga`, `_ga_*` cookies set.
- [ ] Refresh, banner does NOT reappear (consent persisted).
- [ ] Click **Cookie settings** in footer — banner reopens with previous choices preselected.
- [ ] Toggle GA off, save. `_ga` cookies removed; `klaro` still present recording the decline.
- [ ] **GA4 Realtime** (analytics.google.com → Reports → Realtime) shows your visit within 30 seconds after acceptance.
- [ ] **Cloudflare Web Analytics** dashboard shows traffic (it runs unconsented since cookieless).

Mobile (≤720px viewport):
- [ ] Banner: Cookie settings link top-left, Decline + Accept share the row below at equal width.
- [ ] Modal: title in Spectral, body in Manrope, buttons readable, scroll inside modal works on iOS Safari.

---

## 5. Performance

- [ ] Run Lighthouse against the production preview URL (mobile preset). All four scores ≥ 80, ideally ≥ 90.
  - Performance: ≥ 80 (last measured 84)
  - Accessibility: ≥ 95 (last 96)
  - Best Practices: ≥ 95 (last 100)
  - SEO: 100
- [ ] LCP < 4 s, ideally < 2.5 s.
- [ ] CLS < 0.1.
- [ ] No console errors in DevTools on first page load.
- [ ] About video lazy-loads — open DevTools Network, hard-refresh, confirm `about-stefania.mp4` does NOT appear until you scroll near the About section.

---

## 6. Accessibility

- [ ] Keyboard navigation: tab through the homepage. Focus rings visible on every interactive element.
- [ ] Skip-to-content link (first tab) actually skips to `<main>`.
- [ ] All gallery photos have meaningful alt text in the rendered HTML.
- [ ] All buttons and links have accessible names (not "click here").
- [ ] Run axe-core or WAVE browser extension on the homepage — zero serious violations, fewer than 5 minor.
- [ ] Test with macOS VoiceOver or Windows NVDA: read through one full section (Hero → About). Content is intelligible.
- [ ] `prefers-reduced-motion`: in OS settings, enable "reduce motion", reload — About video doesn't autoplay, hero ken-burns animation paused.

---

## 7. SEO

- [ ] `/sitemap-index.xml` resolves and lists every public page.
- [ ] `/robots.txt` resolves, allows everything except `/admin/`, points at sitemap.
- [ ] Hreflang tags present on every page (view source, search for `hreflang`).
- [ ] x-default hreflang points to the EN homepage.
- [ ] Each page has a unique `<title>` and `<meta name="description">`.
- [ ] [Google Rich Results Test](https://search.google.com/test/rich-results) on homepage URL — `VacationRental` and `FAQPage` schemas detected, no errors.
- [ ] Canonical URL on each page matches its actual public URL.
- [ ] No `noindex` meta tags on public pages (check by viewing source; the `/admin/` route can have `noindex` — the rest must not).

---

## 8. Browser + device coverage

Test the full booking flow on at least these:

- [ ] Chrome desktop (latest)
- [ ] Safari desktop (latest)
- [ ] Firefox desktop (latest)
- [ ] iOS Safari (iPhone, real device or BrowserStack)
- [ ] Android Chrome (real device or BrowserStack)
- [ ] Edge desktop (mostly Chromium-equivalent but some users still hit it)

Things that frequently break per browser:
- iOS Safari: video autoplay restrictions, sticky CTA position with the bottom URL bar
- Firefox: strict CSP enforcement
- Older Edge: missing modern CSS features (we don't ship anything truly new but worth a glance)

---

## 9. Footer + Top bar

- [ ] Logo in top bar links back to homepage in the current language.
- [ ] Language dropdown closes on click outside, on Escape, and after selecting.
- [ ] Footer Instagram and Facebook links open the right URLs in new tabs.
- [ ] Footer Privacy / Cookies / Terms links land on the right per-locale pages.
- [ ] Footer copyright year is current.
- [ ] Footer "Cookie settings" link only appears when consent management is active (i.e. when GA4 is configured).

---

## 10. CMS (Sveltia at /admin/)

- [ ] `/admin/` loads without errors.
- [ ] Login with GitHub works.
- [ ] All four collections appear in the sidebar: Reviews, FAQs, Site copy, Media, Legal pages.
- [ ] Open one Review → edit a field → Save → confirm a new commit appears on the `redesign/v2` branch in GitHub.
- [ ] Same for one FAQ entry.
- [ ] Open Site copy → English (master) → confirm all 19 sections expand and the structured form fields work.
- [ ] Open Media → confirm the gallery items list shows all 11 photos and each can be reordered/swapped.

---

## 11. NAP consistency (cross-platform)

Same name, address, phone, website everywhere:

- [ ] Site footer shows: `Apartamento Mar Azul`, `Rua Dom Luís da Silveira lote V 44 B, 8600-575 Lagos, Algarve, Portugal`, AL number, social links.
- [ ] Google Business Profile: same NAP, +351 prefix on phone, website pointing at production URL (post-cutover).
- [ ] Booking.com listing: same NAP.
- [ ] Airbnb listing: same NAP.
- [ ] Vrbo listing: same NAP.
- [ ] Lodgify dashboard property record: same NAP.
- [ ] Instagram bio: same brand name, link in bio is production URL.
- [ ] Facebook page About: same NAP.

See `nap-audit.md` for the full canonical NAP block.

---

## 12. Post-launch monitoring (first 48 hours)

- [ ] GA4 Realtime visited within an hour of launch — confirm traffic is flowing.
- [ ] Cloudflare Web Analytics dashboard — confirm collection is working.
- [ ] Cloudflare Pages → Deployments — green status on the production deploy.
- [ ] Search Console (if set up) verified for `apartamentomarazul.com`.
- [ ] No spike in 4xx/5xx errors in Cloudflare → Web Analytics → Errors panel.
- [ ] Open `/admin/` from Stefania's account, save a no-op edit, confirm the commit lands.

---

## 13. Things that should be off / hidden / removed before launch

- [ ] No `console.log` debug statements in shipped JS (search source).
- [ ] No `[TO CONFIRM]` placeholders in any user-facing copy.
- [ ] No `localhost:` references in any source file.
- [ ] No test reviews or test FAQs in the live content.
- [ ] No staging/preview banners.
- [ ] `_headers` file CSP doesn't include any `'unsafe-eval'` directives unless deliberately added.

---

## Blocking issues (fill in if any tick fails)

| Issue | Severity | Owner | Notes |
|---|---|---|---|
| _(none yet)_ | — | — | — |

---

## Sign-off

When every box above is ticked and the table above is empty:

- [ ] **Owner sign-off:** Stefania confirms the site is ready (review the legal pages and the languages she speaks).
- [ ] **Technical sign-off:** Lighthouse + axe re-run final scores logged.
- [ ] **DNS cutover:** proceed with `dns-cutover-playbook.md`.

---

## Cross-references

- `dns-cutover-playbook.md` — the cutover step-by-step, runs immediately after this checklist passes.
- `gbp-playbook.md` Action #4 — the GBP website link update, runs alongside the cutover.
- `nap-audit.md` — canonical NAP block referenced in section 11.
- `questions-for-stefania.md` items #18 (legal data), #19 (legal-pages review), #20 (Lodgify pricing), #22 (post-cutover analytics check).
