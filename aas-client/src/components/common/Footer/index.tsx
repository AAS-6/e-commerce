import {BsTwitter, BsFacebook, BsInstagram, BsLinkedin} from 'react-icons/bs'
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="flex bg-[#5F72FF] text-white py-[46px] justify-evenly max-w-[1440px]">
        <div className="flex flex-col justify-center items-center">
          <Image src="/AAIconWhite.svg" width={99}  height={63} alt="" />
          <h1 className="font-extrabold text-center text-[44px] ">
            AAS-Shopping
          </h1>
          <div className="flex text-[#5F72FF] ">
            <Link
              href="#"
              className="flex px-4 py-[5px] rounded-lg bg-white mr-3"
            >
              <Image
                src="/playstore.svg"
                width={40}
                height={40}
                alt=""
                className="mr-8"
              />
              <div>
                <p>GET IT ON</p>
                <h3 className="text-2xl">Google Play</h3>
              </div>
            </Link>
            <Link
              href="#"
              className="flex px-4 py-[5px] rounded-lg bg-white"
            >
              <Image
                src="/appleStore.svg"
                width={40}
                height={40}
                alt=""
                className="mr-8"
              />
              <div>
                <p>Download on the</p>
                <h3 className="text-2xl">App Store</h3>
              </div>
            </Link>
          </div>
        </div>
        <div className=''>
          <div>
            <h2 className="text-xl font-bold pb-2">Beranda</h2>
            <ul className="leading-5 flex flex-col">
                <Link href={"#"} className="text-[14px] font-semibold">Top-up dan Tagihan</Link>
                <Link href={"#"} className="text-[14px] font-semibold">Khusus Pelanggan baru</Link>
                <Link href={"#"} className="text-[14px] font-semibold">Kejar Diskon spesial</Link>
            </ul>
          </div>
          <div className='mt-6'>
            <h2 className="text-xl font-bold pb-2 ">Produk dan Toko</h2>
            <ul className="leading-5 flex flex-col">
                <Link href={"#"} className="text-[14px] font-semibold">Semua Produk</Link>
                <Link href={"#"} className="text-[14px] font-semibold">Semua Toko</Link>
            </ul>
          </div>
        </div>
        <div>
          <div >
            <h2 className="text-xl font-bold pb-2">Halaman Profil</h2>
            <ul className="leading-5 flex flex-col">
                <Link href={"#"} className="text-[14px] font-semibold">Edit Profil</Link>
                <Link href={"#"} className="text-[14px] font-semibold">Wishlist</Link>
                <Link href={"#"} className="text-[14px] font-semibold">Keranjang Belanja</Link>
            </ul>
          </div>
          <div className='mt-6'>
            <h2 className="text-xl font-bold pb-2 mt-6">Ikuti Kami</h2>
            <div className='flex'>
              <Link href={"#"}>
                <BsTwitter className="mr-2"/>
                </Link> 
              <Link href={"#"}>
                <BsFacebook className="mr-2"/>
                </Link> 
              <Link href={"#"}>
                <BsInstagram className="mr-2"/>
                </Link> 
              <Link href={"#"}>
                <BsLinkedin className="mr-2"/>
                </Link> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
