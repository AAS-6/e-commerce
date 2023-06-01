import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { CartParams } from "../context";

export async function GET(_: Request, context: { params: CartParams }) {
  const { customerId } = context.params;
  const result = prisma.cart.findMany({
    where: {
      userId: customerId,
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
  const result = prisma.cart.create({
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
