import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {

  // Add headers in order to use the current URL in server components
  const headers = new Headers(request.headers);
  headers.set("x-url-pathname", request.nextUrl.pathname);
  headers.set("x-url-origin", request.nextUrl.origin);
  headers.set("x-url-search", request.nextUrl.search);
  return NextResponse.next({ headers });
}

export const config = {
  matcher: [
    // match all routes except static files and APIs
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
