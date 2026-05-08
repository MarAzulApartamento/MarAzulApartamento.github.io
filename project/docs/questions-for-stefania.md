# Questions for Stefania

A single place to collect everything that needs the owner's input. Take this list to her in one conversation or email so we don't ping her repeatedly.

Organised by urgency, then by topic. Newest items at the top of each section.

---

## 🔴 Production-safety (Lodgify dashboard changes — never without explicit confirmation)

### 1. Pet Nightly Fee — €20/night in Lodgify rate settings

**Discovered:** 2026-05-07 during the API price spike.
**What it is:** Lodgify's `rate_settings.fees` array contains a `Pet Nightly Fee` of €20/night, frequency `PerNight`. It's classified as a `PetFee` and currently configured to apply if a guest books with pets.
**Why it's odd:** the brand and FAQ both state the property is **not pet-friendly**. The fee shouldn't be needed because pet bookings shouldn't be possible.
**Two questions for Stefania:**
- (a) Is this fee a leftover from an earlier policy you've changed? Should I ask you to remove it from the Lodgify dashboard?
- (b) If you keep it: do you want it surfaced anywhere on the site, or stays invisible in Lodgify config?

### 2. Lodgify Booking Engine widget — allow embedding on apartamentomarazul.com ✅ RESOLVED

**Resolved 2026-05-07.** Stefania pulled the embed snippets from her Lodgify dashboard (Website Builder → Settings → External widgets). Two widgets retrieved:
- **Book Now Box** (`renderBookNowBox.js`) — full date picker + guest count + inline price + "Book Now" button
- **Portable Search Bar** (`renderPortableSearchBar.js`) — compact date picker + "Search" button

Both wired into `src/components/LodgifyBookNowBox.astro`. The Book Now Box is now live on:
- Homepage `/#availability` section (replaces the static placeholder calendar)
- `/book` page (replaces the placeholder shell)

Brand-overridden via CSS variables: Atlantic Blue primary, Seafoam selection, our radius/shadow tokens. Widget script is `app.lodgify.com/book-now-box/stable/renderBookNowBox.js` with `data-rental-id=671442`, `data-website-id=581042`, `data-currency=EUR`.

