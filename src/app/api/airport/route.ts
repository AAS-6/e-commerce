import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request, response: Response) {
  const airport = await prisma.airport.findMany({
    select: {
      name: true,
      code: true,
      id: true,
    },
  });

  return NextResponse.json(airport);
}
