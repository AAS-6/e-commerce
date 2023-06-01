import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("query") || "";
  const provinceId =
    Number(request.nextUrl.searchParams.get("provinceId")) || "";

  const result = await prisma.regency.findMany({
    where: {
      name: {
        contains: query.toUpperCase(),
        mode: "insensitive",
      },
      provinceId: provinceId || undefined,
    },
    orderBy: [{ name: "asc" }],
    take: 5,
  });

  return NextResponse.json({ query, result });
}
