import { NextResponse } from "next/server";

const sessionCookieName = "riverflow_blog_admin";
const protectedAdminRoutes = ["/admin/blog", "/admin/gallery"];

const bytesToHex = (bytes) =>
  Array.from(new Uint8Array(bytes), (byte) => byte.toString(16).padStart(2, "0")).join("");

const sign = async (value) => {
  const secret =
    process.env.ADMIN_SESSION_SECRET ||
    process.env.TURSO_AUTH_TOKEN ||
    "riverflow-dev-session-secret";
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  return bytesToHex(await crypto.subtle.sign("HMAC", key, encoder.encode(value)));
};

const hasValidAdminSession = async (request) => {
  const token = request.cookies.get(sessionCookieName)?.value || "";
  const [expires, signature] = token.split(".");

  if (!expires || !signature || Number(expires) < Date.now()) {
    return false;
  }

  const expectedSignature = await sign(expires);
  if (signature.length !== expectedSignature.length) {
    return false;
  }

  let difference = 0;
  for (let index = 0; index < signature.length; index += 1) {
    difference |= signature.charCodeAt(index) ^ expectedSignature.charCodeAt(index);
  }
  return difference === 0;
};

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const isProtected = protectedAdminRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );

  if (isProtected && !(await hasValidAdminSession(request))) {
    const loginUrl = new URL("/admin/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  const response = NextResponse.next();
  if (pathname.startsWith("/admin/")) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  }
  return response;
}

export const config = {
  matcher: ["/admin/:path*"],
};
