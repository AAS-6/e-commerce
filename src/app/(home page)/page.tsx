"use client";

import DigitalProduct from "@/components/digital-product";
import Banner from "@/components/homepage/Banner";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "@/components/homepage/Carousel";
import ProductList from "@/components/homepage/ProductList";

export default function Home() {

  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <Head>
        <title>AAS-Commerce</title>
        <meta
          name='description'
          content='AAS-Commerce is an e-commerce website.'
        />
      </Head>
      <Banner />
      <DigitalProduct />
      <Carousel title={"Khusus Pengguna Baru"} />
      <Carousel title={"Kejar Diskon Spesial"} />
      <ProductList />
    </main>
  );
}
