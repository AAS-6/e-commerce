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

    console.log(transaction);

  return NextResponse.json({ transaction });
}

// export default async (req, res) => {
//   const formData = JSON.parse(req.body);
//   const data = {
//     ...formData,
//     product_id: 1,
//     shipper_id: 1,
//     seller_id: 1,
//     user_id: 1,
//     quantity: 1,
//   };
//   try {
//     // Send a request to the backend server
//     const backendResponse = await fetch("http://localhost:5000/order/create", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });

//     if (backendResponse.ok) {
//       const backendData = await backendResponse.json();
//       console.log(backendData.data.order_id);
//       const parameter = {
//         transaction_details: {
//           order_id: backendData.data.order_id,
//           gross_amount: data.amount,
//         },
//         credit_card: {
//           secure: true,
//         },
//         customer_details: {
//           first_name: data.firstName,
//           last_name: data.lastName,
//           email: data.email,
//           phone: data.phone,
//         },
//       };

//       snap.createTransaction(parameter).then(transaction => {
//         const transactionToken = transaction.token;

//         res.status(200).json({
//           message: "success",
//           transactionToken: transactionToken,
//           redirect_url: transaction.redirect_url,
//           orderId: backendData.order_id, // Send the orderId back to the client
//         });
//       });
//     } else {
//       res.status(500).json({ success: false, error: "Backend request failed" });
//     }
//   } catch (error) {
//     res.status(500).json({ success: false, error: "Internal server error" });
//   }
// };
