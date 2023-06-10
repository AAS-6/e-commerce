"use client";

import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import TextTruncate from "react-text-truncate";
import { useDispatch } from "react-redux";
import { useQuery, useMutation } from "@tanstack/react-query";
import { setCartOverlay } from "@/store/ui-slice";
import { registerUserId } from "@/store/auth-slice";
import { addItem } from "@/store/cart-slice";

type variants = {
  id: string;
  createdAt: string;
  updatedAt: string;
  productId: string;
  name: string;
  price: number;
  stock: number;
  weight: number;
};

export default function ProductDetail({ params }: any) {
  const [selectedVariant, setSelectedVariant] = useState<number>(0);
  const [userId, setUserId] = useState<any>();
  const [quantity, setQuantity] = useState<number>(1);
  const { format } = Intl.NumberFormat("id-ID", {
    currency: "IDR",
    style: "currency",
  });
  const dispatch = useDispatch();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products", params.slug],
    queryFn: async id => {
      const res = await fetch("/api/product?id=" + params.slug);

      const product  = await res.json();

      return product;
    },
  });

  const { mutate, data: cartData } = useMutation(
    async (data: any) => {
      const res = await fetch("/api/customers/" + userId + "/cart", {
        method: "POST",
        body: JSON.stringify(data),
      });

      const json = await res.json();

      return json;
    },
    {
      onSuccess: () => {
        dispatch(setCartOverlay(true));
        dispatch(
          addItem({
            id: data?.id,
            title: data?.name,
            price: data?.variant[selectedVariant].price,
            image: data?.imageUrls[0],
            quantity: quantity,
            model: data?.variant[selectedVariant].name,
            total: data?.variant[selectedVariant].price * quantity,
          })
        );
      },
    }
  );

  const handleAddToCart = async () => {
    if (!userId) {
      return alert("Please login first");
    }

    if (data.variant[selectedVariant].stock - quantity < 0) {
      return alert("Stock is not enough");
    }

    mutate({
      userId: userId,
      productId: params.slug,
      quantity,
      variantId: data?.variant[selectedVariant].id,
    });
  };

  useEffect(() => {
    const getSession = async () => {
      const session = await supabase.auth.getSession();

      setUserId(session?.data.session?.user.id);
      dispatch(registerUserId(session?.data.session?.user.id || ""));
    };

    getSession();
  }, [params.slug, dispatch]);

  const handleChangeVariant = (e: any) => {
    setSelectedVariant(e.target.value);
  };

  const addHandler = () => {
    if (quantity < data?.variant[selectedVariant].stock) {
      setQuantity(quantity + 1);
    }
  };

  const removeHandler = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <main className='flex relative max-w-[1440px] mx-auto pt-8 gap-x-10 px-2'>
      <div className='basis-2/5'>
        {data ? (
          <Image
            src={data?.imageUrls[0]}
            width={1920}
            height={1080}
            alt={"picture-large"}
            className='w-full object-contain'
            quality={100}
          />
        ) : (
          <div className='text-center'>Loading...</div>
        )}
      </div>
      <div className='basis-3/5'>
        <h1 className='font-semibold text-[2rem]'>{data?.name}</h1>
        {data ? (
          <div className='border-y-2 my-5 py-4 flex items-center gap-x-16'>
            {data ? (
              <p className='text-[2em] font-medium text-[#5F72FF]'>
                {format(data?.variant[selectedVariant].price)}
              </p>
            ) : (
              <p>Loading...</p>
            )}
            <p className='text-base font-medium text-[#5F72FF]'>
              {data?.variant[selectedVariant].stock} tersedia
            </p>
            <select
              onChange={handleChangeVariant}
              className='px-4 py-2 rounded-lg text-center font-medium border-slate-400 bg-transparent border-2'
            >
              {data?.variant.map((variant: variants, index: number) => (
                <option value={index} key={variant.id}>
                  {variant.name}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <div>Loading...</div>
        )}
        <TextTruncate line={5} text={data?.detail} />
        <div className='flex items-center gap-x-6 mt-4'>
          <p>Kuantitas</p>
          <div className='flex rounded-md overflow-hidden bg-mangoTango border border-black font-medium'>
            <div
              className='w-9 font-semibold hover:text-white cursor-pointer border-r border-black py-1 text-center hover:bg-[#5F72FF]'
              onClick={removeHandler}
            >
              -
            </div>
            <div className='w-12 py-1 flex items-center justify-center text-center'>
              {quantity}
            </div>
            <div
              className='w-9 font-semibold hover:text-white cursor-pointer py-1 border-l border-black text-center  hover:bg-[#5F72FF]'
              onClick={addHandler}
            >
              +
            </div>
          </div>{" "}
          <button
            onClick={handleAddToCart}
            className='bg-[#5F72FF] text-[16px] font-medium text-white p-3 rounded-md'
          >
            Add to cart
          </button>
        </div>
      </div>
    </main>
  );
}

const SuspenseElement = (children: any) => {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
};
