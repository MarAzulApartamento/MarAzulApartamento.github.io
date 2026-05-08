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
  // Portuguese law (Decreto-Lei 128/2014) requires the Alojamento Local
  // registration number on every public-facing channel. Empty until Stefania
  // supplies it (see questions-for-stefania.md item #18). Footer + Terms
  // render the AL declaration only when this is non-empty.
  alNumber: '',
  // Public phone in international display format. Same number as WHATSAPP.number
  // but human-readable. Used in JSON-LD `telephone` and any future visible
  // phone display. Already public on GBP, Booking.com, Airbnb, Lodgify.
  phone: '+351 936 083 766',
  phoneE164: '+351936083766',
  // Check-in / check-out per Terms (terms-en.md). HH:MM:SS for schema.org Time.
  checkinTime: '15:00:00',
  checkoutTime: '11:00:00',
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

// Cloudflare Web Analytics token. Public site identifier (not a secret),
// set in Cloudflare Pages dashboard → Environment Variables. When empty
// the beacon is not injected, which is the right behaviour for local dev.
// Cookieless, no consent banner needed; declared on the Privacy + Cookie
// policy pages already.
const _cfAnalyticsToken =
  ((import.meta as any).env?.PUBLIC_CF_ANALYTICS_TOKEN as string | undefined) ||
  process.env.PUBLIC_CF_ANALYTICS_TOKEN ||
  '';

// GA4 Measurement ID. When empty, no GA4 script is injected and the Klaro
// consent banner stays inactive (since GA4 is currently the only consent-
// required service). Once set, Klaro initialises and asks for consent; GA4
// only loads after the user accepts.
const _ga4Id =
  ((import.meta as any).env?.PUBLIC_GA4_ID as string | undefined) ||
  process.env.PUBLIC_GA4_ID ||
  '';

export const ANALYTICS = {
  cfAnalyticsToken: _cfAnalyticsToken,
  ga4Id: _ga4Id,
  // Convenience: any consent-required service active?
  get consentRequired() {
    return Boolean(this.ga4Id);
  },
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
