import { Badge, Image } from "@nextui-org/react";
import logo from "/public/assets/Header/logo.svg";
import { CiHeart, CiSearch } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { FaDeleteLeft, FaRegUser } from "react-icons/fa6";
import Link from "next/link";

const Searchbar = () => {
  return (
    <div className="container flex md:flex-row flex-col gap-5 md:gap-0 justify-between items-center py-5">
      <Link href="/" className="flex items-center gap-2 ">
        <Image src={logo.src} alt="logo" />
        <h2 className="text-[32px] text-green-gray font-medium"> Ecobazar</h2>
      </Link>
      <div className="relative max-w-[410px] w-full">
        <CiSearch
          size={20}
          className="absolute left-3 top-1/2 -translate-y-1/2"
        />
        <input
          type="text"
          placeholder="Search"
          className="border border-solid w-full border-gray py-3 pl-8 outline-0 rounded-lg"
        />
        <button className="bg-primary py-[14px] px-6 absolute top-0 right-0 h-full text-white text-sm font-semibold rounded-tr-lg rounded-br-lg">
          Search
        </button>
      </div>
      <div className="flex gap-3 items-center">
        <FaRegUser className="text-text-color" size={24} />
        <CiHeart className="text-text-color" size={32} />
        <div className="flex gap-3 items-center relative group cursor-pointer">
          <Badge content="5" size="md" color="primary">
            <BsHandbag className="text-text-color" size={24} />
          </Badge>
          <div>
            <p className="text-xs">Shopping cart:</p>
            <p className="font-medium">$57.00</p>
          </div>
          <div className="bg-white invisible group-hover:visible  transform rotate-0 scale-0 group-hover:scale-100 transition-all duration-250 border-t-4 border-solid border-primary shadow-lg w-[300px]  rounded-md px-5 py-3 absolute top-full right-0">
            <div className="flex gap-5 items-center border-b border-solid border-slate-200 pb-2 mb-4">
              <Image
                className="max-w-12 w-full"
                alt=""
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl8VoZgOHDGgNeagIJHWkwN6L74tSc4V64Yg&usqp=CAU"
              />
              <div className="flex-1 text-sm">
                <p>
                  1 x <span className="">50</span>
                </p>
                <p>product name</p>
              </div>
              <div className="self-start">
                <FaDeleteLeft size={20} />
              </div>
            </div>
            <div className="flex items-center justify-center gap-2.5">
              <Link
                href="/cart"
                className="bg-primary text-white font-semibold text-sm px-3 py-2 rounded-xl hover:text-primary hover:bg-transparent border border-solid border-primary transition-all duration-200 capitalize"
              >
                View cart
              </Link>
              <Link
                href="/checkout"
                className="bg-primary text-white font-semibold text-sm px-3 py-2 rounded-xl hover:text-primary hover:bg-transparent border border-solid border-primary transition-all duration-200 capitalize"
              >
                checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
