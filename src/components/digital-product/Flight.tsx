import { getPreviewAirportClient } from "@/controller/airport";
import { ErrorMessage, useFormik } from "formik";
import { get } from "http";
import { use, useEffect, useState } from "react";
import * as Yup from "yup";

const PhoneSchema = Yup.object().shape({
  // indonesia phone number
  phone: Yup.string()
    .matches(
      /^(^\+62\s?|^0)(\d{3,4}-?){2}\d{3,4}$/,
      "Nomor handphone tidak valid"
    )
    .required("Phone number is required"),
});

export default function Flight() {
  const [airports, setAirports] = useState<
    {
      code: string;
      name: string;
    }[]
  >([]);

  const getAirport = async () => {
    const res = await getPreviewAirportClient();
    setAirports(res);
    console.log(res);
  };

  const formik = useFormik({
    initialValues: {
      source: "",
      destination: "",
    },
    onSubmit: values => {
        console.log("HAlo")
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: PhoneSchema,
  });

  useEffect(() => {
    getAirport();
  }, []);

  return (
    <form
      className='flex gap-x-3 h-full px-3 pb-8 pt-5'
      onSubmit={formik.handleSubmit}
    >
      <div className='flex flex-col relative basis-2/5'>
        <label htmlFor='source'>Asal Keberangkatan</label>
        <select
          id='source'
          name='source'
          className='border-2 rounded-lg p-2 outline-none w-full'
          onChange={formik.handleChange}
          value={formik.values.source}
        >
          <option value={0}>Pilih Tujuan</option>
          {airports &&
            airports.map((airport, index) => (
              <option key={index} value={airport.code}>
                {airport.name}
              </option>
            ))}
        </select>
      </div>
      <div className='flex flex-col relative basis-2/5'>
        <label htmlFor='destination'>Tujuan Keberangkatan</label>
        <select
          id='destination'
          name='destination'
          className='border-2 rounded-lg p-2 outline-none w-full'
          onChange={formik.handleChange}
          value={formik.values.destination}
        >
          <option value={0}>Pilih Tujuan</option>
          {airports &&
            airports.map((airport, index) => (
              <option key={index} value={airport.code}>
                {airport.name}
              </option>
            ))}
        </select>
      </div>

      <button
        className='bg-[#5F72FF] basis-1/5 md:basis-1/6 font-medium text-white h-fit py-2 self-end rounded-lg'
        type='submit'
      >
        Cari
      </button>
    </form>
  );
}
