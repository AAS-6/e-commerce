"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

export default function ProductDetail({ params }: any) {
  const [product, setProduct] = useState<any>();
  const [userId, setUserId] = useState<any>();
  const { format } = Intl.NumberFormat("id-ID", {
    currency: "IDR",
    style: "currency",
  });

  const handleAddToCart = async () => {
    const cart = await fetch(`/api/customers/${userId}/cart`, {
      method: "POST",
      body: JSON.stringify({
        userId: userId,
        productId: params.slug,
        quantity: 1,
      }),
    });

    const cartJson = await cart.json();

    if (cartJson) {
      alert("Sukses");
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      const product = await fetch("/api/product?id=" + params.slug);
      const productJson = await product.json();
      const session = await supabase.auth.getSession();

      setUserId(session?.data.session?.user.id);

      setProduct(productJson.product);
    };

    getProduct();
  }, [params.slug]);

  return (
    <main className="flex">
      <img
        src={product?.imageUrls[0]}
        width={1920}
        height={1080}
        alt={"picture-large"}
        className="w-1/3"
      />
      <div className="p-10">
        <h1 className="font-bold text-[2rem]">{product?.name}</h1>
        <div className="border-y-2 my-5 py-4">
          <p className="text-[2em] font-medium text-[#5F72FF]">{format(product?.variant[0].price)}</p>
        </div>
        <p className="mb-3">{product?.detail}</p>
        <button
          onClick={handleAddToCart}
          className="bg-[#5F72FF] text-[16px] font-medium text-white p-3 rounded-md"
        >
          Add to cart
        </button>
      </div>
    </main>
  );
}
