/**
 * Lodgify Public API capability spike — READ-ONLY.
 *
 * Calls a series of GET endpoints to enumerate what's available with the
 * user's Professional-tier plan. Records HTTP status + sample response shape.
 *
 * Never makes POST/PUT/PATCH/DELETE calls. Never logs the API key.
 *
 * Run from repo root:  node project/site/scripts/lodgify-spike.mjs
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

// --- Load .env.local manually (avoid adding dotenv as a dep just for this) ---
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

if (!KEY) {
  console.error('LODGIFY_API_KEY not found in .env.local');
  process.exit(1);
}
if (!PROPERTY_ID) {
  console.error('LODGIFY_PROPERTY_ID not found in .env.local');
  process.exit(1);
}

const BASE_V2 = 'https://api.lodgify.com/v2';
const BASE_V1 = 'https://api.lodgify.com/v1';

// Tomorrow + 3 days for sample availability/quote queries
const today = new Date();
const tomorrow = new Date(today.getTime() + 24 * 3600 * 1000);
const fourDaysOut = new Date(today.getTime() + 4 * 24 * 3600 * 1000);
const fmt = (d) => d.toISOString().slice(0, 10);
const FROM = fmt(tomorrow);
const TO = fmt(fourDaysOut);

const HEADERS = {
  'X-ApiKey': KEY,
  Accept: 'application/json',
};

const probes = [
  // --- Account / properties ---
  { label: 'List properties', method: 'GET', url: `${BASE_V2}/properties` },
  { label: 'Property details', method: 'GET', url: `${BASE_V2}/properties/${PROPERTY_ID}` },
  { label: 'Property rooms / units', method: 'GET', url: `${BASE_V2}/properties/${PROPERTY_ID}/rooms` },

  // --- Availability ---
  {
    label: 'Availability (next 30 days)',
    method: 'GET',
    url: `${BASE_V2}/availability/${PROPERTY_ID}?start=${FROM}&end=${fmt(new Date(today.getTime() + 30 * 24 * 3600 * 1000))}`,
  },
  {
    label: 'Availability all properties',
    method: 'GET',
    url: `${BASE_V2}/availability?start=${FROM}&end=${fmt(new Date(today.getTime() + 30 * 24 * 3600 * 1000))}`,
  },

  // --- Rates / quote ---
  {
    label: 'Daily rates calendar',
    method: 'GET',
    url: `${BASE_V2}/rates/calendar?propertyId=${PROPERTY_ID}&start=${FROM}&end=${fmt(new Date(today.getTime() + 30 * 24 * 3600 * 1000))}`,
  },
  {
    label: 'Quote for sample 3-night stay',
    method: 'GET',
    url: `${BASE_V2}/quote/${PROPERTY_ID}?roomTypes[0].Id=&from=${FROM}&to=${TO}&guest_breakdown[adults]=2`,
  },

  // --- Reservations ---
  {
    label: 'Bookings (page 1)',
    method: 'GET',
    url: `${BASE_V2}/reservations/bookings?size=5`,
  },

  // --- Reviews ---
  { label: 'Reviews', method: 'GET', url: `${BASE_V2}/reservations/reviews?size=10` },

  // --- Webhooks ---
  { label: 'Webhooks subscriptions', method: 'GET', url: `${BASE_V1}/webhooks/list` },

  // --- Messaging / inbox ---
  { label: 'Messages threads', method: 'GET', url: `${BASE_V2}/messaging` },

  // --- Settings ---
  { label: 'Account info', method: 'GET', url: `${BASE_V1}/users/me` },
];

const fmtMB = (b) => `${(b / 1024).toFixed(1)} KB`;

const results = [];
for (const p of probes) {
  const start = Date.now();
  let status = 0;
  let bytes = 0;
  let ok = false;
  let sample = null;
  let error = null;

  try {
    const res = await fetch(p.url, { method: p.method, headers: HEADERS });
    status = res.status;
    const text = await res.text();
    bytes = Buffer.byteLength(text, 'utf8');
    ok = res.ok;
    if (text && bytes > 0) {
      try {
        const json = JSON.parse(text);
        // Show the top-level keys + array length for the response shape
        if (Array.isArray(json)) {
          sample = { _arrayLength: json.length, _firstItemKeys: json[0] ? Object.keys(json[0]) : [] };
        } else if (typeof json === 'object' && json !== null) {
          sample = { _keys: Object.keys(json) };
          // Extra detail for paginated responses
          if (json.items && Array.isArray(json.items)) {
            sample._itemsLength = json.items.length;
            sample._firstItemKeys = json.items[0] ? Object.keys(json.items[0]) : [];
          }
          if (json.count !== undefined) sample._count = json.count;
        } else {
          sample = { _scalar: typeof json };
        }
      } catch {
        sample = { _nonJson: text.slice(0, 100) };
      }
    }
  } catch (e) {
    error = e.message;
  }

  const ms = Date.now() - start;
  results.push({
    label: p.label,
    method: p.method,
    url: p.url.replace(KEY, '***').replace(PROPERTY_ID, '<PROPERTY_ID>'),
    status,
    ok,
    bytes,
    ms,
    sample,
    error,
  });
}

// --- Print to stdout ---
console.log('\nLodgify API spike — read-only probes');
console.log('=====================================\n');
for (const r of results) {
  const icon = r.ok ? '✓' : r.status === 0 ? '✗' : '⚠';
  console.log(`${icon} [${String(r.status).padStart(3)}] ${r.label}`);
  console.log(`   ${r.method} ${r.url}`);
  console.log(`   ${r.ms}ms · ${fmtMB(r.bytes)}`);
  if (r.sample) console.log(`   ${JSON.stringify(r.sample)}`);
  if (r.error) console.log(`   error: ${r.error}`);
  console.log();
}

// --- Write structured doc ---
mkdirSync('project/docs', { recursive: true });
writeFileSync(
  'project/docs/lodgify-capabilities-raw.json',
  JSON.stringify(results, null, 2),
  'utf8'
);
console.log('Raw results written to project/docs/lodgify-capabilities-raw.json');
