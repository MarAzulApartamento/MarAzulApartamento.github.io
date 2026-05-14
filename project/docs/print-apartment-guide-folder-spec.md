# Apartment Guide Folder — print spec

**Last updated:** 2026-05-14
**Status:** new spec drafted for Stefania's review (item #8b in `questions-for-stefania.md`).
**Goal:** sit on the dining table next to the table flip stand. Where the flip stand answers the at-a-glance questions, the folder answers the "how exactly do I use the washing machine" and "where should I have dinner tonight" questions. It is the apartment's detailed reference — appliances, restaurants, beaches, taxis, SUP, transit, supermarkets — in five languages.

---

## What this is

A small printed booklet (A5 saddle-stitched, ~20 pages) that lives on the dining table beside the table flip. Five language variants: **English, Portuguese, Italian, Spanish, French**. Two copies per language so two guests can browse simultaneously without arguing over the same booklet. The folder is the long-form companion to the table flip's panel-by-panel summary.

The five languages cover ~95% of guest origin. German and Dutch guests typically read English well enough; if volume from those markets justifies it later, we can add DE and NL as a second print run.

---

## Format

| Spec | Value |
|---|---|
| Format | A5 saddle-stitched booklet (148 × 210 mm, portrait) |
| Pages | **20 pages per booklet** (4 sheets × 4 sides + cover) — multiples of 4 are a saddle-stitch constraint |
| Cover | Heavier 250 gsm matte coated stock with the brand on the front |
| Interior | 130 gsm uncoated stock — warmer to the touch, doesn't glare under kitchen lights |
| Binding | Two saddle staples in the spine |
| Quantity | **2 copies × 5 languages = 10 booklets total** |
| Colour | CMYK throughout |
| Photos | Embedded inline on appliance pages — sourced from `project/website/assets/images/apartment-guide/<appliance>/` |

---

## Page-by-page structure (English; mirrored across the 5 languages)

### Page 1 — Cover

> **Apartamento Mar Azul**
> Apartment Guide
>
> Lagos · Algarve

**Visual:** Atlantic Blue full-bleed. Logo reversed (warm-white). Title in Spectral 700, 24pt. Place line in Manrope 600, 9pt all-caps. Calm, almost no text.

A small flag icon (or language label like "EN" / "PT" / "IT" / "ES" / "FR") in the bottom-right corner so a guest can identify the right language at a glance from a stack of five.

### Page 2 — Inside front cover / Welcome

> **Welcome to Mar Azul.**
>
> This folder has everything you might want to know during your stay: how the apartment works, where to eat, which beaches are worth the walk, who to call if you need a taxi.
>
> The table flip beside this folder has the short version. This folder is the long version.
>
> If something here isn't covered, message Stefy on WhatsApp at +351 936 083 766.
>
> Have a wonderful stay.
>
> *With love,*
> *Stefy*

**Visual:** Warm white background, Spectral 400 body at 13pt, Atlantic Blue subhead.

### Page 3 — Contents

A clean numbered contents list with page references:

```
HOW THE APARTMENT WORKS
  3   Wi-Fi
  4   Key locker (check-in / check-out)
  5   Air conditioning
  6   Dehumidifier
  7   Washing machine
  8   Dishwasher
  9   Oven
 10   Microwave
 11   Coffee machine
 12   Fireplace
 13   Television

PRACTICAL THINGS
 14   If the power goes out
 14   Trash & recycling
 14   Fire extinguisher

OUT IN LAGOS
 15   Restaurants
 16   Beaches
 17   Supermarkets
 17   Taxis
 18   Trains and buses
 18   Stand-up paddleboard rental

 19   Emergency contacts
 20   Before you leave
```

### Pages 4-13 — Appliances + apartment systems

Each appliance gets **one page**, structured the same way:

1. **Photo** (or photos) of the appliance — referenced from `assets/images/apartment-guide/<appliance>/`. Shown at ~50% of page width.
2. **Heading** — appliance name in Manrope 700 14pt all-caps Atlantic Blue.
3. **One-line "what it does"** — Spectral 400 italic 11pt, Slate Grey.
4. **Step-by-step instructions** — numbered list, Manrope 400 11pt Deep Navy, line-height 1.5.
5. **A note line at the bottom** — quirks, common mistakes, anything Stefy wants the guest to know specifically about *this* unit.

