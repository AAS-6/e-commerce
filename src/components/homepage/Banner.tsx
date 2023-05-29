import Loading from "@/app/(auth page)/login/loading";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react.es";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";

const dummyData = [
  {
    src: "/promo/dummy.png",
    alt: "Image 1",
    redirect: "/",
  },
  {
    src: "/promo/dummy.png",
    alt: "Image 2",
    redirect: "/",
  },
  {
    src: "/promo/dummy.png",
    alt: "Image 3",
    redirect: "/",
  },
];

export default function Banner() {
  // https://keen-slider.io/docs
  // https://keen-slider.io/examples
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  useEffect(() => {
    const timer = setInterval(() => {
      instanceRef.current?.next();
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [instanceRef]);

  return (
    <div className='relative w-full'>
      <div ref={sliderRef} className='keen-slider w-full'>
        {dummyData.map((item, idx) => {
          return (
            <div key={idx} className='keen-slider__slide w-full'>
              {loaded && (
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1920}
                  height={469}
                  className='object-cover w-full h-full'
                  quality={100}
                />
              )}
            </div>
          );
        })}
        {loaded && instanceRef.current && (
          <div className='flex py-3 z-20 justify-center absolute bottom-0 left-1/2 -translate-x-1/2'>
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map(idx => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                    console.log(idx);
                  }}
                  style={{
                    scale: currentSlide === idx ? 1.5 : "",
                  }}
                  className='w-2 h-2 bg-white rounded-full mx-1 p-1 focus:outline-none'
                ></button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
