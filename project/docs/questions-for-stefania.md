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

### 4. Phone number — add `+351` country-code prefix on GBP

**GBP currently shows:** `936 083 766` (no country code).
**Recommendation:** edit GBP profile to `+351 936 083 766` so international guests can dial it directly from search results.
**This is a GBP edit, not Lodgify. Owner does it directly.**

---

## 🟡 Content & assets needed

### 5. Real photo of you for the trust strip and About section

**Currently:** the host photo on the trust strip and the About-section photo both use `marazul-08.jpg` (an interior shot) as placeholder.
**Need:** one good portrait of Stefania (could be casual — at the apartment, on the terrace, in Lagos). Doesn't need to be professional. **Trust signal: a real human face cuts scam-radar by ~50%.**

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

### 10. Brand.md still has older language — update to match current decisions?

**Three contradictions between Brand.md (your owner-edited file) and current project decisions:**

| In Brand.md | Current decision |
|---|---|
| Display: Playfair Display, Body: Inter | Spectral + Manrope (after impeccable skill review + EULA fix) |
| Beach distance: "5 min by car to Dona Ana", "4 min by car / 20 min on foot to Praia da Batata" | "Walking distance from the centre of Lagos and the beaches" (your update on 2026-05-07) |
| Direct-booking incentives include "welcome bottle of vinho verde, free parking, late checkout" | You removed welcome bottle. Now: free parking, late checkout AND early check-in, WhatsApp line, best-rate, walking guide |

**Question:** want me to update Brand.md to reflect these (it's owner-edited so I haven't touched it without permission), or leave Brand.md as a historical reference?

### 11. Air conditioning scope — confirm

**Currently in design copy:** "Air conditioning · In the bedroom" (per your 2026-05-07 update).
**Confirmation needed:** A/C is in the bedroom only (not living room or kitchen)?
**Why I'm asking:** if it's in living room too, the trust copy can say "In the bedroom and living room" which is stronger. If it's truly bedroom-only, leave as-is.

### 12. Languages spoken — final list

**Currently in trust strip:** "Speaks PT · IT · EN · ES" (your update).
**Question:** is "ES" (Spanish) genuinely conversational, or basic? If basic, downgrading to "PT · IT · EN" avoids over-promising. Some guests pick rentals based on host's language match.

### 13. Cancellation policy — confirm wording

**Currently in FAQ:** "Free cancellation up to 7 days before arrival. Within 7 days, 50% of the amount is non-refundable."
**Confirmation needed:** does "50% of the amount" mean the full booking total, or just the first 50% paid? Wording precision matters legally + for guest expectations.

---

## 🔵 Domain, deploy, accounts

### 14. Domain ownership and DNS access

**Confirmed:** Stefania owns `apartamentomarazul.com`. Currently points at GitHub Pages.
**Need before cutover day:**
- Login to the domain registrar (where the domain is registered — GoDaddy / Namecheap / Hover / etc.). She'll need to update the A/CNAME records to point at Cloudflare Pages.
- Either Stefania does this with our guidance (15-min walkthrough) or she shares registrar-only access for me to handle (less recommended; she should retain control).

**Question:** which registrar is the domain on?

### 15. Cloudflare account ownership

**Currently:** Stefania (or someone with her authorization) created a Cloudflare account and connected the GitHub repo, since the staging URL `marazul.marazulapartamento.workers.dev` is now live.
**Confirmation:** she has access to the Cloudflare dashboard? She'll need to add environment variables (Lodgify API key, Clarity ID, GA4 ID, etc.) in Sprint 4.

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

## 📅 Open since this document was last updated

_(none yet — this is the initial version, 2026-05-07)_

---

## How to use this doc

1. When something comes up that needs Stefania's input, **add it here** rather than messaging her immediately. Batches reduce friction for her.
2. When she answers, mark the question with ✅ and the answer below it. Don't delete — preserves the decision log.
3. Group conversations by week or sprint. If she's around for a 30-min call, walk through the open list.
4. Items that change brand or scope → also update `.impeccable.md` and `project_facts` memory.
