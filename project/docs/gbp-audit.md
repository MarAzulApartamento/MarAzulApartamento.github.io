# Google Business Profile audit — Apartamento Mar Azul

**Audit date:** 2026-05-07
**Audited by:** Sprint 0 read-only public-data analysis + owner-confirmed dashboard data
**Property:** Apartamento Mar Azul, Rua Dom Luís da Silveira lote V 44 B, 8600-575 Lagos
**GBP profile completeness at audit:** 75%
**Open since:** June 2025

## Owner-confirmed current state (2026-05-07)

| Field | Current value | Verdict |
|---|---|---|
| Business name | "Apartamento Mar Azul" | ✅ Correct, no keyword padding |
| Primary category | "Appartamento per vacanza in affitto" (Holiday apartment rental) | ✅ Correct — best category for short-stay rentals |
| Opening date | June 2025 | ✓ Visible in profile |
| Phone | 936 083 766 | ⚠️ Missing +351 country code prefix |
| Website link | `https://apartamento-mar-azul.lodgify.com/` | ⏸️ Temporary by design — switch to `apartamentomarazul.com` after our site launches |
| Address (full) | Rua Dom Luís da Silveira lote V 44 B, 8600-575 Lagos | ✅ More precise than the CLAUDE.md draft (added lote V 44 B) — CLAUDE.md updated |
| Service area | Empty | ⚠️ Recommend setting "Lagos, Algarve, Portugal" once we hide street address |
| Opening hours | Empty | ⚠️ Recommend "Open 24 hours" (booking-availability is the relevant signal, not physical hours) |
| Photos | 8 | ⚠️ Below recommended 20+; we have 25 compressed photos ready to upload |
| Reviews | 5 | ✅ Solid foundation — use these as social proof on the new site (with attribution) |
| Instagram + Facebook | Linked | ✅ |
| Booking link / "Book" button | Not yet wired (defaults to website) | ⏸️ Set after Sprint 2 wires the /book page |
| Posts | None visible | ⚠️ Start regular cadence after launch |
| Q&A | Not yet seeded | ⚠️ Sprint 4 task |

**Owner's instruction:** keep GBP exactly as-is until the new site + booking flow are ready. All optimization changes execute in **Sprint 4**, not now. This audit is for capture of the current baseline + the change list.

---

## TL;DR

Three things to know before optimizing:

1. **The property's GBP is not surfacing prominently in Google search** for the obvious queries. Either it's verified-but-thin, has weak signals, or is being outranked by name-collision competitors. Confirm with the user from inside the GBP dashboard.
2. **Name-collision risk is severe in Lagos.** At least 5 competitor properties share variations of "Mar Azul" / "Azul Mar." This makes brand-name SEO harder and increases the importance of optimizing every signal.
3. **There is no link from the existing apartamentomarazul.com site to the GBP** (the live site shows only Facebook + Instagram + a YouTube video). Adding GBP-linked structured data, embedded map, and review widget is high leverage.

---

## What public search shows

### Direct search for "Apartamento Mar Azul Lagos"

The first page of Google is dominated by **OTA aggregators and content-spam directories**, not the user's own site or GBP:

