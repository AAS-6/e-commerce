import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _: Request,
  context: { params: { orderId: string } }
) {
  const { orderId } = context.params;

  const result = prisma.shipping.findMany({
    where: { orderId },
  });
  return NextResponse.json({ result });
}

interface ShippingRequestBody {
  courier: string;
  service: string;
  resi: string;
  cost: number;
  etd: string;
}

export async function POST(
  request: NextRequest,
  context: { params: { orderId: string } }
) {
  /*
  const { orderId } = context.params;
  const { courier, service, resi, cost, etd } =
    (await request.json()) as ShippingRequestBody;

  const order = await prisma.orders.findUnique({
    where: { id: orderId },
    include: {
      order_details: true,
      },
    },
  });

  if (!order) {
    return NextResponse.json({ error: "Order not found" }, { status: 404 });
  }

  // TODO: should not only find the first one, but filter failed shippings
  const hasShipping = await prisma.shipping.findFirst({
    where: { orderId },
  });
  if (hasShipping) {
    return NextResponse.json(
      { error: "Shipping already created" },
      { status: 400 }
    );
  }

  if (!order.product.merchant.addressId) {
    return NextResponse.json(
      { error: "Merchant doesn't have address" },
      { status: 400 }
    );
  }

  // TODO: validate courier and service, here we just assume they're valid

  const result = await prisma.shipping.create({
    data: {
      status: "On transit", // TODO: what should this be?
      etd,
      addressId: order.addressId, // customer's adddress from order
      originAddressId: order.product.merchant.addressId, // should be seller's address
      cost,
      orderId,
      resi,
      courier,
      service,
    },
  });

  return NextResponse.json({ result });
 */
  return NextResponse.json({ success: false, message: "Not implemented" });
}
