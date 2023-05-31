import Image from "next/image";
import ProgressBar from "@ramonak/react-progress-bar";
import TextTruncate from "react-text-truncate";

export default function ProductCard(){
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow flex flex-col w-[195px] h-[245px]">
            <div className="flex justify-center items-center h-full bg-gray-200">
                <a href="#">
                    <Image src="/digital-product/picture-large.svg" width={60} height={60} alt="Handphone" />
                </a>
            </div>
            <div className="p-3 basis-1/3">
                <p className="mb-3 font-bold text-gray-700 ">Rp23.000,00-</p>
                <p className="mb-3"> <span className="bg-[#F2D6D3] py-[4.5px] px-[9px] text-[#C03221] rounded-lg no-underline">50%</span> <span className="line-through">Rp50.000,-</span></p>
                <ProgressBar completed={50} customLabel=" " bgColor="#C03221" height="3px"/>
                <p className="text-[#5F72FF] text-xs mt-2">Tersedia</p>
            </div>
        </div>
    )
}