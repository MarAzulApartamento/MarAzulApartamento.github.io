# Business card — print spec

**Last updated:** 2026-05-15
**Status:** LOCKED 2026-05-15 — Stefy's decisions applied. One WOM card only, qty 100, vendor Frente e Verso (Lagos). Ready for the claude-design prompt → print-ready PDF.
**Companion to:** the print scope from CLAUDE.md (Sprint 5 print materials).

The card sits in Stefania's bag while she's travelling in Italy or visiting Algarve neighbours. It hands off the brand and a route to direct booking in one quick exchange. This document is what we'd take to a printer once she signs off.

**Owner data confirmed 2026-05-13 (was previously `[TO CONFIRM]`):**
- Full name: **Stefania Amidei**
- NIF: **297 932 713**
- AL number: **165912/AL**
- Email: **stefy@apartamentomarazul.com** (brand alias live 2026-05-16; forwards to `marazulapartamento@gmail.com`)
- Phone: **+351 936 083 766**

---

## Purpose

**Word-of-mouth** — given to a friend, B&B owner, neighbour, or someone who asked "where do you stay in Lagos?" The card needs a fast brand impression and one easy action: scan QR → land on the direct site.

Stefy locked this as a **single WOM card** on 2026-05-15. No separate trade variant. AL/NIF stay off the printed card — when a trade contact needs them, Stefy shares verbally or by email.

---

## Format

| Spec | Value |
|---|---|
| Trim size | **85 × 55 mm** (standard EU business card; fits any wallet) |
| Bleed | 3 mm each side (working file: 91 × 61 mm) |
| Safe zone | 5 mm from each trim edge for any text |
| Sides | **Double-sided** (Side A: brand; Side B: utility) |
| Corners | **Square** (cleaner, more editorial than rounded; matches the brand system) |
| Paper | **350 gsm matte coated**, no soft-touch laminate (anti-AI-slop rule — premium without trying too hard) |
| Finish | **Matte both sides**. No gloss, no foil. The logo can have a subtle spot-UV if budget allows, but it's optional. |
| Colour | CMYK, 4-colour print |

---

## Side A — brand

The brand-impression side. Minimal.

```
┌─────────────────────────────────┐
│                                 │
│                                 │
│        [Mar Azul logo]          │
│                                 │
│        Lagos · Algarve          │
│                                 │
│                                 │
└─────────────────────────────────┘
```

