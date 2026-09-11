/**
 * QR code generator for the smart app download link.
 *
 * Renders https://getcraveit.com/app as a print-ready PNG and a scalable SVG
 * into /qr. Run with `npm run qr`.
 *
 * Notes on the settings below:
 * - Error correction "H" (~30% recoverable) survives a logo overlay, ink
 *   bleed and scuffed flyers.
 * - Craveit's darkest brand colour on brand cream. Scanners threshold on
 *   luminance, so the brand orange is deliberately NOT used — it is too light
 *   against cream to read reliably.
 */

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import QRCode from "qrcode";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = path.join(ROOT, "qr");

// Keep in sync with APP_DEEP_LINK_URL in src/config/app-links.ts.
// (Plain .mjs so this script stays runnable without a TS loader.)
const TARGET_URL = "https://getcraveit.com/app";

// From src/app/globals.css: --color-bg-dark and --color-bg-cream.
const DARK = "#1C1208";
const LIGHT = "#F8EEE0";

const PNG_WIDTH = 1200; // >= 1000px, comfortable for print
const MARGIN = 4; // quiet zone, in modules — 4 is the spec minimum

const options = {
  errorCorrectionLevel: "H",
  margin: MARGIN,
  color: { dark: DARK, light: LIGHT },
};

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const pngPath = path.join(OUT_DIR, "craveit-app-qr.png");
  const svgPath = path.join(OUT_DIR, "craveit-app-qr.svg");

  await QRCode.toFile(pngPath, TARGET_URL, {
    ...options,
    type: "png",
    width: PNG_WIDTH,
  });

  const svg = await QRCode.toString(TARGET_URL, { ...options, type: "svg" });
  await writeFile(svgPath, svg, "utf8");

  console.log(`QR target : ${TARGET_URL}`);
  console.log(`Colours   : ${DARK} on ${LIGHT} (error correction H)`);
  console.log(`PNG       : ${path.relative(ROOT, pngPath)} (${PNG_WIDTH}px)`);
  console.log(`SVG       : ${path.relative(ROOT, svgPath)} (scalable)`);
}

main().catch((error) => {
  console.error("Failed to generate QR codes:", error);
  process.exitCode = 1;
});
