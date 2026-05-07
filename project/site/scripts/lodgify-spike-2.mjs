/**
 * Lodgify spike round 2 — read-only.
 * Fixes the 400/404s from round 1 by:
 *  - Pulling the actual room_type id from /properties/{id}/rooms
 *  - Using it for the /quote and /rates/calendar calls
 *  - Trying alternative paths for reviews, webhooks, messaging, account
 *  - Pulling booking source distribution from the 5 existing bookings
 */

import { readFileSync, writeFileSync } from 'node:fs';
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

const BASE = 'https://api.lodgify.com';
const HEADERS = { 'X-ApiKey': KEY, Accept: 'application/json' };

async function get(url) {
  const start = Date.now();
  const res = await fetch(url, { headers: HEADERS });
  const text = await res.text();
  let json = null;
  try {
    json = JSON.parse(text);
  } catch {
    json = text.slice(0, 200);
  }
  return { status: res.status, ok: res.ok, ms: Date.now() - start, json };
}

const today = new Date();
const FROM = new Date(today.getTime() + 1 * 24 * 3600 * 1000).toISOString().slice(0, 10);
const TO = new Date(today.getTime() + 4 * 24 * 3600 * 1000).toISOString().slice(0, 10);
const END30 = new Date(today.getTime() + 30 * 24 * 3600 * 1000).toISOString().slice(0, 10);

// --- 1. Get the room type id from /rooms ---
const roomsRes = await get(`${BASE}/v2/properties/${PROPERTY_ID}/rooms`);
const roomTypeId = roomsRes.json?.[0]?.id;
console.log(`Resolved room_type_id: ${roomTypeId}`);

// --- 2. Refined probes ---
const probes = [
  // Properly formed quote
  {
    label: 'Quote — 3 nights, 2 adults (with room type id)',
    url: `${BASE}/v2/quote/${PROPERTY_ID}?roomTypes[0].Id=${roomTypeId}&from=${FROM}&to=${TO}&guest_breakdown[adults]=2`,
  },
  // Rates calendar with daily granularity
  {
    label: 'Rates calendar (alt: house_id param)',
    url: `${BASE}/v2/rates/calendar?HouseId=${PROPERTY_ID}&RoomTypeId=${roomTypeId}&StartDate=${FROM}&EndDate=${END30}`,
  },
  // Reviews — alternative paths
  { label: 'Reviews v1', url: `${BASE}/v1/reviews?size=10` },
  { label: 'Reviews v2 (no /reservations prefix)', url: `${BASE}/v2/reviews?size=10` },
  // Webhooks
  { label: 'Webhooks v1 root', url: `${BASE}/v1/webhooks` },
  { label: 'Webhooks v2', url: `${BASE}/v2/webhooks` },
  { label: 'Webhooks subscriptions v1', url: `${BASE}/v1/webhooks/subscriptions` },
  // Messaging
  { label: 'Messaging threads v1', url: `${BASE}/v1/messaging` },
  { label: 'Messaging conversations v2', url: `${BASE}/v2/messaging/conversations` },
  // Account
  { label: 'Account v1', url: `${BASE}/v1/account` },
  { label: 'User v2', url: `${BASE}/v2/account` },
  // Source-attribution lookup
  {
    label: 'Bookings (filter by source) — direct',
    url: `${BASE}/v2/reservations/bookings?source=Manual&size=10`,
  },
  // External listings (channel manager)
  { label: 'External bookings', url: `${BASE}/v2/external/bookings?size=5` },
  // Discount codes
  { label: 'Promotion codes', url: `${BASE}/v2/promotioncodes` },
  { label: 'Promotion codes alt', url: `${BASE}/v2/discounts` },
  // Property amenities
  { label: 'Property amenities', url: `${BASE}/v2/properties/${PROPERTY_ID}/amenities` },
  // Reviews on the property
  { label: 'Property reviews', url: `${BASE}/v2/properties/${PROPERTY_ID}/reviews` },
  // Translations
  { label: 'Property translations', url: `${BASE}/v2/properties/${PROPERTY_ID}/translations` },
];

console.log('\nRound 2 probes\n=============');
const results = [];
for (const p of probes) {
  const r = await get(p.url);
  const icon = r.ok ? '✓' : r.status >= 400 && r.status < 500 ? '⚠' : '✗';
  let summary = '';
  if (r.json && typeof r.json === 'object' && r.json !== null) {
    if (Array.isArray(r.json)) {
      summary = `array len=${r.json.length}`;
      if (r.json[0]) summary += ` keys=[${Object.keys(r.json[0]).slice(0, 6).join(',')}...]`;
    } else if (r.json.items) {
      summary = `items=${r.json.items.length} totalCount=${r.json.count ?? '?'}`;
    } else if (r.json.message) {
      summary = `error: ${r.json.message}`;
    } else {
      summary = `keys=[${Object.keys(r.json).slice(0, 8).join(',')}]`;
    }
  } else {
    summary = String(r.json).slice(0, 80);
  }
  console.log(`${icon} [${String(r.status).padStart(3)}] ${p.label}`);
  console.log(`   ${summary}`);
  results.push({ label: p.label, status: r.status, ok: r.ok, summary });
}

// --- 3. Booking source distribution from existing 5 bookings ---
const bookingsRes = await get(`${BASE}/v2/reservations/bookings?size=50`);
if (bookingsRes.ok && bookingsRes.json?.items) {
  const items = bookingsRes.json.items;
  console.log(`\nBookings analysis (${items.length} found):`);
  const sources = {};
  const statuses = {};
  for (const b of items) {
    sources[b.source || 'Unknown'] = (sources[b.source || 'Unknown'] || 0) + 1;
    statuses[b.status || 'Unknown'] = (statuses[b.status || 'Unknown'] || 0) + 1;
  }
  console.log('  by source:', sources);
  console.log('  by status:', statuses);
}

writeFileSync('project/docs/lodgify-capabilities-round2.json', JSON.stringify(results, null, 2));
console.log('\nWritten: project/docs/lodgify-capabilities-round2.json');
