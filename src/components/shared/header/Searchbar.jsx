import { Image, Link } from "@nextui-org/react";
import logo from "/public/assets/Header/logo.svg";
import { CiSearch } from "react-icons/ci";
import { PiPhoneCallLight } from "react-icons/pi";
const Searchbar = () => {
  return (
    <div className="flex md:flex-row flex-col gap-5 md:gap-0 justify-between items-center py-5">
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
        <PiPhoneCallLight size={40} />
        <div>
          <p className="text-[#999999] text-sm">Customer Services</p>
          <p className="text-text-color text-xl font-medium">(219) 555-0114</p>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
