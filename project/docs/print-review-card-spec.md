# Fridge magnet — print spec

**Last updated:** 2026-05-15
**Status:** LOCKED 2026-05-15 — Stefy's decisions applied. Copy shortened, no photo, 70×90 mm, vendor Frente e Verso, qty 2. Ready for the claude-design prompt → print-ready PDF.
**Goal:** sit on the fridge for the entire stay. Guests open the fridge multiple times a day — by the third or fourth time, the calm "leave us a review" prompt has registered without ever being pushy. Lives forever (magnets don't get thrown out like cards do), so one design batch covers many guests.

---

## What this is

A printed flexible-magnet rectangle that sits on the fridge. Single-sided. One job: when the guest is ready to leave a Google review, the QR is right there, no app-hunting, no URL-typing.

Replaces the original A6 paper card on the kitchen counter for two reasons:
1. **Permanence** — magnets don't end up under the morning paper or in the recycling.
2. **Visibility** — the fridge is opened more often than a counter is glanced at.

---

## Format

| Spec | Value |
|---|---|
| Size | **~70 × 90 mm** (portrait, postcard ratio shrunk to magnet scale) |
| Material | Flexible vinyl magnet, ~0.6-0.8 mm thick |
| Bleed | 3 mm each side |
| Sides | **One-sided** (magnetic back is uniform brown/black) |
| Corners | **Rounded** (~3 mm radius) — magnets feel friendlier with rounded corners |
| Finish | Matte vinyl (gloss reflects kitchen lights and degrades QR scan reliability) |
| Colour | CMYK, full colour print |

---

## The single side

> **Loved your stay?**
>
> Leave us a review.
>
> [QR code]
>
> *scan to review*
>
> apartamentomarazul.com

**Visual treatment:**
- Background **Warm White (#FAFAF7)** with a thin Atlantic Blue rule along the top edge (~3 mm wide) — a small visual anchor that ties the magnet to the rest of the brand system.
- Top headline **"Loved your stay?"** — Spectral 700, ~14pt, Deep Navy. Centred, ~6 mm from the top rule.
- Sub-line **"Leave us a review."** — Manrope 400, ~10pt, Deep Navy.
- QR code **35 × 35 mm**, centred, Atlantic Blue on warm-white.
- Caption **"scan to review"** — Manrope 500, 7pt, Slate Grey, centred, ~3 mm under QR.
- Footer **`apartamentomarazul.com`** — Manrope 600, 7pt, Atlantic Blue, centred, ~4 mm from the bottom.

Six lines including the QR — calm and one-purpose. Copy locked by Stefy 2026-05-15 (shorter than the draft).

---

## QR target

The Google Business Profile **"leave a review" short URL**: `https://g.page/r/Cewx9Po3sADdEBM/review`. The same URL is used on the table flip Panel 8, so there's only one QR target to maintain.

If we want UTM tagging for analytics later (track which surface drove the review): the magnet can use `?utm_source=magnet&utm_medium=offline&utm_campaign=review`. Note: GBP review URLs don't pass UTM through to the review form, so the URL parameters are stripped — UTM here is mostly cosmetic. Skip it for the first batch.

---

## Per-locale variants

The magnet is small and lives on a metal surface, not in a drawer with siblings. **One English version only.** Adding PT/IT/ES/FR multiplies the cost and creates a "which magnet do we put up?" decision every changeover. International guests universally understand "Google review" — the headline is short enough that translation isn't necessary.

If Stefania wants to test a Portuguese version later, that's a separate small reorder.

---

## Brand tokens

Same locked set as the rest of the print line: Atlantic Blue, Warm White, Deep Navy, Slate Grey. Spectral for the short headline, Manrope for everything else.

---

## Production

**Vendor:** **Frente e Verso (Lagos)** — locked 2026-05-15. Walk in with the print-ready PDF + colour proof reference for Atlantic Blue. Ask to see a sample flexible magnet from a previous job to confirm the QR scan quality on their stock before committing.

**Quantity:** **2 magnets.** Locked by Stefy 2026-05-15 (one on the apartment fridge + one spare).

**Critical proof check** — the QR code MUST scan cleanly with both iPhone and Android cameras from ~20-30 cm away in indoor kitchen light. Magnets often have slight surface texture that interferes with QR scanning. **Test the printed proof before approving the bulk run.** If the QR doesn't scan reliably, the whole magnet is wasted.

---

## Locked decisions (2026-05-15)

| # | Decision | Locked value |
|---|---|---|
| 1 | Copy | **"Loved your stay? Leave us a review."** |
| 2 | Photo | **None** |
| 3 | Size | **70 × 90 mm** |
| 4 | Vendor | **Frente e Verso** (Lagos) |
| 5 | Quantity | **2** |

| Field | Source |
|---|---|
| QR target URL | `https://g.page/r/Cewx9Po3sADdEBM/review` (Stefy, 2026-05-14) |
| Footer URL | apartamentomarazul.com |

---

## Production notes (light — full design spec in the claude-design prompt later)

- File deliverable: print-ready PDF at 300 DPI, CMYK, with crop marks and 3 mm bleed.
- Atlantic Blue colour match: same Pantone 7700 C / CMYK 78/40/35/25 build as the business card and table flip.
- Magnet thickness: 0.6-0.8 mm is the sweet spot. Thinner (0.3 mm) flexes too easily and the print can crease; thicker (1+ mm) looks heavy and won't stick well to slightly textured fridge surfaces.

---

## Cross-references

- `questions-for-stefania.md` — items #6 (review backfill — the magnet drives this on the kitchen side), #24 (this brief).
- `print-table-tent-spec.md` — Panel 8 has the same QR / review CTA. The magnet and table flip work together — magnet is "during the stay", table flip Panel 8 is "at the end of the stay."
- `gbp-audit.md` — GBP review URL source.

---

## Next steps

1. Write the claude-design prompt to produce the print-ready PDF.
2. Hand the PDF to Frente e Verso for one proof magnet.
3. Stefy holds the proof on her own fridge, tests the QR scan from arm's length on her phone.
4. Once the proof is approved, print the 2-magnet run.
