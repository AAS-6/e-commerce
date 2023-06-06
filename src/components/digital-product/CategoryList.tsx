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
        <div className="flex items-center justify-center mx-3 mt-2">
            {category.map((item: any) => (
                <Link href={"#"} className="py-[9px] px-4 flex border-2 rounded-xl mx-1 items-center" key={item.name}>
                  <Image
                      width={70}
                      height={70}
                      src={item.img}
                      className="w-1/3 mr-[8px]"
                      alt={item.name}
                  />
                  <p className="text-lg">{item.name}</p>
                </Link>
            ))}
        </div>
    )
}