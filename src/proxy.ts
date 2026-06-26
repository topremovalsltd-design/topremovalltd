import { NextResponse, type NextRequest } from "next/server";

/**
 * Indexability guard for the migration window (Next.js 16 proxy convention,
 * formerly middleware).
 *
 * Only the production host (www.top-removals.co.uk / top-removals.co.uk) is
 * indexable. Every other host, in particular the public Vercel preview
 * (topremovalltd-qooo.vercel.app) and any *.vercel.app alias, gets a
 * noindex, nofollow header so the recovering live site is never duplicated by a
 * crawlable preview. After cutover, requests arrive on the production host and
 * are indexed normally; the preview aliases stay out of the index.
 */
const PROD_HOST_SUFFIX = "top-removals.co.uk";

export function proxy(req: NextRequest) {
  const host = (req.headers.get("host") ?? "").toLowerCase();
  const res = NextResponse.next();
  if (!host.endsWith(PROD_HOST_SUFFIX)) {
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  return res;
}

export const config = {
  // Run on pages, not on Next internals or static assets.
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
