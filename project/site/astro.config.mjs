// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const SITE = process.env.SITE_URL || 'https://apartamentomarazul.com';

// https://astro.build/config
export default defineConfig({
  site: SITE,

  // Multilingual routing — English is the default (unprefixed: /).
  // Other languages live at /pt/, /de/, /nl/, /fr/.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt', 'de', 'nl', 'fr'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },

  // Trailing-slash policy — Cloudflare Pages handles either; pick "ignore" for flexibility.
  trailingSlash: 'ignore',

  // Image optimization — Sharp pipeline for responsive WebP/AVIF.
  image: {
    responsiveStyles: true,
  },

  // Build output is fully static — no SSR. Cloudflare Pages serves the dist/ folder.
  output: 'static',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-GB',
          pt: 'pt-PT',
          de: 'de-DE',
          nl: 'nl-NL',
          fr: 'fr-FR',
        },
      },
    }),
  ],
});
