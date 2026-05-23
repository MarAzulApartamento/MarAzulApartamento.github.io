# NAP audit — Apartamento Mar Azul

**Audit date:** 2026-05-08
**Sprint:** 4 (NAP + OTA consistency)
**Why this matters:** Local SEO ranking signals depend on the same Name / Address / Phone / Website appearing **identically** across the open web. Discrepancies (different phone formats, abbreviated addresses, alternate names) split entity authority across the search index and weaken the brand's ability to claim its branded knowledge panel.

---

## Canonical NAP (single source of truth)

Use these exact strings everywhere. Anything that differs is a citation error.

| Field | Canonical value | Notes |
|---|---|---|
| **Name** | `Apartamento Mar Azul` | Exactly. No padding ("Apartamento Mar Azul Lagos", "Apartamento Mar Azul - Holiday Apartment", etc. — Google can suspend GBP for keyword stuffing). |
| **Street** | `Rua Dom Luís da Silveira lote V 44 B` | Lower-case "lote" is correct Portuguese style. |
| **Postal code** | `8600-575` | With the hyphen. |
| **City** | `Lagos` | |
| **Region** | `Algarve` | |
| **Country** | `Portugal` | Or `PT` (ISO-3166 alpha-2) for structured data. |
| **Full address (display)** | `Rua Dom Luís da Silveira lote V 44 B, 8600-575 Lagos, Algarve, Portugal` | Use this exact string in directories that take a single-line address. |
| **Phone (international)** | `+351 936 083 766` | E.164 format with one space after country code. |
| **Phone (E.164 packed)** | `+351936083766` | Use for `tel:` links and WhatsApp `wa.me`. |
| **Website** | `https://apartamentomarazul.com` | After cutover. Pre-cutover the redirect target is `https://apartamento-mar-azul.lodgify.com/`. |
| **Latitude / Longitude** | `37.0997, -8.6745` | From Lodgify property record. Used for VacationRental schema + map. |
| **Alojamento Local registration** | `[TO CONFIRM]` | Stefania to supply (item #18 in questions doc). Required by Portuguese law on every public-facing channel. |

**Email canonical** is **`stefy@apartamentomarazul.com`** — live 2026-05-16 (item #16). Forwards to `marazulapartamento@gmail.com`; Stefy sends from it via Gmail "Send mail as". Use the brand address everywhere public-facing.

---

## On-site audit (under our control)

### `src/lib/config.ts` (source of truth)
```ts
PROPERTY.address = 'Rua Dom Luís da Silveira lote V 44 B, 8600-575 Lagos, Algarve, Portugal'
PROPERTY.city = 'Lagos'
PROPERTY.region = 'Algarve'
PROPERTY.country = 'Portugal'
PROPERTY.countryCode = 'PT'
PROPERTY.postalCode = '8600-575'
PROPERTY.geo = { latitude: 37.0997, longitude: -8.6745 }
```
✅ Matches canonical.

### Footer (`src/components/Footer.astro`)
- Renders `{PROPERTY.address}`. ✅ Matches.
- **Missing:** AL registration number. Portuguese law (Decreto-Lei 128/2014, alterado pela Lei 62/2018) requires the AL number on every advertising channel. Once Stefania provides it, add `PROPERTY.alNumber` to config.ts and render it under the address as `AL: <number>`.

### JSON-LD VacationRental (`src/layouts/BaseLayout.astro`)
- ✅ `name`, `address` block, `geo`, `numberOfRooms`, `occupancy`, `petsAllowed: false`, `amenityFeature[]` all present.
- ⚠️ **Missing fields that strengthen entity matching:**
  - `telephone` — exposing in structured data is fine since the same number is already public on GBP, Booking.com, Airbnb, Lodgify. Skip only if Stefania prefers a click-to-WhatsApp-only public posture.
  - `containedInPlace` → `{ "@type": "Place", "name": "Lagos, Algarve, Portugal" }` — disambiguates from the other "Apartamento Mar Azul" at R. Convento da Trindade 85.
  - `identifier` → `{ "@type": "PropertyValue", "propertyID": "AL", "value": "<AL number>" }` once supplied.
  - `priceRange` → `"€€"` or actual `"€95-€180/night"` — small ranking signal.
  - `currenciesAccepted` → `"EUR"`.
  - `checkinTime` / `checkoutTime` → `"15:00"` / `"11:00"` (per Terms page).
- **Recommendation:** wire all of the above behind config-supplied values once Stefania confirms phone-disclosure preference and AL number.

### Per-locale meta titles (`src/i18n/*.json`)
- All locales include `Apartamento Mar Azul` in the meta title. ✅ Brand consistency preserved.
- Address is not in meta titles. ✅ Correct (avoids title bloat).

### Legal pages (`src/content/legal/*-en.md`)
- Privacy: `[TO CONFIRM]` for legal address (controller's registered address — may differ from property address).
- Terms: `[TO CONFIRM]` for AL number; property address embedded inline. ⚠️ Once `PROPERTY.address` is the source of truth, render the address from config.ts in Terms via interpolation rather than hard-coding it in Markdown — prevents drift.

### Sitemap (`@astrojs/sitemap`)
- Generated automatically. URLs match `https://apartamentomarazul.com/...`. ✅ Matches once `SITE.url` is set in production env.

### Robots.txt
- ⚠️ **Not present in `public/`.** Add a minimal `robots.txt` allowing all + sitemap location. Low effort; needed for clean indexing.

---

## Off-platform audit (needs Stefania's confirmation)

For each surface below, Stefania (or owner) checks the listing and confirms it matches the canonical NAP exactly. Mismatches go in column 3 with the corrected value to apply.

| Surface | What to check | Mismatch / fix |
|---|---|---|
| **Google Business Profile** | Name, address, phone (`+351 936 083 766`), website (post-launch), AL number, hours, category | ⚠️ Phone currently `936 083 766` (no `+351`) — add it. Website still points to `apartamento-mar-azul.lodgify.com` — switch on cutover. See `gbp-audit.md` for the full GBP optimisation list. |
| **Booking.com** listing | Same. Verify property name has no padding ("Apartamento Mar Azul" only). | Owner verifies. |
| **Airbnb** listing | Same. Airbnb hides street address; check city + neighbourhood spelling. | Owner verifies. |
| **Vrbo** listing | Same. | Owner verifies. |
| **Lodgify dashboard** | Property record name + address + AL number + phone + website. This is the source for the JSON-LD pulled at build time, so drift here propagates to the site. | Owner verifies. |
| **Instagram** bio (`@apartamento_marazul`) | Full name + city in bio; link in bio = `apartamentomarazul.com` | Owner verifies. |
| **Facebook page** | Page name = `Apartamento Mar Azul`. About section: full address, phone, website, hours. | Owner verifies. |
| **Apple Maps Connect** | Free claim. Submit listing if not already. | Owner submits. |
| **Bing Places** | Free claim. Often forgotten; matters for Edge / DuckDuckGo. | Owner submits. |
| **TripAdvisor** | Currently only competitor "Hotel Mar Azul" / "Villa Mar Azul" appear; our property has no listing. Create a free TripAdvisor business listing. | Owner submits. |
| **Visit Algarve** directory | Free local-tourism directory listing. | Owner submits. |
| **Visit Portugal** directory | Same. | Owner submits. |
| **Câmara Municipal Lagos** | Some municipalities maintain a tourism directory; check. | Owner verifies. |

---

## Per-language NAP considerations

The canonical NAP doesn't change per language. Keep these stable across all 7 i18n files:

- **Phone** displays as `+351 936 083 766` everywhere. Don't localise the format (don't write "(0) 936 083 766" for a Portuguese audience or "00 351 ..." for German callers — international format is universal).
- **Address** stays as Portuguese street name in every language. Don't translate "Rua" to "Rue" / "Calle" / "Straße". Local language readers expect the original; postal services need the original.
- **City** = `Lagos` in every language. **Region** = `Algarve` in every language (no localisation).
- **Country** = `Portugal` (use the local-language form only when the rest of the surrounding sentence is in that language and the country comes up in narrative copy, not in a structured address block).
- **AL number** stays as the literal string Stefania provides; no formatting per language.

---

## Findings → action list (priority order)

### High impact, low effort

1. **Add `+351` prefix to GBP phone.** GBP dashboard edit. Item #4 in `questions-for-stefania.md` already covers this.
2. **Switch GBP website link to `https://apartamentomarazul.com`.** Defer until Sprint 9 cutover.
3. **Render AL number in site footer** once Stefania supplies it. Add `PROPERTY.alNumber` to `config.ts` and a one-line Footer entry.
4. **Add `robots.txt`** to `public/`. Allow all, point at sitemap. ~5 minutes.
5. **Move property address out of Terms markdown** and interpolate from `PROPERTY.address` in `LegalLayout.astro` (or via a custom remark plugin). Single source of truth. Modest refactor.

### Medium impact, low effort

6. **Add `telephone`, `containedInPlace`, `priceRange`, `currenciesAccepted`, `checkinTime`, `checkoutTime` to JSON-LD.** Pending Stefania's "is it OK to expose the phone in structured data" decision (likely yes since it's already on GBP/OTAs).
7. **Apple Maps Connect submission.** Free; takes ~10 minutes from owner.
8. **Bing Places claim.** Same.
9. **TripAdvisor business listing.** Free; ~20 minutes; only matters because competitors already have it.

### High impact, higher effort

10. **AL number propagation** across every channel once supplied: GBP description, Booking.com listing details, Airbnb listing details, Vrbo, Lodgify, Instagram bio, Facebook About. Stefania does each. Document the steps in a follow-up Sprint 4 work order.
11. **Create one-page NAP citation worksheet** for Stefania: a printable list with the canonical NAP block at the top + a checkbox per directory / OTA + a column for "verified date." Quarterly review.

### Open dependencies

- ⏸️ All edits to live OTA listings wait on Stefania (we don't have credentials and shouldn't have them).
- ⏸️ AL number propagation waits on item #18 in `questions-for-stefania.md`.
- ⏸️ Phone disclosure in structured data waits on Stefania's preference (default: yes).

---

## Re-audit cadence

| Trigger | Action |
|---|---|
| AL number provided | Update site (footer + JSON-LD + Terms). Re-audit all OTA listings to verify AL appears. |
| Phone changes | Update `.env.local` + GBP + every OTA listing in one sitting. |
| Address changes | Property doesn't move, but if it ever does: update `config.ts`, GBP, every OTA, every directory. Re-run this audit. |
| Brand email forwarding set up | Replace `[TO CONFIRM]` privacy email everywhere. |
| Quarterly | Spot-check the canonical NAP against GBP, Booking.com, Airbnb. Look for spelling drift, OTA auto-edits to title, phone format changes. |

---

## What's not in scope here

- **Backlinks / citation building.** Local-citation services (Yext, Whitespark) build NAP citations automatically across hundreds of directories. Useful for chains; overkill for a single property. Stick to the manual list above.
- **Schema beyond VacationRental.** `LocalBusiness`, `Hotel`, `LodgingBusiness` are alternative schemas; we pick `VacationRental` because it's the most specific and Google rewards specificity.
- **Google reviews aggregation.** Sprint 4 separate task — pull reviews from GBP API into the site's Reviews collection.
