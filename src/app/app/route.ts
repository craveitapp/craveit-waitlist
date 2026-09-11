import { NextRequest, NextResponse } from "next/server";
import {
  STORE_BADGES_ANCHOR,
  buildAppStoreUrl,
  buildPlayStoreUrl,
  normaliseSrc,
} from "@/config/app-links";

/**
 * Smart app download link — https://getcraveit.com/app
 *
 * One printable QR code for both stores. The device is sniffed from the
 * User-Agent header on the server, then redirected:
 *
 *   Android              -> Google Play
 *   iPhone / iPad / iPod -> App Store
 *   anything else        -> homepage CTA band, which shows both badges
 *
 * An optional `?src=` tags the placement (e.g. `/app?src=flyer`) and is passed
 * through to the store as campaign attribution. See `config/app-links.ts`.
 *
 * Always a 302. Never a 301 — printed QR codes outlive any given destination,
 * and a permanently cached redirect could not be corrected later.
 */

// User-Agent varies per request, so this must never be prerendered or cached.
export const dynamic = "force-dynamic";

const REDIRECT_STATUS = 302;

type Platform = "android" | "ios" | "other";

/**
 * Note: an iPad in its default "desktop" browsing mode sends a UA
 * indistinguishable from macOS Safari, so it cannot be detected here. Those
 * users fall through to "other" and land on the badge section, which is the
 * right outcome — they get to choose rather than being sent to the wrong store.
 */
function detectPlatform(userAgent: string): Platform {
  // Some Windows Phone UA strings carry "Android", so exclude it first.
  if (/Windows Phone/i.test(userAgent)) return "other";
  if (/Android/i.test(userAgent)) return "android";
  if (/iPhone|iPad|iPod/i.test(userAgent)) return "ios";
  return "other";
}

export async function GET(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") ?? "";
  const src = normaliseSrc(request.nextUrl.searchParams.get("src"));

  let destination: string;
  switch (detectPlatform(userAgent)) {
    case "android":
      destination = buildPlayStoreUrl(src);
      break;
    case "ios":
      destination = buildAppStoreUrl(src);
      break;
    default:
      destination = new URL(STORE_BADGES_ANCHOR, request.nextUrl.origin).toString();
      break;
  }

  const response = NextResponse.redirect(destination, REDIRECT_STATUS);
  // Intermediaries must not cache a device-specific redirect.
  response.headers.set("Cache-Control", "no-store, max-age=0");
  response.headers.set("Vary", "User-Agent");
  return response;
}
