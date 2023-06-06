'use client';

import Image from "next/image"
import Rating from "react-rating"
import { ImStarFull, ImStarEmpty } from "react-icons/im"
import Link from "next/link"



export default function SimilarProductCard(){
    return (
        <div className="flex items-center p-2 my-6">
            <div className="mx-4 bg-[#817f7f] ">
                <Image src={"/digital-product/picture-large.svg"} width={193} height={158} alt={""} />
            </div>
            <div className="text-white flex flex-col">
                <h4 className="text-2xl font-bold">Quecha Trekking Shoes</h4>
                <h5 className="text-xl font-semibold">Price</h5>
                <Rating
                    initialRating={4.5}
                    readonly
                    emptySymbol={<ImStarEmpty className="icon" size={19} />}
                    fullSymbol={<ImStarFull className="icon" size={19} />}
                />
                <Link href="#" className=" bg-white w-1/2 text-[#5F72FF] text-center rounded-md font-semibold">See Details</Link>
            </div>
        </div>
    )
}