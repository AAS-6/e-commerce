import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: Request, response: Response) {
  const supabase = createServerComponentClient({ cookies });
  const sessions = await supabase.auth.getSession();

  return NextResponse.json({
    serverRunning: true,
    error: false,
    message: "Hello welcome to AA-S API",
  });
}
