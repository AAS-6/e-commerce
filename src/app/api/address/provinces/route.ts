import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("query") || "";

  if (!query) {
    const result = await prisma.province_v2.findMany({});

    return NextResponse.json(result);
  }

  if (query) {
    const result = await prisma.province_v2.findMany({
      where: {
        name: {
          contains: query,
          mode: "insensitive",
        },
      },
    });

    return NextResponse.json(result);
  }
}
