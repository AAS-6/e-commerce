import { variant } from "@prisma/client";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import TextTruncate from "react-text-truncate";

type CardProps = {
  title: string;
  variant: variant[];
  id: string;
  detail: string;
};

export default function ProductCard({ title, variant, detail, id }: CardProps) {
  // create currency formatter
  const formatter = Intl.NumberFormat("id-ID", {
    currency: "IDR",
    style: "currency",
  });

  const price = formatter.format(variant[0].price);

  return (
    <div className='bg-white border border-gray-200 rounded-lg shadow flex flex-col h-[315px]'>
      <div className='flex justify-center items-center h-full bg-gray-200'>
        <a href='#'>
          <Image
            src='/digital-product/picture-large.svg'
            width={60}
            height={60}
            alt='Handphone'
          />
        </a>
      </div>
      <div className='p-3 basis-1/3'>
        <div className='mb-3 font-semibold text-[#010101] text-[13.5px]'>
          <TextTruncate line={2} element='h4' truncateText='…' text={title} />
        </div>
        <p className='font-bold text-gray-700 text-[13.5px]'>{price}</p>
        {/* <p className='my-2 text-[10.5px]'>
          {" "}
          <span className='bg-[#F2D6D3] py-[4.5px] px-[9px] mr-[9px] text-[#C03221] rounded-lg no-underline'>
            50%
          </span>{" "}
          <span className='line-through text-sm'>{price}</span>
        </p> */}
        <p className='text-[10.5px] mt-2'>
          <span className='font-semibold'>IKEA</span> - Jakarta Barat
        </p>
        <div className='flex text-[10.5px] items-center mt-2'>
          <div className='flex items-center border-r-2'>
            <AiFillStar />
            <p className='px-[6px]'>4.9</p>
          </div>
          <p className='px-2'>Terjual 1.4 rb</p>
        </div>
      </div>
    </div>
  );
}
