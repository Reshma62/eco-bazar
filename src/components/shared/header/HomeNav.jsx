import Link from "next/link";
import React from "react";
import { BsHandbag } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { FaAngleDown, FaBars, FaRegUser } from "react-icons/fa6";

const HomeNav = ({menuItems}) => {
  return (
    <nav className="hidden md:grid grid-cols-12 gap-6 bg-text-color items-center ">
      <div className="bg-[#333333] text-white flex items-center gap-4 col-span-3">
        <div className="p-4 bg-primary">
          <FaBars size={32} className="  text-white" />
        </div>
        <p>All Categories</p>
        <FaAngleDown className="ml-auto mr-6" />
      </div>
      <ul className="flex gap-8  col-span-7">
        {menuItems?.map((menu) => (
          <li key={menu.title}>
            <Link href={menu.href} className="text-white font-medium">
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex justify-end items-center gap-5 col-span-2 pr-6">
        <Link href={"/wishlist"}>
          <CiHeart className="text-white" size={32} />
        </Link>
        <Link href={"/cart"}>
          <BsHandbag className="text-white" size={24} />
        </Link>
        <FaRegUser className="text-white" size={24} />
      </div>
    </nav>
  );
};

export default HomeNav;