Below is the **structure** for each page. The actual operating-instruction text is marked `[DRAFT — needs Stefy's confirmation against the unit]` because I can't write accurate model-specific steps without either the model number or Stefy walking me through them. Stefy can fill these in during the review — or we walk through the photos together and I draft them.

#### Page 3 — Wi-Fi

> **WI-FI**
> The home internet for your stay.
>
> Network name: `MEO-CO2AAO`
> Password: `8ab1e3947d`
>
> The password is also printed on the back of the router (photo opposite) in case you need it again.
>
> If the Wi-Fi drops, unplug the router for 30 seconds and plug it back in. It usually reconnects within a minute.

**Photo:** `wifi-router-01.jpeg` (router with sticker visible).

#### Page 4 — Key locker

> **KEY LOCKER (check-in & check-out)**
> The smart locker outside the apartment door.
>
> 1. The lockbox code is sent to you on WhatsApp the day before your check-in.
> 2. Turn the dial to the four digits in order, then pull the latch down.
> 3. Inside you'll find the apartment keys.
> 4. On check-out, please put the keys back in the locker and spin the dial to scramble the code.
>
> If the code doesn't work, message Stefy on WhatsApp.

**Photos:** `key-locker-01.jpeg`, `key-locker-02.jpeg`.

`[DRAFT — confirm the exact mechanics of the locker with Stefy; this is a best guess from the photos]`

#### Page 5 — Air conditioning

> **AIR CONDITIONING**
> In the bedroom only. Cools the room within ~10 minutes on a hot day.
>
> 1. Find the remote (usually on the bedside table).
> 2. Press the power button.
> 3. Set the temperature with the up/down arrows. 24°C is comfortable for sleeping.
> 4. The cool/heat icon switches mode if needed.
>
> Please turn it off when you leave the apartment.

**Photos:** `air-conditioning-01.jpeg` (unit), `air-conditioning-02.jpeg` (remote).

`[DRAFT — confirm model + remote button labels with photos]`

#### Page 6 — Dehumidifier

> **DEHUMIDIFIER**
> Useful in winter and after a hot shower.
>
> 1. Plug it in.
> 2. Press the power button.
> 3. Let it run until the indicator light shows the tank is full, then empty it.
>
> The tank holds about 2 litres. When the apartment feels less damp, you can stop it. No need to run it constantly.

**Photos:** `dehumidifier-01.jpeg`, `dehumidifier-02.jpeg`, `dehumidifier-03.jpeg`.

`[DRAFT — refine once we see the control panel close-up]`

#### Page 7 — Washing machine

> **WASHING MACHINE**
> European-style front loader.
>
> 1. Load the clothes through the door at the front.
> 2. Add detergent to the drawer at the top-left (the marked compartment).
> 3. Turn the dial to a program. "Cotton 40°C" is good for most loads.
> 4. Press start.
>
> Cycles can run 1-2 hours.

**Photos:** `washing-machine-01.jpeg` through `washing-machine-06.jpeg`.

`[DRAFT — refine once we see the detergent drawer + dial labels]`

#### Page 8 — Dishwasher

> **DISHWASHER**
> Loads under the kitchen counter.
>
> 1. Stack plates in the bottom rack, glasses on the top rack.
> 2. Add a dishwasher tablet to the compartment in the inside of the door.
> 3. Close the door, press the power button, choose a program, and press start.
>
> Tablets are in the cupboard under the sink.

**Photos:** `dishwasher-01.jpeg` through `dishwasher-04.jpeg`.

`[DRAFT — refine once we see the controls + tablet compartment]`

#### Page 9 — Oven

> **OVEN**
> Electric oven in the kitchen.
>
> 1. Turn the left dial to select a mode (icon shown on the dial).
> 2. Turn the right dial to set temperature.
> 3. Wait for the indicator light to go out. The oven is at temperature.
>
> The grill function (top heating element) cooks fast. Keep an eye on whatever's inside.

**Photos:** `oven-01.jpeg` through `oven-05.jpeg`.

`[DRAFT — refine once we see the dial icons and labels]`

#### Page 10 — Microwave

> **MICROWAVE**
>
> 1. Open the door, put the food in, close the door.
> 2. Press the time buttons (or the dial) to set the cooking time.
> 3. Press start.
>
> Don't put any metal inside.

**Photos:** `microwave-01.jpeg`, `microwave-02.jpeg`.

`[DRAFT]`

