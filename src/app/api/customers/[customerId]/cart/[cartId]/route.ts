import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

interface CartItemParams {
  customerId: string;
  cartId: string;
}

export async function PUT(
  request: Request,
  context: { params: CartItemParams }
) {
  const { customerId, cartId } = context.params;
  const { quantity }: { cartId: string; quantity: number } =
    await request.json();

  const result = await prisma.cart.update({
    where: {
      id: cartId,
    },
    data: {
      quantity,
    },
  });

  return NextResponse.json({
    customerId,
    result,
  });
}

export async function DELETE(
  _: Request,
  context: { params: CartItemParams }
) {
  const { customerId, cartId } = context.params;

  const result = await prisma.cart.delete({
    where: {
      id: cartId,
    }
  });

  return NextResponse.json({
    customerId,
    result,
  });
}
