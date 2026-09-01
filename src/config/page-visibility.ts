/**
 * Page Visibility Config
 *
 * Set a page to `false` to hide it from the public.
 * - The page returns a 404 if someone visits the URL directly.
 * - The link is removed from the navbar and footer.
 *
 * To hide a page, comment out its line or set it to `false`.
 * To show a page, make sure it is set to `true`.
 */

const pageVisibility = {
  "/": true,
  "/vendor": true,
  "/blog": false,
  "/rider": false,
  "/ambassador": false,
  "/careers": false,
  "/about": false,
  "/contactus": true,
  "/faq": true,
  "/privacy-policy": true,
  "/terms-of-service": true,
  "/refund-policy": true,
  "/vendor-agreement": true,
} as const;

export type PagePath = keyof typeof pageVisibility;

export function isPageVisible(path: string): boolean {
  if (path in pageVisibility) {
    return pageVisibility[path as PagePath];
  }
  return true;
}

export default pageVisibility;
