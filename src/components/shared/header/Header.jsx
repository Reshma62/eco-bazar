import Searchbar from "./Searchbar";
import Topbar from "./Topbar";
import { Link } from "@nextui-org/react";
import { FaBars, FaRegUser } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";

const Header = () => {
  const menuItems = [
    { title: "Home", href: "/" },
    { title: "About us", href: "/about-us" },
    { title: "Shop", href: "/shop" },
    { title: "Blog", href: "/blog" },
    { title: "Contact us", href: "/contact-us" },
  ];
  return (
    <header className="container">
      <Topbar />
      <Searchbar />
      <nav className="grid grid-cols-12 gap-6 bg-text-color items-center ">
        <div className="bg-[#333333] text-white flex items-center gap-4 col-span-3">
          <div className="p-4 bg-primary">
            <FaBars size={32} className="  text-white" />
          </div>
          <p>All Categories</p>
          <FaAngleDown className="ml-auto mr-6" />
        </div>
        <ul className="flex gap-8  col-span-7">
          {menuItems.map((menu) => (
            <li key={menu.title}>
              <Link className="text-white font-medium" href={menu.href}>
                {menu.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex justify-end items-center gap-5 col-span-2 pr-6">
          <CiHeart className="text-white" size={32} />
          <BsHandbag className="text-white" size={24} />
          <FaRegUser className="text-white" size={24} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
