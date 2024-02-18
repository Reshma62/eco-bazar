import { FaFacebookF } from "react-icons/fa6";
import {
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";
import { Link, Image } from "@nextui-org/react";
import { HiOutlineMailOpen } from "react-icons/hi";
import logo from "/public/assets/Header/logo.svg";
import FooterNavItem from "./FooterNavItem";
import FooterTitle from "./FooterTitle";
import base from "/public/assets/Footer/BASE.png";
import apple from "/public/assets/Footer/Method=ApplePay.png";
import discover from "/public/assets/Footer/Method=Discover.png";
import mastercard from "/public/assets/Footer/Method=Mastercard.png";
import visa from "/public/assets/Footer/Method=Visa.png";
const Footer = () => {
  return (
    <footer className=" mt-[60px]">
      {/* news leetter */}
      <div className="bg-text-color">
        <div className="container p-[60px] md:flex-row flex-col flex gap-[74px] items-center">
          <div className="flex  items-center gap-2">
            <HiOutlineMailOpen className="text-primary" size={56} />
            <div>
              <h4 className="text-white text-2xl font-medium">
                Subcribe our Newsletter
              </h4>
              <p className="text-[#666] text-xs">
                Pellentesque eu nibh eget mauris congue mattis matti.
              </p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center gap-6">
            <div className="relative">
              <input
                className="md:w-[460px] w-full  bg-[#333333] placeholder:text-[#999] rounded-full pl-6 py-[14px] outline-0 text-white"
                type="text"
                placeholder="Your email address"
              />
              <button className="bg-primary text-white font-semibold  py-4 px-10 absolute right-0 h-full rounded-full">
                Subscribe
              </button>
            </div>
            <div className="flex  items-center gap-2 ">
              <div className="p-3 hover:bg-primary group rounded-full">
                <FaFacebookF className="text-[#B3B3B3] group-hover:text-white transition duration-250" />
              </div>
              <div className="p-3 hover:bg-primary group rounded-full">
                <FaTwitter className="text-[#B3B3B3] group-hover:text-white transition duration-250" />
              </div>
              <div className="p-3 hover:bg-primary group rounded-full">
                <FaPinterestP className="text-[#B3B3B3] group-hover:text-white transition duration-250" />
              </div>
              <div className="p-3 hover:bg-primary group rounded-full">
                <FaInstagram className="text-[#B3B3B3] group-hover:text-white transition duration-250" />
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
      {/* Footer logo link part */}
      <div className="bg-[#F2F2F2]">
        <div className="container p-[60px]">
          <div className="flex md:flex-row flex-col justify-between">
            {/* Logo part */}
            <div className="space-y-4 max-w-[336px] w-full">
              <Link href="/" className="flex items-center gap-2 ">
                <Image src={logo.src} alt="logo" />
                <h2 className="text-[32px] text-green-gray font-medium">
                  {" "}
                  Ecobazar
                </h2>
              </Link>
              <p className="text-sm text-[#808080]">
                Morbi cursus porttitor enim lobortis molestie. Duis gravida
                turpis dui, eget bibendum magna congue nec.
              </p>
              <p className="flex gap-4 items-center">
                <span className="text-sm font-medium text-text-color border-b border-solid border-primary">
                  (219) 555-0114
                </span>
                <span className="text-[#808080] font-medium">or</span>
                <span className="text-sm font-medium text-text-color border-b border-solid border-primary">
                  Proxy@gmail.com
                </span>
              </p>
            </div>
            {/* Nav 1 */}
            <div>
              <FooterTitle title={"My Account"} />
              <ul className="flex flex-col gap-4 mt-4">
                <FooterNavItem item={"My Account"} />
                <FooterNavItem item={"Order History"} />
                <FooterNavItem item={"Shoping Cart"} />
                <FooterNavItem item={"Wishlist"} />
              </ul>
            </div>
            {/* Nav 2 */}
            <div>
              <FooterTitle title={"Helps"} />
              <ul className="flex flex-col gap-4 mt-4">
                <FooterNavItem item={"Contact"} />
                <FooterNavItem item={"Faqs"} />
                <FooterNavItem item={"Terms & Condition"} />
                <FooterNavItem item={"Privacy Policy"} />
              </ul>
            </div>
            {/* Nav 3 */}
            <div>
              <FooterTitle title={"Proxy"} />
              <ul className="flex flex-col gap-4 mt-4">
                <FooterNavItem item={"About"} />
                <FooterNavItem item={"Shop"} />
                <FooterNavItem item={"Product"} />
                <FooterNavItem item={"Track Order"} />
              </ul>
            </div>
            {/* downlaad app */}
            <div>
              <FooterTitle title={"Download Mobile App"} />
              <div className="mt-4 flex gap-2 items-center">
                <div className="flex p-[10px] gap-2 items-center bg-white">
                  <FaApple size={28} />
                  <div className="">
                    <p className="text-xs text-[#4D4D4D]">Download on the</p>
                    <p className="text-base text-text-color">App Store</p>
                  </div>
                </div>
                <div className="flex p-[10px] gap-2 items-center bg-white">
                  <FaGooglePlay size={28} />
                  <div className="">
                    <p className="text-xs text-[#4D4D4D]">Download on the</p>
                    <p className="text-base text-text-color">Google play</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* copy rigght */}
      <div className="flex md:flex-row flex-col justify-between container py-6">
        <small> Ecobazar eCommerce © 2021. All Rights Reserved</small>
        <div className="flex justify-between gap-1 items-center">
          <Image src={apple.src} alt="" />
          <Image src={visa.src} alt="" />
          <Image src={discover.src} alt="" />
          <Image src={base.src} alt="" />
          <Image src={mastercard.src} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
