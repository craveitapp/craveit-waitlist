/**
 * App Links Config
 *
 * Single source of truth for the Craveit app store URLs and the smart
 * download link (`/app`) that sends each device to the right store.
 *
 * The `/app` route is what printed QR codes point at. Because the redirect is
 * a 302 (temporary), the destinations below can be changed at any time without
 * reprinting anything.
 */

/** Canonical public origin of the marketing site. */
export const SITE_URL = "https://getcraveit.com";

/** Path served by the smart download route handler. */
export const APP_DEEP_LINK_PATH = "/app";

/** What printed QR codes encode. */
export const APP_DEEP_LINK_URL = `${SITE_URL}${APP_DEEP_LINK_PATH}`;

/**
 * Where desktop / unknown devices land: the homepage CTA band, which shows
 * both store badges. Keep in sync with the `id="cta"` section in `app/page.tsx`.
 */
export const STORE_BADGES_ANCHOR = "/#cta";

/** Fallback `?src=` value when a link is opened without a placement tag. */
export const DEFAULT_SRC = "direct";

/**
 * Store listings.
 *
 * TODO: confirm these stay correct if the Android package id or the Apple app
 * id ever change — the badges in `components/ui.tsx` read from here too.
 */
export const STORE_LINKS = {
  /** Android package id: com.getcraveit.craveit */
  playStore: "https://play.google.com/store/apps/details?id=com.getcraveit.craveit",
  /** Apple app id: 6769011202 */
  appStore: "https://apps.apple.com/ng/app/craveit-i-food-delivery/id6769011202",
} as const;

/**
 * Apple campaign provider token.
 *
 * TODO: fill this in with the `pt` provider token from App Store Connect
 * (App Analytics -> Campaigns). Apple needs BOTH `pt` (provider) and `ct`
 * (campaign) for a campaign to show up in App Analytics — `ct` alone is
 * accepted by the store but is not reported on. Once set, it is appended
 * automatically by `buildAppStoreUrl()` below.
 */
export const APPLE_PROVIDER_TOKEN: string | null = null;

/** Normalise an incoming `?src=` value into a safe campaign tag. */
export function normaliseSrc(src: string | null | undefined): string {
  const value = src?.trim();
  return value ? value : DEFAULT_SRC;
}

/**
 * Play Store URL with install referrer attribution.
 *
 * Google expects a single `referrer` param holding a URL-encoded query string,
 * so `flyer` becomes `&referrer=utm_source%3Dflyer`.
 */
export function buildPlayStoreUrl(src: string): string {
  const referrer = encodeURIComponent(`utm_source=${normaliseSrc(src)}`);
  return `${STORE_LINKS.playStore}&referrer=${referrer}`;
}

/**
 * App Store URL with campaign attribution.
 *
 * `ct` is the campaign token. `pt` is only appended once the provider token
 * above has been filled in.
 */
export function buildAppStoreUrl(src: string): string {
  const params = new URLSearchParams({ ct: normaliseSrc(src) });
  if (APPLE_PROVIDER_TOKEN) {
    params.set("pt", APPLE_PROVIDER_TOKEN);
  }
  return `${STORE_LINKS.appStore}?${params.toString()}`;
}