#### Page 11 — Coffee machine

> **COFFEE: DOLCE GUSTO**
> Capsule coffee machine.
>
> 1. Lift the lever, drop in a capsule, close the lever.
> 2. Put a cup under the spout.
> 3. Choose your size with the dial on the side (espresso = short cup, lungo = long cup), press the button.
>
> Capsules are in the cupboard above the machine. Used capsules go in the regular bin.

**Photos:** (Stefy to take if needed — `coffee-machine-01.jpeg` not yet uploaded.)

`[DRAFT]`

#### Page 12 — Fireplace

> **FIREPLACE**
> Working fireplace for cooler evenings.

`[DRAFT — Stefy: is this wood-burning, electric, or decorative? Photos show the unit but I need to see how it's operated. If wood-burning, there's safety wording to add (don't leave unattended, where the flue control is, where firewood is kept).]`

**Photos:** `fireplace-01.jpeg`, `fireplace-02.jpeg`.

#### Page 13 — Television

> **TELEVISION**
>
> Smart TV in the living area. Power on with the remote. The HDMI inputs are on the side if you want to plug in a laptop.

**Photo:** `television-01.jpeg`.

`[DRAFT]`

---

### Page 14 — Practical things (combined page)

> **IF THE POWER GOES OUT**
> The electric panel is `[LOCATION — Stefy to confirm: hallway? kitchen?]`. If a breaker has tripped (one switch flipped down while the others are up), push it back up. If the whole apartment is dark and pushing the breaker back doesn't help, message Stefy on WhatsApp.
>
> **TRASH & RECYCLING**
> Bins are on Rua Dom Nuno de Mascarenhas, in front of the restaurant *Os Lambertos*, 2 minutes' walk from the door. Recycling: yellow for plastic + metal, blue for paper, green for glass.
>
> **FIRE EXTINGUISHER**
> Located `[LOCATION — Stefy to confirm]`. In a small fire, aim the nozzle at the base of the flames and squeeze. If the fire is larger than a stovetop pan, leave the apartment and call 112.

**Photos:** `electric-panel-01.jpeg`, `fire-extinguisher-01.jpeg`.

### Page 15 — Restaurants

> **NEARBY RESTAURANTS**
> A short walk from the apartment.
>
> **Os Lambertos.** Traditional Portuguese tasca, ~2 minutes' walk. Grilled fish, peri-peri chicken, house wine.
>
> **O Prato Cheio.** Another walkable option, slightly more refined. Good portions, friendly service.
>
> `[Stefy to add 3-5 more recommendations: a padaria for breakfast pastries, an evening wine bar, a special-occasion place, a vegetarian option, a Sunday-lunch spot. Each one with a 1-line description.]`

### Page 16 — Beaches

> **BEACHES WITHIN WALKING DISTANCE**
>
> **Praia da Batata.** The closest beach to Lagos centre, ~20 minutes from the apartment. Sheltered cove, sunset bar above.
>
> **Meia Praia.** Long stretch of sand to the east, ~25 minutes' walk. Wide, never crowded, restaurants along the boardwalk.
>
> **Praia Dona Ana.** One of the most photographed beaches in the Algarve. ~30 minutes by walk, ~5 minutes by taxi. Sandstone cliffs.
>
> **Praia do Camilo.** Right next to Dona Ana, smaller and quieter. Famous wooden staircase down.
>
> **Ponta da Piedade** (cliff walk, not a beach). A coastal walking path along the cliffs, ~40 minutes from the apartment. Don't miss this at sunset.

### Page 17 — Supermarkets & Taxis

> **SUPERMARKETS**
>
> **Pingo Doce** (Lagos centre). The closest full supermarket, ~10 minutes' walk. Open 8:00–22:00 daily.
> **Continente** (Lagos outskirts). Larger, cheaper for big shops. ~5 minutes by taxi.
> **Mini-mercados.** Small grocery shops scattered around the neighbourhood for milk-and-bread runs.
>
> **TAXIS**
>
> Lagos taxi rank: Largo do Estaler (next to the marina). Pick one up at the rank, or call:
> `[Stefy to add taxi cooperative number]`
>
> Uber and Bolt both work in Lagos.

### Page 18 — Trains, buses, SUP

