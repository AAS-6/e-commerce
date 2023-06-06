import React from "react";
import Image from "next/image";
import OrderCard from "@/components/cart/OrderCard";

export default function CartList() {
  return (
    <div>
      <div className="bg-white py-6 px-12 border-2 mx-[90px] rounded-lg">
        <div className="flex">
          <div className="flex space-x-[24px] items-center">
            <Image
              src="/cart/list_image.svg"
              width={120}
              height={120}
              alt={"picture"}
            />
            <div className="flex-col w-2/6">
              <h1 className="font-medium">
                Animacos Kursi Kerja Putar Kursi Kantor Hidrolik Kursi Komputer
              </h1>
              <div className="flex">
                <h1 className="font-medium">IKEA</h1>
                <h1 className="font-medium"> - </h1>
                <h1 className="font-medium">Jakarta Barat</h1>
              </div>
              <div className="flex items-center space-x-2">
                <Image
                  src="../cart/star.svg"
                  width={12}
                  height={12}
                  alt="star"
                />
                <h1 className="font-medium">4.9</h1>
                <div
                  style={{
                    borderLeft: "1px solid black",
                    margin: "48px 0",
                  }}
                ></div>
                <h1 className="font-medium">Terjual </h1>
                <h1 className="font-medium"> 1000</h1>
              </div>
            </div>

            <OrderCard />
            <div className="md:flexmd:items-center mb-4 space-y-2">
              <button
                className="shadow bg-[#2DCEA6]  focus:shadow-outline focus:outline-none text-white font-medium py-2 px-4 rounded w-full"
                type="button"
              >
                Wishlist
              </button>
              <button
                className="shadow bg-[#C03221]  focus:shadow-outline focus:outline-none text-white font-medium py-2 px-4 rounded w-full"
                type="button"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
