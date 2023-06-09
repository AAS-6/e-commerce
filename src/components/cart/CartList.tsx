import React, { useEffect, useState } from "react";
import Image from "next/image";
import OrderCard from "./OrderCard";
import { supabase } from "@/lib/supabase";
import { useQuery } from "@tanstack/react-query";

type CartListProps = {
  product: any[];
};

export default function CartList() {
  const { data: cart, error } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const session = await supabase.auth.getSession();
      const userId = session?.data.session?.user.id;
      const res = await fetch(`/api/customers/${userId}/cart`);

      const data = await res.json();

      return data;
    },
  });

  if (error) {
    return <p>Error</p>;
  }

  console.log(cart);

  // return <></>;

  return (
    <ul>
      {cart &&
        cart.items.length > 0 &&
        cart?.items.map((item: any) => {
          return (
            <OrderCard
              price={item.variant.price}
              name={item.variant.product.name}
              quantity={item.quantity}
              img={item.variant.product.imageUrls[0]}
              id={item.variantId}
              key={item.variantId}
            />
          );
        })}
    </ul>
  );
}
