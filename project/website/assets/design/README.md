# Apartamento Mar Azul — Design System

Single-property short-stay rental in Lagos, Algarve. This is the design system for its multilingual marketing website (English default, plus Portuguese, German, Dutch, French) with an embedded Lodgify booking engine.

The brand goal is to convert comparison-shoppers arriving from Booking.com / Airbnb into direct bookings. Zero of 27 historical bookings have been direct, so the system has to feel calmer, more specific, and more trustworthy than the OTA listing the visitor just left.

## Sources

- **Codebase** (read-only, mounted): `site/` — Astro v6 static site, Cloudflare Pages, Tailwind v4. Brand tokens already declared in `site/src/styles/global.css`. Layout shell at `site/src/layouts/BaseLayout.astro`.
- **Photography**: 12 interior + exterior shots and 1 video thumbnail, supplied as `uploads/marazul-01.jpg` … `marazul-12.jpg`. All copied into `assets/`.
- **Logos**: `uploads/logo-primary.svg`, `logo-monocrome.svg`, `logo-reversed.svg`. Copied into `assets/` (renamed `logo-monochrome.svg` for consistent spelling).
- **Brand brief**: full content + motion + accessibility rules supplied with the project setup.

## Index

```
/
├── README.md                 — this file
├── SKILL.md                  — agent skill manifest
├── colors_and_type.css       — design tokens (CSS vars + base type)
├── assets/                   — logos + 12 photographs + video thumb
├── preview/                  — Design System tab cards (one per concept)
└── ui_kits/
    └── site/                 — marketing-site UI kit (index.html + JSX)
```

## Brand at a glance

- **Voice**: calm, coastal, quietly premium, specific, local. Like a friend recommending a place they actually know.
- **Colors**: Atlantic Blue, Seafoam, Sun Sand, Warm White, Deep Navy, Slate Grey. Maximum 2 non-neutral hues per viewport.
- **Type**: Spectral (display, ≥24 px only) + Manrope (body / UI, 16 px floor).
- **Theme**: light only. Mobile-first (375 px primary). Photography leads composition.
- **Banned words**: ocean view, sea view, beachfront, luxurious, ultimate, dream, escape, paradise, oasis, hidden gem, magical. No em dashes anywhere.

## Fonts

Both fonts are Google Fonts (SIL OFL, free for commercial use). They are loaded via `@import` at the top of `colors_and_type.css` and via `<link>` in the production layout. **No font files are bundled in `fonts/`** — the Google CDN is the source of truth. If the user wants self-hosted weights for offline / privacy reasons, flag that and we'll add them.

- **Spectral** — weights 400, 700, 400 italic. Display only (24 px and above).
- **Manrope** — weights 400, 500, 600. Body, UI, eyebrows, microcopy.

## Content fundamentals

The voice is the brand's strongest differentiator. It is the thing the OTA listing cannot do.

### Tone and casing

- **Sentence case** for every heading, button, link, and label. Never ALL CAPS, anywhere. (No `text-transform: uppercase`.)
- **Calm, specific, local.** Names landmarks, streets, and the host. Avoids hospitality clichés.
- **Second person and first-person plural.** "You" the guest, "we" the hosts. Never "guests" / "they" / "the property".
- **No em dashes.** Use full stops, commas, or rewrite the sentence. (This rule extends into UI copy as well.)
- **No emoji.** The brand has none. Use real iconography or no indicator.
- **No exclamation marks** for emphasis. The voice is quietly confident, not enthusiastic.

### Mandatory framings

- Location: always *"walking distance from the centre of Lagos and the beaches."* Never "5 min by car" or "near the beach."
- WhatsApp CTA always paired with microcopy *"we may answer within 12 hours."*
- Direct-booking value: framed as **perks** (welcome bottle of vinho verde, late checkout when available, free parking guaranteed, direct WhatsApp line with host), never as a price discount. Headline phrasing: *"Best rate available, every time."*
- Sea outlook: described as a *glimpse* in passing prose. Never a headline feature.

### Banned vocabulary

> ocean view · sea view · beachfront · luxurious · ultimate · dream · escape · paradise · oasis · hidden gem · magical · home away from home · your dream Algarve …

