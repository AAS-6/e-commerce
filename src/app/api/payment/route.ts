import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import midTrans from "midtrans-client";

export async function POST(request: Request) {
  const { orderId, totalAmount, userId } = await request.json();

  const snap = new midTrans.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY,
  });

  const transaction = await snap
    .createTransaction({
      transaction_details: {
        order_id: orderId,
        gross_amount: totalAmount,
      },
      credit_card: {
        secure: true,
      },
      customer_details: {
        userId,
      },
    })
    .then((transaction: any) => transaction)
    .catch((error: any) => error);

  return NextResponse.json({ transaction });
}
