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
        src='/navbar/logo.svg'
        width={width || 72}
        height={height || 72}
        alt='Logo'
      />
    </Link>
  );
}
