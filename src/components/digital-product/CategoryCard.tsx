import Link from "next/link";
import Image from "next/image";

const category = [
  {
    name: "HP",
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

export default function CategoryCard() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {category.map((item: any) => (
        <Link
          href={"#"}
          className="py-[9px] px-8 flex justify-center border-2 rounded-xl items-center hover:bg-[#5F72FF] hover:text-white"
          key={item.name}
          style={{ transform: "scale(1)", transition: "transform 0.3s" }}
        >
          <p className="text-base">{item.name}</p>
        </Link>
      ))}
    </div>
  );
}
