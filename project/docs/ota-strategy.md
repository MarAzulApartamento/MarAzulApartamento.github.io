# OTA listing strategy — Apartamento Mar Azul

**Last updated:** 2026-05-08
**Audience:** Stefania (the operator) and anyone who later helps manage the listings.
**Goal:** keep Booking.com, Airbnb, and Vrbo working hard for us without undermining direct bookings on `apartamentomarazul.com`.

---

## The model in one paragraph

OTAs are paid acquisition. They send guests we wouldn't have reached. We pay for that with commission and (sometimes) by giving up a bit of brand control. The goal is **not** to abandon them — that would mean fewer bookings overall — but to make sure the OTA-acquired guest sees the brand strongly enough to come back **direct** next time, and that any returning guest who knows about us books direct, where we keep the full margin.

Three principles guide every decision below:

1. **Direct is the cheapest channel for the guest.** This is the one true direct-booking advantage. Kept honest by mechanism B in `questions-for-stefania.md` item #20 (mark up OTA rates so they cover their own commission).
2. **The guest experience is identical regardless of channel.** Same parking, same WhatsApp line, same cancellation policy, same welcome. We don't punish OTA bookers — that creates bad reviews and Booking.com penalties.
3. **The brand is consistent across channels.** Same photos, same headline angle, same hospitality voice. A guest who books on Airbnb and then sees `apartamentomarazul.com` should recognise it instantly.

---

## Channel roles

Each OTA does a different job. Use them for what they're good at.

| Channel | What it brings | What it costs us | How we lean on it |
|---|---|---|---|
| **Direct** (`apartamentomarazul.com`) | Best margin. Brand-controlled experience. Repeat bookings. WhatsApp line owned by us. | The site itself + GBP work + ad spend (Sprint 4-5). | Long-tail organic search, brand search, returning guests, walking-distance / Lagos searchers. |
| **Booking.com** | Highest visibility for "where to stay in Lagos" cold searchers. Mature dispute & payment infrastructure. Rate-parity contractual constraint. | 15-18% commission + rate parity restrictions. | Net-new awareness from non-Portuguese cold traffic. |
| **Airbnb** | Couples and small families specifically; strong on photo-led discovery; superhost/review economy. | 14-17% commission (host fee) + service fee charged to guest on top. Strict house-rule enforcement. | Younger, design-aware audience. Couples first, families second. |
| **Vrbo** | Family travellers, longer stays, US-based audience. | ~15% commission. Lower volume than the other two for short-stay rentals in Algarve. | Long-stay (6+ night) bookings, especially Aug/Sep peak. |

The current booking baseline (per CLAUDE.md / project memory): **27 historical bookings, 0 direct.** Booking.com 16, Airbnb 10, Vrbo 1. **Sprint 6 success criterion is +40% direct, growing from zero.** OTAs continue running in parallel for non-direct demand.

---

## Rate parity: how to be compliant and still cheaper on direct

### The rule, in plain words

Booking.com's contract says: **you must not advertise a lower public rate on any other site (including your own) than what's on Booking.com.** The same room, same dates, same conditions, same nights of stay must be at least as expensive everywhere as on Booking.com.

This is enforced. Booking.com can demote your listing in search results, suspend it, or terminate. Most hosts who think they're "getting away with it" are actually being ranked lower than they realise.

### How to be cheaper on direct without violating

Two compliant mechanisms. Pick one.

**Mechanism B — recommended.** Set the *base rate* in Lodgify to your ideal direct price. Apply a **channel rate adjustment** in Lodgify: Booking.com +18%, Airbnb +15%, Vrbo +15%. The adjustment is framed as "covering platform commission," which is exactly what it does. Direct stays at base, OTAs are higher. Booking.com sees a rate that is consistent with your displayed direct rate — there is no rate parity violation because the rate on Booking.com is the rate you commit to honouring there. The fact that direct happens to be cheaper is a function of the math, not a discount.

**Mechanism C — also compliant.** Keep all channels at the same nightly rate. The OTAs add their own service fee on top of your rate (Booking.com adds 0-15%, Airbnb adds the guest service fee, etc.). The displayed total to the guest is higher on OTAs than on direct, but the *base rate you advertise* is the same. This is the simplest config but gives you the smallest direct-booking advantage.

**Mechanism A — risky.** Direct-only promo code or automatic discount in Lodgify with channel = "Website only." Lodgify lets you do this. Booking.com generally doesn't. Long-running grey area; many hosts use it; enforcement is sporadic. Don't recommend without explicit owner appetite for risk.

The site copy is **"best rate available, every time"** (locked 2026-05-13 after dropping the stronger "always cheaper than other channels" line). This phrasing is rate-parity-safe under Mechanism B (and even under C if OTAs ever happen to display a lower total). Mechanism B is the chosen plan. Configuration tracked in `questions-for-stefania.md` item #20.

