"use client";

import { useState } from "react";
import { FaAngleUp } from "react-icons/fa6";

const AllCategoriesFilter = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  const [openCategory, setOpenCategory] = useState(true);
  return (
    <div className="bg-white shadow-xl my-8 px-3 py-4 relative">
      <div
        onClick={() => setOpenCategory(!openCategory)}
        className="flex justify-between border-b border-solid border-gray"
      >
        <h2 className="capitalize text-[#1A1A1A] font-medium text-xl ">
          all categories
        </h2>
        <FaAngleUp
          className={`${
            !openCategory ? "rotate-180" : "rotate-0"
          } transition-all duration-200`}
        />
      </div>
      <div
        className={`${
          openCategory ? "h-fit pt-6 " : "h-0 overflow-hidden"
        } transition-all duration-300`}
      >
        {arr.map((i) => (
          <div key={i}>
            <label className="flex items-center gap-2 mb-2" htmlFor={i}>
              <input
                type="radio"
                name="category"
                id={i}
                className="grid place-content-center appearance-none bg-transparent border border-solid border-primary translate-y-[-0.075em] rounded-full w-5 h-5 before:shadow-inner before:w-3 before:h-3 before:bg-primary before:rounded-full transition-all duration-250 before:scale-0 checked:before:scale-100 focus:outline-offset-2 focus:outline-1 hover:border-green-900"
              />
              Vegetables
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCategoriesFilter;
