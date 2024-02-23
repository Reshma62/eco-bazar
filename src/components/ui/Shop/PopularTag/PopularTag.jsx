"use client";

import { useState } from "react";
import { FaAngleUp } from "react-icons/fa6";

const PopularTag = () => {
  const [openCategory, setOpenCategory] = useState(true);
  const tags = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="bg-white shadow-xl my-8 px-3 py-4 relative">
      <div
        onClick={() => setOpenCategory(!openCategory)}
        className="flex justify-between border-b border-solid border-gray"
      >
        <h2 className="capitalize text-[#1A1A1A] font-medium text-xl ">
          Popular Tag
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
        <div className="flex gap-3 flex-wrap">
          {tags.map((i) => (
            <button
              key={i}
              className="hover:bg-primary bg-[#F2F2F2] hover:text-white rounded-full px-4 py-1 flex gap-2 items-center text-[#1A1A1A] text-sm"
            >
              Tags
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularTag;
