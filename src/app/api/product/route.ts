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
  console.log("GET /api/product");
  const { searchParams } = new URL(request.url);
  console.log(searchParams);

  if (searchParams.get("id")) {
    const product = await prisma.product.findUnique({
      select: {
        id: true,
        name: true,
        detail: true,
        variant: true,
      },
      where: {
        id: searchParams.get("id") || undefined,
      },
    });

    console.log(searchParams.get("id"));

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
      },
    });

    return NextResponse.json({
      product,
    });
  }
}
