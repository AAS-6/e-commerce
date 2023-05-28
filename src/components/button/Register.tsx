import Link from "next/link";

export default function Register() {
  return (
    <Link href='/login'>
      <button className='bg-[#5F72FF] py-2 px-5 rounded-lg text-white'>
        Daftar
      </button>
    </Link>
  );
}
