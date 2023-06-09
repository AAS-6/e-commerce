"use client";

import CategoryCard from "@/components/digital-product/CategoryCard";
import ProductList from "@/components/homepage/ProductList";

export default function Product() {
  return (
    <div className="flex mx-24 my-20">
      <div className="flex-col">
        <p>Filter</p>
        <div className="flex justify-between space-x-8">
          <div className="flex-col py-4 px-6 border-2 mt-5 rounded-xl">
            <p className="mb-5">Kategori</p>
            <CategoryCard />
          </div>
          <div className="mt-5">
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
}
