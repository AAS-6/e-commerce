import DetailProduct from "./DetailProduct";
import Reviews from "./Review";
import SimilarProduct from "./SimilarProduct";

export default function ProductPage() {
    return (
        <>
        <section className="flex flex-col justify-center items-center">
            <DetailProduct />
            <SimilarProduct />
            <Reviews />
        </section>
        </>
    )   
}