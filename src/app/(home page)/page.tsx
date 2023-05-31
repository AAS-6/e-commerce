"use client";

import DigitalProduct from "@/components/digital-product";
import Banner from "@/components/homepage/Banner";
import LoginOverlay from "@/components/overlay/LoginOverlay";
import { selectLoginOverlay } from "@/store/ui-slice";
import Head from "next/head";
import Image from "next/image";
import { useSelector } from "react-redux";
import Carousel from "@/components/homepage/Carousel";
import ProductCard from "@/components/homepage/ProductCard";
import ProductList from "@/components/homepage/ProductList";
export default function Home() {
  const isLoginOverlay = useSelector(selectLoginOverlay);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <Head>
        <title>AAS-Commerce</title>
        <meta
          name='description'
          content='AAS-Commerce is an e-commerce website.'
        />
      </Head>
      {isLoginOverlay && <LoginOverlay />}
      <Banner />
      <DigitalProduct />
      <Carousel title={"Khusus Pengguna Baru"} />
      <Carousel title={"Kejar Diskon Spesial"} />
      <ProductList />
    </main>
  );
}
