import { variant } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import TextTruncate from "react-text-truncate";

type CardProps = {
  title: string;
  variant: variant[];
  id: string;
  detail: string;
  image: string;
};

export default function ProductCard({
  title,
  variant,
  detail,
  id,
  image,
}: CardProps) {
  // create currency formatter
  const formatter = Intl.NumberFormat("id-ID", {
    currency: "IDR",
    style: "currency",
  });

  const price = formatter.format(variant[0].price);

  return (
    <Link href={`product/${id}`}>
      <div className="bg-white border border-gray-200 rounded-lg shadow flex flex-col h-[315px]">
        <Image
          // src='/digital-product/picture-large.svg'
          src={image}
          width={180}
          height={180}
          alt="Handphone"
          className="object-contain w-full h-[180px] object-center"
        />
        <div className="p-3 basis-1/3">
          <div className="mb-3 font-semibold text-[#010101] text-[13.5px] h-8">
            <TextTruncate line={2} element="h4" truncateText="…" text={title} />
          </div>
          <p className="font-bold text-gray-700 text-[13.5px]">{price}</p>
          <p className="text-[10.5px] mt-2">
            <span className="font-semibold">IKEA</span> - Jakarta Barat
          </p>
          <div className="flex text-[10.5px] items-center mt-2">
            <div className="flex items-center border-r-2">
              <AiFillStar />
              <p className="px-[6px]">4.9</p>
            </div>
            <p className="px-2">Terjual 1.4 rb</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
