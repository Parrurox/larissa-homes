import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../src/assets/images");

/** Lossless WebP for logo and tiny UI assets with sharp edges / alpha */
const LOSSLESS_BASENAMES = new Set(["main-logo", "ui-rectangle-accent"]);

const RASTER_EXT = new Set([".png", ".jpg", ".jpeg"]);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) await walk(full);
    else await maybeConvert(full);
  }
}

async function maybeConvert(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!RASTER_EXT.has(ext)) return;

  const base = path.basename(filePath, ext);
  const outPath = path.join(path.dirname(filePath), `${base}.webp`);

  const inputStat = await fs.stat(filePath);
  try {
    const outStat = await fs.stat(outPath);
    if (outStat.mtimeMs >= inputStat.mtimeMs) {
      console.log(`skip (webp newer): ${outPath}`);
      return;
    }
  } catch {
    // no existing webp
  }

  const pipeline = sharp(filePath);
  const webpOptions = LOSSLESS_BASENAMES.has(base)
    ? { lossless: true, effort: 6 }
    : { quality: 85, effort: 6 };

  await pipeline.webp(webpOptions).toFile(outPath);
  await fs.unlink(filePath);
  const inKb = Math.round(inputStat.size / 1024);
  const outStat = await fs.stat(outPath);
  const outKb = Math.round(outStat.size / 1024);
  console.log(`${path.relative(ROOT, filePath)} -> ${base}.webp (${inKb}KB -> ${outKb}KB)`);
}

await walk(ROOT);
console.log("Done.");
