import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("query") || "";
  const regencyId = Number(request.nextUrl.searchParams.get("regencyId"));

  const result = await prisma.district.findMany({
    where: {
      name: {
        contains: query.toUpperCase(),
        mode: "insensitive",
      },
      regencyId: regencyId || undefined,
    },
    orderBy: [{ name: "asc" }],
    take: 5,
  });

  return NextResponse.json({ query, result });
}
