# A5 table tent — print spec

**Last updated:** 2026-05-08
**Status:** drafted, awaiting Stefania's review (item #25 in `questions-for-stefania.md`).
**Goal:** stand on the dining table for the duration of the stay; bigger than the A6 card so it works at across-the-room glance distance and doesn't disappear under stuff.

---

## Purpose

Same as the A6 review card — drive Google reviews — but at a different physical scale and place in the apartment. The A6 sits on the kitchen counter (close-range, intimate). The table tent stands on the dining table (full-width view, ambient). Together they cover both moments without being annoying.

---

## Format

| Spec | Value |
|---|---|
| Trim size unfolded | **A5 — 148 × 210 mm** |
| Folded size | **148 × 105 mm** (folded along the middle horizontal axis) |
| Bleed | 3 mm each side (working file: 154 × 216 mm) |
| Sides | **Two visible faces** (the standing tent shows front and back when on the table) |
| Paper | **350 gsm matte coated** (same as the cards). Heavier paper would stand better but 350 gsm folds cleanly and is sufficient. |
| Fold type | Score along the middle horizontal axis so it folds 90° to stand. |
| Optional | A small triangular dust-cover flap at the bottom that tucks under, gives extra stability. Most printers add this automatically when you specify "table tent." |
| Colour | CMYK |

When standing, the tent shows two A6-equivalent faces at ~75° angle. Both faces are visible from across the table.

---

## Face A — Front (the side facing the guest sitting down)

```
┌──────────────────────────────────┐
│                                  │
│                                  │
│       Hope you're having         │
│       a good stay.               │
│                                  │
│       If so, leave us a          │
│       Google review when         │
│       you have a minute.         │
│                                  │
│            ┌──────────┐          │
│            │          │          │
│            │   QR     │          │
│            │          │          │
│            └──────────┘          │
│                                  │
│            scan to review        │
│                                  │
└──────────────────────────────────┘
```

**Background:** Atlantic Blue (#1E5B73) — solid, full-bleed.
**Headline + body:** Spectral 700, 18pt for the headline ("Hope you're having a good stay."), Manrope 400, 13pt for the secondary line. Both warm-white, centred horizontally, line-height 1.4. Top of headline ~32 mm from the top.
**QR code:** 40 × 40 mm, centred, ~140 mm from top of the unfolded sheet (so it lands about ⅔ down on Face A).
**Caption:** Manrope 500, 9pt, warm-white at 80% opacity, centred under QR.

The QR target is the same GBP review URL as the A6 card. Both can use the exact same QR — guests can scan whichever face is easiest.

---

## Face B — Back (the side facing the kitchen / the host's view)

```
┌──────────────────────────────────┐
│                                  │
│                                  │
│       [Mar Azul logo,            │
│        warm-white reversed]      │
│                                  │
│                                  │
│       Lagos · Algarve            │
│                                  │
│                                  │
│       Direct booking is          │
│       the cheapest channel.      │
│                                  │
│       apartamentomarazul.com     │
│                                  │
└──────────────────────────────────┘
```

**Background:** Atlantic Blue (same as Face A — visually one tent).
**Logo:** `logo-reversed.svg`, ~70 mm wide, centred, ~40 mm from top.
**Place line:** Manrope 600, 9pt, all-caps letter-spacing 0.06em, warm-white, centred under logo.
**Direct-booking nudge:** Spectral 700, 14pt italic, two lines, centred, ~150 mm from top.
**URL:** Manrope 600, 11pt, warm-white, centred, ~190 mm from top.

Face B is the gentle "next time, book direct" nudge. Reinforces brand at a moment when the guest already loves the apartment.

---

## Per-locale variants

Same logic as the A6: stick to English for the first batch. Add Portuguese if the tent proves itself.

If two variants, the Portuguese tent reads:

**Face A:**
- Headline: `Esperamos que esteja a ter uma boa estadia.`
- Body: `Se sim, deixe-nos uma avaliação no Google quando tiver um minuto.`
- Caption: `digitalize para avaliar`

**Face B:**
- Place line: `LAGOS · ALGARVE`
- Direct-booking nudge: `A reserva direta é o canal mais barato.`
- URL: unchanged

---

## Brand tokens

Same locked set as the other print pieces: Atlantic Blue, Warm White, Deep Navy, Slate Grey. Spectral display, Manrope body.

---

## Production

| Vendor | Cost (10 tents) | Lead time | Notes |
|---|---|---|---|
| MOO | not stocked — use a generic A5 folded card spec | – | – |
| Vistaprint (table tent product) | ~€20 | 5-7 days | Stock product — fast. |
| Local Lagos shop | ~€15-25 | 2-3 days | Best for proof-and-print quickly. Recommended. |

**Quantity:** 10 tents — only one is needed in the apartment at a time. Reorder when 1-2 left. The previous tent gets recycled or kept as backup.

If two variants (EN + PT): 5 + 5.

**Proof check:**

- [ ] QR scans from 30 cm distance (table-to-eye normal viewing distance) on iPhone and Android
- [ ] Atlantic Blue colour matches the business card
- [ ] Fold is centred (a 1mm offset is visible when standing)
- [ ] Tent stands stably on a flat surface for at least 30 seconds with no bend
- [ ] Logo isn't pixellated at 70 mm width

---

## Six decisions for Stefania

| # | Question | Recommendation |
|---|---|---|
| 1 | English only or EN + PT? | EN only for the first batch. |
| 2 | Quantity? | 10 |
| 3 | Confirm Face A copy ("Hope you're having a good stay. If so, leave us a Google review when you have a minute.")? | Yes. Calm, specific, no pressure. |
| 4 | Confirm Face B copy (logo + place line + "Direct booking is the cheapest channel.")? | Yes. Reinforces the brand promise on the homepage. |
| 5 | Same QR target as the A6 card (GBP review URL)? | Yes — same target keeps the operational story simple. |
| 6 | Print vendor? | Local Lagos shop. Tent products are simple; the local shop is fastest and cheapest. |

---

## Cross-references

- `questions-for-stefania.md` items #6 (review backfill), #25 (this brief).
- `gbp-playbook.md` → Action #13 (review collection — the tent is part of this strategy).
- `print-review-card-spec.md` — the kitchen counter companion to this tent.
- `print-business-card-spec.md` — same vendor / paper / brand spec.
