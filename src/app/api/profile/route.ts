import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ success: false, message: "userId found" });
  }

  const name = await prisma.users.findUnique({
    where: { id: userId },
    select: {
      firstName: true,
      lastName: true,
      birthDate: true,
    },
  });

  const result = await prisma.users.findUnique({
    where: { id: userId },
    select: {
      address_users_addressIdToaddress: {
        select: {
          id: true,
          addressLine1: true,
          city_v2: {
            select: {
              cityName: true,
              cityId: true,
              provinceName: true,
              type: true,
            },
          },
        },
      },
    },
  });

  const modified = { ...result?.address_users_addressIdToaddress };

  return NextResponse.json({ success: true, address: modified, user: name });
}

export async function POST(request: NextRequest) {
  const { userId, firstName, lastName, cityId, detail, gender, birthDate } =
    await request.json();

  if (!userId) {
    return NextResponse.json({ success: false, message: "userId found" });
  }

  if (!cityId) {
    return NextResponse.json({ success: false, message: "cityId found" });
  }

  const cities = await prisma.city_v2.findUnique({
    where: { cityId: cityId },
  });

  const address = await prisma.address.create({
    data: {
      addressLine1: detail,
      cityId: cityId,
      postalCode: cities?.postalCode || "",
    },
  });

  const result = await prisma.users.update({
    where: { id: userId },
    data: {
      firstName: firstName || null,
      lastName: lastName || null,
      addressId: address!.id || null,
      birthDate: birthDate || null,
      gender: gender || null,
    },
  });

  return NextResponse.json({ success: true, ...result });
}
