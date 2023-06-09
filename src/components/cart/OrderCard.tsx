import { supabase } from "@/lib/supabase";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import React, { useState } from "react";

const OrderCard = ({
  price,
  quantity: initialQuantity,
  id,
  img,
  name,
}: {
  price: number;
  name: string;
  quantity: number;
  img: string;
  id: string;
}) => {
  const { format } = Intl.NumberFormat("id-ID", {
    currency: "IDR",
    style: "currency",
  });
  const [quantity, setQuantity] = useState<number>(initialQuantity);
  const [deleted, setDeleted] = useState<boolean>(false);

  const { data, mutate: changeQuantity } = useMutation({
    mutationFn: async (data: any) => {
      const session = await supabase.auth.getSession();
      const userId = session?.data?.session?.user?.id;

      const res = await fetch(`/api/customers/${userId}/cart/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
      });

      const json = await res.json();

      return json;
    },
  });

  console.log(data);

  const { mutate: deleteItem } = useMutation({
    mutationFn: async () => {
      const session = await supabase.auth.getSession();
      const userId = session?.data?.session?.user?.id;

      const res = await fetch(`/api/customers/${userId}/cart/${id}`, {
        method: "DELETE",
      });

      const json = await res.json();

      return json;
    },
  });

  const addHandler = () => {
    changeQuantity({ quantity: quantity + 1 });
    setQuantity(quantity + 1);
  };

  const removeHandler = () => {
    if (quantity === 1) {
      return;
    }

    changeQuantity({ quantity: quantity - 1 });
    setQuantity(quantity - 1);
  };

  const deleteHandler = () => {
    setDeleted(true);
    deleteItem();
  };

  if (deleted) {
    return null;
  }

  return (
    <div className='grid grid-cols-4 rounded-md my-5 w-8/12 py-2'>
      <div className='flex space-x-[24px] items-center'>
        <Image
          src='/cart/list_image.svg'
          width={120}
          height={120}
          alt={"picture"}
        />
        <div className='flex-col w-2/6'>
          <h1 className='font-medium w-5/6'>{name}</h1>
          <div className='flex'>
            <h1 className='font-medium'>IKEA</h1>
            <h1 className='font-medium'> - </h1>
            <h1 className='font-medium'>Jakarta Barat</h1>
          </div>
          <div className='flex items-center space-x-2'>
            <Image src='../cart/star.svg' width={12} height={12} alt='star' />
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
      </div>

      <div className='col-span-3 flex flex-col ml-10 justify-center h-20'>
        <div className='flex gap-5 items-center '>
          <h1 className='font-medium'>{format(price)}-</h1>

          <div className='flex rounded-md overflow-hidden bg-mangoTango text-black border-2 font-medium'>
            <div
              className='w-8 py-1 text-center hover:bg-[#e04609] hover:text-white'
              onClick={removeHandler}
            >
              -
            </div>
            <div className='w-4 py-1 text-center text-black'>{quantity}</div>
            <div
              className='w-8 py-1 text-center  hover:bg-[#5F72FF] hover:text-white'
              onClick={addHandler}
            >
              +
            </div>
          </div>
          <h1 className='font-medium text-[#5F72FF]'>{format(price)},-</h1>
        </div>
      </div>

      <div className='md:flexmd:items-center mb-4 space-y-2'>
        <button
          className='shadow bg-[#2DCEA6]  focus:shadow-outline focus:outline-none text-white font-medium py-2 px-4 rounded w-full'
          type='button'
        >
          Wishlist
        </button>
        <button
          onClick={deleteHandler}
          className='shadow bg-[#C03221]  focus:shadow-outline focus:outline-none text-white font-medium py-2 px-4 rounded w-full'
          type='button'
        >
          Hapus
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
