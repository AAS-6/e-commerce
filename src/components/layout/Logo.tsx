import Image from "next/image";
import Link from "next/link";

export default function Logo({
  width,
  height,
}: {
  width: number | null | undefined;
  height: number | null | undefined;
}) {
  return (
    <Link href='/' className='flex items-center'>
      <Image
        src='/navbar/logo-1.svg'
        width={width || 256}
        height={height || 256}
        alt='Logo'
      />
    </Link>
  );
}
