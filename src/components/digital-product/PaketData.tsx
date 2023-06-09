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

export default function PaketData() {
  const formik = useFormik({
    initialValues: {
      phone: "",
      nominal: 0,
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
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
          <option value={0.5}>500MB</option>
          <option value={1}>1GB</option>
          <option value={2}>2GB</option>
          <option value={5}>5GB</option>
          <option value={6}>6GB</option>
          <option value={10}>10GB</option>
          <option value={15}>15GB</option>
          <option value={20}>20GB</option>
          <option value={40}>40GB</option>
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
