import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("query") || '';

  const result = await prisma.province.findMany({
    where: {
      name: {
        contains: query.toUpperCase(),
        mode: "insensitive",
      },
    },
    orderBy: [{ name: "asc" }],
    take: 5,
  });

  return NextResponse.json({ query, result });
}
