// use this file to wrap all your components
import SpecialCategory from "./SpecialCategory";
import Topup from "./Topup";

export default function Wrapper() {
  return (
    <section className='flex w-[85%] bg-white border-2 rounded-lg p-2 mb-10 mt-12 bg-whites max-w-5xl'>
      <SpecialCategory />
      <Topup />
    </section>
  );
}
