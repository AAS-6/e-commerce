"use client";

import { CgProfile } from "react-icons/cg";
import Rating from "react-rating";
import { ImStarFull, ImStarEmpty } from "react-icons/im";

let temp: Array<number> = [];
for (let i = 0; i < 3; i++) {
  temp.push(i);
}


export default function Reviews() {
  const ReviewsContent = () => {
    return (
      <div className={"flex items-center max-w-[1440px] w-full py-[60px]"}>
        <div className="flex items-center basis-1/3">
          <CgProfile size={100} />
          <div className="flex flex-col ml-6">
            <h1 className="text-[28px] font-medium">Jhon Doe</h1>
            <h2 className="text-[18px] font-medium py-[3px]">March 29, 2023</h2>
            <Rating
              initialRating={4.5}
              readonly
              emptySymbol={<ImStarEmpty className="icon" size={19} />}
              fullSymbol={<ImStarFull className="icon" size={19} />}
            />
          </div>
        </div>
        <p className="text-justify basis-2/3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          sequi consectetur praesentium quisquam sit excepturi rem maxime culpa
          nihil quo temporibus, molestias accusantium rerum dicta soluta esse
          facilis vero eaque?Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Officiis at reprehenderit doloremque sequi minima minus iusto
          repudiandae nisi, doloribus corporis aperiam velit eum similique
          molestias voluptate asperiores architecto ullam? Consectetur. Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Autem dicta magnam
          quos deleniti minus amet, animi doloribus, excepturi iste ipsam
          inventore veniam odit commodi tenetur fuga nemo a? Id, veritatis.
        </p>
      </div>
    );
  };
  return (
    <>
      <div>
        <h1 className="text-[40px] font-bold">Reviews</h1>
        {temp.map(index => (
            <div key={index} className={(index % 2 == 0 && index != 0) ? `border-t-2` :  `border-b-2`}>
                <ReviewsContent />
            </div>
        ))}
      </div>
    </>
  );
}
