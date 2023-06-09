"use client";

import React from "react";
import BreadCrumb from "@/components/cart/BreadCrumb";
import { supabase } from "@/lib/supabase";
import { Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Layout({ children }: { children: React.ReactNode }) {
  const page = useSelector((state: any) => state.ui.page);
  const [userId, setUserId] = useState<any>();
  const [product, setProduct] = useState<any>();
  
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
