import React from "react";

export default function Address() {
  return (
    <>
      <div className="flex space-x-4">
        <div className="w-full">
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-country"
          >
            <option>Province</option>
            {/* Add options for each country */}
            <option>Province 1</option>
            <option>Province 2</option>
            <option>Province 3</option>
            {/* Add more options for other countries */}
          </select>
        </div>
        <div className="w-full">
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
          >
            <option>District</option>
            {/* Add options for each state */}
            <option>District 1</option>
            <option>District 2</option>
            <option>District 3</option>
            {/* Add more options for other states */}
          </select>
        </div>

        <div className="w-full">
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-city"
          >
            <option>Regency</option>
            {/* Add options for each city */}
            <option>Regency 1</option>
            <option>Regency 2</option>
            <option>Regency 3</option>
            {/* Add more options for other cities */}
          </select>
        </div>
        <div className="w-full">
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-city"
          >
            <option>Village</option>
            {/* Add options for each city */}
            <option>Village 1</option>
            <option>Village 2</option>
            <option>Village 3</option>
            {/* Add more options for other cities */}
          </select>
        </div>
      </div>
    </>
  );
}
