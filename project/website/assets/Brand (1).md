# Apartamento Mar Azul — Brand System & AI Prompts

**Last updated:** 2026-05-07
**Version:** 2.0 (post-Sprint-2 reconciliation)

---

## 1. Brand Design System

> Insert this Design System block into any AI session before starting design or copy work.

---

### 1.1 Brand Identity

- **Property:** Apartamento Mar Azul
- **Address:** Rua Dom Luís da Silveira lote V 44 B, 8600-575 Lagos, Algarve, Portugal
- **Open since:** June 2025
- **Type:** Independent short-stay apartment (2–4 guests), family-friendly
- **URL:** [www.apartamentomarazul.com](https://www.apartamentomarazul.com)
- **Owner / Host:** Stefania (informal: Stefy — used on the WhatsApp CTA button only)
- **Languages spoken by host:** Portuguese, Italian, English, Spanish

**Brand idea:** A calm, sunlit coastal apartment in Lagos. Not a hotel. Not a chain. A real place, hosted by a real person, with a quietly premium feel.

**Brand personality:** relaxed · trustworthy · coastal · quietly premium · local · welcoming

**Brand voice:** Specific, calm, place-driven. Never corporate. Never generic.

**Tone examples:**
- ✅ "A quiet apartment in Lagos for couples and small families."
- ✅ "Walking distance from the centre and the beaches. Sleeps 2 to 4."
- ✅ "Best rate available, every time."
- ❌ "Unlock the ultimate coastal experience."
- ❌ "Your dream Algarve escape."

**What this property is NOT:**
- ❌ Not pet-friendly. Remove from all messaging.
- ❌ No panoramic sea view. There is a glimpse of the sea from the terrace; mention casually if at all, never as a headline feature.
- ❌ Never use em dashes on any public-facing copy. Use full stops or rewrite.
- ❌ Never use the words: ocean view, sea view, beachfront, luxurious, ultimate, dream, escape, paradise, oasis, hidden gem, magical.

**Location framing (Sprint 1, owner-confirmed):**
- ✅ "Walking distance from the centre of Lagos and the beaches."
- ❌ Avoid stating exact minutes-by-car or minutes-on-foot for individual beaches in marketing copy.

---

### 1.2 Colour Palette

| Role | Name | Hex | Usage |
|---|---|---|---|
| Primary | Atlantic Blue | `#1E5B73` | CTAs, headings, logo, key highlights, brand accents |
| Secondary | Seafoam | `#CFE3DE` | Section tints, hover states, calendar selected range |
| Accent | Sun Sand | `#D8B98A` | Small highlights, dividers, icon accents, star ratings |
| Background | Warm White | `#F8F6F1` | Page background, cards |
| Text | Deep Navy | `#1D2630` | Body copy, headings |
| Muted | Slate Grey | `#5F6B77` | Secondary text, captions, hints. WCAG AA compliant on Warm White (5.07:1). |
| Validation | Error Red | `#B0392A` | Inline form validation only. Never decorative. |
| Inverse | White | `#FFFFFF` | Text on dark/blue backgrounds |

**Colour rules:**
- Keep backgrounds mostly Warm White. Let photography dominate.
- Atlantic Blue is for CTAs, links, and the logo.
- Sun Sand used sparingly (small highlights, dividers, icon accents).
- Error Red ONLY for inline form validation. Never decorative.
- No gradients on buttons. No neon blues. No purple.
- Maximum 2 non-neutral hues per screen viewport.
- Tint neutrals subtly toward Atlantic Blue (chroma 0.005–0.01).

**CSS variables:**
```css
:root {
  --color-atlantic-blue: #1E5B73;
  --color-seafoam:       #CFE3DE;
  --color-sun-sand:      #D8B98A;
  --color-warm-white:    #F8F6F1;
  --color-deep-navy:     #1D2630;
  --color-slate-grey:    #5F6B77;
  --color-error-red:     #B0392A;
}
```

---

### 1.3 Typography

| Role | Font | Weights | Usage |
|---|---|---|---|
| Display / Headings | **Spectral** | 400, 700 + 400 italic | Hero titles, section headings (24px+) |
| Body / UI | **Manrope** | 400, 500, 600 | Body copy, buttons, labels, navigation |

**Why these two (decided 2026-05-07):**
The original Brand.md specified Playfair Display + Inter. Both are SIL OFL but flagged by the `impeccable` skill as AI-default reflex picks (every AI-generated coastal rental uses them). Spectral (Production Type) and Manrope retain editorial / quietly-premium feel without the monoculture risk. Both are **SIL OFL via Google Fonts, fully free for commercial use**, no licensing exposure.

**Font loading (Google Fonts):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,400;0,700;1,400&family=Manrope:wght@400;500;600&display=swap" rel="stylesheet">
```

**CSS variables:**
```css
:root {
  --font-display: 'Spectral', Georgia, 'Times New Roman', serif;
  --font-body:    'Manrope', system-ui, -apple-system, 'Helvetica Neue', sans-serif;
}
```

**Type scale:**

| Level | Font | Size | Weight |
|---|---|---|---|
| Hero | Spectral | clamp(2.5rem, 5vw, 4.5rem) | 700 |
| H2 Section | Spectral | clamp(1.8rem, 3vw, 2.5rem) | 700 |
| H3 Subhead | Spectral | 1.5rem (24px floor for display) | 700 |
| Body | Manrope | 1rem (16px) | 400 |
| Caption / Label | Manrope | 0.875rem (14px) | 500 |
| Button | Manrope | 0.9375rem (15px) | 600 |
| Eyebrow | Manrope | 0.8125rem (13px) | 600, slightly tracked, sentence case |

**Rules:**
- Spectral only at 24px and above.
- Body text minimum 16px. Never below.
- Sentence case everywhere. No ALL CAPS headings.
- Line length for body: max 68 characters.

---

### 1.4 Logo Concept

- **Wordmark:** `Apartamento Mar Azul`
- **Icon:** Minimal single-line wave or horizon mark, thin geometric stroke.

**Logo construction:**
- Icon sits to the left of the wordmark.
- Icon: one continuous line forming a gentle wave or sun-over-horizon.
- Wordmark: "Apartamento" in Manrope 500, "Mar Azul" in Spectral 700.
- Lock-up: horizontal preferred; stacked version for social/favicon.

**Colour versions (provided as SVG + PNG):**

| Version | Icon | Text |
|---|---|---|
| Primary | Atlantic Blue `#1E5B73` | Atlantic Blue `#1E5B73` |
| Reversed | White `#FFFFFF` | White `#FFFFFF` |
| Monochrome | Deep Navy `#1D2630` | Deep Navy `#1D2630` |

Filenames at `project/website/assets/logo/`:
- `logo-primary.svg` / `.png`
- `logo-reversed.svg` / `.png`
- `logo-monocrome.svg` / `.png` (note typo preserved in filename)

**Rules:**
- No drop shadows on the logo.
- No coloured backgrounds on the icon shape.
- Minimum width: 120px.
- Clear space: equal to the height of the "M" in "Mar" on all sides.

---

### 1.5 Spacing & Radius

```css
:root {
  --space-1: 0.25rem;   /*  4px */
  --space-2: 0.5rem;    /*  8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */

  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   14px;
  --radius-full: 9999px;

  --shadow-sm: 0 1px 3px rgba(29, 38, 48, 0.08);
  --shadow-md: 0 4px 14px rgba(29, 38, 48, 0.10);
  --shadow-lg: 0 12px 32px rgba(29, 38, 48, 0.13);
}
```

---

### 1.6 Imagery & Photography Direction

- **Hero:** Full-width photograph of the terrace or Lagos coastline at golden hour.
- **Interior shots:** Bright, natural light, minimal staging, wide-angle showing space and light.
- **Location:** Lagos old town, Marina de Lagos, Praia da Batata, Praia Dona Ana, Algarve cliffs.
- **Mood:** Calm, warm, sunlit, spacious. Never staged "stock photo" families.
- **Format:** Landscape 16:9 for hero; square 1:1 for social cards; portrait 4:5 for Instagram feed.
- **Colour treatment:** Natural tones, slightly warm-shifted. No heavy filters or saturation.
- **Photo priority:** Photos in `project/website/assets/images/firts choises/` (sic — typo preserved): `marazul-01.jpg` is the highest priority, descending with the number, last numbered file is the toilet (use sparingly). Backup pool in `second choises/`.
- **Owner photo:** `owner_picture.jpg` — used in homepage trust strip + About section. Replace at the file path to swap.
- **Do not use:** Images implying sea view as a headline feature, pets, or beachfront access.

---

### 1.7 Social Post Template Rules

- **Grid:** 1080×1080px (Instagram) or 1080×1920px (Stories/Reels).
- **Layout zones:** Image occupies 70% of frame; text overlay sits in bottom 30% on a semi-transparent Deep Navy bar (`rgba(29,38,48,0.72)`).
- **Headline font:** Spectral 700, white, max 2 lines.
- **Caption font:** Manrope 500, white or Seafoam, 1 line.
- **Logo:** Always bottom-right corner, white reversed version, minimum 80px wide.
- **Hashtag set:** #Lagos #Algarve #ApartamentoMarAzul #PortugalTravel #CoastalStay #VisitAlgarve #LagosPortugal #BeachApartment
- **Call to action:** Always end posts with "Link in bio to book direct 🌊"
- **No em dashes** in any public-facing copy.

---

## 2. Claude Design Prompt (historical, reference only)

> This prompt was used in Sprint 1 to seed Claude.ai/design. The site has now been built (Sprint 2). Kept here as reference if a new Claude.ai/design session is started for new collateral.

You are designing for Apartamento Mar Azul, a single independent short-stay apartment in Lagos, Algarve, Portugal (www.apartamentomarazul.com). The property has a private terrace with a sea glimpse, sleeps 2-4 guests, is family-friendly (crib + high chair available), and is within walking distance from the centre of Lagos and the beaches.

**IMPORTANT CONSTRAINTS:**
- Do NOT reference "sea view," "ocean view," "beachfront," "luxurious," "ultimate," "dream," "escape," "paradise" as headline features
- Do NOT reference pet-friendly
- Frame location as "walking distance from the centre and the beaches." Avoid specific minutes-by-car.
- No em dashes in any public-facing copy

**BRAND SYSTEM (use exactly):**
- Primary colour: Atlantic Blue `#1E5B73`
- Secondary: Seafoam `#CFE3DE`
- Accent: Sun Sand `#D8B98A`
- Background: Warm White `#F8F6F1`
- Text: Deep Navy `#1D2630`
- Muted: Slate Grey `#5F6B77`
- Validation: Error Red `#B0392A` (form errors only)
- Display font: Spectral (400, 700) — headings 24px+ only
- Body font: Manrope (400, 500, 600) — all UI and body copy
- Tone: calm, coastal, quietly premium, specific, local, never generic

---

## 3. Marketing Strategy Prompt

> Paste this prompt into Claude Code (or Claude.ai) for the strategy document. Updated 2026-05-07.

You are a senior digital strategist helping a single independent short-stay apartment called Apartamento Mar Azul (Lagos, Algarve, Portugal) build its direct-booking presence and reduce dependency on OTAs like Airbnb and Booking.com.

**PROPERTY FACTS (use only these, do not invent):**
- Address: Rua Dom Luís da Silveira lote V 44 B, 8600-575 Lagos, Portugal
- Open since: June 2025
- Sleeps: 2-4 guests
- Amenities: private terrace, A/C in the bedroom, free parking nearby, high-speed Wi-Fi, crib + high chair available, linens provided
- Location: walking distance from the centre of Lagos and the beaches
- Cancellation policy: payment in full at booking. Free up to 7 days before arrival. Within 7 days, 50% non-refundable.
- Website: www.apartamentomarazul.com
- Booking: Lodgify Ultimate plan, Channel Manager active for Airbnb + Booking.com
- Social: Instagram + Facebook
- Owner / host: Stefania (informal: Stefy)
- Languages spoken: Portuguese, Italian, English, Spanish

**DIRECT BOOKING DATA (Sprint 0 baseline):**
- 27 historical bookings: Booking.com 16 (59%), Airbnb 10 (37%), Vrbo 1 (4%), Direct 0 (0%)
- The +40% direct-booking goal is therefore growth from zero, not optimization.

**TARGET AUDIENCES:**
- **Primary A (Couples):** travelling as two, looking for a calm, well-equipped Lagos base. Value the terrace, easy parking, good Wi-Fi, and proximity to beaches.
- **Primary B (Small Families):** 2-4 guests, at least one young child. Value the crib, high chair, linens included, easy walking access to beaches, and nearby parking.

**MESSAGING CONSTRAINTS:**
- Lead with: Private terrace + practical comfort (A/C, Wi-Fi, linens, parking)
- Support with: Walking distance from the centre and the beaches
- Reinforce with: Family-ready essentials (crib, high chair, sleeps 4)
- Mention lightly: Sea glimpse from the terrace — a nice bonus, never a promise
- Direct booking incentives = perks, not price discounts (Booking.com rate parity rules)
- Never mention: sea view, ocean view, beachfront, pet-friendly
- Never use em dashes in public-facing copy
- WhatsApp CTAs always include "we may answer within 12 hours"

**OBJECTIVE:** Increase direct bookings (currently 0) to 40% of total bookings within 12 months. Build a repeatable content + advertising engine. Never undercut OTA prices publicly (rate parity); compete on perks instead.

Produce a structured strategy document with these sections — be specific, actionable, concise. No filler. No generic advice:

1. **Website strategy** — IA, conversion elements, SEO target keywords (10 long-tail per language), technical must-haves
2. **Content & social strategy** — 3 content pillars, posting frequency, 30-day calendar, hashtag strategy
3. **Paid advertising** — Google Ads + Meta Ads + remarketing + OTA-as-discovery strategy
4. **Email & guest retention** — pre-arrival sequence, post-stay follow-up, repeat-guest programme
5. **KPIs & 12-month roadmap** — 5 KPIs with targets + phased roadmap (months 1-3 / 4-6 / 7-12)

Format as clean markdown. Use tables where helpful. Be specific to this property.

---

## 4. Design Tokens (canonical)

```css
/* APARTAMENTO MAR AZUL — Design Tokens v2.0 (2026-05-07) */
:root {
  /* Colours */
  --color-atlantic-blue: #1E5B73;   /* primary — CTAs, logo, links */
  --color-seafoam:       #CFE3DE;   /* secondary — section tints, hover */
  --color-sun-sand:      #D8B98A;   /* accent — sparingly */
  --color-warm-white:    #F8F6F1;   /* page background */
  --color-deep-navy:     #1D2630;   /* body text, headings */
  --color-slate-grey:    #5F6B77;   /* muted text, WCAG AA */
  --color-error-red:     #B0392A;   /* form validation only */
  --color-white:         #FFFFFF;

  /* Typography */
  --font-display: 'Spectral', Georgia, 'Times New Roman', serif;
  --font-body:    'Manrope', system-ui, -apple-system, 'Helvetica Neue', sans-serif;

  /* Type scale */
  --text-hero: clamp(2.5rem, 5vw, 4.5rem);
  --text-h2:   clamp(1.8rem, 3vw, 2.5rem);
  --text-h3:   1.5rem;
  --text-base: 1rem;
  --text-sm:   0.875rem;
  --text-xs:   0.8125rem;

  /* Spacing (4px base) */
  --space-1:  0.25rem;  --space-2: 0.5rem;  --space-3: 0.75rem;
  --space-4:  1rem;     --space-6: 1.5rem;  --space-8: 2rem;
  --space-12: 3rem;     --space-16: 4rem;   --space-20: 5rem;

  /* Radius */
  --radius-sm: 4px;  --radius-md: 8px;  --radius-lg: 14px;  --radius-full: 9999px;

  /* Shadow */
  --shadow-sm: 0 1px 3px rgba(29, 38, 48, 0.08);
  --shadow-md: 0 4px 14px rgba(29, 38, 48, 0.10);
  --shadow-lg: 0 12px 32px rgba(29, 38, 48, 0.13);

  /* Motion */
  --motion-fast: 160ms;
  --motion-base: 220ms;
  --motion-slow: 450ms;
  --ease-standard: cubic-bezier(0.32, 0.72, 0, 1);
  --ease-out:      cubic-bezier(0.22, 1, 0.36, 1);
}
```

---

## 5. Project Brief — paste at the start of any AI session

> This section orients the model on what this project is, who it's for, and what rules always apply.

### Property Facts (Confirmed)

- **Name:** Apartamento Mar Azul
- **Address:** Rua Dom Luís da Silveira lote V 44 B, 8600-575 Lagos, Portugal
- **Website:** apartamentomarazul.com
- **Open since:** June 2025
- **Owner / host:** Stefania (informal: Stefy)
- **Languages spoken by host:** Portuguese, Italian, English, Spanish
- **Sleeps:** 2-4 guests
- **Bedrooms:** 1 plus sofa bed
- **Amenities:** A/C in the bedroom, high-speed Wi-Fi (200 Mbps), free parking nearby, linens provided, crib + high chair available, private terrace, full kitchen
- **Location:** walking distance from the centre of Lagos and the beaches
- **Booking:** Lodgify Ultimate plan, Channel Manager active for Airbnb + Booking.com
- **Cancellation policy:** Payment in full at booking. Free cancellation up to 7 days before arrival. Within 7 days of arrival, 50% of the booking is non-refundable.
- **Social:** Instagram + Facebook

### Site languages

The website ships in 7 languages: English (default), Portuguese, Spanish, Italian, German, Dutch, French.

### What This Property Is NOT

- ❌ Not pet-friendly. Remove from all messaging.
- ❌ No panoramic sea view. There is a glimpse of the sea from the terrace; mention casually if at all, never as a headline feature.
- ❌ Avoid stating exact minutes-by-car or minutes-on-foot for individual beaches in marketing copy.
- ❌ Never use em dashes on any public-facing copy.

### Target Audiences

**Primary A — Couples (25-50)**
Travelling as two, looking for a calm, well-equipped Lagos base. Value the terrace, easy parking, good Wi-Fi, and proximity to beaches.

**Primary B — Small Families (2-4 guests, at least one young child)**
Value the crib, high chair, linens included, easy walking access to beaches, and nearby parking.

### Core Positioning Statement

A quiet apartment in Lagos for couples and small families. Walking distance from the centre and the beaches. Sleeps 2 to 4. Private terrace, A/C, free parking, free Wi-Fi.

### Messaging Hierarchy

1. **Lead with:** Walking distance from the centre and the beaches. Sleeps 2 to 4.
2. **Support with:** Practical comfort (private terrace, A/C, Wi-Fi, free parking, linens included)
3. **Reinforce with:** Family-ready essentials (crib, high chair, sleeps 4)
4. **Mention lightly:** Sea glimpse from the terrace. A nice bonus, never a promise.

### Direct booking incentives (perks, not price)

- Free parking
- Late check-out and early check-in when the calendar allows
- Direct WhatsApp line with Stefania (we may answer within 12 hours)
- Best rate available, every time
- A short walking guide of the host's favourite tasca, padaria, and quiet beach

### Keyword Approach

**Primary focus** — broad Lagos apartment terms with intent modifiers:
- "apartment Lagos Algarve"
- "Lagos Portugal holiday apartment for couples"
- "family apartment Lagos Portugal"
- "apartment for 4 guests Lagos"
- "direct booking apartment Lagos Algarve"
- "Lagos apartment walking distance to beach"

**Secondary** (supporting, not lead) — named beach terms at lower priority:
- "apartment near Praia da Batata Lagos"
- "accommodation walking distance Praia Dona Ana"

**Avoid:** Generic Algarve-wide terms (too broad, too expensive).

Per-language keyword research is required before translation (Sprint 3) — German users search "Ferienwohnung Lagos," not literal translation of English keywords.

### Content Tone of Voice

- Warm but direct. No fluff, no oversell.
- Honest about what it is. Compact, well-equipped, great location for beach holidays.
- Audience-aware. Speak to couples or families specifically per piece, not both at once.
- **Avoid:** "ocean view," "sea view," "pet-friendly," "beachfront," "luxurious," "ultimate," "dream," "escape"
- **Use instead:** "private terrace," "sea glimpse," "walking distance," "families welcome," "couple's retreat in Lagos," "best rate available"

### Content Pillars

| Pillar | Audience | Core idea |
|---|---|---|
| Couples in Lagos | Couples | Calm base, terrace mornings, easy beach days |
| Family Beach Stays | Families | Practical stay, included essentials, easy walking access |
| Local Convenience | Both | Parking, Wi-Fi, walking distances, Lagos as a destination |

### Channels

| Channel | Role |
|---|---|
| Direct website (apartamentomarazul.com) | Primary — direct booking conversion |
| Lodgify Booking Engine | Payment + reservation handoff (new tab from custom calendar) |
| Instagram | Primary social — Reels + Carousels + Stories |
| Facebook | Secondary social — trust, guides, offers |
| Google Business Profile | Essential — photos, posts, reviews, booking link |
| Google Ads | Search intent capture — couples + families |
| Meta Ads | Discovery — segmented by audience |
| Email (Lodgify built-in) | Retention — pre-arrival, post-stay, rebook |
| WhatsApp | Pre-booking questions and guest support (12h response promise) |

### Booking architecture (Sprint 2 result)

Custom calendar UI on `apartamentomarazul.com` (real availability + per-day rates from Lodgify API at build time, paginated 6 months). Date selection happens in our brand. Click "Book direct" / "Continue to booking" → Lodgify-hosted checkout in a new tab with `arrival` + `departure` pre-filled.

Lodgify support confirmed (2026-05-07) that no fully-inline-checkout widget exists on any plan, including Ultimate. The hybrid pattern above is the maximum brand-cohesion possible.

### Direct Booking Objective

- **Goal:** +40% direct bookings over 12 months (growth from zero)
- **Direct rate advantage:** Always offer perks (welcome gestures, late checkout, etc.), never undercut OTA prices publicly. Booking.com rate parity rules apply.
- **OTAs:** Keep live as discovery channels. Use post-stay touchpoints to drive future direct bookings.
- **Never advertise:** "Skip Airbnb" or "Skip Booking.com." Frame positively: "Book directly with your host."

### Pre-Publishing Checklist

Before publishing any content, always verify:
- [ ] No mention of sea view as a feature
- [ ] No mention of pet-friendly
- [ ] Location framed as "walking distance from the centre and the beaches" (not specific minutes)
- [ ] Audience is clearly one of: couples, families, or both
- [ ] CTAs point to apartamentomarazul.com (direct booking) or WhatsApp (pre-sales questions)
- [ ] WhatsApp CTAs include "we may answer within 12 hours"
- [ ] No em dashes used
- [ ] No banned words: ocean view, sea view, beachfront, luxurious, ultimate, dream, escape, paradise, oasis, hidden gem, magical
- [ ] Direct booking framed as perks, never as price discount

---

## 6. Decision log (recent updates)

**2026-05-07** — Brand.md v2.0 reconciliation against project memory and Sprint 0–2 outputs.

Major updates:
- **Typography** changed from Playfair Display + Inter to **Spectral + Manrope** (impeccable skill flagged Playfair+Inter as AI-default reflex pair; Spectral+Manrope are SIL OFL on Google Fonts, fully free for commercial use)
- **Slate Grey** darkened from `#6F7A86` to `#5F6B77` for WCAG AA compliance against Warm White (audit P1 fix)
- **Error Red `#B0392A`** added as 7th brand token for inline form validation
- **Address** corrected to include "lote V 44 B" (precise to GBP listing)
- **Owner name** confirmed: Stefania (formal) / Stefy (informal, WhatsApp button only)
- **Languages spoken** updated to PT/IT/EN/ES (added Spanish)
- **Site languages** expanded from 5 to 7 (added Italian + Spanish): EN/PT/ES/IT/DE/NL/FR
- **Location framing** softened from "5 min by car to Dona Ana, 4 min by car / 20 min on foot to Praia da Batata" to "walking distance from the centre and the beaches" (per owner direction)
- **Welcome bottle of vinho verde** removed from direct-booking perks (per owner direction)
- **A/C amenity** clarified to "in the bedroom" (was "in every room")
- **Cancellation policy** confirmed: free up to 7 days, then 50% non-refundable
- **Lodgify plan** corrected to Ultimate (was Professional)
- **Booking architecture** locked: custom UI + Lodgify checkout handoff (no inline checkout exists on any Lodgify plan)
- **Direct-booking baseline** captured: 27 historical bookings, 0 direct (the +40% goal is growth from zero)

---

*Document maintained for Apartamento Mar Azul, Lagos, Portugal. Reflects current state as of Sprint 2 close.*
