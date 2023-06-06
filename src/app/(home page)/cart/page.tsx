"use client";
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
  const [redirectUrl, setRedirectUrl] = useState<any>();
  const { format } = Intl.NumberFormat("id-ID", {
    currency: "IDR",
    style: "currency",
  });
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
    const getProduct = async () => {
      const product = await fetch(`/api/customers/${userId}/cart`);
      const productJson = await product.json();

      setProduct(productJson.items);
      console.log(productJson);
    };

    if (userId) {
      getProduct();
    }
  }, [userId]);

  useEffect(() => {
    const getAddress = async () => {
      const address = await fetch(`/api/customers/${userId}/address`);
      const addressJson = await address.json();
      console.log(addressJson.result);

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
      console.log(paymentJson);

      router.push(paymentJson.transaction.redirect_url);

      console.log(paymentJson);
    };

    if (page === "PAYMENT") {
      getPayment();
    }
  }, [page]);

  return (
    <main>
      <h1>{title}</h1>
      {page === "CART" && (
        <ul>
          {product &&
            product?.map((item: any) => (
              <li key={item.id}>
                <h1>{item.product.name}</h1>
                <p>{format(item.product.variant[0].price)}</p>
              </li>
            ))}
        </ul>
      )}
      {page === "SHIPPING" && (
        <form>
          <div>
            <div>{firstName}</div>
            <div>{lastName}</div>
          </div>
          <div>{address.jalan}</div>

          <div>
            <div>{address.Regency.name}</div>
            <div>{address.Province.name}</div>
          </div>
        </form>
      )}
      {page === "PAYMENT" && <div></div>}
      <button onClick={handleNext}>
        {page === "CART" ? "Next" : page === "SHIPPING" ? "Next" : "Finish"}
      </button>
    </main>
  );
}
