"use client";
import { registerCityId } from "@/store/user-slice";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export interface AddressProps {
  province: string;
  name: string;
  details: string;
  cityId: number;
}

export default function Address({
  name,
  province,
  details,
  cityId,
}: AddressProps) {
  const [selectedCityId, setSelectedCityId] = useState<number>(cityId || 0);
  const dispatch = useDispatch();

  const { data: provinces, error: errorProvinces } = useQuery({
    queryKey: ["provinces"],
    queryFn: async () => {
      const res = await fetch("/api/address/provinces");

      const data = await res.json();

      return data;
    },
  });

  const {
    data: cities,
    error: errorCities,
    mutate: updateCity,
  } = useMutation({
    mutationFn: async (id: number) => {
      const res = await fetch("/api/address/cities?provinceId=" + id);

      const data = await res.json();

      return data;
    },
  });

  const handleCityChange = (e: any) => {
    if (provinces) {
      updateCity(provinces[0].id);
    }
    setSelectedCityId(parseInt(e.target.value));
    dispatch(registerCityId(parseInt(e.target.value)));
  };

  useEffect(() => {
    dispatch(registerCityId(cityId));
  }, [cityId, dispatch]);

  return (
    <>
      <div className='flex space-x-4'>
        <div className='w-full'>
          <select
            className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            id='grid-country'
            onChange={e => updateCity(parseInt(e.target.value))}
          >
            {provinces &&
              provinces?.map((province: { id: string; name: string }) => (
                <option key={province.id} value={province.id}>
                  {province.name}
                </option>
              ))}
            {!provinces && <option>{province}</option>}
          </select>
        </div>

        <div className='w-full'>
          <select
            onChange={handleCityChange}
            className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            id='grid-city'
          >
            {cities &&
              cities?.map((city: { cityId: string; cityName: string }) => (
                <option key={city.cityId} value={city.cityId}>
                  {city.cityName}
                </option>
              ))}
            {!cities && <option value={cityId}>{name}</option>}
          </select>
        </div>
      </div>
    </>
  );
}
