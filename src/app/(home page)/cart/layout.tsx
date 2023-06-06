"use client";
// import BreadCrumb from "@/components/cart/BreadCrumb";
// import { supabase } from "@/lib/supabase";
// import { Suspense, use, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// export default function Layout({ children }: { children: React.ReactNode }) {
//   const page = useSelector((state: any) => state.ui.page);
//   const [userId, setUserId] = useState<any>();
//   const [product, setProduct] = useState<any>();
//   const { format } = Intl.NumberFormat("id-ID", {
//     currency: "IDR",
//     style: "currency",
//   });

//   useEffect(() => {
//     const getDetail = async () => {
//       const session = await supabase.auth.getSession();

//       setUserId(session?.data.session?.user.id);
//     };

//     getDetail();
//   }, []);

//   useEffect(() => {
//     const getProduct = async () => {
//       const product = await fetch(`/api/customers/${userId}/cart`);
//       const productJson = await product.json();

//       setProduct(productJson.items);
//       console.log(productJson);
//     };

//     if (userId) {
//       getProduct();
//     }
//   }, [userId]);

//   return (
//     <div>
//       <nav>
//         <ul className="flex gap-x-6">
//           <li className={page === "CART" ? "font-semibold" : ""}>
//             Shopping Cart
//           </li>
//           <li className={page === "SHIPPING" ? "font-semibold" : ""}>
//             Shipping Details
//           </li>
//           <li className={page === "PAYMENT" ? "font-semibold" : ""}>Payment</li>
//         </ul>
//       </nav>
//       <BreadCrumb />
//       <Suspense>{children}</Suspense>
//     </div>
//   );
// }

import React from "react";
import BreadCrumb from "@/components/cart/BreadCrumb";
import { supabase } from "@/lib/supabase";
import { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Layout({ children }: { children: React.ReactNode }) {
  const page = useSelector((state: any) => state.ui.page);
  const [userId, setUserId] = useState<any>();
  const [product, setProduct] = useState<any>();
  const { format } = Intl.NumberFormat("id-ID", {
    currency: "IDR",
    style: "currency",
  });

  useEffect(() => {
    const getDetail = async () => {
      const session = await supabase.auth.getSession();

      setUserId(session?.data.session?.user.id);
    };

    getDetail();
  }, []);

  useEffect(() => {
    const getProduct = async () => {
      const product = await fetch(`/api/customers/${userId}/cart`);
      const productJson = await product.json();

      setProduct(productJson.items);
      console.log(productJson);
    };

    if (userId) {
      getProduct();
    }
  }, [userId]);

  return (
    <div>
      <BreadCrumb page={page} />
      <Suspense>{children}</Suspense>
    </div>
  );
}