> **TRAINS & BUSES**
>
> The closest train station is **Lagos station**, ~15 minutes' walk. The Algarve line runs east to Faro (and onwards). Buy tickets at the station or online: `[QR code → CP timetables]`.
>
> Buses leave from the central bus terminal next to the train station. Routes serve Sagres, Aljezur, Portimão, and Faro: `[QR code → Vamus Algarve timetables]`.
>
> **STAND-UP PADDLEBOARD (SUP) RENTAL**
>
> Stefy rents stand-up paddleboards for the whole stay.
>
> €50 for the entire stay
> €100 refundable deposit (cash, returned on pickup)
>
> Message Stefy on WhatsApp at +351 936 083 766 to reserve. She'll bring the board to the apartment and collect the deposit; on your last day she'll come back to collect the board and refund the deposit.

### Page 19 — Emergency contacts

(Same as table flip Panel 6 — repeated here in the folder for guests who reach for the booklet first.)

> **EMERGENCY**
>
> All emergencies (24/7): **112**
>
> **Police (PSP Lagos):** Sítio da Horta do Trigo, 8600-324 Lagos · +351 282 078 160
> **Hospital (Hospital Terras do Infante):** Av. Dom Sebastião, 8600-654 Lagos · +351 282 770 100
> **Pharmacy (Farmácia Lacobrigense):** R. Prof. Joaquim Alberto Taquelim 8 loja e, 8600-762 Lagos · +351 282 762 901
>
> **Stefy (host):** +351 936 083 766 · marazulapartamento@gmail.com

### Page 20 — Inside back cover / Before you leave

> **BEFORE YOU LEAVE**
>
> Check-out is by 10:00 on your last day.
>
> A few small things:
> - Return the keys to the locker outside the door, spin the dial to scramble the code.
> - Close the windows and shutters.
> - Turn off lights, air conditioning, and any appliances.
> - Take the trash to the bins on Rua Dom Nuno de Mascarenhas.
> - Make sure you have all your belongings.
>
> Thank you for staying with us. Travel safely.
>
> **Loved your stay?** Leave us a Google review. It really helps small hosts like us. (About 2 minutes.)
>
> [QR code → `https://g.page/r/Cewx9Po3sADdEBM/review`]

---

## Photos referenced

