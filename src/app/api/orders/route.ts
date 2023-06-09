import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const {
    userId,
    addressId,
    cartItemIds,
  }: {
    userId: string;
    addressId: string;
    cartItemIds: string[];
  } = await request.json();

  const cardItems = await prisma.cart.findMany({
    where: {
      id: {
        in: cartItemIds,
      },
    },
    include: {
      variant: {
        select: {
          price: true,
          product: {
            select: {
              id: true,
              merchantId: true,
            },
          },
        },
      },
    },
  });

  const newOrder = await prisma.orders.create({
    data: {
      userId,
      destAddressId: addressId,
      status: "Created",
    },
  });

  const orderDetails = cardItems.map((item) => ({
    orderId: newOrder.id,
    variantId: item.variantId,
    merchantId: item.variant.product.merchantId,
    productId: item.variant.product.id,
    quantity: item.quantity,
    price: item.variant.price,
  }));

  const result = await prisma.order_details.createMany({
    data: orderDetails,
  });

  return NextResponse.json({
    success: true,
    result,
  });
}
