import Image from "next/image";

export default function Search() {
  return (
    <div className='basis-3/5'>
      <div className='flex border-2 border-slate-300 px-4 rounded-lg'>
        <Image src='/navbar/search.svg' width={24} height={24} alt='Search' />
        <input
          type='text'
          name='search'
          id='search'
          placeholder='Cari di AAS Shopping...'
          className='w-full px-4 py-2 outline-none rounded-lg text-black'
        />
      </div>
    </div>
  );
}
