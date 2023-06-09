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
    select: {
      id: true,
      productId: true,
      quantity: true,
      product: {
        select: {
          id: true,
          name: true,
          variant: {
            select: {
              id: true,
              name: true,
              price: true,
              stock: true,
            },
          },
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
  const { productId, quantity, variantId } = await request.json();

  const existingCartItem = await prisma.cart.findFirst({
    where: {
      userId: customerId,
      productId,
    },
  });

  let result;
  if (existingCartItem) {
    result = await prisma.cart.update({
      where: {
        id: existingCartItem.id,
      },
      data: {
        quantity: existingCartItem.quantity + quantity,
      },
    });
  } else {
    result = await prisma.cart.create({
      data: {
        userId: customerId,
        productId,
        quantity,
      },
    });
  }

  return NextResponse.json({
    customerId,
    result,
  });
}

export async function DELETE(
  request: Request,
  context: { params: CartParams }
) {
  const { searchParams } = new URL(request.url);
  const cartId = searchParams.get("cartId");

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
