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

export interface CalendarData {
  /** Map of YYYY-MM-DD → price per night in EUR. Missing keys = no rate set. */
  rates: Record<string, number>;
  /** Set of YYYY-MM-DD strings the property is unavailable. */
  blocked: string[];
  /** Min stay (nights) — typically 3 for this property. */
  minStay: number;
  /** ISO 4217. */
  currency: string;
  /** True if data is from a live API call. */
  isLive: boolean;
  /** ISO date strings of the start of months we have data for. */
  monthsCovered: string[];
}

const CALENDAR_FALLBACK: CalendarData = {
  rates: {},
  blocked: [],
  minStay: 3,
  currency: 'EUR',
  isLive: false,
  monthsCovered: [],
};

/**
 * Fetch availability + rates for the next `monthsAhead` months, starting today.
 * Returns a calendar JSON the client-side picker reads to render and price stays.
 */
export async function fetchCalendarData(monthsAhead: number = 6): Promise<CalendarData> {
  const { apiKey, propertyId } = getEnv();
  if (!apiKey || !propertyId) {
    console.warn('[lodgify] LODGIFY_API_KEY or LODGIFY_PROPERTY_ID missing; using empty calendar.');
    return CALENDAR_FALLBACK;
  }

  try {
    const rooms = await lodgifyGet<Array<{ id: number }>>(`/v2/properties/${propertyId}/rooms`, apiKey);
    const roomTypeId = rooms?.[0]?.id;
    if (!roomTypeId) return CALENDAR_FALLBACK;

    // Use string-based ISO dates to avoid timezone shift bugs
    // (toISOString() converts to UTC and can land on the previous month
    // when the local timezone is ahead of UTC, e.g., Portugal in summer).
    const today = new Date();
    const localYear = today.getFullYear();
    const localMonth = today.getMonth(); // 0-indexed
    const isoFromYM = (y: number, m: number, d: number) =>
      `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    const fromIso = isoFromYM(localYear, localMonth, 1);
    const lastM = localMonth + monthsAhead - 1;
    const lastY = localYear + Math.floor(lastM / 12);
    const lastMm = ((lastM % 12) + 12) % 12;
    const daysInLast = new Date(lastY, lastMm + 1, 0).getDate();
    const toIso = isoFromYM(lastY, lastMm, daysInLast);

    // Rates calendar: per-day prices.
    const rates = await lodgifyGet<{
      calendar_items: Array<{
        date: string;
        prices: Array<{ price_per_day?: number; min_stay?: number }>;
      }>;
      rate_settings?: { currency_code?: string };
    }>(
      `/v2/rates/calendar?HouseId=${propertyId}&RoomTypeId=${roomTypeId}&StartDate=${fromIso}&EndDate=${toIso}`,
      apiKey
    );

    const ratesMap: Record<string, number> = {};
    let minStay = Infinity;
    for (const item of rates.calendar_items || []) {
      const p = item.prices?.[0];
      if (p && typeof p.price_per_day === 'number' && p.price_per_day > 0) {
        ratesMap[item.date] = Math.round(p.price_per_day);
      }
      if (p && typeof p.min_stay === 'number' && p.min_stay > 0 && p.min_stay < minStay) {
        minStay = p.min_stay;
      }
    }

    // Availability: periods of available/unavailable.
    const availability = await lodgifyGet<Array<{
      periods: Array<{ start: string; end: string; available: number }>;
    }>>(
      `/v2/availability/${propertyId}?start=${fromIso}&end=${toIso}`,
      apiKey
    );

    const blockedSet = new Set<string>();
    for (const entry of availability) {
      for (const period of entry.periods || []) {
        // Lodgify "available" is 1 (yes) or 0 (no). Period is inclusive on both ends.
        if (period.available === 0) {
          const startD = new Date(period.start);
          const endD = new Date(period.end);
          for (let d = new Date(startD); d <= endD; d.setUTCDate(d.getUTCDate() + 1)) {
            blockedSet.add(d.toISOString().slice(0, 10));
          }
        }
      }
    }

    const monthsCovered: string[] = [];
    for (let i = 0; i < monthsAhead; i++) {
      const m = localMonth + i;
      const y = localYear + Math.floor(m / 12);
      const mm = ((m % 12) + 12) % 12;
      monthsCovered.push(isoFromYM(y, mm, 1));
    }

    return {
      rates: ratesMap,
      blocked: [...blockedSet].sort(),
      minStay: minStay === Infinity ? CALENDAR_FALLBACK.minStay : minStay,
      currency: rates.rate_settings?.currency_code || 'EUR',
      isLive: true,
      monthsCovered,
    };
  } catch (err) {
    console.warn('[lodgify] Calendar fetch failed, using empty calendar:', err);
    return CALENDAR_FALLBACK;
  }
}

/**
 * Build the Lodgify checkout URL with dates + guests pre-filled.
 * User lands directly on the checkout page with their selection.
 */
export function buildCheckoutUrl(opts: {
  arrival: string;
  departure: string;
  adults?: number;
  children?: number;
  infants?: number;
  language?: string;
}): string {
  const slug = 'apartamento-mar-azul';
  const rentalId = '671442';
  const lang = opts.language || 'en';
  const params = new URLSearchParams({
    arrival: opts.arrival,
    departure: opts.departure,
    adults: String(opts.adults ?? 2),
    children: String(opts.children ?? 0),
    infants: String(opts.infants ?? 0),
  });
  return `https://checkout.lodgify.com/${slug}/${lang}/?${params.toString()}#/${rentalId}`;
}