Plus the urgency-theatre family ("Only 1 left", "Book in the next 10 minutes"), and any "pet-friendly" claim — the apartment is not pet-friendly and we state this openly.

### Specimen copy (good vs. wrong)

| ✅ on-brand | ❌ off-brand |
|---|---|
| A quiet apartment in Lagos for couples and small families. | Your dream Algarve escape awaits. |
| Walking distance from the centre and the beaches. Sleeps 2 to 4. | Just a 5 min drive to the beach! |
| Booking direct gets you a welcome bottle of vinho verde and free parking, every time. | Save 15% when you book direct! |
| Hosted by Inês. We may answer within 12 hours. | Your hosts are standing by 24/7! |
| The terrace catches a glimpse of the Atlantic over the rooftops. | Stunning ocean views from your private terrace. |

## Visual foundations

### Colors

Six tokens, two layers of hierarchy:

| Token | Hex | Role |
|---|---|---|
| Atlantic Blue | `#1E5B73` | primary — CTAs, links, brand mark, the only saturated voice |
| Seafoam | `#CFE3DE` | section tints, hover surfaces |
| Sun Sand | `#D8B98A` | accent, used sparingly (a single chip, an underline) |
| Warm White | `#F8F6F1` | page background, card surface |
| Deep Navy | `#1D2630` | body text, headings |
| Slate Grey | `#6F7A86` | muted text, captions, secondary microcopy |

**Neutrals tint subtly toward Atlantic Blue.** Pure greys are forbidden. The provided tokens already lean cool; derived shades use `color-mix(in oklch, ...)` against Atlantic Blue rather than black.

**Maximum 2 non-neutral hues per viewport.** Atlantic Blue is the default first hue. Sun Sand may join only when Atlantic isn't already on screen at high saturation, or when it appears as an outline / 1px detail.

**No gradients on buttons.** No gradient text anywhere. Solid colors only.

### Backgrounds

- Pages live on Warm White. Sections may tint to Seafoam for separation.
- One Atlantic Blue full-bleed band per page — the final CTA. Reverse-color logo there.
- **Photography is the texture.** No repeating patterns, no decorative SVG meshes, no noise overlays. The apartment photos provide all the warmth.

### Typography

- **Spectral** for display. Two weights: regular (400) for editorial body-italic moments, bold (700) for headings. Italic is reserved for in-prose emphasis or pull-quotes.
- **Manrope** for everything else. 400 for body, 500 for UI labels and links, 600 for buttons and eyebrows.
- 16 px body floor. 18 px lede. 68 ch line cap on prose.
- Sentence case headings. Slight negative tracking on display (`-0.01em`). Eyebrows are small (13 px) Manrope 600 with `0.06em` tracking — *not* uppercase.
- Headings get `text-wrap: balance`; body gets `text-wrap: pretty`.

### Spacing

A 4 px base scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128.

Editorial layouts breathe. Section padding is `--s-20` (80 px) on desktop, `--s-12` (48 px) on mobile. Card internal padding is `--s-6` (24 px) standard.

### Radii

`--r-sm: 4` · `--r-md: 8` · `--r-lg: 14` · `--r-xl: 20` · `--r-pill: 9999`.

Cards and inputs use `--r-md` (8 px). Buttons use `--r-md` too — pills feel too marketing-y for this brand. Photo cards in the gallery may use `--r-lg` (14 px) when the photo is in a card; full-bleed photos stay sharp-cornered.

### Shadows

Three steps, all anchored on `rgba(29,38,48, …)`. Subtle, never glow.

```
--shadow-sm: 0 1px 3px rgba(29,38,48,0.08);   — hairline, sticky bar
--shadow-md: 0 4px 14px rgba(29,38,48,0.10);  — cards
--shadow-lg: 0 12px 32px rgba(29,38,48,0.13); — lightbox, dropdowns
```

Never combine shadow with thick borders. Either a hairline (`var(--border)`) or a shadow, not both.

### Borders

Hairline borders `1px solid var(--border)` on Warm White surfaces.

**Banned**: colored 3 px / 4 px / 5 px `border-left` accents on cards, alerts, callouts, list items. Ever. Not negotiable. The system uses tinted full backgrounds (`var(--bg-tint)`) or a full hairline border, not a side stripe.

### Hover, press, focus

