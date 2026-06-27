import { NextResponse } from "next/server";
import { getServiceClient } from "@/lib/supabase";

// Always run fresh; never cache. This route is hit by the daily Vercel Cron to
// register database activity and stop the Supabase project being paused for
// inactivity (the free tier pauses after about a week with no requests).
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  // When CRON_SECRET is set, Vercel Cron sends it as a Bearer token. Require it
  // so the endpoint cannot be triggered by anyone else. If it is not set, the
  // route still works (so the cron keeps the database alive regardless).
  const secret = process.env.CRON_SECRET;
  if (secret) {
    const auth = request.headers.get("authorization");
    if (auth !== `Bearer ${secret}`) {
      return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
    }
  }

  const db = getServiceClient();
  if (!db) {
    return NextResponse.json(
      { ok: false, error: "supabase-not-configured" },
      { status: 503 },
    );
  }

  // Lightweight head count: a real query that registers activity but returns no
  // rows, so the request stays cheap.
  const startedAt = Date.now();
  const { error, count } = await db
    .from("areas")
    .select("id", { count: "exact", head: true });

  if (error) {
    return NextResponse.json(
      { ok: false, pinged: true, error: error.message },
      { status: 500 },
    );
  }

  return NextResponse.json({
    ok: true,
    pinged: true,
    table: "areas",
    count: count ?? 0,
    ms: Date.now() - startedAt,
  });
}
