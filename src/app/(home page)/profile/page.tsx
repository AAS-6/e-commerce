"use client";

import React, { useState } from "react";
import Image from "next/image";
import PageIndicator from "@/components/profile/PageIndicator";
import Address from "@/components/address/Address";
import { useSelector } from "react-redux";
import { selectCityId } from "@/store/user-slice";
import { supabase } from "@/lib/supabase";
import { useQuery } from "@tanstack/react-query";
import { AddressProps } from "@/components/address/Address";
import Loading from "@/app/(auth page)/login/loading";
import { BarLoader } from "react-spinners";

export default function Profile() {
  const cityId = useSelector(selectCityId);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [gender, setGender] = useState<string>("LAKI_LAKI");
  const [detail, setDetail] = useState<string>("");
  const [birthDate, setDate] = useState<string>("");
  const [city, setCity] = useState<AddressProps>({
    name: "",
    province: "",
    details: "",
    cityId: 0,
  });

  const { data, isFetching } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const sessions = await supabase.auth.getSession();
      const userId = sessions?.data.session?.user.id;
      const res = await fetch("api/profile?userId=" + userId);

      return res.json();
    },
    onSuccess(data) {
      setDate(data.user.birthDate);
      setFirstName(data.user.firstName);
      setLastName(data.user.lastName);

      const detailAddress = data.address.addressLine1;
      const province = data.address.city_v2.provinceName;
      const city = data.address.city_v2.cityName;
      const cityId = data.address.city_v2.cityId;

      setCity({
        name: city,
        province: province,
        details: detailAddress,
        cityId,
      });
    },
  });
  const handleFirstNameChange = (e: any) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: any) => {
    setLastName(e.target.value);
  };

  const handleGenderChange = (e: any) => {
    setGender(e.target.value);
  };

  const handleDetailChange = (e: any) => {
    setDetail(e.target.value);
  };

  const handleDateChange = (e: any) => {
    setDate(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const sessions = await supabase.auth.getSession();
    const userId = sessions?.data.session?.user.id;

    const data = {
      firstName,
      lastName,
      gender,
      birthDate,
      cityId,
      detail,
      userId,
    };

    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  return (
    <main>
      <div className='flex max-w-6xl mx-auto my-20 gap-y-5 justify-evenly shadow-2xl rounded-2xl'>
        <div className='flex-col my-9'>
          <div className='flex justify-center'>
            <Image
              src='/profile/profile.svg'
              width={200}
              height={200}
              alt='profile'
              quality={100}
            />
          </div>
          <div className='md:flex md:items-center justify-center mt-3'>
            <button
              className='focus:shadow-outline focus:outline-none hover:bg-[#5F72FF] hover:text-white  text-[#5F72FF] border-2 font-medium py-2 px-4 rounded max-w-lg'
              type='button'
            >
              Pilih Gambar
            </button>
          </div>
          <div style={{ borderTop: "1px solid black", margin: "16px 0" }}></div>
          <div>
            <PageIndicator />
          </div>
        </div>
        <div style={{ borderLeft: "1px solid black", margin: "48px 0" }}></div>
        <div className=''>
          <div className='p-9'>
            <div className='flex flex-col justify-center space-y-4 pb-4'>
              <b className='text-4xl font-semibold'>Profil Saya</b>
              <b className='text-sm font-medium'>
                Kelola informasi profil Anda untuk mengontrol, melindungi dan
                mengamankan akun
              </b>
            </div>

            {data && (
              <form onSubmit={handleSubmit} className='w-full mt-4'>
                <div className='md:flex md:items-center md:justify-between mb-6'>
                  <div className='md:w-4/12'>
                    <label
                      className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                      htmlFor='inline-first-name'
                    >
                      Nama Depan
                    </label>
                  </div>
                  <div className='md:w-full'>
                    <input
                      onChange={handleFirstNameChange}
                      className='appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#5F72FF]'
                      id='inline-first-name'
                      name='first-name'
                      type='text'
                      value={firstName || ""}
                      placeholder='Masukkan nama depan'
                    />
                  </div>
                </div>
                <div className='md:flex md:items-center md:justify-between mb-6 w-full'>
                  <div className='md:w-4/12'>
                    <label
                      className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                      htmlFor='inline-last-name'
                    >
                      Nama Belakang
                    </label>
                  </div>
                  <div className='md:w-full'>
                    <input
                      className='appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#5F72FF]'
                      id='lastName'
                      name='lastName'
                      onChange={handleLastNameChange}
                      type='text'
                      value={lastName}
                      placeholder='Masukkan nama belakang'
                    />
                  </div>
                </div>
                <div className='md:flex md:items-top mb-6'>
                  <div className='md:w-3/12'>
                    <label
                      className='block text-gray-500 font-bold md:text-right my-3 md:mb-0 pr-4 '
                      htmlFor='inline-password'
                    >
                      Alamat
                    </label>
                  </div>
                  <div className='flex-col space-y-4 md:w-9/12'>
                    <Address
                      name={city.name}
                      details={city.details}
                      province={city.province}
                      cityId={city.cityId}
                    />
                    <input
                      className='appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#5F72FF]'
                      id='detail-address'
                      type='address'
                      onChange={handleDetailChange}
                      placeholder='Detail alamat'
                      value={city.details || ""}
                    />
                  </div>
                </div>
                <div className='md:flex md:items-center mb-6'>
                  <div className='md:w-4/12'>
                    <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
                      Jenis Kelamin
                    </label>
                  </div>
                  <div className='md:w-full'>
                    <div className='flex items-center'>
                      <input
                        className='mr-2 leading-tight'
                        type='radio'
                        id='gender-male'
                        name='gender'
                        checked={gender === "LAKI_LAKI"}
                        value='LAKI_LAKI'
                        onChange={handleGenderChange}
                      />
                      <label htmlFor='gender-male' className='text-gray-700'>
                        Laki-laki
                      </label>
                      <input
                        className='ml-4 mr-2 leading-tight'
                        type='radio'
                        id='gender-female'
                        name='gender'
                        checked={gender === "PEREMPUAN"}
                        onChange={handleGenderChange}
                        value='PEREMPUAN'
                      />
                      <label htmlFor='gender-female' className='text-gray-700'>
                        Perempuan
                      </label>
                    </div>
                  </div>
                </div>

                <div className='md:flex items-center mb-6'>
                  <div className='md:w-3/12'>
                    <label
                      className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                      htmlFor='tanggal-lahir'
                    >
                      Tanggal Lahir
                    </label>
                  </div>
                  <input
                    type='date'
                    value={birthDate || ""}
                    onChange={handleDateChange}
                  />
                </div>

                <div className='md:flex md:items-center mb-4'>
                  <button
                    className='shadow bg-[#5F72FF]  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full'
                    type='submit'
                  >
                    Simpan
                  </button>
                </div>
              </form>
            )}
            {isFetching && (
              <div className='flex mt-16 items-center justify-center'>
                <BarLoader />
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
