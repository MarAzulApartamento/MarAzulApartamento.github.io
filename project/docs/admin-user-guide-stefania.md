# How to use the CMS — quick guide for Stefania

**For:** Stefania
**What this is:** the friendly version of the technical CMS docs. Take 10 minutes to read it once, refer back when you need it.

---

## What the CMS is

The CMS lives at `https://apartamentomarazul.com/admin/` (or whichever URL the site runs at before launch). It's how you edit the site without touching code or git.

When you save a change, the editor commits it to GitHub automatically. Within ~2 minutes the live site rebuilds with your change. Every save is in version history — nothing is ever permanently lost.

---

## How to log in

1. Open `/admin/` in any browser.
2. Click **Login with GitHub**.
3. Sign in with your GitHub account (Luis added you as a collaborator on the repository).
4. Approve the access prompt the first time.
5. You land on the editor dashboard.

If the login button does nothing, your account hasn't been added as a collaborator yet. Tell Luis.

---

## What you'll see on the left sidebar

Five sections, each does a different job:

### 1. Reviews

Guest reviews shown on the homepage. Up to 5 are featured at any time.

**To add a review:** Click **Reviews** → **+ Add Review**. Fill in:
- First name (just first name; preserves guest privacy)
- Stay date (e.g. "April 2026")
- Source platform (Google, Airbnb, Booking.com, or Direct)
- Star rating (1–5)
- Original review language
- The quote — paste exactly as written by the guest, don't rewrite
- Tick "Show on homepage?" if you want it featured

Click **Save** in the top right. Wait ~2 minutes; the live site updates.

**To edit:** click the review name → edit → Save.

**To remove:** click the review → **Delete** at the top right → confirm.

---

### 2. FAQs

The questions on the homepage FAQ section.

**To add an FAQ:** Click **FAQs** → **+ Add FAQ entry**. Fill in:
- Question
- Display order (lower = appears first; pick numbers like 5, 10, 15 so you can squeeze new ones in between later)
- Language (start with `en` for English; you can add the same FAQ in PT/ES/IT later)
- Answer (use plain prose; you can do simple bold/italic with markdown)

**Tip:** keep answers under 60 words. Long FAQs lose people.

---

### 3. Site copy

This is the big one. Every word visible on the homepage and `/book` page lives here, in one file per language.

**Click `Site copy` → `🇬🇧 English (master)`** to start. The form is grouped by section (Hero, About, Perks, etc.). Each section has fields for the visible text. Edit any field, click Save, the site updates.

**Important:** some text contains placeholders in curly braces — `{priceFrom}`, `{n}`, `{minStay}`, `{rating}`, `{count}`. Don't delete or rename them. The site fills them in with real numbers. Just write the words around the placeholders.

Example: the field "Min stay short" has the value `{n}-night minimum`. The site renders this as `3-night minimum` (or whatever the actual minimum is). If you change it to `Minimum {n} nights` it still works.

**Once English is good, the other six languages need updating to match.** Translate carefully or ask Luis to refresh translations against the new English.

**Brand voice rules** (locked, don't break):
- No em dashes (—). Use a full stop or rewrite.
- Don't use the words "sea view", "ocean view", "luxurious", "ultimate", "dream", "escape" as headline framing.
- Direct booking advantage = best price. Stay-experience perks (parking, Wi-Fi, cancellation, WhatsApp line) apply on every channel — don't position them as direct-only.
- WhatsApp CTAs always include the response-time line ("we may answer within 12 hours" or its translation).

---

### 4. Media

Photos and the About video.

**To swap a photo:** click **Media** → **Media settings**. You'll see image-picker fields: Hero photo, About video, About video poster, Owner avatar, plus a list of Gallery items. Click any image, the media library opens, upload a replacement.

**To add a new gallery photo:**
1. **Media settings** → Gallery items → **+ Add to Gallery items**.
2. Fill in:
   - Photo ID (e.g. `marazul-12` — match the file name pattern)
   - Photo file (upload via the picker)
   - Layout span: usually leave blank. The first photo (`marazul-01`) uses `wide tall` to be the feature tile; only ever set this on one item.
3. Save.
4. Then go to **Site copy** → English → **Gallery** → **Photo captions** → **+ Add caption** → enter the same Photo ID and a caption text.
5. Repeat the caption step for each language.

**Photo file requirements:**
- JPG or JPEG (we'll auto-generate the optimised AVIF/WebP variants on the next deploy).
- 1920 px wide max, ideally landscape orientation.
- Under 1 MB before processing.
- No people in the photos unless they've explicitly agreed (privacy).

---

### 5. Legal pages

Privacy Notice, Cookie Policy, Booking Terms — one file per language.

These are sensitive. **Avoid editing the structure or major sections without Luis.** Small edits (correcting a typo, updating a date, fixing an email address) are fine.

If you need a substantial change (e.g. new processor added, cancellation policy changed), tell Luis first so we can update all seven language versions consistently.

Always refresh the "Last updated" date on the page when you change content.

---

## Saving and publishing

The Save button (top right) commits to GitHub immediately. There's no "draft" vs "publish" — every save is published.

**If you make a mistake:** the change is in git history. Tell Luis, we revert in 2 minutes.

**Best practice:** save in small chunks. Don't edit ten things across five files and save them all at once. Save as you go so each commit has a clear "what changed" message.

---

## What NOT to touch

- The technical structure of any file (field names, IDs, slugs). Edit the values, don't rename the keys.
- Anything inside `/admin/` itself (the config files; only Luis edits these).
- The `klaro/`, `leaflet/`, `_headers`, or `robots.txt` files (not visible from the CMS — but mentioning them so you know they exist).

---

## Common tasks

| I want to... | Where | Steps |
|---|---|---|
| Add a guest review | Reviews | + Add Review → fill in → Save |
| Reply to a question | FAQs | Edit existing → update answer → Save |
| Replace a gallery photo | Media → Media settings → Gallery items | Click the photo → upload new → Save |
| Edit the home page hero text | Site copy → 🇬🇧 English → Hero | Edit Title / Subtitle → Save |
| Update the WhatsApp microcopy | Site copy → 🇬🇧 English → Common UI → WhatsApp microcopy | Edit → Save (then update other 6 languages) |
| Change the About video | Media → Media settings → About → Video | Upload new MP4 → Save |
| Add a Portuguese FAQ | FAQs | + Add → Language: pt → Save |
| Update cancellation policy in Terms | Legal pages → Filter: Terms → English | Edit body → refresh Last updated date → Save |

---

## Quick reference

- **Login:** `apartamentomarazul.com/admin/` → GitHub
- **Save:** top-right button on every editor screen
- **Preview before save:** Sveltia shows a live preview pane on the right of the editor
- **History / undo:** every save is in git; ask Luis to revert if needed
- **Help:** Sveltia's docs at https://github.com/sveltia/sveltia-cms

If something looks wrong on the live site after a save, refresh after 2-3 minutes (Cloudflare needs that long to rebuild). If it's still wrong after 10 minutes, tell Luis.
