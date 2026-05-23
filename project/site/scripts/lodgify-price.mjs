/**
 * Fetch the minimum nightly rate over the next 60 days from Lodgify.
 * Read-only. Used to populate the hero "From €X / night" badge.
 * Sprint 2 will call this at Astro build time; this script is a one-off probe.
 */

import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

function loadEnv(file) {
  const lines = readFileSync(file, 'utf8').split(/\r?\n/);
  const env = {};
  for (const line of lines) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (m) env[m[1]] = m[2].replace(/^['"]|['"]$/g, '');
  }
  return env;
}

const env = loadEnv(resolve('.env.local'));
const KEY = env.LODGIFY_API_KEY;
const PROPERTY_ID = env.LODGIFY_PROPERTY_ID;
const HEADERS = { 'X-ApiKey': KEY, Accept: 'application/json' };

const today = new Date();
const FROM = new Date(today.getTime() + 1 * 24 * 3600 * 1000).toISOString().slice(0, 10);
const TO = new Date(today.getTime() + 60 * 24 * 3600 * 1000).toISOString().slice(0, 10);

// Get room type id
const roomsRes = await fetch(`https://api.lodgify.com/v2/properties/${PROPERTY_ID}/rooms`, { headers: HEADERS });
const rooms = await roomsRes.json();
const ROOM_TYPE_ID = rooms?.[0]?.id;

// Get rates calendar
const url = `https://api.lodgify.com/v2/rates/calendar?HouseId=${PROPERTY_ID}&RoomTypeId=${ROOM_TYPE_ID}&StartDate=${FROM}&EndDate=${TO}`;
const ratesRes = await fetch(url, { headers: HEADERS });
const rates = await ratesRes.json();

// rates.calendar_items shape: array of { date, min_stay, ... rate-related fields }
// Lodgify field names vary; let me dump the first item to inspect.
const items = rates.calendar_items || [];
console.log(`Found ${items.length} calendar items.`);
if (items[0]) {
  console.log('First item shape:', Object.keys(items[0]));
  console.log('First 3 items:', JSON.stringify(items.slice(0, 3), null, 2));
}

// Each item has a `prices` array; each entry has `price_per_day`.
let minRate = Infinity;
let maxRate = 0;
const seen = new Set();
for (const item of items) {
  for (const p of (item.prices || [])) {
    const v = p.price_per_day;
    if (typeof v === 'number' && v > 0) {
      seen.add(v);
      if (v < minRate) minRate = v;
      if (v > maxRate) maxRate = v;
    }
  }
}

const currency = rates.rate_settings?.currency_code || 'EUR';
console.log(`\nDistinct nightly rates seen: ${[...seen].sort((a,b) => a-b).map(v => '€' + v).join(', ')}`);
console.log(`Min nightly rate over next 60 days: €${minRate}`);
console.log(`Max nightly rate over next 60 days: €${maxRate}`);
console.log(`Currency: ${currency}`);
console.log(`Note: minimum stay is ${items[0]?.prices?.[0]?.min_stay} nights.`);
