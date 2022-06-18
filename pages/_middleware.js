import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  const { pathname, origin } = req.nextUrl;
  // allow request if
  // 1) token exists
  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }

  if (!token && pathname !== "/login") {
    return NextResponse.redirect(`${origin}/login`);
  }
}
