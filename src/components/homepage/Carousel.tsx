import ProductCard from "./CarouselCard";
import React from "react";
import { useKeenSlider } from "keen-slider/react.es";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import Countdown, { zeroPad } from "react-countdown";
import Link from "next/link";


const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Carousel({title}: any){
  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    slides: {
      origin: "auto",
      perView: 6,
    },
  });

  const renderCountdown = ({ hours, minutes, seconds, completed }: any): React.ReactNode => {
    
    return (
    <>
        <span className="bg-[#D9D9D9] p-[4.5px] mx-1 text-white">
        {zeroPad(hours)}
        </span>
        :
        <span className="bg-[#D9D9D9] p-[4.5px] mx-1 text-white">
        {zeroPad(minutes)}
        </span>
        :
        <span className="bg-[#D9D9D9] p-[4.5px] mx-1 text-white">
        {zeroPad(seconds)}
        </span>
    </>
    );
    
    
  };

  return (
    <div className="flex flex-col my-5 max-w-[1440px]">
      <div className="flex items-center py-2">
        <h2 className="font-bold text-2xl">{title}</h2>
        <p className="text-[15px] text-[#8E7F7F] ml-2">Berakhir dalam</p>
        <Countdown date={Date.now() + 100000000000} renderer={renderCountdown}/>
        <Link href="#" className="font-bold text-[15px]">
          Lihat Semua
        </Link>
      </div>
      <div className="flex items-center my-14">
        <Image
          src="/homepage/dumnyCarousel.png"
          width={273}
          height={329}
          alt="Handphone"
          className="absolute"
        />
        <div
          ref={sliderRef}
          className="keen-slider ml-44 overflow-x-hidden"
        >
          {number.map((number) => (
            <div
              className={`keen-slider__slide number-slide${number}`}
              key={number}
            >
              <ProductCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
