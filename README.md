# Apartamento Mar Azul

The website rebuild for [apartamentomarazul.com](https://apartamentomarazul.com), a short-stay apartment in Lagos, Algarve.

## Branches

- **`main`** — current live site, served by GitHub Pages at `marazulapartamento.github.io` and `apartamentomarazul.com`. Do not develop here.
- **`redesign/v2`** — new Astro build. Deploys to Cloudflare Pages staging URL until cutover day.

## Stack

- Astro (static output, multilingual via built-in i18n routing)
- Sveltia CMS for non-developer content edits
- Tailwind CSS
- Cloudflare Pages hosting

## Local development

```
cd project/site
npm install
npm run dev
```

## Environment variables

Copy `.env.example` to `.env` and fill in real values. `.env` is gitignored.

For production: set the same variables in Cloudflare Pages → Project → Settings → Environment variables.

## Project layout

```
.
├── project/
│   ├── CLAUDE.md                       — project brief
│   ├── website/assets/                 — source images, video, brand docs
│   └── site/                           — Astro project (the website itself)
├── .env.example
├── .gitignore
└── README.md
```
