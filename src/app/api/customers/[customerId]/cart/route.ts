import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { CartParams } from "../context";
import { log } from "console";

export async function GET(_: Request, context: { params: CartParams }) {
  const { customerId } = context.params;
  const result = await prisma.cart.findMany({
    where: {
      userId: customerId,
    },
    include: {
      product: {
        select: {
          id: true,
          name: true,
          detail: true,
          variant: true,
        },
      },
    },
  });

  return NextResponse.json({
    customerId,
    items: result,
  });
}

export async function POST(request: Request, context: { params: CartParams }) {
  const { customerId } = context.params;
  const { productId, quantity } = await request.json();
  console.log(productId, quantity);

  const result = await prisma.cart.create({
    data: {
      userId: customerId,
      productId,
      quantity,
    },
  });
  return NextResponse.json({
    customerId,
    item: result,
  });
}
