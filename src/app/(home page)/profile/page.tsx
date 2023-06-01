import React, { use } from "react";
import Link from "next/link";
import Search from "@/components/layout/Search";
import Image from "next/image";
import Dropdown from "@/components/date/dropdown";
import PageIndicator from "@/components/profile/PageIndicator";

export default function profile() {
  return (
    <main>
      <div className="flex max-w-6xl mx-auto my-20 gap-y-5 justify-evenly shadow-2xl rounded-2xl">
        <div className="flex-col my-9">
          <div className="flex justify-center">
            <Image
              src="/profile/profile.svg"
              width={200}
              height={200}
              alt="profile"
              quality={100}
            />
          </div>
          <div className="md:flex md:items-center justify-center mt-3">
            <button
              className="focus:shadow-outline focus:outline-none hover:bg-[#5F72FF] hover:text-white  text-[#5F72FF] border-2 font-medium py-2 px-4 rounded max-w-lg"
              type="button"
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
        <div className="">
          <div className="p-9">
            <div className="flex flex-col justify-center space-y-4 pb-4">
              <b className="text-4xl font-semibold">Profil Saya</b>
              <b className="text-sm font-medium">
                Kelola informasi profil Anda untuk mengontrol, melindungi dan
                mengamankan akun
              </b>
            </div>

            <form class="w-full mt-4">
              <div className="md:flex md:items-center md:justify-between mb-6">
                <div className="md:w-4/12">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    for="inline-first-name"
                  >
                    Nama Depan
                  </label>
                </div>
                <div className="md:w-full">
                  <input
                    className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#5F72FF]"
                    id="inline-full-name"
                    type="text"
                    placeholder="Masukkan nama depan"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center md:justify-between mb-6 w-full">
                <div className="md:w-4/12">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    for="inline-last-name"
                  >
                    Nama Belakang
                  </label>
                </div>
                <div className="md:w-full">
                  <input
                    className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#5F72FF]"
                    id="inline-full-name"
                    type="text"
                    placeholder="Masukkan nama belakang"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-4/12">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    for="inline-password"
                  >
                    Password
                  </label>
                </div>
                <div className="md:w-full">
                  <input
                    className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#5F72FF]"
                    id="inline-password"
                    type="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="md:flex md:items-top mb-6">
                <div className="md:w-3/12">
                  <label
                    className="block text-gray-500 font-bold md:text-right my-3 md:mb-0 pr-4 "
                    for="inline-password"
                  >
                    Alamat
                  </label>
                </div>
                <div className="flex-col space-y-4 md:w-9/12">
                  <Dropdown className="flex"></Dropdown>
                  <input
                    className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#5F72FF]"
                    id="detail-address"
                    type="address"
                    placeholder="Detail alamat"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-4/12">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Jenis Kelamin
                  </label>
                </div>
                <div className="md:w-full">
                  <div className="flex items-center">
                    <input
                      className="mr-2 leading-tight"
                      type="radio"
                      id="gender-male"
                      name="gender"
                      value="male"
                    />
                    <label htmlFor="gender-male" className="text-gray-700">
                      Laki-laki
                    </label>
                    <input
                      className="ml-4 mr-2 leading-tight"
                      type="radio"
                      id="gender-female"
                      name="gender"
                      value="female"
                    />
                    <label htmlFor="gender-female" className="text-gray-700">
                      Perempuan
                    </label>
                  </div>
                </div>
              </div>

              <div className="md:flex md:items-center mb-6">
                <div className="md:w-3/12">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    for="inline-password"
                  >
                    Tanggal Lahir
                  </label>
                </div>
                <div className="flex-col space-y-4 md:w-9/12">
                  <Dropdown className="flex"></Dropdown>
                </div>
              </div>
              <div className="md:flex md:items-center mb-4">
                <button
                  className="shadow bg-[#5F72FF]  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full"
                  type="button"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
