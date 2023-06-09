import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(_: Request, context: { params: any }) {
  const { customerId } = context.params;
  const { addressId, firstName, lastName } = (await prisma.users.findUnique({
    where: {
      id: customerId,
    },
    select: {
      addressId: true,
      firstName: true,
      lastName: true,
    },
  })) as { addressId: string; firstName: string; lastName: string };

  const result = await prisma.address.findUnique({
    where: {
      id: addressId,
    },

    select: {
      id: true,
      Regency: true,
      Province: true,
      jalan: true,
    },
  });

  return NextResponse.json({
    result,
    firstName,
    lastName,
  });
}
