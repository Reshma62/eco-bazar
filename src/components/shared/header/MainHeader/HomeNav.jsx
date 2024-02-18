import Link from "next/link";
import React from "react";


const HomeNav = ({ menuItems }) => {
  return (
    <nav className="hidden container md:grid grid-cols-12 gap-6 text-text-color items-center ">
      <ul className="flex gap-8  col-span-7">
        {menuItems?.map((menu) => (
          <li key={menu.title}>
            <Link href={menu.href} className="text-text-color  font-medium">
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex justify-end items-center gap-5 col-span-5 ">
        <div>
          <p className="text-[#999999] text-xs">Customer Services</p>
          <p className="text-text-color text-sm font-medium">(219) 555-0114</p>
        </div>
      </div>
    </nav>
  );
};

export default HomeNav;