All photos live in `C:\marazul\project\website\assets\images\apartment-guide\<folder>\` (renamed from `appliance/` on 2026-05-14; parent folder still pending Stefania closing whatever has it open in Windows).

Currently uploaded by Stefania:

| Folder | Files | Used on page |
|---|---|---|
| `air-conditioning/` | 2 images | Page 5 |
| `dehumidifier/` | 3 images | Page 6 |
| `dishwasher/` | 4 images | Page 8 |
| `electric-panel/` | 4 images | Page 14 |
| `fire-extinguisher/` | 1 image | Page 14 |
| `fireplace/` | 2 images | Page 12 |
| `key-locker/` | 2 images | Page 4 |
| `microwave/` | 2 images | Page 10 |
| `oven/` | 5 images | Page 9 |
| `television/` | 1 image | Page 13 |
| `washing-machine/` | 6 images | Page 7 |
| `wifi-router/` | 1 image | Page 3 |

**Still needed from Stefania:**
- Coffee machine — overview + capsule cupboard shot (`coffee-machine-01.jpeg`, `coffee-machine-02.jpeg`)
- SUP — board + bag shot, for page 18 (`sup-01.jpeg`)

---

## Translations

Five languages: EN (master), PT, IT, ES, FR.

**Process:**
1. Stefania reviews + locks the English master copy.
2. Translation pass produces PT (Stefania native-checks, since she speaks it).
3. IT (Stefania native-checks — she's Italian).
4. ES (Stefania speaks Spanish; she can review).
5. FR (Stefania may need to ask a French-speaking friend or use a paid review; we draft, then native-check before print).

If Stefania doesn't want to handle FR review herself, we can either skip FR for the first print run (rely on EN for French guests) or run a quick paid native review through a service like Smartling / Gengo (~€30-40 for a 20-page booklet).

---

## What's needed from Stefania to lock the copy

| Section | Field | Status |
|---|---|---|
| Welcome (page 2) | Confirm tone + signature | ⏳ Review with Stefy |
| Page 4 | Key locker mechanics — confirm draft against the actual locker | ⏳ Stefy to review |
| Pages 5-13 | Appliance operating quirks for **each** unit (anything a guest commonly gets wrong) | ⏳ Stefy to walk through each appliance |
| Page 11 | Coffee machine photo | ⏳ Stefy to upload |
| Page 12 | Fireplace — confirm type (wood / electric / decorative), operation, safety wording | ⏳ Stefy to clarify |
| Page 14 | Electric panel location | ⏳ Stefy to confirm |
| Page 14 | Fire extinguisher location | ⏳ Stefy to confirm |
| Page 15 | 3-5 more restaurant recommendations | ⏳ Stefy to add |
| Page 17 | Taxi cooperative number | ⏳ Stefy to confirm |
| Page 18 | SUP photo | ⏳ Stefy to upload |
| Pages 19, 20 | Confirm | ✅ Locked (source content from Stefania's Lodgify text) |

---

## Open decisions for Stefania

1. **A5 vs A4 booklet** — A5 reads more like an intimate guide; A4 holds more content per page but feels less personal. **Recommendation: A5.**
2. **Page count** — 20 pages covers the proposed structure. Want to go shorter (16 pages) by combining sections, or longer (24 pages) for fuller restaurant + beach guides? **Recommendation: 20 pages.**
3. **All 5 languages in the first print run** — or start with EN + PT + IT (Stefania's own languages) and add ES + FR in a second run once the EN master is field-tested? **Recommendation: start with EN + PT + IT for the first physical run** (3 languages × 2 copies = 6 booklets), then add ES + FR once the EN master is proven.
4. **Quantity per language** — 2 copies per language (10 total at 5 languages; 6 at 3 languages). Want more? **Recommendation: 2 per language is enough — guests don't all read at once.**
5. **Photo style** — appliance photos in colour (more useful, more honest) or duotone (more editorial, more brand-cohesive)? **Recommendation: colour for utility, with a thin Atlantic Blue rule around each photo for brand consistency.**
6. **Cover design — Atlantic Blue or photo-led?** Blue is calmer, matches the rest of the print line. A photo cover (e.g., the apartment terrace) is warmer but breaks the visual rhythm of the other print pieces. **Recommendation: Atlantic Blue cover** (visual cohesion).
7. **Binding** — saddle-stitched (two staples) is standard. Want a folded fold-out instead (no binding, opens like a map)? **Recommendation: saddle-stitched** — feels more like a real guide, holds up better.

---

## Production

| Vendor | Cost (10 booklets, 20 pages, 5 languages) | Lead time | Notes |
|---|---|---|---|
| Local Lagos print shop | ~€80-120 | 3-5 days | Easiest to walk in, see a proof, adjust. **Recommended for first run.** |
| Online (Pixartprinting, Printful, Vistaprint booklet) | ~€90-130 | 7-10 days | Cheaper at scale; lead time is the constraint. |

**Quantity:** 10 booklets total — 2 per language × 5 languages. Reorder when one wears out (probably annually).

**Proof check:**
- [ ] Page numbering matches the contents page across all 5 languages.
- [ ] All photos render sharp at print size (no pixellation).
- [ ] QR codes for transit links + review URL scan cleanly from arm's length.
- [ ] Atlantic Blue colour matches the other print pieces (Pantone 7700 C / CMYK 78/40/35/25).
- [ ] No orphaned headings on a final page.
- [ ] Native speakers have reviewed each translation.

---

## Cross-references

- `questions-for-stefania.md` — items #8 (welcome card content, merged into table flip), #8b (this folder), #18 (legal data referenced in emergency / contacts), #30 (Lodgify message text — same source).
- `print-table-tent-spec.md` — the at-a-glance companion. Folder and flip stand are designed as a pair.
- `print-business-card-spec.md`, `print-review-card-spec.md` — same brand tokens.
- `C:\marazul\project\website\assets\images\apartment-guide\` — all appliance photos.

---

## Next steps after Stefania approves the structure

1. Stefania walks through each appliance page and either confirms my draft or replaces it with the actual operating steps for that unit. We can do this together in a 30-minute call.
2. Stefania uploads the missing photos (coffee machine, SUP board).
3. Stefania fills in the locations / numbers marked `[Stefy to confirm]` (electric panel, fire extinguisher, taxi cooperative).
4. EN master is locked.
5. Translation pass → PT, IT, ES, FR with native-speaker reviews.
6. We write the **claude-design prompt** to lay out the 20 pages in print-ready PDF form for each language.
7. Proof at the local Lagos print shop.
8. Bulk print 10 booklets (or 6 if we start with EN + PT + IT only).
