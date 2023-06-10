import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import midTrans from "midtrans-client";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const { total, userId } = await request.json();

  const snap = new midTrans.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY,
  });

  console.log(total);
  console.log(typeof total);

  const transaction = await snap
    .createTransaction({
      transaction_details: {
        order_id: crypto.randomUUID(),
        gross_amount: total,
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

  console.log(transaction);

  return NextResponse.json({ transaction });
}

