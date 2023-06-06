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
