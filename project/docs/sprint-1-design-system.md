# Sprint 1 design system — Claude.ai/design ready-to-paste content

Synthesizes outputs from four design skills:

- `impeccable` (design context, anti-AI-slop principles, color/typography rules)
- `ui-ux-pro-max` (UI quality categories: a11y, touch, performance, layout)
- `design-motion-principles` (7-moment motion audit, Jakub primary + Emil secondary)
- `page-cro` (homepage IA, conversion levers, anti-patterns specific to short-stay rentals)

---

## Section A — Claude.ai/design setup form

### A1. Company name and blurb

```
Apartamento Mar Azul: independent short-stay holiday apartment in
Lagos, Algarve. Multilingual marketing website (English default,
plus Portuguese, German, Dutch, French) with embedded Lodgify
booking engine. Single property, 2-4 guests, family-friendly.
Goal: drive direct bookings from a current 100% OTA-dependent
baseline (0 of 27 historical bookings are direct). Static Astro v6
site deployed on Cloudflare Pages.
```

### A2. Code link

**Recommendation:** Drag the local folder `C:\marazul\project\site` (NOT the GitHub URL — that pulls `main` which is the legacy site).

### A3. Assets to upload

**Logos:**
- `C:\marazul\project\website\assets\logo\logo-primary.svg`
- `C:\marazul\project\website\assets\logo\logo-monocrome.svg`
- `C:\marazul\project\website\assets\logo\logo-reversed.svg`

**Photos (top 5 only — keep it lean):**
- `C:\marazul\project\website\assets\images\firts choises\marazul-01.jpg`
- `C:\marazul\project\website\assets\images\firts choises\marazul-02.jpg`
- `C:\marazul\project\website\assets\images\firts choises\marazul-03.jpg`
- `C:\marazul\project\website\assets\images\firts choises\marazul-04.jpg`
- `C:\marazul\project\website\assets\images\firts choises\marazul-05.jpg`

**Fonts:** Skip. Spectral and Manrope load from Google Fonts at runtime.

### A4. Notes field — paste this verbatim

