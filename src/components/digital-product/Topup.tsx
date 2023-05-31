import { useState } from "react";
import { DigitalUIState, selectActive, setActive } from "@/store/digital-slice";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Field, Form, Formik, withFormik } from "formik";

export default function Topup() {
  const active = useSelector(selectActive);
  return (
    <div className='basis-1/2 mx-3 h-full'>
      <h2 className='font-semibold text-lg'>Top Up & Tagihan</h2>
      <div className='flex flex-col rounded-lg h-full mt-2'>
        <div className='basis-1/5'>
          <Menu />
        </div>
        <div className='basis-4/5'>{active}</div>
      </div>
    </div>
  );
}

type MenuType = "Pulsa" | "Paket Data" | "Flight" | "Listrik PLN";

const menu: {
  name: "Pulsa" | "Paket Data" | "Flight" | "Listrik PLN";
}[] = [
  {
    name: "Pulsa",
  },
  {
    name: "Paket Data",
  },
  {
    name: "Flight",
  },
  {
    name: "Listrik PLN",
  },
];

const Menu = () => {
  const dispatch = useDispatch();
  const active = useSelector(selectActive);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleClick = (itemName: MenuType, index: number) => {
    dispatch(setActive(itemName));
    setActiveIndex(index);
  };

  return (
    <ul className='flex justify-around h-full relative'>
      {menu.map((item, idx) => (
        <li
          key={item.name}
          onClick={() => {
            handleClick(item.name, idx);
          }}
          className='cursor-pointer border-y-2 border-transparent py-1 w-4/5 text-center'
        >
          {item.name}
        </li>
      ))}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: activeIndex * 100 + "%" }}
        transition={{ duration: 0.3 }}
        className='absolute bottom-0 left-0 rounded-lg w-1/4 h-1 bg-[#5F72FF]'
      />
    </ul>
  );
};
