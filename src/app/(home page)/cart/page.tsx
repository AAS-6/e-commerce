"use client";
import CartList from "@/components/cart/CartList";
import { supabase } from "@/lib/supabase";
import { setPage } from "@/store/ui-slice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
  const page = useSelector((state: any) => state.ui.page);
  const [userId, setUserId] = useState<any>();
  const [firstName, setFirstName] = useState<any>();
  const [lastName, setLastName] = useState<any>();
  const [product, setProduct] = useState<any>();
  const [address, setAddress] = useState<any>();
  const router = useRouter();
  const dispatch = useDispatch();

  const handleNext = () => {
    dispatch(page === "CART" ? setPage("SHIPPING") : setPage("PAYMENT"));
  };

  const title =
    page === "CART"
      ? "Shopping Cart"
      : page === "SHIPPING"
      ? "Shipping Details"
      : "Payment";

  useEffect(() => {
    const getDetail = async () => {
      const session = await supabase.auth.getSession();

      setUserId(session?.data.session?.user.id);
    };

    getDetail();
  }, []);

  useEffect(() => {
    const getAddress = async () => {
      const address = await fetch(`/api/customers/${userId}/address`);
      const addressJson = await address.json();

      const firstName = addressJson.firstName;
      const lastName = addressJson.lastName;

      setFirstName(firstName);

      setLastName(lastName);

      setAddress(addressJson.result);
    };

    if (userId) {
      getAddress();
    }
  }, [userId]);

  useEffect(() => {
    const getPayment = async () => {
      const totalPayment = product?.reduce(
        (total: any, item: any) => total + item.product.variant[0].price,
        0
      );

      const payment = await fetch(`/api/payment`, {
        method: "POST",
        body: JSON.stringify({
          orderId: (Math.random() * 1000000).toString(),
          productId: product?.id,
          userId: userId,
          totalAmount: totalPayment,
        }),
      });

      const paymentJson = await payment.json();

      router.push(paymentJson.transaction.redirect_url);
    };

    if (page === "PAYMENT") {
      getPayment();
    }
  }, [page, product, userId, router]);

  return (
    <main className="space-y-8">
      {page === "CART" && (
        <div className="mx-[90px]">
          <CartList />
        </div>
      )}
      {page === "SHIPPING" && (
        <form>
          <div className="max-w-2xl mx-auto gap-y-5 justify-center shadow-2xl rounded-2xl">
            <div className="p-9">
              <form className="w-full mt-4">
                <div className="md:flex md:items-center md:justify-between mb-6">
                  <div className="md:w-4/12">
                    <label
                      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      htmlFor="inline-first-name"
                    >
                      Nama Depan
                    </label>
                  </div>
                  <div className="md:w-full">
                    <h1 className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#5F72FF]">
                      {firstName}
                    </h1>
                  </div>
                </div>
                <div className="md:flex md:items-center md:justify-between mb-6 w-full">
                  <div className="md:w-4/12">
                    <label
                      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      htmlFor="inline-last-name"
                    >
                      Last Name
                    </label>
                  </div>
                  <div className="md:w-full">
                    <h1 className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#5F72FF]">
                      {lastName}
                    </h1>
                  </div>
                </div>

                <div className="md:flex md:items-top mb-6">
                  <div className="md:w-3/12">
                    <label
                      className="block text-gray-500 font-bold md:text-right my-3 md:mb-0 pr-4 "
                      htmlFor="inline-password"
                    >
                      Alamat
                    </label>
                  </div>
                  <div className="flex-col space-y-4 md:w-9/12">
                    {/* <Address /> */}
                    <h1 className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#5F72FF]">
                      {address.jalan} , {address.Regency.name} ,
                      {address.Province.name}
                    </h1>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </form>
      )}
      {page === "PAYMENT" && <div></div>}
      <div className="md:flex md:items-center mb-4">
        <button
          onClick={handleNext}
          className="shadow bg-[#5F72FF]  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full mx-[90px]"
          type="button"
        >
          {page === "CART" ? "Next" : page === "SHIPPING" ? "Next" : "Finish"}
        </button>
      </div>
    </main>
  );
}
