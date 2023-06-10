import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const provinceId = parseInt(request.nextUrl.searchParams.get("provinceId") || "1")

  if (!provinceId) {
    const result = await prisma.city_v2.findMany({});

    return NextResponse.json(result);
  }

  if (provinceId) {
    const result = await prisma.city_v2.findMany({
      where: {
        provinceId
      },
    });

    return NextResponse.json(result);
  }
}
