import { NextRequest, NextResponse } from "next/server";
import pageVisibility from "@/config/page-visibility";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

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
