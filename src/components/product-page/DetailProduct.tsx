"use client";

import Image from "next/image";
import Rating from "react-rating";
import { ImStarFull, ImStarEmpty } from "react-icons/im";
import { AiOutlineHeart } from "react-icons/ai";
import { useFormik } from "formik";


export default function DetailProduct() {
  const formik = useFormik({
    initialValues: {
      model: "",
    },
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
      // postMessage(values)
    },
  });

  return (
    <>
      <div className="flex max-w-[1224px] w-full items-center justify-between pt-[60px] pb-[100px]">
        <div className="basis-2/3">
          <Image
            src="/digital-product/picture-large.svg"
            width={575}
            height={480}
            alt=""
          />
        </div>
        <div className="basis-2/3">
          <h1 className="text-[31px] font-semibold">
            Beckham Waterproof Hiking Boots
          </h1>
          <div className="pt-3 pb-6 flex items-center">
            <Rating
              initialRating={4.5}
              readonly
              emptySymbol={<ImStarEmpty className="icon" size={30} />}
              fullSymbol={<ImStarFull className="icon" size={30} />}
            />
            <h1 className="text-[28px] font-semibold ml-12">573 Reviews</h1>
          </div>
          <div className="flex items-center border-t-2 border-b-2 py-6">
            <h3 className="basis-1/4 text-[34px] font-semibold text-[#5F72FF]">
              Price
            </h3>
            <div className="flex flex-col basis-2/5 ">
              <select
                id="model"
                name="model"
                onChange={formik.handleChange}
                value={formik.values.model}
                className="border-2 rounded-lg p-2 outline-none"
              >
                <option value={0}>Select Model</option>
                <option value={0.5}>500MB</option>
                <option value={1}>1GB</option>
                <option value={2}>2GB</option>
                <option value={5}>5GB</option>
                <option value={6}>6GB</option>
                <option value={10}>10GB</option>
                <option value={15}>15GB</option>
                <option value={20}>20GB</option>
                <option value={40}>40GB</option>
              </select>
            </div>
          </div>
          <p className="py-6 text-sm font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            cum est numquam pariatur placeat. Assumenda repellat voluptatum id
            aliquid. Error ullam beatae fugit, eius minus harum ad asperiores.
            Dicta, enim.
          </p>
          <div className="flex">
            <button className="bg-[#5F72FF] rounded-lg text-white py-[10px] px-4 mr-6">
              Add to Cart
            </button>
            <button className="border-2 rounded-lg border-[#2DCEA6] text-[#2DCEA6] py-[10px] px-4 flex items-center">
              <AiOutlineHeart className="mr-2"/>
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
