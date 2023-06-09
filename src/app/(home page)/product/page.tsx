"use client";

import CategoryCard from "@/components/digital-product/CategoryCard";
import ProductList from "@/components/homepage/ProductList";

export default function Product() {
  return (
    <div className='flex mx-24 my-20'>
      <div className='flex-col'>
        <p>Filter</p>
        <div className='flex justify-between'>
          <div className='flex-col p-4 border-2 mt-5 rounded-xl'>
            <p>Kategori</p>
            <CategoryCard />
          </div>
          <ProductList />
        </div>
      </div>
    </div>
  );
}
