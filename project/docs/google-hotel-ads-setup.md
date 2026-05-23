# Google Hotel Ads — setup playbook

**Last updated:** 2026-05-08
**Status:** ready to execute when Stefania is ready and the redesign is on production at `apartamentomarazul.com`.
**Goal:** appear in Google's Hotel Ads carousel + Maps booking module so direct bookings get the cheapest visible rate (and OTAs get listed as more expensive options next to us).

---

## What Google Hotel Ads is

Hotel Ads is the row of bookable rates that appears under hotel/rental search results on Google. When a user searches "Apartamento Mar Azul Lagos" or "Lagos vacation apartment for 2", Google can show:

```
[ Hotel Ads carousel ]
   Booking.com   €180  →
   Direct        €152  →   ← that's us
   Airbnb        €198  →
   Vrbo          €185  →
```

For a single-property rental, this is high-leverage:
- Every comparison shopper sees us **next to** the OTAs.
- Direct can be displayed at the cheapest price (mechanism B from `ota-strategy.md` baked this in).
- Tracked clicks become bookings we keep the full margin on.

Free listings exist (no bid required) and paid bidding amplifies them. We start with free listings and only bid if data justifies it.

---

## Prerequisites

A few things must be in place before we start. None of them are blockers today; some land later in the sprint plan.

| Prerequisite | Status | Owner |
|---|---|---|
| Property is listed on Lodgify with rates and availability | ✅ in place | – |
| Site is live at `apartamentomarazul.com` (post-cutover) | ⏸️ Sprint 9 | Owner |
| GA4 property created and tracking the site | ⏸️ Sprint 4–5 (after Klaro consent banner) | Owner + Luis |
| Google Hotel Center account | ⏸️ this doc | Stefania |
| Google Ads account linked to Hotel Center (only needed for paid bidding) | ⏸️ later, optional | Stefania |
| Lodgify "Connect with Google" feature enabled | ⏸️ this doc | Stefania |

---

## How the pieces connect

```
                    ┌──────────────────────────┐
                    │ Lodgify (rates, calendar)│
                    └────────────┬─────────────┘
                                 │ feed (price + availability)
                                 ▼
                    ┌──────────────────────────┐
                    │ Google Hotel Center      │
                    │ (the property's record)  │
                    └────────────┬─────────────┘
                                 │ shown alongside
                                 ▼
                    ┌──────────────────────────┐
                    │ Google Search results    │
                    │ + Maps booking module    │
                    └────────────┬─────────────┘
                                 │ user clicks our link
                                 ▼
                    ┌──────────────────────────┐
                    │ apartamentomarazul.com   │
                    │ /book → Lodgify checkout │
                    └────────────┬─────────────┘
                                 │ booking conversion
                                 ▼
                    ┌──────────────────────────┐
                    │ GA4 (+ Hotel Center      │
                    │ conversion tracking)     │
                    └──────────────────────────┘
```

Lodgify is the **data feeder**. Google Hotel Center is the **property record**. The site is the **landing surface**. GA4 is the **conversion measurer**.

---

## Setup, step by step

### 1. Create a Google Hotel Center account

1. Go to https://hotelcenter.google.com/.
2. Sign in with the Google account that owns the GBP profile (so the two link cleanly later).
3. Click **Get started** → **Add property**.
4. Property type: **Vacation rental**.
5. Name: `Apartamento Mar Azul`.
6. Address: same as the canonical NAP block in `nap-audit.md`.
7. Save.

You won't see ad placements yet — Google needs the rate feed first.

### 2. Enable Lodgify's "Connect with Google" integration

1. Lodgify dashboard → **Marketing** → **Connect with Google** (or **Channel Manager** depending on plan/UI).
2. Enable the integration. Lodgify shows you a **Hotel Center ID** field — paste in the ID from step 1.
3. Authorise Lodgify to push rate + availability to Hotel Center on your behalf.
4. Confirm the property name, currency (EUR), and check-in/check-out times match what's in Lodgify.

Lodgify now sends a daily feed (rates, availability, occupancy, taxes) to Hotel Center. The first feed appears in Hotel Center within ~24 hours.

### 3. Add the website URL in Hotel Center

1. Hotel Center → the property → **Click destinations**.
2. Add `https://apartamentomarazul.com/book` as the **direct booking URL**.
3. Verify it loads (Google fetches the page once to confirm).

For initial setup before cutover, use the Cloudflare Pages preview URL (`<project>.pages.dev/book`) and switch to the production URL after the DNS swap (Sprint 9).

### 4. Verify the property is live

After ~24 hours:

1. Search Google for `Apartamento Mar Azul Lagos`.
2. Look for the Hotel Ads module under the knowledge panel. We should be in it, alongside Booking.com / Airbnb / Vrbo.
3. Click our row to verify the link goes to `apartamentomarazul.com/book` with the dates pre-filled.

