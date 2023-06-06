import React from "react";

export default function Dropdown() {
  return (
    <>
      <div className="flex space-x-4">
        <div className="w-full">
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-day"
          >
            <option>Day</option>
            {/* Add options for each day */}
            {Array.from({ length: 31 }, (_, index) => (
              <option key={index + 1}>{index + 1}</option>
            ))}
          </select>
        </div>
        <div className="w-full">
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-month"
          >
            <option>Month</option>
            {/* Add options for each month */}
            {[
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ].map((month) => (
              <option key={month}>{month}</option>
            ))}
          </select>
        </div>

        <div className="w-full">
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-year"
          >
            <option>Year</option>
            {/* Add options for years */}
            {Array.from({ length: 2024 - 1920 }, (_, index) => (
              <option key={index + 1920}>{index + 1920}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
