import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { ProductType } from "@/app/api/product/route";

export default function ProductList() {
  const [products, setProducts] = useState<ProductType[]>();

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("/api/product");

      const { product } = await res.json();

      setProducts(product);
    };
    getProducts();
  }, []);

  return (
    <>
      <div className='grid grid-cols-6  gap-3 max-w-[1440px] justify-center'>
        {products?.map((product: ProductType) => (
          <ProductCard
            key={product.id}
            title={product.name}
            id={product.id}
            detail={product.detail}
            variant={product.variant}
          />
        ))}
      </div>
    </>
  );
}
