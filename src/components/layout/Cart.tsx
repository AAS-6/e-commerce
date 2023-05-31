import Image from "next/image";
import Link from "next/link";

export default function Cart() {
  return (
    <ul className='flex gap-x-4 xl:gap-x-8 items-center'>
      <li>
        <Link href='/store'>Store</Link>
      </li>
      <li>
        <Link href='/product'>Product</Link>
      </li>
      <button>
        <Image src='/navbar/cart.svg' alt='Cart' width={32} height={32} />
      </button>
    </ul>
  );
}
