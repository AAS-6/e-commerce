// use this file to wrap all your components
import CategoryList from "./CategoryList";
import SpecialCategory from "./SpecialCategory";
import Topup from "./Topup";

export default function Wrapper() {
  return (
    <section className='flex w-[98%] max-w-[1440px] bg-white border-2 gap-x-2 rounded-lg p-4 mb-10 mt-12 bg-whites'>
      <SpecialCategory />
      <Topup />
    </section>
  );
}
