import Image from "next/image";
import Link from "next/link";

export default function Cart() {
  return (
    <button>
      <Image src='/navbar/cart.svg' alt='Cart' width={32} height={32} />
    </button>
  );
}
