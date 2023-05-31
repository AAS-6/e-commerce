import ProductCard from "./ProductCard";

export default function ProductList() {
  let temp: Array<number> = [];
  for (let i = 0; i < 24; i++) {
    temp.push(i);
  }
  return (
    <>
      <div className='grid grid-cols-6  gap-3 max-w-[1440px] justify-center'>
        {temp.map(number => (
          <ProductCard key={number} />
        ))}
      </div>
    </>
  );
}
