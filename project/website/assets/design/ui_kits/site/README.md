# Marketing site UI kit

A click-thru recreation of the Apartamento Mar Azul marketing site, faithful to the brand brief and the Astro codebase tokens at `site/src/styles/global.css`.

## Files

- `index.html` — entry point. Renders the homepage and the `/book` route in a single SPA.
- `styles.css` — kit styles. Imports `../../colors_and_type.css` for tokens.
- `components.jsx` — all components: `TopBar`, `Hero`, `TrustStrip`, `FactsGrid`, `About`, `Gallery`, `Perks`, `Location`, `Reviews`, `FAQ`, `FinalCTA`, `Footer`, `StickyCTA`, `Lightbox`, `BookPage`.

## What's interactive

- Language switcher in the top bar (state only — no real i18n).
- Photo gallery opens a lightbox; ESC or backdrop closes.
- FAQ accordion (`grid-template-rows` transition, chevron rotates).
- Sticky bottom CTA bar slides in past the hero (translateY only).
- "Check availability" / "Book direct" navigates to a `/book` view with a calendar and pricing summary that mirrors the Lodgify embed shell.

## What's faked

- The map is a flat decorative placeholder with a single pin. The production site will use Leaflet + OpenStreetMap.
- The Lodgify checkout is a visual shell — no real availability or payment.
- Reviews are placeholder copy in the brand voice; real Google Reviews will be pulled into the production build.

## Notes

- Honors `prefers-reduced-motion: reduce` (Ken Burns and sticky-bar transitions disable).
- Mobile breakpoint at 720 px.
- All copy follows the brand: sentence case, no banned words, no em dashes, location framed as walking distance, WhatsApp paired with "we may answer within 12 hours".
