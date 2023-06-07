// import React from "react";
// import Image from "next/image";

// export default function BreadCrumb() {
//   return (
//     <div className="flex justify-center mx-32">
//       <div className="flex-col my-24">
//         <div className="flex justify-evenly items-center max-w-full">
//           <div className="text-4xl font-bold text-[#5F72FF]">
//             <h1>Shopping Cart</h1>
//           </div>
//           <Image
//             src="../cart/chevron-left.svg"
//             width={50}
//             height={50}
//             alt="chevron-left"
//           />
//           <div className="text-4xl font-normal text-[#131313]">
//             <h1>Shipping Detail</h1>
//           </div>
//           <Image
//             src="../cart/chevron-left.svg"
//             width={50}
//             height={50}
//             alt="chevron-left"
//           />
//           <div className="text-4xl font-normal text-[#131313]">
//             <h1>Payment Options</h1>
//           </div>
//         </div>
//         <div style={{ borderTop: "1px solid black", margin: "16px 0" }}></div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setPage } from "@/store/ui-slice";
// import { setPage } from "@/store/uiSlice";

type BreadCrumbProps = {
  page: string;
};

export default function BreadCrumb({ page }: BreadCrumbProps) {
  const dispatch = useDispatch();

  const handleClick = (selectedPage: string) => {
    dispatch(setPage(selectedPage as "CART" | "SHIPPING" | "PAYMENT"));
  };

  return (
    <div className='flex justify-center mx-32'>
      <div className='flex-col my-24'>
        <div className='flex justify-evenly items-center max-w-full'>
          <div
            className={`text-4xl ${
              page === "CART"
                ? "font-bold text-[#5F72FF]"
                : "font-normal text-[#131313]"
            } cursor-pointer`}
            onClick={() => handleClick("CART")}
          >
            <h1>Shopping Cart</h1>
          </div>
          <Image
            src='../cart/chevron-left.svg'
            width={50}
            height={50}
            alt='chevron-left'
          />
          <div
            className={`text-4xl ${
              page === "SHIPPING"
                ? "font-bold text-[#5F72FF]"
                : "font-normal text-[#131313]"
            } cursor-pointer`}
            onClick={() => handleClick("SHIPPING")}
          >
            <h1>Shipping Detail</h1>
          </div>
          <Image
            src='../cart/chevron-left.svg'
            width={50}
            height={50}
            alt='chevron-left'
          />
          <div
            className={`text-4xl ${
              page === "PAYMENT"
                ? "font-bold text-[#5F72FF]"
                : "font-normal text-[#131313]"
            } cursor-pointer`}
            onClick={() => handleClick("PAYMENT")}
          >
            <h1>Payment Options</h1>
          </div>
        </div>
        <div style={{ borderTop: "1px solid black", margin: "16px 0" }}></div>
      </div>
    </div>
  );
}
