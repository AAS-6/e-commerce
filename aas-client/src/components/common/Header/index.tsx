import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const handleSearch = (e: any) => {
  e.preventDefault();
  console.log("search");
}



export default function Header() {
  return(
    <>
      <div className="flex h-[76px] justify-center items-center">
          <div className="flex items-center">
            <Image src="/AAIcon.svg" width={54} height={35} alt="" />
            <h1 className="font-extrabold text-[#5F72FF] text-center text-2xl">AAS-Shopping</h1>
          </div>
          <form action="" className="flex mx-6">
            {/* <FontAwesomeIcon icon={faSearch} /> */}
            <input type="text" placeholder="Cari di AA-Shopping" className="border-2 rounded-2xl py-2 px-16"/>
          </form>
          <div className="flex border-r-2 border-black py-1" >
            <ul className="flex text-xl font-medium">
              <li className="pr-8"><a href="#">Homepage</a></li>
              <li className="pr-8"><a href="#">Products</a></li>
              <li className="pr-8"><a href="#">Stores</a></li>
            </ul>
            <Image src="/cartIcon.svg" width={25} height={25} alt="" className="mr-8"/>
          </div>
          <div>
            <Link href="#" className="border-[1px] border-[#5F72FF] text-[#5F72FF] rounded-xl font-medium px-6 py-[10px] mx-6">Masuk</Link>
            <Link href={"/register"} className=" bg-[#5F72FF] text-[#F5F3FF] rounded-xl font-medium px-6 py-[10px]">Daftar</Link>
          </div>
      </div>
    </>
  );
}
