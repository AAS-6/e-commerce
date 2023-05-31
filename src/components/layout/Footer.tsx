import Image from "next/image";
import Link from "next/link";
import {BsTwitter, BsFacebook, BsInstagram, BsLinkedin} from "react-icons/bs";

export default function Footer() {
    return (
        <>
            <div className="flex justify-evenly bg-[#5F72FF] py-[46px] text-white mt-6">
                <div className="flex flex-col justify-center items-center">
                    <Image 
                        src="/footer/logoWhite.svg"
                        width={98}
                        height={63}
                        alt="AA Logo"
                    />
                    <h1 className="text-[44px] font-extrabold">AA-Shopping</h1>
                    <div className="flex ">
                        <Link href={"#"} className="pr-2">
                            <Image
                                src="/footer/playstore.svg"
                                width={149}
                                height={42}
                                alt="Play Store"
                            />
                        </Link>
                        <Link href={"#"}>
                            <Image
                                src="/footer/appstore.svg"
                                width={149}
                                height={42}
                                alt="Apple Store"
                            />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-bold mb-2">Beranda</h3>
                        <div className="flex flex-col leading-5">
                            <Link href={"#"} className="text-sm font-medium">Top-up dan Tagihan</Link>
                            <Link href={"#"} className="text-sm font-medium">Khusus Pengguna Baru</Link>
                            <Link href={"#"} className="text-sm font-medium">Kejar Diskon Spesial</Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold my-2">Produk dan Toko</h3>
                        <div className="flex flex-col leading-5">
                            <Link href={"#"} className="text-sm font-medium">Semua Produk</Link>
                            <Link href={"#"} className="text-sm font-medium">Semua Toko</Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-bold mb-2">Halaman Profil</h3>
                        <div className="flex flex-col leading-5">
                            <Link href={"#"} className="text-sm font-medium">Edit Profil</Link>
                            <Link href={"#"} className="text-sm font-medium">Wishlist</Link>
                            <Link href={"#"} className="text-sm font-medium">Keranjang Belanja</Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold my-2">Ikuti kami</h3>
                        <div className="flex leading-5">
                            <Link href={"#"} className="mr-3"><BsTwitter /></Link>
                            <Link href={"#"} className="mr-3"><BsFacebook /></Link>
                            <Link href={"#"} className="mr-3"><BsInstagram /></Link>
                            <Link href={"#"} className="mr-3"><BsLinkedin /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-center items-center bg-[#0016B6] text-white py-[30px] ">&copy; AA-Shopping. Hak Cipta Dilindungi</div>
            </div>
        </>
    )
}