```
PROJECT CONTEXT
Single-property short-stay rental marketing site. Audience:
couples (25-50) and small families (2-4 guests) browsing on
phones at night and laptops on Sunday mornings. Most arrive
having already seen the property on Booking.com or Airbnb.
The site's job: convince comparison-shoppers that booking
direct is better than the OTA they came from. 0 of 27
historical bookings are direct. The target is growth from zero.

BRAND TOKENS (use exactly)
Colours: Atlantic Blue #1E5B73 (primary, CTAs, links),
Seafoam #CFE3DE (section tints, hover), Sun Sand #D8B98A
(accent, sparingly), Warm White #F8F6F1 (page background),
Deep Navy #1D2630 (body text), Slate Grey #6F7A86 (muted text).
Maximum 2 non-neutral hues per viewport. Tint neutrals subtly
toward Atlantic Blue. No gradient backgrounds on buttons.

Fonts (Google Fonts, SIL OFL):
- Display: Spectral (weights 400, 700, 400 italic). Use only at
  24px and above. Headings, hero, section titles.
- Body / UI: Manrope (weights 400, 500, 600). Min 16px body,
  max 68 characters per line.
Sentence case for headings. Never ALL CAPS.

VOICE
Calm, coastal, quietly premium, specific, local, never generic.
Like a friend recommending a place they actually know.

NEVER use these words: ocean view, sea view, beachfront,
luxurious, ultimate, dream, escape, paradise, oasis, hidden gem,
magical.
NEVER use em dashes anywhere. Use full stops or rewrite.
NEVER reference pet-friendly (the property is not pet-friendly).
NEVER position sea-view as a headline feature (the terrace has
a sea glimpse only; mention casually if at all).
ALWAYS frame location as: "walking distance from the centre of
Lagos and the beaches." Not "5 min by car" or "near the beach."
ALWAYS include "we may answer within 12 hours" with the
WhatsApp CTA.

DIRECT-BOOKING INCENTIVES = PERKS, not price discounts
(Booking.com rate-parity rules forbid undercutting publicly).
Examples: welcome bottle of vinho verde, late checkout when
available, free parking guaranteed, direct WhatsApp line with
host. Frame as "Best rate available, every time" rather than
"Save 15% direct."

THEME
Light mode only. Mobile-first (375px column primary). Generous
whitespace. Photography leads composition. Layout exists to
frame photos.

ANTI-AI-SLOP RULES (these patterns are banned)
1. No left-border colored stripes on cards, list items, callouts,
   or alerts. Colored 3px/4px/5px border-left as accent is the
   single most overused AI design tell. Use full borders, tinted
   backgrounds, or no indicator at all.
2. No gradient text (background-clip: text with any gradient).
   Solid colors only for text.
3. No glassmorphism cards (decorative blur with glow).
4. No identical card grids (icon + heading + text repeated
   endlessly). Vary card sizes; use editorial mosaic.
5. No centered-everything layouts. Asymmetric, left-aligned for
   editorial feel.
6. No urgency theatre ("Only 1 left!", "Book in 10 minutes!").
7. No stock hospitality phrases ("Welcome to your home away from
   home", "Your dream Algarve escape").
8. No hidden host. The owner has a name and a face. Show them.

HOMEPAGE INFORMATION ARCHITECTURE (in this order)
1. Hero: Ken Burns micro-pan on marazul-01.jpg. Headline names
   the audience: "A quiet apartment in Lagos for couples and
   small families." Subhead: "Walking distance from the centre
   and the beaches. Sleeps 2 to 4." Primary CTA: "Check
   availability". Secondary: WhatsApp text link.
2. Trust strip (immediately below fold): star rating from 5
   Google reviews, "Welcoming guests since June 2025", host
   name and photo, languages spoken.
3. At-a-glance facts grid: capacity, bedrooms, terrace, A/C,
   Wi-Fi, parking, linens, crib + high chair, walking distance,
   not pet-friendly. State negatives openly.
4. About: two-column. Photo of the host on one side, 60-80
   words of place-driven copy on the other. Names actual
   landmarks in Lagos.
5. Photo gallery: 12 photos in editorial mosaic (asymmetric
   grid, varied sizes), each with a caption naming the room or
   area. Lightbox on click.
6. Direct-booking perks: bullet list of 5-6 perks. Frame as
   additive ("Booking direct gets you..."), never as price
   savings. Position BEFORE reviews.
7. Location: embedded Leaflet map. Below it, list specific
   nearby landmarks (nearest tasca, nearest supermarket, nearest
   beach). Specific names, no "many great restaurants nearby."
8. Reviews: 5 real Google Reviews with first name, date, full
   quote, star rating each.
9. Availability calendar: 2-month view, picks dates, shows
   price, CTA "Continue to booking" goes to /book.
10. FAQ: 6-8 accordion items ordered by conversion impact:
    keys/check-in, parking, baby-friendly, cancellation, Wi-Fi
    quality, beach distance, pets, languages.
11. Final CTA band: Atlantic-Blue full-bleed. "Ready when you
    are." Primary "Check availability". Secondary WhatsApp.
12. Footer: address, social, language switcher repeat,
    copyright, privacy/cookie/ToS links.

STICKY ELEMENTS
- Top: logo (left) + language switcher EN/PT/DE/NL/FR (right).
  No full nav menu (kills conversion on a single-page site).
- Bottom: "Book direct" CTA bar slides up after scrolling past
  hero. Single button. Persistent until /book.

CTA HIERARCHY
Primary destination: /book (Lodgify Booking Engine embed).
Primary copy: "Book direct" or "Check availability" (consistent
across page).
Secondary: WhatsApp deep link with "we may answer within 12
hours" microcopy beside it.
Five CTAs total across the homepage. Same destination cluster.

MOTION PRINCIPLES (subtle, production-polish, NOT playful)
Primary lens: Jakub Krehel. Secondary: Emil Kowalski. The brand
is "calm, quietly premium" so playful spectacle is wrong.

Approved motion moments and timings:
- Hero: Ken Burns pan on photo, 18s linear, infinite. Skip
  autoplay video for now. Reduced-motion: static image.
- Section scroll-reveal: opacity 0->1 + translateY 12px->0 +
  blur(4px)->0, 450ms spring no-bounce, IntersectionObserver
  at 15%, fire ONCE. Reduced-motion: instant render.
- Gallery lightbox: opacity + scale(0.96)->1, 220ms in /
  180ms out, ease-out / ease-in. Backdrop fades independently.
- Language switcher dropdown: opacity + translateY(-4px)->0,
  160ms in / 120ms out.
- Sticky CTA bar slide-in: translateY(100%)->0, 280ms
  cubic-bezier(0.32, 0.72, 0, 1). Threshold-triggered, NOT
  scroll-progress driven (no parallax / scroll-jacking).
- FAQ accordion: grid-template-rows 0fr->1fr (NOT height),
  220ms open / 180ms close. Chevron rotates 0deg->180deg.
- /book page: container fade-in 220ms once on mount. NO
  animation on the embedded widget itself.

NEVER animate width, height, top, left, padding, margin. Only
transform, opacity, filter, backdrop-filter. Never bounce or
elastic easing. Never staggered cascade reveals across multiple
cards.

ALWAYS check prefers-reduced-motion: reduce and fall back to
no animation. Mandatory.

ACCESSIBILITY
WCAG AA across all pages. Body min 16px. Focus rings on every
interactive element (don't remove). Touch targets >= 44x44px.
Color contrast verified against Warm White background. Forms
have visible labels (not placeholder-only). Keyboard navigation
matches visual order.

LANGUAGES
English (default at /), Portuguese (/pt/), German (/de/),
Dutch (/nl/), French (/fr/). Sticky language switcher with
flag icons OPTIONAL (some find them unprofessional); native
language names preferred (English, Português, Deutsch,
Nederlands, Français).

DELIVERABLES TO DESIGN (in priority order)
1. Visual style guide canvas: tokens, type ramp with real Lagos
   sample text, button states, form elements.
2. Component library canvas: navbar, footer, cards, FAQ
   accordion, review card, gallery thumbnail, sticky CTA bar,
   Lodgify booking-engine container shell.
3. Homepage hero + scroll: 12-section sequence above, 1440px
   desktop column.
4. /book page: Lodgify embed integrated in our brand layout.
5. Mobile pass at 375px: same screens, mobile-optimized.

Each design must be deliverable as production-ready HTML/CSS
that maps cleanly to Astro components.
```

