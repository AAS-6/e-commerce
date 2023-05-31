import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("query") || "";
  const districtId = Number(request.nextUrl.searchParams.get("districtId"));

  // this is a workaround to handle the use of BigInt in the database
  // (see https://github.com/prisma/studio/issues/614)
  // TODO: find a better approach for this problem (maybe change the
  //       villageId column type in the schema?)
  // @ts-expect-error
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  const result = await prisma.village.findMany({
    where: {
      name: {
        contains: query.toUpperCase(),
        mode: "insensitive",
      },
      districtId: districtId || undefined,
    },
    orderBy: [{ name: "asc" }],
    take: 5,
  });

  return NextResponse.json({ query, result });
}
