"use client";

import { useKeenSlider } from "keen-slider/react.es";
import SimilarProductCard from "./SimilarProductCard";

let temp: Array<number> = [];
for (let i = 0; i < 5; i++) {
  temp.push(i);
}

export default function SimilarProduct() {
  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    slides: {
      spacing: 15,
      origin: "auto",
        perView: 4,
    },
    loop: true,
  });
  return (
    <>
      <div className="flex flex-col justify-center items-center text-white py-14 bg-[#5F72FF] w-full">
        <h1 className="text-4xl ">Similar Product</h1>
        <div className="flex keen-slider -w-[1440px]" ref={sliderRef}>
          {temp.map((index) => (
            <div
              className={`keen-slider__slide number-slide${index}`}
              key={index}
            >
              <SimilarProductCard />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
