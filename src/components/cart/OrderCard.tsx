import React from "react";
import { useDispatch } from "react-redux";

const OrderCard = ({
  price,
  name,
  quantity,
  img,
}: {
  price: number;
  name: string;
  quantity: number;
  img: string;
}) => {
  const dispatch = useDispatch();
  const formatter = Intl.NumberFormat("id-ID", {
    currency: "IDR",
    style: "currency",
  });

  const addHandler = () => {
    // dispatch(addItem({ name, price }));
    // dispatch(saveItem({ name, quantity: quantity + 1, price }));
  };
  const removeHandler = () => {
    // dispatch(removeItem({ name, price }));
    // dispatch(saveItem({ name, quantity: quantity - 1, price }));
  };

  return (
    <div className="grid grid-cols-4 rounded-md my-5 w-3/5 py-2">
      <div className="col-span-3 flex flex-col ml-10 justify-center h-20">
        <div className="flex gap-5 items-center ">
          <h1 className="font-medium">Rp 23.000,-</h1>

          <div className="flex rounded-md overflow-hidden bg-mangoTango text-black border-2 font-medium">
            <div
              className="w-8 py-1 text-center hover:bg-[#e04609] hover:text-white"
              onClick={removeHandler}
            >
              -
            </div>
            <div className="w-4 py-1 text-center text-black">{quantity}</div>
            <div
              className="w-8 py-1 text-center  hover:bg-[#5F72FF] hover:text-white"
              onClick={addHandler}
            >
              +
            </div>
          </div>
          <h1 className="font-medium text-[#5F72FF]">Rp 46.000,-</h1>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
