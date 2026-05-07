# \# Apartamento Mar Azul — Brand System & AI Prompts

\---

## \#\# 1\. Brand Design System

\> Insert this entire Design System block into \*\*Claude Design\*\* before starting any task.

\---

### \#\#\# 1.1 Brand Identity

\*\*Property:\*\* Apartamento Mar Azul  
\*\*Location:\*\* R. Dom Luís da Silveira, 8600-575 Lagos, Algarve, Portugal  
\*\*Type:\*\* Independent short-stay apartment (2-4 guests), family-friendly  
\*\*URL:\*\* \[www.apartamentomarazul.com\](https://www.apartamentomarazul.com)

\*\*Brand idea:\*\* A calm, sunlit coastal apartment where the sea is always close. Not a hotel. Not a chain. A real place, a real stay, with a quiet premium feel.

\*\*Brand personality:\*\* relaxed · trustworthy · coastal · quietly premium · local · welcoming

\*\*Brand voice:\*\* Specific, calm, place-driven. Never corporate. Never generic.  
\*\*Tone examples:\*\*  
\- ✅ "Private terrace apartment in Lagos, 5 min by car from Dona Ana Beach."  
\- ✅ "A peaceful Algarve base with everything you need."  
\- ❌ "Unlock the ultimate coastal experience."  
\- ❌ "Your all-in-one holiday solution."

\*\*What this property is NOT:\*\*  
\- ❌ Not pet-friendly \- remove from all messaging  
\- ❌ No panoramic sea view \- there is a glimpse of the sea from the terrace; mention casually, never as a headline feature  
\- ❌ Not walking distance to Dona Ana Beach \- always say "5 min by car"  
\- ❌ Never use em dashes on any online material public facing

\---

### \#\#\# 1.2 Colour Palette

| Role | Name | Hex | Usage |  
|---|---|---|---|  
| Primary | Atlantic Blue | \`\#1E5B73\` | CTAs, headings, logo, key highlights |  
| Secondary | Seafoam | \`\#CFE3DE\` | Backgrounds, section tints, hover states |  
| Accent | Sun Sand | \`\#D8B98A\` | Small accents, warmth moments, borders |  
| Background | Warm White | \`\#F8F6F1\` | Page background, cards |  
| Text | Deep Navy | \`\#1D2630\` | Body copy, headings |  
| Muted | Slate Grey | \`\#6F7A86\` | Secondary text, labels, placeholders |  
| Inverse | White | \`\#FFFFFF\` | Text on dark/blue backgrounds |

\*\*Colour rules:\*\*  
\- Keep backgrounds mostly Warm White \- let photography dominate.  
\- Atlantic Blue is for buttons, links, and the logo only.  
\- Sun Sand used sparingly (small highlights, dividers, icon accents).  
\- No gradients on buttons. No neon blues. No purple.  
\- Maximum 2 non-neutral hues per screen viewport.

\*\*CSS variables:\*\*  
\`\`\`css  
:root {  
  \--color-primary:    \#1E5B73;  
  \--color-secondary:  \#CFE3DE;  
  \--color-accent:     \#D8B98A;  
  \--color-bg:         \#F8F6F1;  
  \--color-text:       \#1D2630;  
  \--color-muted:      \#6F7A86;  
  \--color-white:      \#FFFFFF;  
}  
\`\`\`

\---

### \#\#\# 1.3 Typography

| Role | Font | Weight | Usage |  
|---|---|---|---|  
| Display / Headings | Playfair Display | 400, 700 | Hero titles, section headings (24px+) |  
| Body / UI | Inter | 400, 500, 600 | Body copy, buttons, labels, nav |

\*\*Font loading (Google Fonts):\*\*  
\`\`\`html  
\<link rel="preconnect" href="https://fonts.googleapis.com"\>  
\<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin\>  
\<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700\&family=Inter:wght@400;500;600\&display=swap" rel="stylesheet"\>  
\`\`\`

\*\*CSS variables:\*\*  
\`\`\`css  
:root {  
  \--font-display: 'Playfair Display', Georgia, serif;  
  \--font-body:    'Inter', 'Helvetica Neue', sans-serif;  
}  
\`\`\`

\*\*Type scale:\*\*  
| Level | Font | Size | Weight |  
|---|---|---|---|  
| Hero | Playfair Display | clamp(2.5rem, 5vw, 4.5rem) | 700 |  
| H2 Section | Playfair Display | clamp(1.8rem, 3vw, 2.5rem) | 400 |  
| H3 Subhead | Inter | clamp(1.1rem, 1.5vw, 1.4rem) | 600 |  
| Body | Inter | 1rem (16px) | 400 |  
| Caption / Label | Inter | 0.875rem (14px) | 500, uppercase tracked |  
| Button | Inter | 0.9375rem (15px) | 600 |

\*\*Rules:\*\*  
\- Playfair Display only at 24px and above.  
\- Body text minimum 16px \- never below.  
\- Sentence case everywhere. No ALL CAPS headings.  
\- Line length for body: max 68 characters.

\---

### \#\#\# 1.4 Logo Concept

\*\*Wordmark:\*\* \`Apartamento Mar Azul\`  
\*\*Icon:\*\* A minimal single-line wave or horizon mark (thin stroke, geometric).

\*\*Logo construction:\*\*  
\- Icon sits to the left of the wordmark.  
\- Icon: one continuous line forming a gentle wave or a sun-over-horizon.  
\- Wordmark: "Apartamento" in Inter 500 small caps or regular, "Mar Azul" in Playfair Display 700\.  
\- Lock-up: horizontal preferred; stacked version for social/favicon.

\*\*Colour versions:\*\*  
| Version | Icon | Text |  
|---|---|---|  
| Primary | Atlantic Blue \`\#1E5B73\` | Atlantic Blue \`\#1E5B73\` |  
| Reversed | White \`\#FFFFFF\` | White \`\#FFFFFF\` |  
| Monochrome | Deep Navy \`\#1D2630\` | Deep Navy \`\#1D2630\` |

\*\*Rules:\*\*  
\- No drop shadows on the logo.  
\- No coloured backgrounds on the icon shape.  
\- Minimum width: 120px.  
\- Clear space: equal to the height of the "M" in "Mar" on all sides.

\---

### \#\#\# 1.5 Spacing & Radius

\`\`\`css  
:root {  
  \--space-1: 0.25rem;   /\*  4px \*/  
  \--space-2: 0.5rem;    /\*  8px \*/  
  \--space-3: 0.75rem;   /\* 12px \*/  
  \--space-4: 1rem;      /\* 16px \*/  
  \--space-6: 1.5rem;    /\* 24px \*/  
  \--space-8: 2rem;      /\* 32px \*/  
  \--space-12: 3rem;     /\* 48px \*/  
  \--space-16: 4rem;     /\* 64px \*/  
  \--space-20: 5rem;     /\* 80px \*/

  \--radius-sm: 4px;  
  \--radius-md: 8px;  
  \--radius-lg: 14px;  
  \--radius-full: 9999px;

  \--shadow-sm: 0 1px 3px rgba(29, 38, 48, 0.08);  
  \--shadow-md: 0 4px 14px rgba(29, 38, 48, 0.10);  
  \--shadow-lg: 0 12px 32px rgba(29, 38, 48, 0.13);  
}  
\`\`\`

\---

### \#\#\# 1.6 Imagery & Photography Direction

\- \*\*Hero:\*\* Full-width, high-quality photograph of the terrace or Lagos coastline at golden hour.  
\- \*\*Interior shots:\*\* Bright, natural light, minimal staging, wide-angle showing space and light.  
\- \*\*Location:\*\* Dona Ana Beach, Praia da Batata, Lagos old town, Algarve cliffs.  
\- \*\*Mood:\*\* Calm, warm, sunlit, spacious. Never staged "stock photo" families.  
\- \*\*Format:\*\* Landscape 16:9 for hero; square 1:1 for social cards; portrait 4:5 for Instagram feed.  
\- \*\*Colour treatment:\*\* Natural tones, slightly warm-shifted. No heavy filters or saturation.  
\- \*\*Do not use:\*\* Images implying sea view as a headline feature, pets, or beachfront access.

\---

### \#\#\# 1.7 Social Post Template Rules

\- \*\*Grid:\*\* 1080x1080px (Instagram) or 1080x1920px (Stories/Reels).  
\- \*\*Layout zones:\*\* Image occupies 70% of frame; text overlay sits in bottom 30% on a semi-transparent deep navy bar (\`rgba(29,38,48,0.72)\`).  
\- \*\*Headline font:\*\* Playfair Display 700, white, max 2 lines.  
\- \*\*Caption font:\*\* Inter 500, white or Seafoam, 1 line.  
\- \*\*Logo:\*\* Always bottom-right corner, white reversed version, minimum 80px wide.  
\- \*\*Hashtag set:\*\* \#Lagos \#Algarve \#ApartamentoMarAzul \#PortugalTravel \#CoastalStay \#VisitAlgarve \#LagosPortugal \#BeachApartment  
\- \*\*Call to action:\*\* Always end posts with "Link in bio to book direct 🌊"  
\- \*\*No em dashes\*\* in any public-facing copy.

\---

## \#\# 2\. Claude Design Prompt

\> Paste this prompt into \*\*Claude Design\*\* to start the project.

\---

You are designing the complete visual identity and digital presence for Apartamento Mar Azul, a single independent short-stay apartment in Lagos, Algarve, Portugal (www.apartamentomarazul.com). The property has a private terrace with a sea glimpse, sleeps 2-4 guests, is family-friendly (crib \+ high chair available), and is 5 minutes by car from Dona Ana Beach and 4 minutes by car from Praia da Batata.

IMPORTANT CONSTRAINTS:

* Do NOT reference "sea view," "ocean view," or "beachfront" as headline features  
* Do NOT reference pet-friendly  
* Beach distances must always be stated as "5 min by car" (Dona Ana) or "4 min by car / 20 min on foot" (Praia da Batata)  
* No em dashes in any public-facing copy

BRAND SYSTEM (use exactly):

* Primary colour: Atlantic Blue \#1E5B73  
* Secondary: Seafoam \#CFE3DE  
* Accent: Sun Sand \#D8B98A  
* Background: Warm White \#F8F6F1  
* Text: Deep Navy \#1D2630  
* Muted: Slate Grey \#6F7A86  
* Display font: Playfair Display (400, 700\) \- headings 24px+ only  
* Body font: Inter (400, 500, 600\) \- all UI and body copy  
* Tone: calm, coastal, quietly premium, specific, local, never generic

## DELIVERABLES \- produce all three:

1. WEBSITE REDESIGN  
   Single-page responsive website (HTML/CSS/JS). Sections in order:  
   * Hero: full-width terrace photo \+ property name \+ "Book direct" CTA button  
   * Trust strip: 5 key icons (private terrace, free parking, A/C, Wi-Fi, linens included)  
   * About: 2-column layout \- left text, right photo. Max 60 words. Specific, local.  
   * Gallery: 6-image grid, lightbox on click  
   * Amenities: icon \+ label grid, 12 items max  
   * Location: embedded Google Maps \+ "5 min by car to Dona Ana Beach" callout  
   * Reviews: 3 guest quote cards, star rating  
   * FAQ: accordion, 6 questions (check-in, parking, crib, Wi-Fi, cancellation, beach access)  
   * Booking CTA: full-width section, Atlantic Blue background, white text, "Book Direct" button  
   * Footer: logo, address, social links, copyright

Rules: mobile-first, no gradients on buttons, max 2 non-neutral hues per viewport, no stock photo families, Playfair Display only for headings.

2. SOCIAL POST TEMPLATES  
   Create 3 Canva-style layout compositions (as HTML visual mockups, 1080x1080px):  
   * Template A: "Property highlight" \- full-bleed photo, bottom overlay bar, headline \+ sub-label \+ logo  
   * Template B: "Guest review" \- quote on Seafoam background, star rating, guest name, logo bottom-right  
   * Template C: "Local tip / Lagos" \- split layout: left photo of Lagos, right Warm White with text and CTA  
3. LOGO REDESIGN  
   SVG logo with:  
   * Icon: minimal single continuous wave line (Atlantic Blue stroke, no fill)  
   * Wordmark: "Apartamento" in Inter 500, "Mar Azul" in Playfair Display 700  
   * Horizontal lock-up and stacked version  
   * Deliver in 3 colour versions: primary (blue), reversed (white), monochrome (navy)

No gradients, no drop shadows, no clip art, no icons in coloured circles. Every design decision must trace back to coastal, calm, quietly premium.

text

`---`

## \#\# 3\. Claude Code / Opus Prompt \- Strategy & Marketing

`> Paste this prompt into **Claude Code with Opus** for the strategy document.`

`---`

You are a senior digital strategist helping a single independent short-stay apartment called Apartamento Mar Azul (Lagos, Algarve, Portugal) build its direct-booking presence and reduce dependency on OTAs like Airbnb and Booking.com.

PROPERTY FACTS (use only these, do not invent):

* Address: R. Dom Luís da Silveira, 8600-575 Lagos, Portugal  
* Sleeps: 2-4 guests  
* Amenities: private terrace, A/C, free parking nearby, high-speed Wi-Fi, crib \+ high chair available, linens provided  
* Beach access: 5 min by car to Dona Ana Beach | 4 min by car / 20 min on foot to Praia da Batata  
* Website: www.apartamentomarazul.com  
* Social: Instagram and Facebook

TARGET AUDIENCES:

* Primary A (Couples): travelling as two, looking for a calm, well-equipped Lagos base. Value the terrace, easy parking, good Wi-Fi, and proximity to beaches by car.  
* Primary B (Small Families): 2-4 guests, at least one young child. Value the crib, high chair, linens included, easy car access to beaches, and nearby parking.

MESSAGING CONSTRAINTS:

* Lead with: Private terrace \+ practical comfort (A/C, Wi-Fi, linens, parking)  
* Support with: Beach access by car (specific minutes, not "near the beach")  
* Reinforce with: Family-ready essentials (crib, high chair, sleeps 4\)  
* Mention lightly: Sea glimpse from the terrace \- a nice bonus, never a promise  
* Never mention: sea view, ocean view, beachfront, pet-friendly  
* Never use em dashes in public-facing copy

OBJECTIVE: Increase direct bookings by 40% over 12 months. Reduce OTA commission cost. Build a repeatable content and advertising engine.

Produce a structured strategy document with these exact sections \- be specific, actionable, and concise. No filler. No generic advice:

1. WEBSITE STRATEGY  
   * Information architecture (page structure and content priority)  
   * Conversion elements (what to add, where, and why)  
   * SEO target keywords (10 long-tail keywords, with search intent label)  
   * Technical must-haves (speed, schema markup, Google Hotel links)  
2. CONTENT & SOCIAL STRATEGY  
   * Content pillars (3 pillars with rationale)  
   * Posting frequency and platform priority  
   * 30-day content calendar (week by week, platform, format, topic)  
   * Hashtag strategy (primary \+ secondary \+ niche sets)  
3. PAID ADVERTISING STRATEGY  
   * Google Ads: campaign structure, match types, 10 keywords, budget recommendation  
   * Meta Ads: audience targeting, creative direction, 3 ad concepts  
   * Remarketing: audience setup, message, budget split  
   * OTA strategy: how to use Booking.com and Airbnb to drive awareness while pushing direct  
4. EMAIL & GUEST RETENTION  
   * Pre-arrival email sequence (3 emails, timing, content outline)  
   * Post-stay follow-up (review request \+ direct rebook offer)  
   * Repeat guest incentive programme  
5. KPIs & 12-MONTH ROADMAP  
   * 5 core KPIs with targets and measurement tools  
   * Phased roadmap: Month 1-3 (foundation), Month 4-6 (growth), Month 7-12 (optimise)

Format output as a clean markdown document. Use tables where helpful. Be specific to this property \- no generic hospitality advice.

text

`---`

## \#\# 4\. Design Tokens \- Paste into Claude Design

`> Minimal token block to paste as context at the start of any Claude Design session.`

`---`

```` ```css ````  
`/* APARTAMENTO MAR AZUL - Design Tokens v1.0 */`  
`:root {`  
  `/* Colours */`  
  `--color-primary:    #1E5B73;   /* Atlantic Blue - CTA, logo, links */`  
  `--color-secondary:  #CFE3DE;   /* Seafoam - backgrounds, tints */`  
  `--color-accent:     #D8B98A;   /* Sun Sand - warmth, borders */`  
  `--color-bg:         #F8F6F1;   /* Warm White - page bg */`  
  `--color-text:       #1D2630;   /* Deep Navy - body copy */`  
  `--color-muted:      #6F7A86;   /* Slate Grey - secondary text */`  
  `--color-white:      #FFFFFF;`

  `/* Typography */`  
  `--font-display: 'Playfair Display', Georgia, serif;`  
  `--font-body:    'Inter', 'Helvetica Neue', sans-serif;`

  `/* Type scale */`  
  `--text-hero:    clamp(2.5rem, 5vw, 4.5rem);`  
  `--text-h2:      clamp(1.8rem, 3vw, 2.5rem);`  
  `--text-h3:      clamp(1.1rem, 1.5vw, 1.4rem);`  
  `--text-base:    1rem;`  
  `--text-sm:      0.875rem;`  
  `--text-xs:      0.75rem;`

  `/* Spacing (4px base) */`  
  `--space-1: 0.25rem; --space-2: 0.5rem;  --space-3: 0.75rem;`  
  `--space-4: 1rem;    --space-6: 1.5rem;  --space-8: 2rem;`  
  `--space-12: 3rem;   --space-16: 4rem;   --space-20: 5rem;`

  `/* Radius */`  
  `--radius-sm: 4px; --radius-md: 8px;`  
  `--radius-lg: 14px; --radius-full: 9999px;`

  `/* Shadow */`  
  `--shadow-sm: 0 1px 3px rgba(29,38,48,0.08);`  
  `--shadow-md: 0 4px 14px rgba(29,38,48,0.10);`  
  `--shadow-lg: 0 12px 32px rgba(29,38,48,0.13);`  
`}`  
```` ``` ````

`---`

## \#\# 5\. Project Brief \- Apartamento Mar Azul

`For Use in Prompt Creation`

`> Paste this section at the start of any AI session to orient the model on what this project is, who it's for, and what rules always apply.`

`---`

### \#\#\# Property Facts (Confirmed)

`- **Name:** Apartamento Mar Azul`  
`- **Address:** R. Dom Luís da Silveira, 8600-575 Lagos, Portugal`  
`- **Website:** apartamentomarazul.com`  
`- **Sleeps:** 2-4 guests`  
`- **Amenities:** A/C, high-speed Wi-Fi, free parking nearby, linens provided, crib + high chair available, private terrace`  
`- **Beach access:** 5 min by car to Dona Ana Beach | 4 min by car / 20 min on foot to Praia da Batata`  
`- **Social:** Instagram + Facebook`

`---`

### \#\#\# What This Property Is NOT

`- ❌ Not pet-friendly - remove from all messaging`  
`- ❌ No panoramic sea view - there is a glimpse of the sea from the terrace; mention casually, never as a headline feature`  
`- ❌ Not walking distance to Dona Ana Beach - always say "5 min by car"`  
`- ❌ Never use em dashes on any online material public facing`

`---`

### \#\#\# Target Audiences

`**Primary A - Couples**`  
`Travelling as two, looking for a calm, well-equipped Lagos base. Value the terrace, easy parking, good Wi-Fi, and proximity to beaches by car.`

`**Primary B - Small Families**`  
`2-4 guests, at least one young child. Value the crib, high chair, linens included, easy car access to beaches, and nearby parking.`

`---`

### \#\#\# Core Positioning Statement

`A well-equipped Lagos apartment for couples and small families. Private terrace, A/C, everything included - 5 minutes by car from Dona Ana Beach, 4 minutes from Praia da Batata.`

`---`

### \#\#\# Messaging Hierarchy

`1. **Lead with:** Private terrace + practical comfort (A/C, Wi-Fi, linens, parking)`  
`2. **Support with:** Beach access by car (specific minutes, not "near the beach")`  
`3. **Reinforce with:** Family-ready essentials (crib, high chair, sleeps 4)`  
`4. **Mention lightly:** Sea glimpse from the terrace - a nice bonus, never a promise`

`---`

### \#\#\# Keyword Approach

`**Primary focus** - broad Lagos apartment terms with intent modifiers:`  
`- "apartment Lagos Algarve"`  
`- "Lagos Portugal holiday apartment for couples"`  
`- "family apartment Lagos Portugal"`  
`- "apartment for 4 guests Lagos"`  
`- "direct booking apartment Lagos Algarve"`

`**Secondary** (supporting, not lead) - named beach terms at lower priority:`  
`- "apartment near Dona Ana Beach Lagos"`  
`- "accommodation near Praia da Batata Lagos"`

`**Avoid:** Generic Algarve-wide terms (too broad, too expensive)`

`---`

### \#\#\# Content Tone of Voice

`- Warm but direct - no fluff, no oversell`  
`- Honest about what it is - compact, well-equipped, great location for beach holidays`  
`- Audience-aware - speak to couples or families specifically, not both at once in the same piece of content`  
`- **Avoid:** "ocean view," "sea view," "pet-friendly," "beachfront"`  
`- **Use instead:** "private terrace," "sea glimpse," "5 min by car," "families welcome," "couple's retreat in Lagos"`

`---`

### \#\#\# Content Pillars

`| Pillar | Audience | Core idea |`  
`|---|---|---|`  
`| Couples in Lagos | Couples | Calm base, terrace mornings, easy beach days |`  
`| Family Beach Stays | Families | Practical stay, included essentials, easy car access |`  
`| Local Convenience | Both | Parking, Wi-Fi, beach access times, Lagos as a destination |`

`---`

### \#\#\# Channels

`| Channel | Role |`  
`|---|---|`  
`| Instagram | Primary - Reels + Carousels + Stories |`  
`| Facebook | Secondary - trust, guides, offers |`  
`| Google Business Profile | Essential - photos, seasonal posts, booking link |`  
`| Google Ads | Search intent capture - couples + families |`  
`| Meta Ads | Discovery - segmented by audience |`  
`| Email | Retention - pre-arrival, post-stay, rebook |`

`---`

### \#\#\# Direct Booking Objective

`- **Goal:** +40% direct bookings over 12 months`  
`- **Direct rate advantage:** Always offer a better or equal rate vs OTAs`  
`- **OTAs:** Keep live as discovery channels only; use post-stay touchpoints to drive future direct bookings`  
`- **Never advertise:** "Skip Airbnb" or "Skip Booking.com" - focus on the positive: "Book directly with your host"`

`---`

### \#\#\# Pre-Publishing Checklist

`Before publishing any content, always verify:`  
`- [ ] No mention of sea view as a feature`  
`- [ ] No mention of pet-friendly`  
`- [ ] Beach distance stated correctly (5 min by car / 4 min by car / 20 min walk)`  
`- [ ] Audience is clearly one of: couples, families, or both`  
`- [ ] CTA points to apartamentomarazul.com`  
`- [ ] No em dashes used`

`---`

`*Document generated for Apartamento Mar Azul, Lagos, Portugal - May 2026*`

