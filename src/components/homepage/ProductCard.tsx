import Image from 'next/image'
import {AiFillStar} from 'react-icons/ai'
import TextTruncate from 'react-text-truncate'

export default function ProductCard(){
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow flex flex-col w-[210px] h-[315px] m-2">
            <div className="flex justify-center items-center h-full bg-gray-200">
                <a href="#">
                    <Image src="/digital-product/picture-large.svg" width={60} height={60} alt="Handphone" />
                </a>
            </div>
            <div className="p-3 basis-1/3">
                <TextTruncate
                    line={2}
                    element="h4"
                    truncateText="…"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo."
                    className="mb-3 font-semibold text-[#010101] text-[13.5px]"
                />
                <p className="font-bold text-gray-700 text-[13.5px]">Rp23.000,00-</p>
                <p className="my-2 text-[10.5px]"> <span className="bg-[#F2D6D3] py-[4.5px] px-[9px] mr-[9px] text-[#C03221] rounded-lg no-underline">50%</span> <span className="line-through text-sm">Rp50.000,-</span></p>
                <p className='text-[10.5px] mt-2'><span className='font-semibold'>IKEA</span> - Jakarta Barat</p>
                <div className='flex text-[10.5px] items-center mt-2'>
                    <div className='flex items-center border-r-2'>
                        <AiFillStar />
                        <p className='px-[6px]'>4.9</p>
                    </div>
                    <p className='px-2'>Terjual 1.4 rb</p>
                </div>
            </div>
        </div>
    )
}