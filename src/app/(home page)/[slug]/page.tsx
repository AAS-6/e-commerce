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
    <main className='flex'>
      <Image
        src='/digital-product/picture-large.svg'
        width={1920}
        height={1080}
        alt={"picture-large"}
        className='w-1/3'
      />
      <div>
        <h1>{product?.name}</h1>
        <p>{format(product?.variant[0].price)}</p>
        <button
          onClick={handleAddToCart}
          className='bg-[#5F72FF] text-white p-1 rounded-md'
        >
          Add to cart
        </button>
      </div>
    </main>
  );
}