- **Hover**: links underline at full opacity (the underline is dim by default). Buttons darken Atlantic Blue by ~6 % via `color-mix`. Cards lift to `--shadow-md`. Never opacity-only hover.
- **Press / active**: button background darkens further (~12 %). No shrink / scale transforms. No haptic-feeling translateY.
- **Focus**: `2px solid var(--atlantic-blue)` outline with 2 px offset on every interactive element. Never `outline: none`.

### Motion

The brand voice is the lens here: *Jakub Krehel, Emil Kowalski.* Subtle, production-polish, never playful.

- **Hero**: Ken Burns micro-pan, 18 s linear, infinite. Reduced motion: static.
- **Section reveal**: opacity 0→1, translateY 12→0, blur(4)→0, 450 ms spring no-bounce. IntersectionObserver at 15 %, fires once.
- **Lightbox open / close**: opacity + scale(0.96 → 1), 220 ms in / 180 ms out.
- **Sticky CTA bar**: translateY(100% → 0), 280 ms `cubic-bezier(0.32, 0.72, 0, 1)`. Threshold-triggered, never scroll-progress driven.
- **FAQ accordion**: `grid-template-rows: 0fr → 1fr`, 220 ms open / 180 ms close. Chevron rotates 180°.
- **Language dropdown**: opacity + translateY(-4 → 0), 160 ms in / 120 ms out.

**Only animate `transform`, `opacity`, `filter`, `backdrop-filter`.** Never `width / height / top / left / padding / margin`. Never bounce or elastic. Never staggered cascade reveals. Always honor `prefers-reduced-motion: reduce`.

### Layout rules

- Mobile-first. 375 px column primary. Desktop column 1200 px content / 1440 px wide hero.
- Asymmetric, left-aligned for editorial feel. Banned: centered-everything layouts.
- Photo gallery is an editorial mosaic with varied tile sizes. Banned: identical card grids of icon + heading + text.
- Sticky elements: top bar (logo + language switcher only — no nav menu), bottom "Book direct" CTA bar that slides in past the hero.

### Imagery treatment

The photos are warm, sunlit, slightly cool-shadowed Algarve interiors. They are the system's atmosphere. Treatment:

- Native color, no filters, no duotone, no grayscale.
- Crops favor architecture and light. Captions name the room or area.
- Never decorative crops behind text without a Warm White / Atlantic Blue scrim that protects WCAG contrast.

### Use of transparency / blur

Sparingly. Only the lightbox backdrop (`rgba(29,38,48,0.78)`) and the sticky top bar at scroll (Warm White at 92 % with a 12 px backdrop-filter blur). No glassmorphism cards.

## Iconography

The brand has no proprietary icon set. The codebase ships only a favicon. Icon usage on this property is intentionally low — facts grids name things in plain words ("Sleeps 2–4", "A/C", "Wi-Fi") with at most a single small line glyph beside each.

**Rule**: icons are line icons, 1.5 px stroke, rounded join, in `currentColor` (which is Deep Navy on light, Warm White on Atlantic Blue). They never carry their own color.

**Source**: [Lucide](https://lucide.dev) via CDN — `https://unpkg.com/lucide-static@latest/icons/<name>.svg` or the inline `<i data-lucide="…">` runtime. Lucide's stroke weight and rounded joins match the calm, editorial register. This is a **substitution**, flagged: there is no codebase icon set to copy. If the user wants a different family (Phosphor "Light", custom set), say so and we'll swap.

**No emoji** anywhere in the product. **No unicode dingbats** as decoration. Star ratings use the Lucide `star` glyph filled with Sun Sand at small sizes.

The single brand mark exists in three forms in `assets/`:
- `logo-primary.svg` — Atlantic Blue wordmark + the wave-and-sun icon. Use on Warm White.
- `logo-monochrome.svg` — Deep Navy version. Use when Atlantic Blue would compete with adjacent imagery.
- `logo-reversed.svg` — Warm White on dark. Use on Atlantic Blue and over photography with scrim.

## See also

- `colors_and_type.css` — copy this into any new prototype.
- `preview/` — every card the Design System tab renders.
- `ui_kits/site/index.html` — open this to see the homepage assembled from kit components.
- `SKILL.md` — agent skill manifest for downstream use.
