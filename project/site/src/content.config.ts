import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Reviews — manually entered by the owner via Sveltia CMS.
 * Sources: Google, Airbnb, Booking.com, Direct.
 * Sprint 4 adds GBP API auto-pull for Google reviews; others stay manual.
 */
const reviews = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/reviews' }),
  schema: z.object({
    name: z.string(),
    date: z.string(), // ISO YYYY-MM-DD or "Month YYYY"
    source: z.enum(['Google', 'Airbnb', 'Booking.com', 'Direct']),
    rating: z.number().min(1).max(5).default(5),
    language: z.enum(['en', 'pt', 'es', 'it', 'de', 'nl', 'fr']).default('en'),
    quote: z.string(),
    featured: z.boolean().default(false),
  }),
});

/**
 * FAQs — owner-editable Q&A surfaced on the homepage accordion.
 * Sprint 3 adds per-language variants.
 */
const faqs = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/faqs' }),
  schema: z.object({
    question: z.string(),
    order: z.number().default(0),
    language: z.enum(['en', 'pt', 'es', 'it', 'de', 'nl', 'fr']).default('en'),
  }),
});

/**
 * Legal pages — Privacy, Cookies, Terms. One markdown file per page per locale.
 * Slug is `{page}-{lang}` so files coexist in a flat folder. Owner-editable
 * via Sveltia CMS once translated.
 */
const legal = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/legal' }),
  schema: z.object({
    page: z.enum(['privacy', 'cookies', 'terms']),
    language: z.enum(['en', 'pt', 'es', 'it', 'de', 'nl', 'fr']),
    title: z.string(),
    description: z.string(),
    lastUpdated: z.string(), // YYYY-MM-DD
  }),
});

export const collections = { reviews, faqs, legal };