**Background:** Atlantic Blue (#1E5B73) — solid, full-bleed.
**Logo:** `logo-reversed.svg` (warm-white version), centred horizontally and vertically. Width ~55 mm.
**Place line:** "Lagos · Algarve" in Manrope 600, 9pt, warm-white, centred under the logo, ~14 mm below the logo baseline. Letter-spacing 0.06em.

That's it. No tagline, no marketing copy.

**Alternative considered:** warm-white background with a small watercolour/illustration of the Algarve coast. Rejected — too AI-default and not aligned with the existing photo-led brand. Stick with the blue field.

---

## Side B — utility

The action side. QR + contact details.

```
┌─────────────────────────────────┐
│  ┌──────┐   APARTAMENTO         │
│  │      │   MAR AZUL            │
│  │ QR   │                       │
│  │      │   Stefania Amidei     │
│  └──────┘   Host                │
│                                 │
│  apartamentomarazul.com         │
│  +351 936 083 766               │
│  stefy@apartamentomarazul.com   │
│  @apartamento_marazul           │
└─────────────────────────────────┘
```

**Background:** Warm White (#FAFAF7) — the body palette of the site.
**QR code:** 22 × 22 mm, top-left, set in Atlantic Blue on warm-white. Target:
  - `https://apartamentomarazul.com/?utm_source=card&utm_medium=offline&utm_campaign=wom`

The UTM parameters let us see in GA4 (once it's collecting) how many bookings come from the card.

**Right column type stack** (top to bottom, left-aligned, ~3 mm to the right of the QR):
- "APARTAMENTO MAR AZUL" — Manrope 700, 8pt, all-caps, letter-spacing 0.08em, Deep Navy (#1d2630). Acts as a label, not a brand mark (the brand mark lives on Side A).
- *Stefania Amidei* — Spectral 700, 12pt, Deep Navy.
- "Host" — Manrope 400, 8pt, Slate Grey (#5F6B77).

**Bottom block, full width** (left-aligned, 4mm from bottom safe edge):
- `apartamentomarazul.com` — Manrope 600, 9pt, Atlantic Blue (#1E5B73).
- `+351 936 083 766` — Manrope 500, 9pt, Deep Navy.
- `stefy@apartamentomarazul.com` — Manrope 500, 9pt, Deep Navy. _(Brand alias live 2026-05-16 — receives and sends through Stefy's Gmail.)_
- `@apartamento_marazul` — Manrope 500, 9pt, Deep Navy.

Line spacing 1.4. Fixed leading so the four lines stack visibly even at 9pt.

---

## Brand tokens (locked, no decisions)

| Token | Value | Usage |
|---|---|---|
| Atlantic Blue | `#1E5B73` (CMYK approx. 78/40/35/25) | Side A background, QR, primary URL |
| Warm White | `#FAFAF7` | Side B background, logo on Side A |
| Deep Navy | `#1d2630` (CMYK approx. 75/55/45/55) | Heavy body text on Side B |
| Slate Grey | `#5F6B77` | Secondary body text, footer line |
| Display font | Spectral 700 | Stefania's name |
| Body font | Manrope 400/500/600/700 | Everything else |

For print accuracy, ask the printer for a **Pantone-equivalent** match on Atlantic Blue:
- Pantone 7700 C is the closest stock match
- Or a custom CMYK build at 78/40/35/25 (the printer should colour-match against a calibrated proof)

---

## Production

### File deliverables

We'll deliver:

- **Print-ready PDF** at 300 DPI, CMYK, with crop marks and bleed
- All fonts outlined or embedded
- One file per side, or a single 2-page PDF (matches printer preference)
- A separate PNG mock-up for visual approval before the printer runs the job

### Vendor

**Frente e Verso (Lagos)** — locked by Stefy 2026-05-15. Local pickup, one consolidated vendor across all four print pieces (table flip, fridge magnet, folder, business card). Brief them with the print-ready PDF + a calibrated colour proof reference for Atlantic Blue.

### Quantity

**100 cards.** Locked by Stefy 2026-05-15.

### Proof check before approval

Before the final print run, the printer sends a digital proof (PDF or screen) and ideally a physical proof (one printed card). Check on the proof:

- [ ] Logo isn't cropped or distorted at 22 mm width
- [ ] QR code scans cleanly (test with iPhone + Android camera)
- [ ] Atlantic Blue prints close to screen — print is darker; if proof is muddy or purple, ask for a colour adjustment
- [ ] No blurry text — fonts are outlined/embedded
- [ ] Bleed isn't visible after trim (no Atlantic Blue showing at the trim edges of the warm-white side)
- [ ] Phone number reads `+351 936 083 766` (with the +)

---

## Locked decisions (2026-05-15)

| # | Decision | Locked value |
|---|---|---|
| 1 | Variants | **One WOM card only** (no trade variant) |
| 2 | Quantity | **100** |
| 3 | Side A | Logo + "Lagos · Algarve" — confirmed |
| 4 | Side B contact lines | Name, phone, email (`stefy@apartamentomarazul.com`), Instagram, URL — confirmed |
| 5 | Print vendor | **Frente e Verso** (Lagos) |

---

## Cross-references

- `questions-for-stefania.md` items #9 (this brief), #16 (brand email), #18 (legal name + AL + NIF), #14 (DNS — confirms `apartamentomarazul.com` resolves before we print URLs).
- `nap-audit.md` — phone formatting + AL number consistency.
- `CLAUDE.md` — print materials list (Sprint 5 scope).
- Logo source files at `project/website/assets/logo/` (Primary, monochrome, reversed PNG + SVG).
