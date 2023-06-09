import Image from "next/image";

const specialCategory = [
  {
    name: "Consumer Electronics",
    img: "/digital-product/picture-large.svg",
  },
  {
    name: "Computer & Laptop",
    img: "/digital-product/picture-large.svg",
  },
  {
    name: "Gaming",
    img: "/digital-product/picture-large.svg",
  },
  {
    name: "Home Theater & Audio",
    img: "/digital-product/picture-large.svg",
  },
];

export default function SpecialCategory() {
  return (
    <div className='basis-1/2 flex flex-col '>
      <h2 className='text-lg font-semibold'>Kategori Pilihan</h2>
      <div className='flex gap-x-3 xl:gap-x-5 mt-2 h-full'>
        {specialCategory.map(item => (
          <div
            key={item.name}
            className='flex basis-1/4 cursor-pointer border-2 py-4 px-2 rounded-lg justify-center items-center flex-col'
          >
            <Image
              width={60}
              height={60}
              src={item.img}
              className='w-1/3 basis-1/2'
              alt={item.name}
            />
            <p className='mt-1 basis-1/2 text-xs xl:text-sm text-center px-1'>
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
