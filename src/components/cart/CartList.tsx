import React, { useEffect, useState } from "react";
import Image from "next/image";
import OrderCard from "./OrderCard";
import { supabase } from "@/lib/supabase";

type CartListProps = {
  product: any[];
};

export default function CartList({ product }: CartListProps) {
  const [userId, setUserId] = useState<string>();

  useEffect(() => {
    const getId = async () => {
      const id = (await supabase.auth.getSession()).data.session?.user.id;
      setUserId(id);
    };

    getId();
  }, []);

  const handleDelete = async (cartId: string) => {
    const res = await fetch(`/api/customers/${userId}/cart?cartId=${cartId}`);
    const data = await res.json()
  };

  return (
    <div>
      {product &&
        product.map((item: any) => {
          return (
            <div
              className='bg-white py-6 px-12 border-2 mx-[90px] rounded-lg my-6'
              key={item.id}
            >
              <div className='flex justify-between'>
                <div className='flex space-x-[24px] items-center'>
                  <Image
                    src='/cart/list_image.svg'
                    width={120}
                    height={120}
                    alt={"picture"}
                  />
                  <div className='flex-col w-2/6'>
                    <h1 className='font-medium w-5/6'>{item.product.name}</h1>
                    <div className='flex'>
                      <h1 className='font-medium'>IKEA</h1>
                      <h1 className='font-medium'> - </h1>
                      <h1 className='font-medium'>Jakarta Barat</h1>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <Image
                        src='../cart/star.svg'
                        width={12}
                        height={12}
                        alt='star'
                      />
                      <h1 className='font-medium'>4.9</h1>
                      <div
                        style={{
                          borderLeft: "1px solid black",
                          margin: "48px 0",
                        }}
                      ></div>
                      <h1 className='font-medium'>Terjual </h1>
                      <h1 className='font-medium'> 1000</h1>
                    </div>
                  </div>

                  <OrderCard
                    price={item.product.variant[0].price}
                    name={item.product.name}
                    quantity={item.quantity}
                    img={item.product.image}
                  />
                  <div className='md:flexmd:items-center mb-4 space-y-2'>
                    <button
                      className='shadow bg-[#2DCEA6]  focus:shadow-outline focus:outline-none text-white font-medium py-2 px-4 rounded w-full'
                      type='button'
                    >
                      Wishlist
                    </button>
                    <button
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                      className='shadow bg-[#C03221]  focus:shadow-outline focus:outline-none text-white font-medium py-2 px-4 rounded w-full'
                      type='button'
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
