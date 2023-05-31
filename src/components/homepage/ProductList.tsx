import ProductCard from "./ProductCard"

export default function ProductList() {
    let temp:Array<number> = [];
    for (let i = 0; i < 25; i++) {
        temp.push(i);
    }
    return (
        <>
            <div className="flex flex-wrap flex-row max-w-[1224px] justify-center">
                {temp.map((number) => (
                    <ProductCard key={number}/>
                ))}
            </div>
        </>
    )
}
