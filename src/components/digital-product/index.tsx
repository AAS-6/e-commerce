// use this file to wrap all your components
import SpecialCategory from "./SpecialCategory";
import Topup from "./Topup";

export default function Wrapper() {
  return (
    <section className='flex w-[85%] bg-white border-2 rounded-lg p-4 h-[20vh] mb-10 mt-12 bg-whites'>
      <SpecialCategory />
      <Topup />
    </section>
  );
}