- `apartamento-mar-azul.hotelaalgarve.com` (third-party listing aggregator)
- `apartamento-mar-azul.hotels-in-algarve.com` (es) (same network)
- `lagoshotels.net` (aggregator)
- `bookaris.com` (aggregator)
- `gites.fr` (rental marketplace)
- `booking.com` (the user's actual OTA listing)
- `rentalia.com` (rental marketplace)
- `wanderlog.com` (travel planner aggregator)

**Implication:** the user's own site `apartamentomarazul.com` is being outranked by aggregators republishing its data. This is normal pre-SEO state. Sprint 4 SEO content + structured data should reverse this within 3-6 months for branded queries.

### Name-collision competitors in Lagos / Algarve

Properties with confusingly similar names that already rank for "Mar Azul Lagos":

| Property | Type | Address | Implication |
|---|---|---|---|
| **Apartamento Mar Azul** (a different one) | Apartment | R. Convento da Trindade 85, 8600-540 Lagos | **Direct name collision — same name, different street.** Wanderlog shows 5/5 from 4 reviews and a Google Maps pin at 37.0936, -8.669845. Whoever ranks first wins the branded search. |
| Hotel Mar Azul | Guest house | Lagos | TripAdvisor listed |
| Villa Mar Azul | Villa | Lagos | TripAdvisor + Expedia |
| Hotel Apartamentos Mar Azul | Aparthotel | Different Lagos address | Bookaris listed |
| Apartamento Azul (Praia da Luz) | Apartment | Praia da Luz | apartamentoazul.com — likely steals branded traffic |
| Apartamentos Azul Mar | Aparthotel | Albufeira | Agoda listed |

**Brand differentiation is a real problem.** Strategic responses:
- Always pair "Apartamento Mar Azul" with "Lagos" + a unique landmark in copy ("near Dona Ana Beach", "Dom Luís da Silveira street")
- Make the website's structured data unambiguous: `VacationRental` + `geo` coordinates + `streetAddress` so Google's entity graph distinguishes us from R. Convento da Trindade 85
- Get the GBP listing strong enough to claim the top knowledge-panel slot for "Apartamento Mar Azul Lagos"

---

## What we cannot verify without dashboard access

Need the user to confirm from inside Google Business Profile dashboard at `business.google.com`:

| Field | Status | Notes |
|---|---|---|
| Verified? | ✅ Per user | Confirm verification badge is still active |
| Primary category | ❓ | Recommend: **"Holiday apartment rental"** (NOT "Hotel" or "Bed and breakfast") |
| Secondary categories | ❓ | Add: "Vacation home rental agency", "Self-catering accommodation" |
| Business name shown | ❓ | Should be exactly "Apartamento Mar Azul" — no keyword stuffing like "Apartamento Mar Azul - Lagos Beach Apartment" (Google can suspend for keyword stuffing in name) |
| Phone | ❓ | International format with +351 country code |
| Website | ❓ | Should point to `https://apartamentomarazul.com` (or the future custom domain) — NOT to Booking.com |
| Address visibility | ❓ | For holiday rentals, hide the street address (use service-area mode) — guests don't need to find you on Maps before booking |
| Service area | ❓ | If hiding address: set service area to "Lagos, Algarve" |
| Hours | ❓ | Set to "Open 24 hours" if accepting bookings, OR a check-in/out window if more accurate |
| Languages spoken | ❓ | EN, PT, IT (per existing copy); consider adding DE/NL/FR if owner can converse |
| Attributes | ❓ | Confirm: free Wi-Fi, free parking, A/C, family-friendly, suitable for couples, NOT pet-friendly |
| Photo count | ❓ | Should be 20+. We have 25 compressed photos ready to upload. |
| Photo categories | ❓ | Cover, logo, exterior, interior (rooms), amenities, food/drink (none), team (host) |
| Logo | ❓ | Use `logo-primary.svg` exported as 250×250px PNG |
| Cover photo | ❓ | Use `marazul-01.jpg` (the best-rated photo) |
| 360°/virtual tour | ❓ | Strongly recommended — major ranking signal. Free if you have a phone with Street View app |
| Posts | ❓ | Recent activity? Cadence? Recommend weekly during high season, biweekly off-season |
| Q&A | ❓ | Owner-seeded with FAQ entries (mirror site FAQ: parking, Wi-Fi, check-in, beach, pet policy) |
| Reviews | ❓ | Total count? Average rating? Owner responses to all reviews (especially negatives)? |
| Booking link / "Book" button | ❓ | Should deep-link to `apartamentomarazul.com/book?utm_source=gbp&utm_medium=organic&utm_campaign=profile` |
| Messages enabled | ❓ | If yes — owner should respond within 24h to maintain GBP rank signal |
| Products / services | ❓ | Could add the apartment as a "Service" with photos, description, price-from |
| Special hours / holidays | ❓ | Block-out periods for owner's own use? |
| FAQs in profile | ❓ | Distinct from Q&A — used by Google AI Overviews when citing |
| Profile completeness % | ❓ | GBP shows this in the dashboard. Aim for 100%. |

---

## Optimization plan — execute in Sprint 4

Numbered in priority order. Each item has an estimated impact (H/M/L) and effort (S/M/L).

### Foundation (Sprint 4, week 1)

1. **[H, S]** Confirm primary category = "Holiday apartment rental." Wrong category is the single biggest ranking miss for short-stay rentals.
2. **[H, S]** Confirm business name is exactly "Apartamento Mar Azul" (no keyword padding).
3. **[H, M]** Upload all 25 compressed photos, categorized correctly. Cover = `marazul-01.jpg`, logo = `logo-primary` PNG, interior shots tagged as "Rooms", terrace as "Outdoor".
4. **[H, S]** Set website to `https://apartamentomarazul.com` (or current canonical URL).
5. **[H, S]** Set "Book" button to deep-link to the booking page with UTM parameters.
6. **[M, S]** Confirm phone +351 with no spaces in NAP.
7. **[H, S]** Hide street address (service-area mode); set service area to "Lagos, Algarve, Portugal."
8. **[H, M]** Seed Q&A with 8-10 entries mirroring site FAQ. Owner-asked, owner-answered. Topics: check-in time, parking, Wi-Fi, crib, cancellation policy, beach distance, pet policy, languages spoken, payment.
9. **[H, S]** Add attributes: free Wi-Fi, free parking, A/C, family-friendly, suitable for couples, no pets allowed.
10. **[M, S]** Set languages spoken to PT, EN, IT (and DE/NL/FR if applicable).

### Multilingual (Sprint 4, week 2)

11. **[M, M]** Translate the GBP business description into the 4 supported languages via the per-language fields (where GBP supports it). For SEO content, mirror site keyword strategy ("Ferienwohnung Lagos" not "Holiday apartment Lagos").
12. **[M, M]** First batch of GBP Posts in EN + PT (5 each), then DE/NL/FR. Topics: "Welcome to Mar Azul", "Why Lagos in October", "Inside the apartment — terrace tour", "Direct booking perks", "What's near you — 5 minutes by car".

### Reviews + ongoing (Sprint 4 onward)

13. **[H, M]** Drive review collection via the new A6 review card + table tent (Sprint 5 print pieces). Target: 5+ new reviews in 60 days post-launch.
14. **[M, S]** Owner responds to every review within 48h (positive: brief thanks; negative: factual, calm, solution-oriented).
15. **[M, M]** Set up GBP Insights monitoring. Monthly review of: search query terms used to find the property, photo views, calls, direction requests, website clicks. Adjust posts based on what guests are searching for.

### Advanced (later)

16. **[M, L]** 360°/virtual tour using the Google Street View app. ~1-2 hours of work, big SEO unlock.
17. **[L, M]** GBP Products listing — list the apartment as a bookable Service with photo, description, "from €X/night."
18. **[M, S]** Add FAQ field (separate from Q&A) — feeds Google's AI Overviews citation system.

---

## Cross-platform NAP consistency

Once GBP is locked in, the **same** Name / Address (or service-area) / Phone / Website must appear identically on:

| Platform | Status to check |
|---|---|
| Google Business Profile | Source of truth |
| Bing Places for Business | Often forgotten — needs claiming |
| Apple Maps Connect | iOS users |
| TripAdvisor business listing | Currently only competitor properties show — claim or create |
| Booking.com (existing) | Audit listing details for consistency |
| Airbnb (existing) | Same |
| Visit Algarve directory | Free local SEO win |
| Visit Portugal | Same |
| Lagos Câmara Municipal directory | If exists |

This is the **NAP audit** scheduled for Sprint 4. Inconsistencies (different phone formats, abbreviated addresses) hurt local SEO ranking.

---

## What I need from the owner to fill in the ❓s

When ready, paste me:

1. A screenshot of the GBP dashboard's **profile completeness** section (top of dashboard, usually shows %)
2. The **primary category** currently set
3. The **business name** as displayed on the public profile
4. **Photo count** in the photos tab
5. Total **review count + average rating**
6. Whether **address is hidden** (service-area mode) or visible
7. Whether **booking link** is set, and what URL it points to
8. Most recent **GBP Post** date — last week, last month, longer?

Five minutes of dashboard inspection by the owner gives me everything I need to prioritize the gap list.

---

## Sources used in this audit

- [Booking.com — Apartamento Mar Azul Lagos](https://www.booking.com/hotel/pt/apartamento-mar-azul.html)
- [Wanderlog — Apartamento Mar Azul, Lagos](https://wanderlog.com/place/details/4938396/apartamento-mar-azul-lagos) (this lists a *different* property at R. Convento da Trindade 85 — name-collision evidence)
- [Hotel Mar Azul on TripAdvisor](https://www.tripadvisor.com/Hotel_Review-g189117-d1052275-Reviews-Hotel_Mar_Azul-Lagos_Faro_District_Algarve.html)
- [Villa Mar Azul on TripAdvisor](https://www.tripadvisor.com/Hotel_Review-g189117-d488747-Reviews-Villa_Mar_Azul-Lagos_Faro_District_Algarve.html)
- [Apartamento Azul, Praia da Luz](https://www.apartamentoazul.com/) (name-similar competitor)
- Live site SEO baseline at `https://www.apartamentomarazul.com` (Sprint 0 fetch, separately documented)
