import { ErrorMessage, useFormik } from "formik";
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

export default function Pulsa() {
  const formik = useFormik({
    initialValues: {
      phone: "",
      nominal: 0,
    },
    onSubmit: values => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
      // postMessage(values)
    },
    validationSchema: PhoneSchema,
  });

  return (
    <form
      className='flex gap-x-3 h-full px-3 pb-8 pt-5'
      onSubmit={formik.handleSubmit}
    >
      <div className='flex flex-col relative basis-[45%]'>
        <label htmlFor='phone'>Nomor HP</label>
        <input
          id='phone'
          name='phone'
          type='text'
          className='border-2 rounded-lg px-3 h-full outline-none'
          value={formik.values.phone}
          onChange={formik.handleChange}
        />
        {formik.errors.phone && formik.touched.phone ? (
          <div className='text-red-500 absolute -bottom-5 text-sm'>
            {formik.errors.phone}
          </div>
        ) : null}
      </div>

      <div className='flex flex-col basis-[45%]'>
        <label htmlFor='nominal'>Nominal</label>
        <select
          id='nominal'
          name='nominal'
          onChange={formik.handleChange}
          value={formik.values.nominal}
          className='border-2 rounded-lg p-2 outline-none'
        >
          <option value={0}>Pilih Nominal</option>
          <option value={15000}>Rp 15.000</option>
          <option value={25000}>Rp 25.000</option>
          <option value={50000}>Rp 50.000</option>
          <option value={100000}>Rp 100.000</option>
          <option value={150000}>Rp 150.000</option>
          <option value={200000}>Rp 200.000</option>
          <option value={250000}>Rp 250.000</option>
          <option value={500000}>Rp 500.000</option>
        </select>
      </div>
      <button
        className='bg-[#5F72FF] basis- md:basis-1/6 font-medium text-white h-fit py-2 self-end rounded-lg'
        type='submit'
      >
        Beli
      </button>
    </form>
  );
}
