import React from "react";
import Image from "next/image";
import PageIndicator from "@/components/profile/PageIndicator";

export default function profile() {
  return (
    <main>
      <div className="flex max-w-6xl mx-auto my-20 gap-y-5 justify-evenly shadow-2xl rounded-2xl">
        <div className="flex-col my-9">
          <div className="flex justify-center">
            <Image
              src="/profile/profile.svg"
              width={200}
              height={200}
              alt="profile"
              quality={100}
            />
          </div>
          <div className="md:flex md:items-center justify-center mt-3">
            <button
              className="focus:shadow-outline focus:outline-none hover:bg-[#5F72FF] hover:text-white  text-[#5F72FF] border-2 font-medium py-2 px-4 rounded max-w-lg"
              type="button"
            >
              Pilih Gambar
            </button>
          </div>
          <div style={{ borderTop: "1px solid black", margin: "16px 0" }}></div>
          <div>
            <PageIndicator />
          </div>
        </div>
        {/* <div className="grid grid-cols-3 gap-4">
          <ProductCard />
          <ProductList /> */}
        {/* </div> */}
      </div>
    </main>
  );
}
