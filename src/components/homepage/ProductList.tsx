import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { ProductType } from "@/app/api/product/route";
import { useQuery } from "@tanstack/react-query";
import { error } from "console";

export default function ProductList() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("/api/product");

      const { product } = await res.json();

      return product;
    },
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError)
    return (
      <div>
        An error has occurred: <pre>{JSON.stringify(error)}</pre>
      </div>
    );


  return (
    <>
      <div className='grid grid-cols-6  gap-3 max-w-[1440px] justify-center'>
        {/* @ts-ignore */}
        {data?.map((product: any) => (
          <ProductCard
            key={product.id}
            title={product.name}
            id={product.id}
            detail={product.detail}
            variant={product.variant}
            image={product.imageUrls[0]}
          />
        ))}
      </div>
    </>
  );

  // return (
  //   <>
  //     <div className='grid grid-cols-6  gap-3 max-w-[1440px] justify-center'>
  //       {/* @ts-ignore */}
  //       {products?.map((product: any) => (
  //         <ProductCard
  //           key={product.id}
  //           title={product.name}
  //           id={product.id}
  //           detail={product.detail}
  //           variant={product.variant}
  //           image={product.imageUrls[0]}
  //         />
  //       ))}
  //     </div>
  //   </>
  // );
}
