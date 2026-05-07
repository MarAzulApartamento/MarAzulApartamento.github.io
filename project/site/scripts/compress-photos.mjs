/**
 * One-off photo compression for source assets.
 * Reads JPGs from project/website/assets/images/{firts,second} choises,
 * resizes to max 2400px on longest side, JPG quality 85, strips metadata,
 * writes back over the originals.
 *
 * Run from repo root:  node project/site/scripts/compress-photos.mjs
 *
 * Originals live in Google Drive — safe to overwrite locally.
 */

import sharp from 'sharp';
import { readdir, stat, readFile, writeFile } from 'node:fs/promises';
import { join, extname } from 'node:path';

const TARGETS = [
  'project/website/assets/images/firts choises',
  'project/website/assets/images/second choises',
];
const MAX_DIMENSION = 2400;
const JPG_QUALITY = 85;

const fmtMB = (bytes) => `${(bytes / 1024 / 1024).toFixed(2)} MB`;

async function compressOne(filePath) {
  const before = (await stat(filePath)).size;
  const buffer = await readFile(filePath);

  const out = await sharp(buffer)
    .rotate() // auto-orient based on EXIF before stripping
    .resize({
      width: MAX_DIMENSION,
      height: MAX_DIMENSION,
      fit: 'inside',
      withoutEnlargement: true,
    })
    .jpeg({
      quality: JPG_QUALITY,
      mozjpeg: true,
      progressive: true,
    })
    .withMetadata({ exif: undefined, icc: undefined })
    .toBuffer();

  await writeFile(filePath, out);
  const after = out.length;
  const saved = ((1 - after / before) * 100).toFixed(0);
  return { before, after, saved };
}

async function run() {
  let totalBefore = 0;
  let totalAfter = 0;
  let count = 0;

  for (const dir of TARGETS) {
    const entries = await readdir(dir);
    const jpgs = entries.filter((f) => /\.jpe?g$/i.test(f));
    console.log(`\n${dir}  (${jpgs.length} files)`);
    for (const f of jpgs) {
      const path = join(dir, f);
      const r = await compressOne(path);
      totalBefore += r.before;
      totalAfter += r.after;
      count++;
      console.log(`  ${f.padEnd(28)}  ${fmtMB(r.before).padStart(9)} -> ${fmtMB(r.after).padStart(9)}  (-${r.saved}%)`);
    }
  }

  console.log('\n----------------');
  console.log(`Total: ${count} files`);
  console.log(`Before: ${fmtMB(totalBefore)}`);
  console.log(`After:  ${fmtMB(totalAfter)}`);
  console.log(`Saved:  ${fmtMB(totalBefore - totalAfter)} (${((1 - totalAfter / totalBefore) * 100).toFixed(0)}%)`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
