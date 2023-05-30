import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request, response: Response) {
  return NextResponse.json({ message: "Hello World" });
}