---

## Listing content — what to copy verbatim and what to differentiate

The brand voice (calm, specific, walking distance, no em-dashes, no "ocean view" headlines, etc.) lives in `CLAUDE.md`. Apply it consistently across channels with these per-channel shifts.

### Core listing copy (use the same on all three OTAs + the site)

**Headline:** "A quiet apartment in Lagos for couples and small families."
**Subhead:** "Walking distance from the centre and the beaches. Sleeps 2 to 4."
**Three-paragraph description:** the three paragraphs from the site's About + Hero + Perks-band, lightly edited for the OTA's word limit.

Copying the site copy verbatim (where the OTA allows) keeps the brand voice consistent for guests who compare. Booking.com and Airbnb both penalise listings whose description matches another site word-for-word *if the other site is owned by you* — there's some risk of duplicate-content downranking. Solve this by having one canonical hand-written description that's used on direct + on the OTAs but not pasted from a third party. Variations across OTAs are fine — keep the *meaning* identical, vary the wording slightly.

### Per-OTA differentiation

| Element | Direct site | Booking.com | Airbnb | Vrbo |
|---|---|---|---|---|
| Description tone | Editorial, full paragraphs | Skim-friendly bullets the platform expects | Warm, host-voiced, more "you'll feel" | Family-first, longer-stay framing |
| Photo set | All 11+ photos, full quality | Top 8-12 ordered by impact, hero first | Top 12, lifestyle ordering | Top 10, family-room emphasis |
| House rules | One short paragraph, voice-aligned | Bulleted, exact (Booking.com is strict) | Conversational, paired with "what to expect" | Bulleted, family-explicit |
| Cancellation policy | Plain language paragraph | Booking.com's preset (Standard / Flexible) | Airbnb's preset (Strict / Moderate) | Vrbo's preset |

---

## Photo strategy

The 11 photos in the site gallery are the master set. OTAs get a curated subset.

**Hero photo on every channel:** `marazul-01.jpg` — the wide living-room shot looking out. It's the single most-converting photo (set as the master on Lodgify, OTAs default to it as cover unless overridden). Don't override.

**Order on OTAs (high to low impact):**
1. `marazul-01.jpg` — living room, with the view
2. `marazul-08.jpg` — bedroom
3. `marazul-04.jpg` — kitchen and dining
4. `marazul-09.jpg` — bedroom corner (texture/atmosphere shot)
5. `marazul-05.jpg` — kitchen detail
6. `marazul-07.jpg` — second living room view
7. `marazul-02.jpg` — sitting area
8. `marazul-11.jpg` — bathroom
9. `marazul-03.jpg` — entrance
10. `marazul-10.jpg` — through-view
11. `marazul-06.jpg` — detail shot (least essential)

**Don't add OTA-specific stock photos.** Lagos beach shots, Algarve sunset clichés, restaurant interior shots — none of these are *our* property and they dilute the brand. Whatever's not from the property's own walls doesn't belong in the listing.

**Caption strategy:** Captions are auto-generated by some OTAs (Airbnb infers from photo content), set manually on others (Booking.com). Use the captions in `src/i18n/<lang>.json → gallery.captions` as the master — short, descriptive, in the local language of the channel.

---

## Cancellation policy — keep aligned

The direct cancellation policy (per Terms page and project memory): **full refund 7+ days before arrival; 50% non-refundable inside 7 days.**

| Channel | Closest preset | Action |
|---|---|---|
| Direct | Plain-language statement on Terms page | ✅ Already in place |
| Booking.com | Their "Free cancellation up to 7 days before check-in, then non-refundable" preset | Configure in Booking.com extranet to match |
| Airbnb | "Moderate" (full refund 5 days before check-in) is closest but not exact. Either go "Strict" (full refund 14 days; non-refundable inside 14) or accept the 5-day cliff. | Owner picks. Strict tends to favour guest at the cost of conversion; Moderate gives up some refund margin. **Recommendation: Moderate**, accept the slight 5-day discrepancy. |
| Vrbo | Their preset matching "100% refund 7+ days, no refund inside 7" works for our policy if we accept 0% (vs. 50%) inside 7 days. Alternatively pick "Custom" with 50%. | **Recommendation: 50% custom** to match direct exactly. |

**Don't promise different cancellation terms direct vs OTA.** Guests compare and feel cheated when policies don't align.

---

## Review management across channels

Reviews drive ranking on every OTA. Aggregating them across channels onto our site multiplies the social proof.

**Per-channel response cadence:**
- **Booking.com:** respond within 48 hours to every review, positive or negative. Booking.com weights response rate in ranking.
- **Airbnb:** same. Airbnb gives the host 14 days to leave a review of the guest, which simultaneously triggers the public display of both reviews. Always leave a guest review (even a brief positive one) — it's the easiest superhost-criterion box to keep ticked.
- **Vrbo:** lower-stakes; respond within a week.
- **Google Business Profile:** respond within 48 hours. Critical for local SEO.

