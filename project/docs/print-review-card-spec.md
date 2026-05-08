# A6 review card — print spec

**Last updated:** 2026-05-08
**Status:** drafted, awaiting Stefania's review (item #24 in `questions-for-stefania.md`).
**Goal:** sit on the kitchen counter during the stay; the moment a guest is mid-coffee enjoying the apartment is the moment they're most likely to leave a five-star review. Quick scan, single action.

---

## Purpose

Reviews drive direct-booking conversion (social proof) and Google Business Profile rank. We don't want to ask guests verbally — too pushy. Leaving a small, well-designed card that's easy to ignore but easier to scan reaches the willing without pressuring the rest.

---

## Format

| Spec | Value |
|---|---|
| Size | **A6 — 105 × 148 mm** (postcard-shaped, portrait) |
| Bleed | 3 mm each side |
| Sides | **One-sided** (back is plain warm-white). Keeps the cost down and the message clear. |
| Corners | Square |
| Paper | **350 gsm matte coated** |
| Finish | Matte both sides |
| Colour | CMYK |

---

## The single side

```
┌──────────────────────────────────┐
│                                  │
│      ENJOYED YOUR STAY?          │
│                                  │
│      Two minutes, Google,        │
│      and a thank-you from us.    │
│                                  │
│         ┌──────────┐             │
│         │          │             │
│         │   QR     │             │
│         │          │             │
│         └──────────┘             │
│                                  │
│         scan to review           │
│                                  │
│      apartamentomarazul.com      │
│                                  │
└──────────────────────────────────┘
```

**Background:** Warm White (#FAFAF7) — the body palette, lets the QR pop.

**Top label** — "ENJOYED YOUR STAY?" — Manrope 700, 11pt, all-caps, letter-spacing 0.08em, Atlantic Blue. Centred, ~18 mm from top.

**Subhead** — Spectral 700, 22pt, Deep Navy, two lines, centred, ~32 mm from top. Tight leading (line-height 1.15).

**QR code** — 50 × 50 mm, centred horizontally, ~70 mm from top. Atlantic Blue on warm-white.
Targets: the GBP "leave a review" URL (get it from Cloudflare → Google Business Profile dashboard → **Read reviews** → **Get more reviews** → **Share review form** → copy URL).

**Caption under QR** — "scan to review" — Manrope 500, 9pt, Slate Grey, centred, ~6 mm under QR.

**Footer** — `apartamentomarazul.com` — Manrope 600, 9pt, Atlantic Blue, centred, ~14 mm from bottom.

That's everything. Eight lines of meaning total.

---

## Per-locale variants

A6 is small and physical — we don't want a multilingual stack of words on a single card. Two reasonable approaches:

1. **Single English card** — works for most of the international audience. Cheapest. Recommendation if budget is a factor.
2. **Two language variants** — English + Portuguese. Stack 50/50 in the kitchen drawer; pick whichever matches the guest. Slight cost bump.

If two variants, the Portuguese version reads:
- Top label: `GOSTOU DA SUA ESTADIA?`
- Subhead: `Dois minutos, Google, e o nosso obrigado.`
- Caption: `digitalize para avaliar`
- Footer: unchanged

If we add German / Italian / French, we go 5+ variants and the kitchen drawer becomes a problem. Skip beyond PT.

---

## Brand tokens (same as business card)

Atlantic Blue `#1E5B73`, Warm White `#FAFAF7`, Deep Navy `#1d2630`, Slate Grey `#5F6B77`. Spectral for the subhead, Manrope for everything else.

---

## Production

| Vendor | Cost (50 cards) | Lead time | Notes |
|---|---|---|---|
| MOO | ~€45 | 5-7 days | Best paper feel; the QR scan reliability is best on MOO's matte. |
| Vistaprint | ~€18 | 3-5 days | Good enough; QR reliability slightly lower on cheaper matte but acceptable. |
| Local Lagos shop | ~€20-30 | 2 days | Pick-up convenience. |

**Quantity:** 50 cards lasts ~6 months at typical guest turnover (52 stays/year × 1 card per stay = 52 needed). Reorder when down to 10. If running EN + PT variants, 30 EN + 20 PT for the first batch.

**Critical proof check** — the QR code MUST scan cleanly with both iPhone and Android cameras from 15 cm away in normal indoor light. Ask the printer for a physical proof and test it before approving the bulk run. If it doesn't scan, the whole card is wasted.

---

## Five decisions for Stefania

| # | Question | Recommendation |
|---|---|---|
| 1 | English only or EN + PT? | EN only for the first batch. Add PT later if the card sees real use. |
| 2 | Quantity? | 50 |
| 3 | Confirm the copy ("Enjoyed your stay? Two minutes, Google, and a thank-you from us.")? | Yes — calm, specific, not pushy. |
| 4 | QR target — direct GBP review URL or a custom redirect? | Direct GBP review URL. Keeps it fast; no broken-redirect risk later. |
| 5 | Print vendor? | MOO for the first batch (paper quality matters for a kitchen-display object); switch to Vistaprint if reordering doesn't justify the upcharge. |

---

## Cross-references

- `questions-for-stefania.md` items #6 (existing reviews to backfill), #14 (DNS cutover — affects the footer URL line if we cite anything beyond `apartamentomarazul.com`), #24 (this brief).
- `gbp-playbook.md` → Action #13 (Drive review collection) explains how this card slots into the broader review strategy.
- `print-business-card-spec.md` — same vendor / paper / brand spec.