---

## Section B — Chat prompt sequence

After saving the setup form, paste these prompts into the Claude.ai/design chat in order. Wait for each canvas to render, screenshot it, send it back here for critique, then move to the next.

### B1 — Visual style guide canvas

```
Generate the visual style guide canvas, deliverable #1.

Layout: full-bleed, mobile-first 375px column on the left and
1440px column on the right, side-by-side.

Include:
1. Colour swatches for all 7 brand colours, each with hex,
   role label, and a small in-context sample (button, text on
   tinted background, card background).
2. Type ramp: Hero / H2 / H3 / Body / Caption / Button. Use
   real sample text: "A quiet apartment in Lagos for couples
   and small families." Show with actual Spectral and Manrope
   loaded.
3. Spacing scale visualised: 4 / 8 / 12 / 16 / 24 / 32 / 48 /
   64 / 80 px as labelled rectangles.
4. Radius scale: 4 / 8 / 14 / 9999 px on rounded boxes.
5. Shadow scale: sm / md / lg on three cards.
6. Buttons: primary (Atlantic Blue), secondary (Warm White
   outlined), ghost. Each in default / hover / focus / disabled.
   No gradients.
7. Form elements: text input, date-range picker, select, guest
   count stepper. Show label + hint + error states.

No filler illustrations. Editorial, sober. Photography leads
elsewhere; this canvas is a working specification.
```

### B2 — Component library canvas

```
Generate deliverable #2: a component library canvas.

Components, all on one canvas, organised by category:

Navigation
- Sticky header: logo (left), language switcher (right) with
  EN/PT/DE/NL/FR using native language names (English,
  Português, Deutsch, Nederlands, Français). Open/closed
  states for the language dropdown.
- Footer: address, three social icons, language switcher
  repeat, small print rows.

Cards & content surfaces
- Trust strip block (5 horizontal items: rating, opening date,
  host card, languages, response time).
- At-a-glance facts grid card.
- Editorial photo card (varied sizes — show a 2:3 portrait, a
  3:2 landscape, a 1:1 square, captioned).
- Review card: name, date, language flag, full quote, 5-star.
- FAQ accordion: collapsed and expanded states.

Sticky surfaces
- Sticky bottom "Book direct" CTA bar: docked, single button,
  Atlantic Blue background, white Spectral text.
- WhatsApp CTA: green WhatsApp icon, "Message us on WhatsApp"
  with "we may answer within 12 hours" microcopy below.

Lodgify shell (CRITICAL)
- A container labelled "Lodgify booking engine widget will
  load here". Show how the container's chrome (heading, frame,
  loading skeleton, sub-text) wraps the iframe area. Visitor
  must feel they are still on apartamentomarazul.com when the
  embed loads inside.

All components mobile-first, hover and focus states visible
where applicable. Use the brand tokens from canvas #1.
```

### B3 — Homepage hero + scroll sequence

