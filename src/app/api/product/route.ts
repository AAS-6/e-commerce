import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { variant as VariantType } from "@prisma/client";

export interface ProductType {
  id: string;
  name: string;
  detail: string;
  variant: VariantType[];
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const product = await prisma.product.findUnique({
      select: {
        id: true,
        name: true,
        detail: true,
        variant: true,
        imageUrls: true,
      },
      where: {
        id: id || undefined,
      },
    });

    return NextResponse.json({
      product,
    });
  } else {
    const product = await prisma.product.findMany({
      select: {
        id: true,
        name: true,
        detail: true,
        variant: true,
        imageUrls: true,
      },
    });

    return NextResponse.json({
      product,
    });
  }
}
