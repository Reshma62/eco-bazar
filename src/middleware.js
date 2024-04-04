import { NextResponse } from "next/server";
import { verifiToken } from "./lib/token/genarateToken";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  let token = request.cookies.get("jwtToken");
  const value = token?.value;

  if (value) {
    verifiToken(value);
  }
  if (token) {
    return NextResponse.next();
  }

  if (request.nextUrl.pathname.startsWith("/api/")) {
    return NextResponse.json({ message: "unathorized access" });
  } else {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard", "/api/auth/users"],
};
