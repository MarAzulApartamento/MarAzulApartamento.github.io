/**
 * Lodgify build-time data fetcher.
 * Called from .astro pages to populate price/availability at build time.
 * If API key/property ID are missing, returns sensible fallbacks so the
 * site still builds (e.g. Cloudflare Pages preview deploys without secrets).
 *
 * All endpoints used here are confirmed working from the Sprint 0 spike
 * (see project/docs/lodgify-capabilities.md).
 */

const API_BASE = 'https://api.lodgify.com';

export interface PriceData {
  /** Minimum nightly rate over next 60 days (rounded). */
  min: number;
  /** Maximum nightly rate over same window. */
  max: number;
  /** ISO 4217 currency code. */
  currency: string;
  /** Minimum stay in nights (typically 3 for this property). */
  minStay: number;
  /** Cleaning fee in property currency, if configured. */
  cleaningFee?: number;
  /** True if values came from a live API call; false if fallback was used. */
  isLive: boolean;
}

const FALLBACK: PriceData = {
  min: 100,
  max: 100,
  currency: 'EUR',
  minStay: 3,
  isLive: false,
};

function getEnv(): { apiKey?: string; propertyId?: string } {
  // Astro/Vite loads .env.local from the configured envDir (set to repo
  // root in astro.config.mjs). Both import.meta.env and process.env
  // surface non-PUBLIC vars at build time; we read both for safety
  // depending on how Astro injects them in the runtime context.
  const apiKey =
    (import.meta.env as Record<string, string | undefined>).LODGIFY_API_KEY ||
    process.env.LODGIFY_API_KEY;
  const propertyId =
    (import.meta.env as Record<string, string | undefined>).LODGIFY_PROPERTY_ID ||
    process.env.LODGIFY_PROPERTY_ID;
  return { apiKey, propertyId };
}

async function lodgifyGet<T>(path: string, apiKey: string): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'X-ApiKey': apiKey, Accept: 'application/json' },
  });
  if (!res.ok) throw new Error(`Lodgify ${path} returned ${res.status}`);
  return res.json() as Promise<T>;
}

export async function fetchPriceData(): Promise<PriceData> {
  const { apiKey, propertyId } = getEnv();
  if (!apiKey || !propertyId) {
    console.warn('[lodgify] LODGIFY_API_KEY or LODGIFY_PROPERTY_ID missing; using fallback price.');
    return FALLBACK;
  }

  try {
    // Resolve room type id (Lodgify rates require it).
    const rooms = await lodgifyGet<Array<{ id: number }>>(`/v2/properties/${propertyId}/rooms`, apiKey);
    const roomTypeId = rooms?.[0]?.id;
    if (!roomTypeId) return FALLBACK;

    // 60-day rate window starting tomorrow.
    const today = new Date();
    const from = new Date(today.getTime() + 24 * 3600 * 1000).toISOString().slice(0, 10);
    const to = new Date(today.getTime() + 60 * 24 * 3600 * 1000).toISOString().slice(0, 10);

    const rates = await lodgifyGet<{
      calendar_items: Array<{
        date: string;
        prices: Array<{ price_per_day?: number; min_stay?: number }>;
      }>;
      rate_settings?: {
        currency_code?: string;
        fees?: Array<{ fee_type: string; price: { amount?: number } }>;
      };
    }>(
      `/v2/rates/calendar?HouseId=${propertyId}&RoomTypeId=${roomTypeId}&StartDate=${from}&EndDate=${to}`,
      apiKey
    );

    let min = Infinity;
    let max = 0;
    let minStay = Infinity;
    for (const item of rates.calendar_items || []) {
      for (const p of item.prices || []) {
        if (typeof p.price_per_day === 'number' && p.price_per_day > 0) {
          if (p.price_per_day < min) min = p.price_per_day;
          if (p.price_per_day > max) max = p.price_per_day;
        }
        if (typeof p.min_stay === 'number' && p.min_stay > 0 && p.min_stay < minStay) {
          minStay = p.min_stay;
        }
      }
    }

    const currency = rates.rate_settings?.currency_code || 'EUR';
    const cleaningFee = rates.rate_settings?.fees?.find((f) => f.fee_type === 'CleaningFee')?.price?.amount;

    return {
      min: min === Infinity ? FALLBACK.min : Math.round(min),
      max: max === 0 ? FALLBACK.max : Math.round(max),
      currency,
      minStay: minStay === Infinity ? FALLBACK.minStay : minStay,
      cleaningFee,
      isLive: true,
    };
  } catch (err) {
    console.warn('[lodgify] Live price fetch failed, using fallback:', err);
    return FALLBACK;
  }
}
