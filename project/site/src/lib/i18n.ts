/**
 * Translation string loader.
 * Each locale has a JSON file at src/i18n/<lang>.json.
 * Non-default locales merge against EN as fallback, so missing keys
 * gracefully render in English until translated.
 *
 * Usage in a component:
 *   import { getStrings } from '../lib/i18n';
 *   const t = getStrings(Astro.currentLocale).hero;
 *   // ...then use {t.title} etc.
 */

import en from '../i18n/en.json';
import pt from '../i18n/pt.json';
import es from '../i18n/es.json';
import it from '../i18n/it.json';
import de from '../i18n/de.json';
import nl from '../i18n/nl.json';
import fr from '../i18n/fr.json';

const dictionaries: Record<string, unknown> = { en, pt, es, it, de, nl, fr };

export type Strings = typeof en;

/**
 * Deep-merge two objects with `override` taking precedence. Arrays are
 * replaced entirely if present in override, not merged element-wise.
 */
function deepMerge<T>(fallback: T, override: unknown): T {
  if (!override || typeof override !== 'object' || Array.isArray(override)) {
    return (override !== undefined ? override : fallback) as T;
  }
  if (typeof fallback !== 'object' || Array.isArray(fallback) || fallback === null) {
    return override as T;
  }
  const result: Record<string, unknown> = { ...(fallback as Record<string, unknown>) };
  for (const key of Object.keys(override as Record<string, unknown>)) {
    const o = (override as Record<string, unknown>)[key];
    const f = (fallback as Record<string, unknown>)[key];
    if (o === undefined) continue;
    if (f && typeof f === 'object' && !Array.isArray(f) && o && typeof o === 'object' && !Array.isArray(o)) {
      result[key] = deepMerge(f, o);
    } else {
      result[key] = o;
    }
  }
  return result as T;
}

/**
 * Get the translation strings for a given locale, with EN as fallback
 * for any keys missing from the locale's dictionary.
 */
export function getStrings(lang: string | undefined): Strings {
  const key = lang || 'en';
  const localized = dictionaries[key] || dictionaries.en;
  return deepMerge(en as Strings, localized) as Strings;
}

/**
 * Substitute {placeholders} in a template with values from a dict.
 * `interp("From €{n} per night", { n: 100 })` → "From €100 per night"
 */
export function interp(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? `{${key}}`));
}
