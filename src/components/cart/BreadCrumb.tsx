import React from "react";
import Image from "next/image";

export default function BreadCrumb() {
  return (
    <div className="flex justify-center mx-32">
      <div className="flex-col my-24">
        <div className="flex justify-evenly items-center max-w-full">
          <div className="text-4xl font-bold text-[#5F72FF]">
            <h1>Shopping Cart</h1>
          </div>
          <Image
            src="../cart/chevron-left.svg"
            width={50}
            height={50}
            alt="chevron-left"
          />
          <div className="text-4xl font-normal text-[#131313]">
            <h1>Shipping Detail</h1>
          </div>
          <Image
            src="../cart/chevron-left.svg"
            width={50}
            height={50}
            alt="chevron-left"
          />
          <div className="text-4xl font-normal text-[#131313]">
            <h1>Payment Options</h1>
          </div>
        </div>
        <div style={{ borderTop: "1px solid black", margin: "16px 0" }}></div>
      </div>
    </div>
  );
}
