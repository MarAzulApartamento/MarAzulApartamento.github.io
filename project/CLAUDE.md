# CLAUDE.md — Apartamento Mar Azul Project Brief

## PROJECT OVERVIEW
You are working on the full digital and print brand presence for **Apartamento Mar Azul**,
a short-term holiday rental apartment in Lagos, Algarve, Portugal. This include a redesign of the website apartamentomarazul.com use the text that are available there when possible.

## BRAND IDENTITY

### Name & Tagline
- **Brand Name:** Apartamento Mar Azul
- **Tagline:** "Algarvian Mood: Your Lagos Apartment"
- **Website:** apartamentomarazul.com
- git pages: https://github.com/MarAzulApartamento/MarAzulApartamento.github.io
- instagram: https://www.instagram.com/apartamento_marazul/
- facebook: https://www.facebook.com/people/Apartamento-Mar-Azul

### Brand Personality
Warm, relaxed, authentic, sun-drenched, coastal, welcoming. 
The tone is friendly and evocative — like a recommendation from a friend who 
has been to the Algarve and wants you to have the same magical experience.

### Target Audience
- Couples (25–50) seeking romantic coastal breaks
- Small families (2–4 guests) on holiday
- Groups of friends on short city/beach breaks
- Digital nomads wanting a comfortable base
- Primarily: UK, German, Dutch, French, Portuguese markets

### Color Palette
PRIMARY:
- ATLANTIC BLUE #1E5B73
- Warm White: #FAFAF7 (sun-bleached walls)
- Deep navy: #1d2630 
- SLATE GREY: #7A868E

ACCENT:
- Seafoam: #A8CFC6 
- SUN SAND: #E6D8B7 

### Typography
- Display/Headings: Playfair Display (elegant, coastal editorial feel) — only at 24px and above
- Body/UI: Inter (clean, modern, readable) — minimum 16px for body copy

### Logo Files
Located at: C:\marazul\project\website\assets\logo
- Use the logo files as provided — reference them in all deliverables
- There are 3 versions of the logo: Primary, monochrome and reversed

## APARTMENT DETAILS

### Property
- **Location:** Rua Dom Luís da Silveira lote V 44 B, 8600-575 Lagos, Portugal
- **Capacity:** 2–4 guests (ideal for couple, small family, or friends)
- **Setting:** Peaceful residential area. 5 min by car to Dona Ana Beach. 4 min by car / 20 min on foot to Praia da Batata.

### Key Features
- Bright & cozy with large windows
- Spacious terrace with ocean glimpse
- Air conditioning throughout
- High-speed Wi-Fi
- Free parking 1 min walk
- Fresh linens & towels provided
- Crib and high chair available
- Full kitchen facilities
- Close to beaches, restaurants, Lagos old town, marina

### Booking Platforms
-  Available on direct via website, Airbnb, Booking.com
- at the moment is it in use Lodgify but the request is to use all the potentials of the tool

## VISUAL ASSETS

### Photos
Located at: C:\marazul\project\website\assets\images
- Use these photos in all digital and print materials
- Prioritize images showing: terrace view, bright living spaces, 
  kitchen, bedroom, and any ocean/Lagos scenery shots

### Video
Located at: "C:\marazul\project\website\assets\images\video-overlay-370x288.mov"
- Use as hero video background on the website homepage
- Can be used in social media ads (Instagram Reels, Facebook)

## DELIVERABLES REQUIRED

### 1. WEBSITE (Responsive HTML/CSS/JS)
- Homepage with video hero background
- About the apartment section
- Photo gallery
- Features & amenities list
- Location/map section
- Guest reviews section
- Booking/contact CTA
- Mobile-first, fully responsive
- Embedded element of lodgify for the direct reservation

### 2. MARKETING STRATEGY
- Target market analysis
- Channel strategy (SEA, Social, OTA, Email)
- Content calendar outline
- Seasonal pricing recommendations
- 90-day launch plan

### 3. DIGITAL ADS
- Meta/Facebook Ad Set (1200x628px + 1080x1080px)
- Instagram Story Ad (1080x1920px)
- Google Display Ad (multiple sizes)
- Copy variants (A/B) for each

### 4. PRINT MATERIALS
- Business card of the apartment (owner distributes when travelling)
- A6 review card (flat, kitchen counter) — Google Reviews QR
- A5 table tent (folded, standing on table) — Google Reviews QR
- Welcome card (for inside apartment) — house guide + Wi-Fi + WhatsApp
- QR code linking to direct booking page (apartamentomarazul.com/book)

## TECH STACK

### Website
- **Astro v6** (static site generator, zero JS by default, multilingual i18n)
- **Tailwind CSS v4** (via @tailwindcss/vite, brand tokens in src/styles/global.css)
- **Cloudflare Pages** hosting + Cloudflare Web Analytics (cookieless)
- **Sveltia CMS** for owner-friendly content edits at /admin/
- **Lodgify** Booking Engine (embedded), Availability Calendar, Quote Form, Public API
- Fonts: Google Fonts (Playfair Display + Inter)
- Icons: Lucide via Astro components
- Image pipeline: Astro built-in (Sharp, AVIF/WebP, responsive srcset)
- Lightbox: TBD in Sprint 1 (lightweight, no jQuery)
- Map: Leaflet.js (free, no Google Maps key)

### Print/Ad Design Output
- HTML/CSS ad mockups (exportable as PNG via browser)
- Print files: HTML → PDF-ready layouts at correct DPI/bleed specs

## CODING CONVENTIONS
- Mobile-first responsive design (375px → 1440px)
- CSS custom properties for all design tokens
- Semantic HTML5 elements throughout
- WCAG AA accessibility compliance
- Optimize all images with lazy loading
- All copy in British English
- Prices in EUR (€)

## VOICE & CONTENT RULES (apply to every public-facing surface)
- **No em dashes (`—`) anywhere on public-facing copy** — use a full stop or rewrite the line.
- **Never** position "sea view," "ocean view," or "beachfront" as headline features. The terrace has a sea glimpse; mention casually if at all, never as a headline.
- **Beach distances** must always be stated as: "5 min by car to Dona Ana Beach" and "4 min by car / 20 min on foot to Praia da Batata." Never "near the beach" or "close to the beach."
- **Not pet-friendly** — remove from all messaging.
- **Direct booking incentives = perks**, not price discounts (avoids breaking Booking.com rate parity). Examples: welcome bottle of vinho verde, late checkout, free parking guaranteed.
- **WhatsApp CTA** must always include the response-time expectation: "we may answer within 12 hours."
- **Never** say "skip Airbnb" or "skip Booking.com." Frame positively: "Book directly with your host."
- **Audience-aware copy**: speak to couples OR families specifically per piece, not both at once.
- All copy in **British English** (EN); other languages localised per Sprint 3 keyword research, not literal translation.
- Prices in **EUR (€)**.

## IMPORTANT RULES
- NEVER use placeholder images. Use the provided assets in C:\marazul\project\website\assets\
- Photo priority: pull from `firts choises/` first (marazul-01.jpg = best, descending priority, last numbered = toilet). Use `second choises/` only when first-choice images don't cover the need.
- Hero video: `C:\marazul\project\website\assets\images\firts choises\video-overlay-370x288.mov` (thumbnail: video-thumbnail-370x288.jpg)
- Always output production-ready code, not prototypes
- Follow brand colors and typography strictly (see Brand.md for the authoritative system)
- Every page must use light mode design (the site is always light, warm tones)
- **Lodgify is in production** — never make mutating changes (dashboard or API) without explicit user confirmation
