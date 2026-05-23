# Lodgify capability matrix — Apartamento Mar Azul

**Spike date:** 2026-05-07
**Plan:** Lodgify Professional
**Property ID resolved:** confirmed via API
**Room type ID resolved:** `738408` (single room/unit)
**API base:** `https://api.lodgify.com` — auth header `X-ApiKey`
**Method:** read-only GET probes only — no mutations

---

## Executive summary

### The booking-source picture (huge)

**27 historical bookings, by channel:**

| Source | Count | Share |
|---|---|---|
| Booking.com | 16 | 59% |
| Airbnb | 10 | 37% |
| Vrbo / HomeAway | 1 | 4% |
| **Direct** | **0** | **0%** |

**This is the bedrock fact for the project.** The +40% direct-booking goal in Brand.md isn't an optimization — it's a category creation from zero. Every Sprint must drive new direct bookings, since OTA-replacement is the only growth path that improves margins.

**Status breakdown:** 18 booked, 6 declined, 3 open. Healthy decline ratio (~22%) suggests Lodgify is filtering effectively or there's tight inventory.

### Architecture fit for Sprint 2

| Question | Answer |
|---|---|
| Can we embed the full booking checkout inside `apartamentomarazul.com`? | **Yes** — via the Lodgify Booking Engine JavaScript widget (the `LODGIFY_WIDGET_ID`). It iframes the checkout flow but the visitor never leaves our domain visually. |
| Can we pull live availability + pricing into our own pages? | **Yes** — `GET /v2/availability/{id}` and `GET /v2/rates/calendar` both work. We can build our own date-picker + price display in our brand. |
| Can we show real reviews from the API? | **No** — `/reviews` endpoints return 404 on this plan. Reviews must be sourced from GBP (5 available) or pasted into Sveltia CMS. |
| Can we hook into webhooks for booking events? | **Unclear** — `/webhooks` endpoints return 404. Either path is wrong (likely) or feature unavailable on this tier. Investigate via Lodgify support if needed. |
| Can we trigger messaging via API? | **No (apparently)** — `/messaging` 404s. Use Lodgify dashboard inbox + WhatsApp Business as alternatives. |
| Can we manage channel sync via API? | **Read-only** — bookings carry a `source` field; we can read attribution. Active channel changes still happen in the Lodgify dashboard. |

---

## Endpoint-by-endpoint findings

### ✅ Works (use these in Sprint 2)

| Endpoint | Status | Notes |
|---|---|---|
| `GET /v2/properties` | 200 | Returns 1 property in `items[]` array. Top-level shape: `{ count, items[] }`. |
| `GET /v2/properties/{id}` | 200 | Full property object — 33 keys including `latitude`, `longitude`, `address`, `hide_address`, `description`, `rating`, `currency_code`, `min_price`, `max_price`, `image_url`, `rooms[]`, `subscription_plans[]`. **This is our canonical source for property metadata.** |
| `GET /v2/properties/{id}/rooms` | 200 | Array of room types. Single room here, id=738408. Keys: `images[]`, `amenities[]`, `description`, `breakfast_included`, `has_parking`, `adults_only`, `pets_allowed`, `max_people`, `units`, `has_wifi`, `bedrooms`, `bathrooms`, `area`, `min_price`, `max_price`. **Use these for the amenities grid.** |
| `GET /v2/availability/{id}?start=&end=` | 200 | Returns periods of availability. Use to render a calendar view per language. |
| `GET /v2/availability?start=&end=` | 200 | Same data, all properties at once. |
| `GET /v2/rates/calendar?HouseId=&RoomTypeId=&StartDate=&EndDate=` | 200 | **Note the param naming** — capital `H` in `HouseId`, capital camelCase. Returns `{ calendar_items, rate_settings }`. Use for displaying nightly rates next to dates. |
| `GET /v2/reservations/bookings?size=&source=` | 200 | Past + current bookings, supports filtering by source. Use for **direct vs OTA KPI dashboard** (the primary success metric). |

### ⚠️ Needs investigation (failed but probably fixable)

| Endpoint | Status | Issue | Next step |
|---|---|---|---|
| `GET /v2/quote/{id}?...` | 400 "Invalid dates" | Param format wrong despite using ISO dates | Try date format `MM/DD/YYYY` or US format; check Lodgify docs |
| `GET /v2/properties/{id}/translations` | 404 | Property may have no translations set yet — we add via dashboard in Sprint 3 | Verify: Lodgify dashboard supports per-language descriptions; if so, populate, then test |

### ❌ Not available via API on this plan (work around)

| Endpoint | Status | Workaround |
|---|---|---|
| `GET /v2/reviews`, `/v1/reviews`, `/v2/reservations/reviews`, `/v2/properties/{id}/reviews` | 404 | Reviews not exposed. Use GBP reviews (5) + manual content in Sveltia CMS. |
| `GET /v2/webhooks*`, `/v1/webhooks*` | 404 | Defer real-time event integration. If we need it later, contact Lodgify support to confirm tier. |
| `GET /v2/messaging*`, `/v1/messaging` | 404 | Use Lodgify dashboard inbox + WhatsApp Business deep link as guest comms. |
| `GET /v1/users/me`, `/v1/account`, `/v2/account` | 404 | No need — we already know the property ID. |
| `GET /v2/external/bookings` | 404 | All bookings come through `/v2/reservations/bookings`; the `source` field tells us channel attribution. |
| `GET /v2/promotioncodes`, `/v2/discounts` | 404 | Promo codes managed via Lodgify dashboard, not API. Sprint 5 will create direct-booking perk codes via dashboard (with user confirmation). |
| `GET /v2/properties/{id}/amenities` | 404 | Amenities live inside the rooms response (`/properties/{id}/rooms[0].amenities`). |

