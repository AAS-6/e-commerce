// use this file to wrap all your components
import CategoryList from "./CategoryList";
import SpecialCategory from "./SpecialCategory";
import Topup from "./Topup";

export default function Wrapper() {
  return (
    <section className='flex flex-col w-[85%] max-w-[1440px] bg-white border-2 rounded-lg p-4 h-full mb-10 mt-12 bg-whites'>
      <div className="flex mb-2">
        <SpecialCategory />
        <Topup />
      </div>
      <CategoryList />
    </section>
  );
}
