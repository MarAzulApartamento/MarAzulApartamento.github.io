# Google Business Profile playbook

**Last updated:** 2026-05-08
**Companion to:** `gbp-audit.md` (the diagnostic).
**Audience:** Stefania (or anyone managing GBP for Apartamento Mar Azul).
**Where you'll be working:** https://business.google.com — sign in with the Google account that owns the listing.

GBP changes its menu names every few months. If a label below has moved, type the action name into the dashboard's search bar (top of the page) and click the matching result.

---

## Quick reference

| # | Action | Priority | Effort | Section |
|---|---|---|---|---|
| 1 | Set primary category | H | S | [→](#1-primary-category) |
| 2 | Confirm business name | H | S | [→](#2-business-name) |
| 3 | Upload all property photos | H | M | [→](#3-photos) |
| 4 | Set the website URL | H | S | [→](#4-website-url) |
| 5 | Wire the "Book" button | H | S | [→](#5-book-button) |
| 6 | Phone number with `+351` | M | S | [→](#6-phone-number) |
| 7 | Hide street address (service area) | H | S | [→](#7-service-area-mode) |
| 8 | Seed Q&A | H | M | [→](#8-q-and-a) |
| 9 | Add attributes | H | S | [→](#9-attributes) |
| 10 | Languages spoken | M | S | [→](#10-languages-spoken) |
| 11 | Multilingual descriptions | M | M | [→](#11-multilingual-descriptions) |
| 12 | GBP Posts cadence | M | M | [→](#12-posts-cadence) |
| 13 | Drive review collection | H | M | [→](#13-review-collection) |
| 14 | Respond to every review | M | S | [→](#14-review-responses) |
| 15 | Insights monitoring | M | M | [→](#15-insights-monitoring) |
| 16 | 360° / virtual tour | M | L | [→](#16-virtual-tour) |
| 17 | Products listing | L | M | [→](#17-products) |
| 18 | FAQ field | M | S | [→](#18-faq-field) |

Items 1-10 are the launch foundation. 11-15 are the cadence work. 16-18 are advanced.

---

## Foundation (week 1 of GBP optimisation)

### 1. Primary category

**Why:** the single biggest ranking signal for "places near me / in Lagos" searches. Wrong category and the listing is invisible to most relevant searches.

**Where:** dashboard sidebar → **Edit profile** → **Business information** → **About** → **Business category**.

**Steps:**
1. Click the pencil icon next to **Primary category**.
2. Search for and select **Holiday apartment rental** (in Portuguese: *Apartamento para férias*; UI follows your account language).
3. Save.
4. Optional secondary categories (max 9 total): *Vacation home rental agency*, *Self-catering accommodation*. Don't add unrelated categories ("Hotel", "Bed and breakfast" — these dilute relevance).

**Watch-outs:** Google occasionally proposes "Apartment building" or "Real estate agency" — wrong, neither describes a short-stay rental. Use the holiday/vacation category, not the residential one.

---

### 2. Business name

**Why:** Google can suspend listings that pad the business name with keywords. The name on GBP must match the name on signage / receipts / OTA listings.

**Where:** dashboard sidebar → **Edit profile** → **Business information** → **About** → **Business name**.

**Steps:**
1. Confirm the name is exactly: `Apartamento Mar Azul`.
2. No padding, no city, no keywords, no spelling variations. Strip anything like *"Apartamento Mar Azul Lagos"*, *"Apartamento Mar Azul - Holiday Apartment"*, *"Apartamento Mar Azul (Algarve)"*.

**Watch-outs:** if you rename, the listing temporarily loses some ranking and reviews stay attached but Google flags the change. Only do this once. Don't experiment.

---

### 3. Photos

**Why:** profiles with 20+ photos rank higher and convert better. We have 25 compressed photos ready to upload.

**Where:** dashboard sidebar → **Edit profile** → **Photos & videos** → **Add photos**.

**Steps:**
1. Upload `marazul-01.jpg` first as **Cover**. It's the best-performing photo of the apartment.
2. Upload the brand logo as **Logo** (use `logo-primary.svg` exported as 250×250 PNG).
3. Upload remaining photos. Categorise each as you go:
   - **Rooms** → bedroom, bathroom, living room shots
   - **Kitchen** → kitchen + dining shots
   - **Outdoor** → terrace shots
   - **Common areas** → hallway, entrance
4. Order Cover and Logo photos first; Google uses them prominently.

**Watch-outs:** don't upload Lagos beach shots, restaurant photos, or anything not from the property — they get rejected as misleading. Don't upload pictures of guests (privacy). Filenames don't matter; Google keeps its own metadata.

---

### 4. Website URL

**Why:** the GBP "Website" button and the knowledge panel link drive direct site traffic.

**Where:** dashboard sidebar → **Edit profile** → **Contact** → **Website**.

**Steps:**
1. Currently set to `https://apartamento-mar-azul.lodgify.com/`.
2. **After Sprint 9 DNS cutover** is complete and `apartamentomarazul.com` resolves to the new site, edit the field to `https://apartamentomarazul.com`.
3. Save. Google may take a few hours to recrawl.

**Watch-outs:** changing URL too early (before the new site is up) sends visitors to a dead page. Only change after cutover. Until then, the Lodgify URL is fine — it works.

---

### 5. Book button

**Why:** the "Book" button on the knowledge panel goes straight to a booking page. Without it, the listing has no conversion CTA.

**Where:** dashboard sidebar → **Edit profile** → **Booking** (or **Reservations**, naming varies) → **Booking link**.

**Steps:**
1. Set the booking URL to:
   ```
   https://apartamentomarazul.com/book?utm_source=gbp&utm_medium=organic&utm_campaign=profile
   ```
2. The UTM parameters let GA4 attribute these direct bookings back to GBP — needed to measure GBP's ROI.
3. Save.
4. Verify by viewing your own profile from a logged-out browser — the **Book** button should appear next to **Call** and **Directions**.

**Watch-outs:** if Google's vacation-rental booking integration is offered, you can opt in (it lets users book via a Google overlay). For a single-property direct-booking strategy, decline — it'd compete with our own checkout. Stick to the URL link.

---

### 6. Phone number

**Why:** international visitors need the country code to dial.

**Where:** dashboard sidebar → **Edit profile** → **Contact** → **Phone number**.

**Steps:**
1. Currently shows `936 083 766`.
2. Edit to `+351 936 083 766` (one space after the country code, then the regular grouping).
3. Save.

**Watch-outs:** GBP sometimes auto-formats. If after saving it shows back as `(351) 936 083 766` with brackets, leave it — Google's formatting still triggers the right tel: link. Just don't strip the +351.

---

### 7. Service-area mode

**Why:** for a holiday rental, the exact street address doesn't help discoverability and can leak the property location to people who haven't booked.

**Where:** dashboard sidebar → **Edit profile** → **Location** → **Service area** (and **Business location**).

**Steps:**
1. Under **Business location**, toggle **Hide my address** (some UIs label this as "I serve customers at my business address" — uncheck it).
2. Under **Service area**, add `Lagos, Algarve, Portugal`. You can add additional nearby coverage (Praia da Luz, Burgau) but keep it tight — too wide and Google ranks you for irrelevant searches.
3. Save.

**Watch-outs:** hiding the address removes the map pin from the public view but Google still needs the real address internally for verification. Don't change the saved address; just hide it.

---

### 8. Q and A

**Why:** Q&A entries appear directly in Google search results and feed the AI Overview / "People also ask" boxes. Owner-asked, owner-answered Q&A is allowed and ranks well.

**Where:** dashboard sidebar → **Read reviews** → **Questions & answers** (or open the public listing on Maps and use "Ask a question").

**Steps:**

Post these 10 Q&As, one at a time. For each: ask the question from your account, then answer it from the same business account. Both will appear publicly with your business name as the asker.

| Q | A |
|---|---|
| Is parking available? | Yes, free reserved parking on a quiet residential street, one-minute walk from the apartment door. |
| Do you offer Wi-Fi? | Yes, fibre Wi-Fi (200 Mbps) included in every stay. |
| What time is check-in and check-out? | Check-in from 15:00, check-out by 11:00. Earlier or later is sometimes possible — message us in advance. |
| Is the apartment family-friendly? | Yes. The apartment sleeps 2 to 4 and we provide a crib and high chair on request. |
| How far is the beach? | Walking distance. Praia da Batata and Praia Dona Ana are both reachable on foot from the apartment. |
| Are pets allowed? | The apartment is not pet-friendly. |
| What's the cancellation policy? | Full refund up to 7 days before arrival. Within 7 days, 50% of the booking is non-refundable. |
| What languages do you speak? | Portuguese, Italian, English, and Spanish. |
| Where can I book direct? | At apartamentomarazul.com. Best rate available, every time. |
| Is air-conditioning included? | Yes, in the bedroom. |

**Watch-outs:** don't paste in long marketing copy. Each answer should read like a normal owner response — short and specific. Mark the most important Q&A as "useful" (👍 thumbs up) from your owner account; Google ranks helpful answers higher.

---

### 9. Attributes

**Why:** attributes are the bullet-list features in the knowledge panel. They feed search filters ("vacation rentals with Wi-Fi in Lagos") and also help with AI Overview citations.

**Where:** dashboard sidebar → **Edit profile** → **Business information** → **Amenities** (or **Attributes**).

**Steps:** turn on these:
- ✅ Free parking lot
- ✅ Free Wi-Fi
- ✅ Air conditioning
- ✅ Pet-friendly: **No** (explicitly off)
- ✅ Good for couples
- ✅ Good for families
- ✅ Self check-in (if applicable — confirm with Stefania)
- ✅ Smoke-free property
- ✅ Crib available (if confirmed)
- ✅ High chair (if confirmed)
- ✅ Linens included
- ✅ Kitchen
- ✅ Terrace / Outdoor space

Skip attributes that aren't 100% true or that don't apply (pool, gym, restaurant, etc.). Misrepresentation triggers Google's quality system.

---

### 10. Languages spoken

**Why:** lets multilingual searchers know they can communicate with the host.

**Where:** dashboard sidebar → **Edit profile** → **Business information** → **Languages**.

**Steps:**
1. Add: Portuguese, Italian, English, Spanish.
2. Save.

**Watch-outs:** don't add languages you can't actually hold a conversation in. If a German guest writes and you can't reply, that's worse than not listing German.

---

## Cadence (week 2 onward)

### 11. Multilingual descriptions

**Why:** GBP supports a single business description per profile, but you can update it seasonally. Keep it brand-voiced and keyword-light.

**Where:** dashboard sidebar → **Edit profile** → **Business information** → **From the business**.

**Source copy:** use the meta description from each locale's i18n file (`src/i18n/<lang>.json` → `home.metaDescription`). They're already crafted for SEO + brand voice. The English master:

> A quiet apartment in Lagos, Algarve. Walking distance from the centre and the beaches. Sleeps 2 to 4. Private terrace, A/C, Wi-Fi, free parking. From €X per night.

GBP only takes one description per profile. Strategy: write one in **English** (largest source-traffic), then switch the description to Portuguese during low-tourism months when domestic traffic dominates. Don't rotate weekly — once a quarter is plenty.

**Watch-outs:** Google rejects descriptions that include phone numbers, URLs, or "best in Lagos / luxury / 5-star" type keyword stuffing. Stick to the calm brand voice.

---

### 12. Posts cadence

**Why:** GBP Posts appear in the knowledge panel for ~7 days each. Regular posting signals an active business, which Google rewards in rank.

**Where:** dashboard sidebar → **Add update** (or **Posts**).

**Cadence:**
- **High season (April-October):** weekly, EN + PT alternating
- **Low season (November-March):** every 2 weeks, EN + PT alternating

**Five starter EN posts (rotate when out):**

1. **Welcome to Mar Azul** — short intro to the apartment + link to `/book`.
2. **Why Lagos in shoulder season** — May, June, October specifically. Quieter, cheaper, still warm.
3. **Inside the apartment** — terrace photo + one paragraph about the east-facing view (morning sun).
4. **Booking direct** — link to the site, "best rate available, every time."
5. **What's nearby** — five specific places (Prato Cheio, Praia da Batata, Padaria Central, Marina, Intermarché).

Each post: 1 photo + 80-150 words + a CTA (Book, Learn more, etc.).

**Watch-outs:** don't repost the same content month after month — Google penalises duplicate posts. Don't put external links to OTAs; link only to the direct site or to an internal Google page.

---

### 13. Review collection

**Why:** review velocity (number of new reviews / time) is a top-3 ranking factor for local businesses.

**How:**
1. Print the A6 review cards and A5 table tents from Sprint 5 — they have a QR code that goes straight to the GBP review form.
2. Place the A5 table tent in a visible spot in the apartment.
3. Add a note to your check-in WhatsApp message: "If you enjoyed your stay, a quick Google review would mean a lot to us." Include the QR code as an image attachment.
4. Target: **5 new reviews in the 60 days post-launch**, then 1-2 per month sustained.

**QR code generator:** any QR generator pointing at the URL Google provides:
- GBP dashboard → **Read reviews** → **Get more reviews** → **Share review form** → copy the URL.
- Generate the QR using qr-code-generator.com or similar (free, no tracking).

**Watch-outs:** don't offer discounts for reviews — that's against Google's policy and reviews can be removed. Don't review your own business from another account. Don't copy-paste guests' reviews from Airbnb/Booking.com onto Google — Google detects duplication.

---

### 14. Review responses

**Why:** response rate is a ranking signal. Owners who reply earn ranking weight; silent owners lose it.

**Cadence:** within **48 hours** of a review appearing.

**Templates:**

**Positive (4-5 star):**
> Thank you, [first name]. So glad you enjoyed [specific detail from their review]. Come back any time, and tell your friends about apartamentomarazul.com 🙂

**Neutral / lukewarm (3 star):**
> Thank you for staying with us, [first name]. We hear you on [specific issue]. Since your stay we've [specific action taken or planned]. We'd love to host you again to show you the difference.

**Negative (1-2 star):**
> Thank you for the honest feedback, [first name]. I'm sorry [specific issue] affected your stay. [Explain factually what happened OR what you've changed since.] If you'd like to discuss further, please write to [email] — happy to make it right.

**Never:**
- Argue with the reviewer publicly
- Blame the reviewer
- Get defensive
- Cut and paste the same response on every review (Google detects template responses)

---

### 15. Insights monitoring

**Why:** the **Performance** tab shows what searches surfaced your listing, what photos got viewed, and how many calls / direction requests / website clicks the profile generated. This is GBP's analytics.

**Where:** dashboard sidebar → **Performance**.

**Monthly review:**
1. Top 5 search queries that triggered your listing — are these queries you'd want to rank for?
2. Total impressions vs. clicks — what's the conversion rate? (Aim 3-5%)
3. Photo views — which photo categories are getting the most? Tilt future uploads toward those.
4. Calls and direction requests — these usually hit during shoulder hours, useful operational data.
5. Compare to last month — note anything that shifted dramatically.

**Watch-outs:** GBP Performance has a 3-day lag. Don't draw conclusions from yesterday's data — wait a week.

---

## Advanced (later)

### 16. Virtual tour

**Why:** Google rewards profiles with 360° tours. They're a strong differentiator vs. competitors who only have flat photos.

**How:** free, ~1-2 hours of work. Use the **Google Street View** app on iPhone or Android.

**Steps:**
1. Install the Street View app (free, Google).
2. Open the app, tap **+** → **Camera**.
3. From the centre of each room, slowly rotate while the app captures spheres. Standing in the middle of the room and turning 360° is the basic capture.
4. Capture: living room (the main hero shot), bedroom, kitchen, terrace, hallway. 5 spheres total is enough.
5. Connect the spheres in the app: link "Living room → Kitchen", "Living room → Bedroom", etc., so a viewer can navigate.
6. Publish to your GBP profile from inside the app.

**Watch-outs:** good lighting matters — shoot during midday with curtains open. Don't include guests, personal items, or anything you wouldn't want public.

---

### 17. Products

**Why:** the **Products** section lets you list a "Stay" as a product with photo + price-from + booking link. Some searchers see this before the website link.

**Where:** dashboard sidebar → **Products** (or **Edit profile** → **Products**).

**Steps:**
1. Add product → **Apartment stay**.
2. Photo: `marazul-01.jpg` (the hero).
3. Title: `2 to 4 guests`.
4. Description: short, brand-voiced, max 1000 characters.
5. Price: select **Range** → set the From and To prices from current Lodgify rates.
6. Button: link to `https://apartamentomarazul.com/book?utm_source=gbp_product`.

**Watch-outs:** keep prices roughly accurate (within 20% of current dashboard rates). Big discrepancies between the GBP price and the actual booking flow trigger Google quality flags.

---

### 18. FAQ field

**Why:** GBP rolled out a separate **FAQ** field (distinct from public Q&A) that's used by Google's AI Overviews when summarising the listing. Less work than full Q&A and often higher-leverage for AI citations.

**Where:** dashboard sidebar → **Edit profile** → **FAQ** (rolling out per-region, may not be visible in all dashboards yet).

**Steps:** copy the same 10 questions and answers from Action #8 into the FAQ field. They're identical content — both fields can co-exist.

**Watch-outs:** if the FAQ field isn't visible in your dashboard, skip and check back monthly. It's not worth complaining to Google support — the rollout is automatic.

---

## Cross-references

- `gbp-audit.md` — the diagnostic this playbook executes against.
- `nap-audit.md` — canonical NAP block; every GBP edit must match.
- `ota-strategy.md` — how OTAs interact with the brand presence.
- `questions-for-stefania.md` — items #4 (phone), #18 (AL number — declare in the GBP FAQ + Description once provided), #20 (pricing strategy).
