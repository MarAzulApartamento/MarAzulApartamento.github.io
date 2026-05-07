/**
 * Site-level constants. Single source of truth for things referenced across
 * components. Values here are stable; volatile data (prices, availability)
 * is fetched at build time via separate libs.
 */

export const SITE = {
  name: 'Apartamento Mar Azul',
  domain: 'apartamentomarazul.com',
  url: process.env.SITE_URL || 'https://apartamentomarazul.com',
  tagline: 'Algarvian Mood: Your Lagos Apartment',
};

export const PROPERTY = {
  address: 'Rua Dom Luís da Silveira lote V 44 B, 8600-575 Lagos, Algarve, Portugal',
  city: 'Lagos',
  region: 'Algarve',
  country: 'Portugal',
  countryCode: 'PT',
  postalCode: '8600-575',
  capacity: { min: 2, max: 4 },
  bedrooms: 1,
  bathrooms: 1,
  openSince: 'June 2025',
  hostName: 'Stefania',
  hostNickname: 'Stefy',
  languagesSpoken: ['Portuguese', 'Italian', 'English', 'Spanish'],
  geo: {
    // From Lodgify property record. Used for VacationRental schema + map.
    latitude: 37.0997,
    longitude: -8.6745,
  },
};

export const SOCIAL = {
  instagram: 'https://www.instagram.com/apartamento_marazul/',
  facebook: 'https://www.facebook.com/people/Apartamento-Mar-Azul',
};

// Astro/Vite exposes PUBLIC_-prefixed env vars on import.meta.env.
// Falls back to process.env for server contexts where one or the other
// is unavailable. Strips +, spaces, parentheses and dashes so any
// variation of the format (+351 912 345 678 or 351912345678) works.
const _waRaw =
  ((import.meta as any).env?.PUBLIC_WHATSAPP_NUMBER as string | undefined) ||
  process.env.PUBLIC_WHATSAPP_NUMBER ||
  '';
const _waNumber = _waRaw.replace(/[\s+()\-]/g, '');

const _waMessage =
  ((import.meta as any).env?.PUBLIC_WHATSAPP_DEFAULT_MESSAGE as string | undefined) ||
  process.env.PUBLIC_WHATSAPP_DEFAULT_MESSAGE ||
  "Olá! I'm interested in Apartamento Mar Azul.";

export const WHATSAPP = {
  number: _waNumber,
  defaultMessage: _waMessage,
  responseTime: 'we may answer within 12 hours',
};

export const LOCALES = ['en', 'pt', 'es', 'it', 'de', 'nl', 'fr'] as const;
export const DEFAULT_LOCALE = 'en';

export const LANGUAGE_LABELS: Record<typeof LOCALES[number], string> = {
  en: 'English',
  pt: 'Português',
  es: 'Español',
  it: 'Italiano',
  de: 'Deutsch',
  nl: 'Nederlands',
  fr: 'Français',
};
