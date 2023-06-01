// example: getting session from supabase

import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import type { Database } from "@/lib/database.types";

export async function GET(request: Request) {
//   const { title } = await request.json();
  const supabase = createRouteHandlerClient<Database>({ cookies });

  console.log(supabase.auth.getSession());
  return NextResponse.json({});
}