---

## What we will build in Sprint 2 — recommended approach

### Booking flow (hybrid: native UI + Lodgify checkout)

```
┌──────────────────────────────────────────────────────────────────┐
│  apartamentomarazul.com  (our domain, our brand, full control)   │
│                                                                  │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │  Hero: Availability Calendar widget                        │  │
│  │  ↳ powered by /v2/availability + /v2/rates/calendar        │  │
│  │  ↳ rendered in our brand using our components              │  │
│  │  Click date → show price → "Book direct" CTA               │  │
│  └────────────────────────────────────────────────────────────┘  │
│                              ↓                                   │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │  /book page                                                │  │
│  │  Lodgify Booking Engine JS widget embedded in our layout   │  │
│  │  ↳ uses LODGIFY_WIDGET_ID                                  │  │
│  │  ↳ widget chrome can be styled to fit Atlantic Blue palette│  │
│  │  ↳ visitor never leaves apartamentomarazul.com             │  │
│  │  ↳ payment through Lodgify's Stripe integration            │  │
│  └────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────┘
```

This pattern:
- ✅ Keeps brand control on the journey from "I want to stay here" to "showing me what's available"
- ✅ Hands off to Lodgify only for the regulated payment + reservation step (where we benefit from their PCI compliance)
- ✅ Tracks attribution: every booking from `apartamentomarazul.com` will have `source: "Manual"` in the API (or whatever source code Lodgify assigns to direct embeds)

### Components to build in Sprint 2 (from this spike)

1. **`<AvailabilityCalendar>`** — fetches `/v2/availability` at build time + at runtime via fetch, renders our own date picker
2. **`<PriceFromBadge>`** — fetches `min_price` from `/v2/properties/{id}`, displays "From €N/night" in hero
3. **`<RatesPreview>`** — for a selected date range, calls `/v2/rates/calendar` and shows breakdown
4. **`<LodgifyBookingEngine>`** — Astro Island wrapper around the Lodgify embed widget, hydrated only on `/book` page
5. **`<DirectBookingMeter>` (admin only)** — analytics dashboard showing direct vs OTA ratio, fed by `/v2/reservations/bookings?source=...`

### What needs to happen INSIDE Lodgify (defer to Sprint 5, will ask user before any change)

- Configure the Booking Engine widget to allow embedding on `apartamentomarazul.com` domain (CSP / referrer settings)
- Confirm Stripe is set up + active (must process direct payments)
- Add Portuguese tourism tax line item (verify this is configured correctly per Lagos rules)
- Set up direct-booking perk codes (welcome bottle, late checkout) as promo codes in Lodgify dashboard
- Verify the Booking Engine's email templates reflect our brand voice
- Consider writing the Booking Engine confirmation page in our brand (Lodgify supports custom CSS)

**Per the standing rule, none of these dashboard changes happen without explicit confirmation. The spike was read-only.**

---

## Risks + open questions

| Risk | Severity | Mitigation |
|---|---|---|
| Quote endpoint returns 400 ("Invalid dates") despite ISO format | Medium | Sprint 2 will live-test variations (MM/DD/YYYY, ISO with time, etc.). If unfixable, we display an estimate from `/rates/calendar` and let the embed compute the exact total. |
| Webhooks unavailable means no real-time post-booking automation | Low | Polling `/v2/reservations/bookings` on a schedule from a Cloudflare Worker (free) is a fine substitute. |
| Reviews not in API means we manually maintain testimonials | Low | We have 5 GBP reviews to start. Sveltia CMS gets a "Reviews" collection. |
| Channel sync is in production with 27 historical bookings | **High** | Per memory rule: never make ANY mutating Lodgify dashboard change without user confirmation. The spike confirmed this is live. |
| Embed widget styling may resist our brand tokens | Medium | Sprint 1 must include a Lodgify embed mock to test what's stylable before Sprint 2 commits to a layout. |

---

## Files produced

- `project/docs/lodgify-capabilities-raw.json` — round 1 raw probe results
- `project/docs/lodgify-capabilities-round2.json` — round 2 raw probe results (refined)
- `project/site/scripts/lodgify-spike.mjs` — round 1 script (rerunnable)
- `project/site/scripts/lodgify-spike-2.mjs` — round 2 script

Both scripts can be re-run any time to re-verify capabilities (e.g., after a plan upgrade).

- `project/site/scripts/lodgify-price.mjs` — fetches the **minimum nightly rate** over the next 60 days. Used in Sprint 2 to populate the hero "From €X per night" badge at Astro build time.

## Pricing data confirmed (2026-05-07)

- Currency: **EUR**
- Min rate next 60 days: **€100/night**
- Max rate next 60 days: **€192/night**
- 39 distinct price points across the window (clear seasonal/dynamic pricing)
- Minimum stay: 3 nights
- Cleaning fee: €50 per stay (not per night)
- VAT: 0%
- Check-in: 16:00 / Check-out: 10:00
- 6 active promotion rules in Lodgify (weekly discount 10%, last-minute 15%, monthly stay 30%, "Endless summer" 15%, "August last minute" 30%, "Sunny Escape" 10%)
- ⚠️ A "Pet Nightly Fee" of €20/night exists in Lodgify rate settings even though brand says **not pet-friendly**. Likely a vestigial config — verify with owner whether to remove (would require a Lodgify dashboard edit, must ask before changing per the production-safety rule).
