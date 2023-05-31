import Link from "next/link";
import Image from "next/image";

const category = [
    {
      name: "Handphone",
      img: "/digital-product/picture-small.svg",
    },
    {
      name: "Tablet",
      img: "/digital-product/picture-small.svg",
    },
    {
      name: "Komputer",
      img: "/digital-product/picture-small.svg",
    },
    {
      name: "Laptop",
      img: "/digital-product/picture-small.svg",
    },
    {
      name: "Monitor",
      img: "/digital-product/picture-small.svg",
    },
    {
      name: "Mouse",
      img: "/digital-product/picture-small.svg",
    },
    {
      name: "Keyboard",
      img: "/digital-product/picture-small.svg",
    },
    {
      name: "Audio",
      img: "/digital-product/picture-small.svg",
    },
    {
      name: "Proyektor",
      img: "/digital-product/picture-small.svg",
    },
    {
      name: "Printer",
      img: "/digital-product/picture-small.svg",
    },
];

export default function CategoryList() {
    return (
        <div className="flex items-center justify-center mr-3">
            {category.map((item: any) => (
                <div className="py-[9px] px-3 flex border-2 rounded-xl mx-1  items-center" key={item.name}>
                    <Image
                        width={60}
                        height={60}
                        src={item.img}
                        className="w-5/6 mr-[10px]"
                        alt={item.name}
                    />
                    <p>{item.name}</p>
                </div>
            ))}
        </div>
    )
}