**Confirmed by Lodgify support 2026-05-07:** even on the Ultimate plan, **no widget with fully inline checkout exists**. The Book Now Box (with `data-new-tab="true"` opening Lodgify checkout in a new tab on the user's click) is the most brand-cohesive booking flow Lodgify supports. The user picks dates and sees the total on `apartamentomarazul.com`; they only leave for the actual payment step.

**Plan correction:** Stefania's Lodgify subscription is **Ultimate** (not Professional, as initially recorded). Update memory and any references.

The Portable Search Bar widget is saved in reserve for a future sticky-header / hero search use case (Sprint 4 polish).

### 3. Active Lodgify promotions — keep, surface, or simplify?

**Discovered:** the API returned 6 active promo rules:
- `Desconto semanal` 10% (≥6 nights)
- `Last minute` 15% (5 days out)
- `Endless summer` 15% (specific autumn 2025 dates)
- `August last minute` 30% (specific August 2025 dates)
- `Monthly Stay Special` 30% (≥29 nights)
- `Sunny Escape` 10% (winter 2025 + spring 2026 booking windows, autumn/spring stays)

**Some of these have already expired by the displayed stay-date windows.** Questions:
- (a) Do you want any of these promos surfaced on the site copy ("Stay 6+ nights, 10% off")? Note: doing so on the website while OTAs see different rates can violate Booking.com rate parity. Recommendation: keep promos invisible, let the booking engine apply them automatically.
- (b) Should I ask you to clean up the expired ones in the Lodgify dashboard?

### 20. Direct-booking pricing — pick a mechanism

**Discovered:** 2026-05-08, while updating site copy to remove the (incorrect) "perks of direct booking" framing.

**Background:** the homepage and `/book` page now state simply that direct is the **best rate available, every time**, and **always cheaper than booking through any other channel**. To make that true in practice, we need to choose one of three Lodgify configurations. This is a Lodgify dashboard change — owner-only.

**Option A — Channel-specific automatic promotion in Lodgify.** Add a promo in the Promotions tab with channel filter = **Website only**. Applies automatically at checkout for direct bookings; OTAs don't see it. Quick to set up, but Booking.com's rate parity terms technically prohibit a lower public direct price. Many hosts do it without enforcement — long-running grey area.

**Option B — Mark up OTA rates instead of discounting direct.** Set the base rate to the price you want direct guests to pay. Add a Booking.com / Airbnb channel mark-up of 15–20% in Lodgify's channel rate-adjustment settings. Direct stays at base; OTAs are higher. End result is the same; framed as "OTA pricing covers their commission" rather than "we discount direct," which is unambiguously rate-parity compliant.

**Option C — Do nothing, message it differently.** Keep current parity. The "best rate available" wording on the site is honest under rate parity (the listed price matches Booking.com; the difference is the platform service fee Booking.com adds that we don't). The current site copy says "always cheaper than other channels" which only holds if the OTA is genuinely more expensive, so this option requires either A or B in practice — listed for completeness.

**Recommendation:** **B** if you want direct to be visibly cheaper without any rate-parity ambiguity. **A** only if you're confident Booking.com won't push back. **C** is incompatible with the new site copy.

### 4. Phone number — add `+351` country-code prefix on GBP

**GBP currently shows:** `936 083 766` (no country code).
**Recommendation:** edit GBP profile to `+351 936 083 766` so international guests can dial it directly from search results.
**This is a GBP edit, not Lodgify. Owner does it directly.**

---

## 🟡 Content & assets needed

### 18. GDPR / legal-page details (Phase 3 in progress, 2026-05-07)

We are drafting the Privacy Notice, Cookie Policy, and Terms pages required for an EU-facing booking site. The English drafts are written with `[TO CONFIRM]` placeholders for the data only Stefania can supply. Once she fills these via the CMS (Site copy → English) we'll do the translation pass for PT/ES/IT/DE/NL/FR.

**Needed:**
- (a) **Full legal name** of the data controller (the person legally responsible for the processing). Stefania's full name as it appears on her ID/business registration.
- (b) **NIF** (Portuguese tax ID number).
- (c) **Legal address** of the data controller (may differ from the rental address — it's where she's registered as a sole trader / business).
- (d) **Privacy contact email** (where guests can write with GDPR access/erasure requests). Suggest setting up `privacy@apartamentomarazul.com` once the brand email forward is configured (see #16).
- (e) **AL number** (Alojamento Local registration number issued by the Portuguese tourism authority — required by law on every public-facing channel for short-stay rentals in Portugal). Already declared on Booking.com/Airbnb? Copy the same number.
- (f) **Insurance** (optional disclosure): is there a third-party liability insurance policy covering guest stays? Needed for the Terms page liability section.
- (g) **Lodgify business sub-processor confirmation:** Lodgify is the booking and payment processor (Stripe under the hood). Their privacy policy: https://www.lodgify.com/privacy-policy. Stefania confirms she's read and accepts that they're our processor.

### 5. Real photo of you for the trust strip and About section ✅ RESOLVED

**Resolved 2026-05-07.** `owner_picture.jpg` provided by Stefania. Now used in the homepage trust strip (host bubble) and the About section. Stored at `project/site/public/photos/owner_picture.jpg`. If you ever want to swap it for a different photo, just replace that file.

### 6. Reviews — manual entries from Airbnb + Booking.com

**Background:** Airbnb and Booking.com have no public review APIs. Google Business Profile reviews can be auto-pulled (Sprint 4); the others must be manually copy-pasted.
**Need from Stefania, in Sprint 2:**
- Log into Airbnb host dashboard → reviews → copy your favourite 3–5 reviews verbatim (with first name + month + year)
- Same from Booking.com extranet → reviews
- Paste into Sveltia CMS (`apartamentomarazul.com/admin`) under the Reviews collection
- Each review tagged with its source (Google / Airbnb / Booking.com / Direct) — visitors trust mixed-source reviews more

**Alternative:** Stefania can email me the review text and I'll add them to the CMS for her.

### 7. WhatsApp Business number

**Need:** the actual phone number Stefania uses for WhatsApp Business (international format with country code, no spaces, no `+`). Example: `351936083766`.
**Where it goes:** `.env.local` → `PUBLIC_WHATSAPP_NUMBER`. Then every WhatsApp CTA on the site deep-links to her real number.
**Don't paste in chat.** Stefania edits `.env.local` directly when ready.

### 8. Welcome card content (Sprint 5 print material)

The welcome card sits inside the apartment for arriving guests. Needs:
- Wi-Fi network name + password
- Trash collection day(s)
- Emergency contacts (her mobile + a local equivalent of 112)
- Recommended local spots (3–5 specifics: tasca, padaria, supermarket, beach, pharmacy)
- House rules summary (no smoking, no pets, max guests, quiet hours)
- Check-out instructions (where to leave keys, lockbox code reset, etc.)

### 9. Business card distribution context

**Confirmed:** kept in print scope because Stefania is travelling in Italy and will distribute. Question: any specific events/audiences (boutique hotels, travel agents, friends and family, B&Bs)? That changes whether the card optimizes for trade contacts (richer info) or word-of-mouth (just QR + name).

---

## 🟢 Brand & strategy decisions

### 10. Brand.md still has older language — update to match current decisions? ✅ RESOLVED

**Resolved 2026-05-07.** `project/website/assets/Brand (1).md` rewritten as v2.0 with all current decisions reconciled. Decision log section at the bottom captures the major changes (typography, Slate Grey, Error Red, address, owner name, languages, location framing, cancellation, Lodgify plan, etc.).

---

### 10. ARCHIVED — original question about Brand.md reconciliation

**Three contradictions between Brand.md (your owner-edited file) and current project decisions:**

| In Brand.md | Current decision |
|---|---|
| Display: Playfair Display, Body: Inter | Spectral + Manrope (after impeccable skill review + EULA fix) |
| Beach distance: "5 min by car to Dona Ana", "4 min by car / 20 min on foot to Praia da Batata" | "Walking distance from the centre of Lagos and the beaches" (your update on 2026-05-07) |
| Direct-booking incentives include "welcome bottle of vinho verde, free parking, late checkout" | You removed welcome bottle. Now: free parking, late checkout AND early check-in, WhatsApp line, best-rate, walking guide |

**Question:** want me to update Brand.md to reflect these (it's owner-edited so I haven't touched it without permission), or leave Brand.md as a historical reference?

### 11. Air conditioning scope — confirm ✅ RESOLVED

**Resolved 2026-05-07.** A/C is in the **bedroom only**, not living room or kitchen. Site copy already correct.

### 12. Languages spoken — final list ✅ RESOLVED

**Resolved 2026-05-07.** Stefy speaks **Portuguese, Italian, English, Spanish**. Trust strip and FAQ copy reflect this.

### 13. Cancellation policy — confirm wording ✅ RESOLVED

**Resolved 2026-05-07.**
- **Payment:** 100% at the time of booking.
- **Cancellation:** more than 7 days before arrival = full refund. Within 7 days of arrival = 50% of the booking is non-refundable (the other 50% IS refunded).
- FAQ updated to: "Payment in full at the time of booking. Cancel more than 7 days before arrival for a full refund. Within 7 days of arrival, 50% of the booking is non-refundable."
- Brand.md updated. CMS faqs/04-cancellation.md updated.

---

## 🔵 Domain, deploy, accounts

### 21. Cloudflare Web Analytics — create a site + paste the token (~5 minutes)

**Discovered:** 2026-05-08. The CF Web Analytics beacon is now wired into the site code; it stays inactive until a token is set.

**What to do:**
1. Log in to Cloudflare dashboard (the same account hosting Cloudflare Pages).
2. Sidebar → **Analytics & Logs** → **Web Analytics** → **Manage site** → **Add a site**.
3. Hostname: `apartamentomarazul.com` (and any preview domain you want tracked, e.g. `*.pages.dev`).
4. Cloudflare generates a **token** (a string of characters). Copy it.
5. Cloudflare Pages dashboard → the Mar Azul project → **Settings** → **Environment Variables** → **Add variable**:
   - Variable name: `PUBLIC_CF_ANALYTICS_TOKEN`
   - Value: the token from step 4
   - Apply to: **both Production and Preview**
6. Trigger a redeploy (Pages → Deployments → ⋯ → Retry deployment) OR push any commit to `redesign/v2`. Once deployed, the beacon script appears in every page's HTML and Cloudflare starts collecting data.

**No cookies, no consent banner, no GDPR review needed beyond what's already on the Privacy + Cookies pages.**

**To verify it's working:** after the redeploy, open the site, then refresh Cloudflare's Web Analytics page. Within 30 seconds you should see at least 1 visit logged.

### 14. Domain ownership and DNS access ✅ RESOLVED

**Resolved 2026-05-07.** Domain is registered at **Namecheap**. Stefania (or owner) will handle the DNS swap to Cloudflare Pages on cutover day. Sprint 9 (DNS cutover) plan: provide a step-by-step Namecheap walkthrough at the time, no surprises.

### 15. Cloudflare account ownership ✅ RESOLVED

**Resolved 2026-05-07.** Owner will handle Cloudflare environment variables. Already added: `LODGIFY_API_KEY`, `LODGIFY_PROPERTY_ID`. Pending (when each tool is set up): `PUBLIC_WHATSAPP_NUMBER`, `PUBLIC_GA4_ID`, `PUBLIC_CLARITY_ID`, `PUBLIC_CF_ANALYTICS_TOKEN`.

### 16. Email — `hello@apartamentomarazul.com` or similar

**Currently:** no email address forwards to Stefania's inbox.
**Question:** does she want a brand email like `hello@apartamentomarazul.com` set up? Most registrars + Cloudflare offer email forwarding for free. If yes: a one-line entry in the registrar console + her Gmail address as the destination. We use this for: form submissions, review-collection auto-replies, footer contact link.

---

## 🟣 GBP optimization — Sprint 4 work, deferred per Stefania's instruction

These are captured in `project/docs/gbp-audit.md`. NOT to be acted on now. Listed here so Stefania has the full picture in one place when Sprint 4 starts.

- Upload all 12 photos (currently 8 on GBP)
- Set hours to "Open 24 hours" (currently empty)
- Set service area to "Lagos, Algarve, Portugal" (currently empty)
- Hide street address (service-area mode), since we want guests booking before arriving
- Seed Q&A with 8–10 entries mirroring site FAQ (currently no Q&A)
- Begin GBP Posts cadence (weekly during high season, biweekly off-season)
- Add `+351` to phone number
- Multilingual GBP descriptions
- Set "Book" button to deep-link to `apartamentomarazul.com/book?utm_source=gbp&...`
- 360°/virtual tour (free via Google Street View app, big SEO unlock)

---

## 📋 Pre-launch checks (do these once the redesign is finished)

### 22. Verify Cloudflare Web Analytics is collecting on production

**When:** after the DNS cutover to apartamentomarazul.com (Sprint 9), so the production domain matches the hostname configured in Cloudflare's Web Analytics site.

**Why:** the beacon was wired in Sprint 4 against the preview URL (item #21). After cutover, traffic flows to the real domain, and we want to confirm Cloudflare is logging hits there. Silent failure (beacon not loading, token mismatch, ad blocker noise) wouldn't surface unless we deliberately check.

**Steps:**
1. Visit `https://apartamentomarazul.com/` in a non-incognito browser.
2. View source, search for `cloudflareinsights` — confirm the beacon script is present and the token matches the one in Cloudflare → Web Analytics → Manage site → Apartamento Mar Azul.
3. Refresh once to generate a fresh hit.
4. Open Cloudflare → Web Analytics → Apartamento Mar Azul. Within ~30 seconds the visit should appear in the live counter.
5. Repeat from a mobile device on cellular (not Wi-Fi) to confirm mobile traffic is also logged.
6. Repeat once more from a different geographic location if practical (VPN, friend in another country) — confirms there are no regional issues.
7. If nothing logs after 2 minutes, the usual causes are: (a) the token env var wasn't set to **Production** in Cloudflare Pages (only Preview), (b) browser ad-blocker is dropping `cloudflareinsights.com`, (c) the beacon failed to load (check the Network tab in devtools).

**Cadence after launch:** glance at the Web Analytics dashboard weekly for the first month to confirm steady collection. After that, monthly is enough.

### 19. Review the three legal pages end-to-end

**When:** after the redesign is locked and Stefania has supplied the operator-specific data (item #18).

**Why:** the drafts at `/privacy`, `/cookies`, `/terms` were written with assumptions about processors, retention, and cookies that match today's stack. By the time we ship, Sprint 4 will have added GA4 (analytics consent), Google Hotel Ads (marketing consent), and possibly a Meta Pixel. The Cookie Policy and Privacy Notice need to match what the site actually does on launch day, not what it did on draft day.

**Checklist:**
- [ ] `[TO CONFIRM]` placeholders all filled (legal name, NIF, address, email, AL number, optional insurance)
- [ ] Cookie Policy accurately lists every cookie set on launch day (compare against the live site's Application tab in browser devtools)
- [ ] Privacy Notice processors list still complete (any new tools added in Sprint 4-5 must appear)
- [ ] Retention periods match operational reality (Stefania confirms 10-year tax retention, others as written)
- [ ] Cancellation policy in Terms still matches Lodgify dashboard settings
- [ ] AL number on Terms matches the one declared on Booking.com/Airbnb listings
- [ ] All three pages translated to PT/ES/IT/DE/NL/FR (translation pass after EN review)
- [ ] CNPD link, Lodgify privacy URL, and EU ODR link still resolve
- [ ] Last updated date refreshed on each page when content changes

**Optional but recommended:** have a Portuguese lawyer skim the Privacy and Terms pages once, especially the AL declaration and the liability section. Even a 30-minute review reduces post-launch risk.

---

## 📅 Open since this document was last updated

_(none yet — this is the initial version, 2026-05-07)_

---

## How to use this doc

1. When something comes up that needs Stefania's input, **add it here** rather than messaging her immediately. Batches reduce friction for her.
2. When she answers, mark the question with ✅ and the answer below it. Don't delete — preserves the decision log.
3. Group conversations by week or sprint. If she's around for a 30-min call, walk through the open list.
4. Items that change brand or scope → also update `.impeccable.md` and `project_facts` memory.