```
Generate deliverable #3: the full homepage from hero through
footer, mobile-first 375px column on the left and 1440px column
on the right side-by-side.

Section sequence (use exactly this order):

1. Sticky header.
2. Hero: full-bleed terrace photo (use the supplied marazul-01
   asset). Headline in Spectral 700: "A quiet apartment in
   Lagos for couples and small families." Subhead in Manrope:
   "Walking distance from the centre and the beaches. Sleeps
   2 to 4." Primary CTA button: "Check availability". Secondary
   text link: "Or message us on WhatsApp (we may answer within
   12 hours)".
3. Trust strip: stars from 5 Google reviews, "Welcoming guests
   since June 2025", host card with photo and name, languages
   spoken, response time.
4. At-a-glance facts grid: 9-12 small icons + labels for
   capacity, bedrooms, terrace, A/C, Wi-Fi, parking, linens,
   crib, high chair, walking distance, not pet-friendly.
5. About section: two columns. Photo of host on one side ,
   60-80 words of place-driven copy on the other. Asymmetric
   layout, no centered-everything.
6. Photo gallery: 12 photos in an editorial asymmetric mosaic
   (varied sizes), each with a small caption naming the room
   or area.
7. Direct-booking perks: 5-6 bullet items framed as additive,
   never as price savings. Atlantic-Blue tinted background.
8. Location: embedded Leaflet map placeholder + below it 4-5
   specific nearby landmarks listed.
9. Reviews: 3 of the 5 Google review cards visible, "View all
   on Google" link.
10. Availability calendar: 2-month view, prices visible on
    hover/tap, dates picked state with "Continue to booking"
    CTA.
11. FAQ accordion: 6-8 questions, first 2 expanded.
12. Final CTA band: Atlantic-Blue full bleed. "Ready when you
    are." Primary button: "Check availability". Secondary
    WhatsApp link.
13. Footer.

Sticky bottom "Book direct" CTA bar visible from section 3
onward.

Remember the bans: no gradient text, no left-border accent
stripes, no glassmorphism, no centered-everything, no urgency
theatre, no stock hospitality phrases.
```

### B4 — `/book` page

```
Generate deliverable #4: the /book page.

The Lodgify Booking Engine widget renders inline here. Our job
is to wrap it in our brand without fighting the iframe.

Layout (mobile + desktop):
- Sticky header (same as homepage).
- Page heading in Spectral: "Book your stay".
- Sub-heading in Manrope: "Choose your dates and confirm your
  booking. We may answer within 12 hours if you need help."
- Primary content area: the Lodgify booking-engine container
  shell (from canvas #2). Show a loading skeleton state and a
  loaded state side by side.
- Below the embed: 3 reassurance cards in a row (or stacked on
  mobile): "Best rate guaranteed", "No hidden platform fees",
  "Direct line to the host". Each with a small icon and one-
  line explanation.
- WhatsApp CTA fallback at the bottom: "Prefer to ask first? Message us on WhatsApp (we may answer within 12 hours)".
- Footer.

Visitor must feel they never left the brand. The Lodgify
chrome should sit cleanly inside our container, not feel like
a different site.
```

### B5 — Mobile breakpoint pass

```
Generate deliverable #5: mobile-only 375px versions of every
homepage section and the /book page.

Mobile rules:
- Stack everything single-column.
- Trust strip becomes 2x2 or 2x3 grid, no horizontal scroll.
- At-a-glance facts: 2-column grid.
- Photo gallery: 1-column stack with "View all photos" link
  to a separate gallery page.
- About: photo-on-top, copy-below.
- Reviews: horizontal swipeable cards (1.2 visible at a time,
  partial peek on the right edge to indicate scroll).
- Availability calendar: 1-month view at a time with arrows.
- Sticky CTA bar takes full width, single primary button.
- All touch targets >= 44x44px. Generous spacing between
  tappable items.

Same design tokens, same voice rules.
```

---

## What to send back per step

Whichever is easiest:

1. Screenshot of the canvas
2. The artefact link from Claude.ai/design (if it provides one)
3. Copy of the generated HTML/CSS if reasonable to paste

For each, I'll critique using the locally available `critique` skill plus the standards we've established here, and refine the next prompt before you paste it.

---

## After all 5 canvases are produced

I'll consume them in Sprint 2 and convert each into Astro components, integrated with the Lodgify API spike outputs and the page-cro IA recommendations. The visual designs become production code.

The Notes block above is also saved to `.impeccable.md` (in summary form) so future skill invocations remain grounded.
