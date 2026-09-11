import { NextRequest, NextResponse } from "next/server";
import pageVisibility from "@/config/page-visibility";
import { APP_DEEP_LINK_PATH } from "@/config/app-links";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // The smart app download link is a redirect route handler, not a page.
  // Printed QR codes point at it, so it must never be rewritten or gated by
  // page visibility. See `config/app-links.ts`.
  if (pathname === APP_DEEP_LINK_PATH) {
    return NextResponse.next();
  }

  if (pathname in pageVisibility && !pageVisibility[pathname as keyof typeof pageVisibility]) {
    return NextResponse.rewrite(new URL("/404", request.url));
  }

  if (pathname.startsWith("/blog/") && !pageVisibility["/blog"]) {
    return NextResponse.rewrite(new URL("/404", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|images|videos|icons|fonts).*)"],
};
