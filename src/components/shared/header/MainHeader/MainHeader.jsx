import React from "react";

import Topbar from "./Topbar";
import Searchbar from "./Searchbar";
import HomeNav from "./HomeNav";

const MainHeader = () => {
     const userRole = "user";
     const menuItems = [
       { title: "Home", href: "/" },
       { title: "About us", href: "/about-us" },
       { title: "Shop", href: "/shop" },
       { title: "Blog", href: "/blog" },
       { title: "Contact us", href: "/contact-us" },
       {
         title: userRole === "user" ? "My Account" : "Dashboard",
         href: "/dashboard",
       },
     ];
  return (
    <header className="">
      <div className="bg-bgBlack">
        <Topbar />
      </div>
      <Searchbar />
      <div className="border-y border-solid border-slate-300 py-2">
        <HomeNav menuItems={menuItems} />
      </div>
    </header>
  );
};

export default MainHeader;