**Response template (for positive reviews):** "Thank you, [first name]. So glad you enjoyed [specific detail from their review]. Come back any time — and tell your friends about apartamentomarazul.com 🙂" (one mention of the direct site is fine; more reads as spammy).

**Response template (for negative reviews):**
1. Thank them for staying.
2. Acknowledge the specific issue without making excuses.
3. State what you've done since to address it (or what you'll do).
4. Invite them to reach out directly if they'd like to discuss further.
5. Don't argue, don't blame the guest, don't get defensive.

**Surfacing OTA reviews on direct:** the site Reviews collection (Sveltia CMS → Reviews) accepts entries with a `source` field of Google / Airbnb / Booking.com / Direct. Stefania manually copy-pastes the best reviews from each platform with attribution. Mixed-source reviews build more trust than reviews from a single source — visitors take it as a sign that the property delivers consistently.

---

## Operational cadence

A short rhythm for keeping the OTA listings healthy without becoming a part-time job.

**Daily** (5 minutes):
- Check Lodgify inbox for new bookings + new messages.
- Acknowledge any inquiry within 12 hours per the WhatsApp microcopy.

**Weekly** (15 minutes):
- Glance at all three OTA dashboards for new reviews, ranking shifts, or platform messages.
- Respond to any unanswered review.
- Quick scan of the next 30 days of availability — block anything you've committed to (own use, owner stays, maintenance).

**Monthly** (30 minutes):
- Compare booking lead times across channels (Booking.com vs Airbnb vs direct). If one channel's lead time shifts dramatically, investigate.
- Review the rate plan: if peak season is approaching and direct booking pace is slow, consider promo code rotation (item #3 in `questions-for-stefania.md`).
- Check `gbp-audit.md` Sprint 4 list — anything lapsing?

**Quarterly** (1 hour):
- Re-run the NAP audit (`nap-audit.md`) — verify Name / Address / Phone / Website still match across every surface.
- Refresh photos if anything in the apartment has changed (new sofa, terrace plants, etc.).
- Review the cancellation-policy alignment — Booking.com sometimes auto-changes preset wording.

**Yearly** (2 hours):
- Walk the listings as a guest: search the property on each OTA, click through to the listing, read it cold. Note anything that reads dated or inconsistent with the brand voice.
- Compare to direct site. Any drift? Re-align.
- Refresh review responses if old ones read tired.

---

## What not to do

A short list of things that look like good ideas and aren't.

- **Don't list on every OTA platform.** Holidu, Casamundo, Snaptrip, FlipKey, etc. amplify the rate-parity surface area without bringing meaningful new demand. Three channels (Booking, Airbnb, Vrbo) are enough.
- **Don't run channel-specific seasonal promos that aren't on direct.** Defeats the "direct is cheapest" promise.
- **Don't engage in review-trading or solicit reviews from non-guests.** All OTAs have detection. The cost of being caught is far higher than the few extra reviews.
- **Don't change the listing every week.** OTAs treat heavy edits as instability and downrank. Edit on a quarterly cadence (or for good cause), not impulsively.
- **Don't reply to negative reviews with corrections.** Even if the guest is wrong, public arguments lose. Fix the underlying issue, write a brief professional response, move on.
- **Don't put Booking.com URLs or Airbnb URLs on direct site.** The direct site never sends traffic *to* OTAs (that's giving up margin). OTAs are visible to guests via their own search; we don't need to advertise them.

---

## Open items that depend on this strategy

These are tracked in `questions-for-stefania.md`, surfaced here for context:

- **Item #20** ✅ RESOLVED 2026-05-13. Mechanism **B** locked (OTA channel mark-up). Site copy softened to "best rate available, every time" (dropped the stronger "always cheaper" line).
- **Item #18** — AL number for OTA listings. Once Stefania supplies it, the AL must appear on every channel (legal requirement in Portugal).
- **Item #6** — backfill the best Booking.com / Airbnb reviews into the site Reviews collection. ~30 minutes of copy-pasting.
- **Item #3** — clean up expired Lodgify promotions. Reduces operational complexity.

---

## What's not in this doc

- **Specific OTA dashboard walkthroughs** (where each setting lives in each platform). Out of scope; each OTA's UI changes every few months and a doc that pretends to be screenshot-accurate goes stale fast. Stefania already manages all three in the dashboard; ask in the moment.
- **Channel manager configuration in Lodgify.** Lodgify owns the sync between channels; we don't need to manage it from here.
- **Pricing strategy beyond rate parity** (dynamic pricing, length-of-stay discounts, weekly/monthly discounts). The 6 existing Lodgify promos in item #3 cover most of this; deeper pricing strategy is a Sprint 5+ topic.
