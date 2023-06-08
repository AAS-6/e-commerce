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

  console.log("ADD CART", result);

  return NextResponse.json({
    customerId,
    item: result,
  });
}

export async function DELETE(
  request: Request,
  context: { params: CartParams }
) {
  const { searchParams } = new URL(request.url);
  console.log(searchParams);
  const cartId = searchParams.get("cartId");

  console.log("CART ID", cartId);

  if (!cartId) {
    return NextResponse.json({
      error: true,
    });
  }

  const result = await prisma.cart.delete({
    where: {
      id: cartId,
    },
  });

  return NextResponse.json({
    success: true,
    result,
  });
}