If we're not appearing, the most common causes are: feed not yet processed (wait another 24h), property name mismatch between Lodgify and Hotel Center, or Hotel Center hasn't accepted the property type for vacation rentals (some markets are still rolling out vacation-rental support).

### 5. Conversion tracking (GA4)

This is the engineering-side hook. Until GA4 ships (waiting on the Klaro cookie banner in Sprint 4–5), we can't measure Hotel Ads conversions.

When GA4 lands:

1. GA4 property → **Admin** → **Events** → mark `book_complete` as a **conversion**.
2. Hotel Center → **Conversions** → connect to GA4 using the same property.
3. Set the conversion event name to `book_complete` (or whatever name we agree on at GA4 setup time).
4. The conversion fires when a guest lands on the Lodgify confirmation page after booking. Lodgify exposes a confirmation URL parameter we can detect from a small script on the site.

Engineering action when GA4 lands: add a one-line conversion event listener in the booking-flow handoff. Tracked under Sprint 4–5.

---

## Bidding strategy (when ready)

Free listings are usually enough for a single property. Paid bidding amplifies but isn't necessary at launch.

### Phase 1 — Free listings only (Sprint 6 onward)

- Cost: zero.
- Setup: nothing beyond the prerequisites above.
- Coverage: appears in Hotel Ads modules organically based on Google's relevance scoring.
- Goal: prove that direct rate is being clicked. No bidding decisions to make.
- Budget: zero.

### Phase 2 — Paid bidding (only if data justifies)

Trigger conditions (any one is enough):
- Free listings show that we get visible impressions but few clicks (visible position 4-6 in the carousel).
- Cost-per-acquisition through Booking.com is high enough that even a paid Hotel Ads click would beat it.
- Booking.com's commission on a typical stay exceeds the maximum Google CPC we'd pay.

If the trigger fires:

1. Link Google Ads to Hotel Center.
2. Start with **commission per booking** bidding (pay only when a booking completes), not pay-per-click. Lower risk, easier to justify.
3. Set commission % to **8-12%** initially (less than the Booking.com 15-18%, more than zero).
4. Run for 30 days.
5. Review: total bookings via Hotel Ads ÷ total ad spend. If commission rate is winning bookings without burning margin, hold or increase.

Don't switch to pay-per-click bidding without a clear hypothesis. PPC bidding without conversion tracking is throwing money at search.

---

## Rate parity and Hotel Ads

Hotel Ads is **not** subject to Booking.com's rate parity rules in the same way an OTA is, because Google is a metasearch engine (showing prices from multiple sources), not a booking platform.

That said:

- The price we show in Hotel Ads must match what a user actually pays on `apartamentomarazul.com/book`. Google enforces this — if our shown price is €152 and the checkout is €172, Google will downrank us.
- The OTAs' prices in Hotel Ads include their service fees. Ours includes only what we charge. So the visible spread (`Direct €152` vs `Booking.com €180`) is a function of math — not a discount we'd need to advertise as such.
- This works **only if** mechanism B (OTA mark-up in Lodgify) is in place, per `questions-for-stefania.md` item #20. Without it, Google shows direct at the same price as the OTAs and the carousel doesn't help us.

---

## What good looks like

After 30-60 days of Hotel Ads being active (free listings only):

| Metric | Target | What it means |
|---|---|---|
| Hotel Ads impressions / week | 500+ | We're in the carousel for relevant searches |
| Hotel Ads click-through rate | 3-7% | Our rate is competitive enough that searchers click us, not OTAs |
| % direct bookings from Google | 15-25% of total direct | Google is a meaningful part of the direct funnel |
| Hotel Ads → /book → confirmation conversion rate | 4-8% | The page is converting comparable to OTAs |

If any one of these is significantly below target after 60 days, troubleshoot before bidding paid.

---

## Stuff that's easy to get wrong

- **Don't list the property twice in Hotel Center** (vacation rental + hotel). Pick vacation rental and stick to it. Duplicate listings get suppressed.
- **Don't show different cancellation terms in Hotel Ads vs the actual booking page.** Google verifies the policy and will downrank for mismatch.
- **Don't put the AL number only on the site and not in Hotel Center.** Hotel Center has a regulatory ID field for vacation rentals — fill it (this becomes urgent the moment Stefania supplies the AL number, item #18).
- **Don't bid PPC before conversion tracking is live.** Without GA4 + the conversion event, you can't tell which clicks are paying off.
- **Don't pause and resume the integration repeatedly.** Hotel Center penalises listings that go stale; consistency matters more than perfection.

---

## Cross-references

- `questions-for-stefania.md` items #18 (AL number — needed for Hotel Center regulatory field), #20 (pricing mechanism — required for Hotel Ads to show a competitive direct price), #15 (Cloudflare/GA4 env vars).
- `ota-strategy.md` — Hotel Ads complements the OTA strategy; together they cover the full booking funnel.
- `nap-audit.md` — canonical NAP must match Hotel Center exactly.
- `gbp-audit.md` — GBP and Hotel Center share the same Google account; pair the optimisation cycles.
