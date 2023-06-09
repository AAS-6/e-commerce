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
      variantId: true,
      quantity: true,
      variant: {
        select: {
          id: true,
          name: true,
          price: true,
          stock: true,
          product: true,
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
  const { quantity, variantId } = await request.json();

  const existingCartItem = await prisma.cart.findFirst({
    where: {
      userId: customerId,
      variantId,
      quantity,
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
        variantId,
        quantity,
      },
    });
  }

  return NextResponse.json({
    customerId,
    result,
  });
}
