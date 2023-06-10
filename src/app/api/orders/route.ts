import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get("userId");
  if (!userId) {
    return NextResponse.json(
      { success: false, msg: "Missing userId" },
      { status: 400 }
    );
  }

  const result = await prisma.orders.findMany({
    where: {
      userId,
    },
    include: {
      order_details: true,
    },
  });

  return NextResponse.json({
    success: true,
    result,
  });
}

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

  const orderDetails = cardItems.map(item => ({
    orderId: newOrder.id,
    variantId: item.variantId,
    merchantId: item.variant.product.merchantId,
    productId: item.variant.product.id,
    quantity: item.quantity,
    price: item.variant.price,
  }));

  const result = prisma.order_details.createMany({
    data: orderDetails,
  });

  const deleteCart = prisma.cart.deleteMany({
    where: {
      id: {
        in: cartItemIds,
      },
    },
  });

  // edit stock
  const variantIds = cardItems.map(item => item.variantId);
  const variants = await prisma.variant.findMany({
    where: {
      id: {
        in: variantIds,
      },
    },
  });

  const newVariants = variants.map(variant => {
    const cartItem = cardItems.find(item => item.variantId === variant.id);
    return {
      ...variant,
      stock: variant.stock - (cartItem?.quantity || 0),
    };
  });

  const updateStock = prisma.variant.updateMany({
    where: {
      id: {
        in: variantIds,
      },
    },
    data: newVariants,
  });

  // update product sold
  const productIds = cardItems.map(item => item.variant.product.id);
  const products = await prisma.product.findMany({
    where: {
      id: {
        in: productIds,
      },
    },
  });

  const newProducts = products.map(product => {
    const cartItem = cardItems.find(
      item => item.variant.product.id === product.id
    );
    return {
      ...product,
      sold: product.sold + (cartItem?.quantity || 0),
    };
  });

  const updateSold = prisma.product.updateMany({
    where: {
      id: {
        in: productIds,
      },
    },
    data: newProducts,
  });

  await prisma.$transaction([
    result,
    deleteCart,
    updateStock,
    updateSold,
  ]);


  return NextResponse.json({
    success: true,
    result,
  });
}
