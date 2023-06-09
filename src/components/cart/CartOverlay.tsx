import { selectCartOverlay, setCartOverlay } from "@/store/ui-slice";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useMutation, useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { selectUserId } from "@/store/auth-slice";
import { selectCart } from "@/store/cart-slice";
import Link from "next/link";

export default function CartOverlay() {
  const cartOverlay = useSelector(selectCartOverlay);
  const cartItem = useSelector(selectCart);
  const dispatch = useDispatch();
  const { format } = Intl.NumberFormat("id-ID", {
    currency: "IDR",
    style: "currency",
  });

  const handleCartOverlay = () => {
    dispatch(setCartOverlay(false));
  };

  const handleLinkClick = () => {
    handleCartOverlay();
  };

  console.log(cartItem);

  if (cartOverlay) {
    return (
      <div className='w-screen h-screen absolute flex justify-center items-center top-0 z-[60]'>
        <div
          className='w-full h-full fixed top-0 left-0 p-6'
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
          onClick={handleCartOverlay}
        ></div>
        <div className='bg-white z-[70] relative w-1/2 max-w-3xl py-14 rounded-xl'>
          <button className='absolute top-1 right-1'>
            <Image
              src='/cart/close.svg'
              width={24}
              height={24}
              alt='Close'
              onClick={handleCartOverlay}
            />
          </button>
          <div className='flex gap-x-6 items-center justify-center pb-12'>
            <Image
              src='/cart/success.svg'
              width={32}
              height={32}
              alt='Success'
            />
            <h1 className='text-[#2DCEA6] text-2xl font-semibold'>
              Produk berhasil ditambahkan ke dalam keranjang
            </h1>
          </div>

          <div className='flex gap-x-6 pb-12 px-28'>
            <Image
              src={cartItem.image}
              width={160}
              height={160}
              alt={cartItem.title}
            />

            <div className='flex flex-col gap-y-1'>
              <h1 className='text-xl font-semibold'>{cartItem.title}</h1>
              <h2>{cartItem.model}</h2>
              <p>Kuantitas: {cartItem.quantity}</p>
              <p>Total Harga: {format(cartItem.price)}</p>
            </div>
          </div>
          <div className='flex justify-center'>
            <button
              className='basis-1/3 border-2 rounded-lg border-red-500  text-red-500'
              style={{ transform: "scale(1)", transition: "transform 0.3s" }}
            >
              Batalkan Pesanan
            </button>
            <Link
              href='/cart'
              onClick={handleLinkClick}
              className='ml-10 bg-[#5F72FF] py-2 basis-1/3 text-center rounded-lg text-white'
              style={{ transform: "scale(1)", transition: "transform 0.3s" }}
            >
              Lihat Keranjang
            </Link>
          </div>
        </div>
      </div>
    );
  } else return <></>;
}
