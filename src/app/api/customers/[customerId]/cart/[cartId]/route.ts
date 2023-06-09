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

  if (quantity <= 0) {
    return NextResponse.json(
      { success: false, message: "Quantity must be greater than 0" },
      { status: 400 }
    );
  }

  const cartItem = await prisma.cart.findUnique({
    where: {
      id: cartId,
    },
    include: {
      product: true,
    },
  });

  if (!cartItem) {
    return NextResponse.json(
      { success: false, message: "Cart item not found" },
      { status: 404 }
    );
  }

  if (quantity > cartItem.product) {
    return NextResponse.json(
      { success: false, message: "Quantity exceeds stock" },
      { status: 400 }
    );
  }

  const result = await prisma.cart.update({
    where: {
      id: cartId,
    },
    data: {
      quantity,
    },
  });

  return NextResponse.json({
    success: true,
    customerId,
    result,
  });
}

export async function DELETE(_: Request, context: { params: CartItemParams }) {
  const { customerId, cartId } = context.params;

  const result = await prisma.cart.delete({
    where: {
      id: cartId,
    },
  });

  return NextResponse.json({
    success: true,
    customerId,
    result,
  });
}
