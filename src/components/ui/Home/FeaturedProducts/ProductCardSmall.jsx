"use client";

import product1 from "/public/assets/HomePage/Products/ChaniseCabbage.png";
import { Image } from "@nextui-org/react";
import { FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import Rating from "react-rating";
const ProductCardSmall = () => {
  return (
    <div className="relative border-solid rounded-md border-black/30 group border transition duration-150 hover:border-[#2C742F] hover:shadow-[0px_0px_12px_0px_rgba(32,181,38,0.32)]  flex gap-5 items-center p-2">
      <Image className="w-[100px] h-[100px]" src={product1.src} alt="" />
      <div>
        <p className="text-[#4D4D4D] text-sm group-hover:text-primary">
          Chanise Cabbage
        </p>
        <p className="text-text-color font-medium">$14.99</p>
        <div>
          <Rating
            className="text-[#FF8A00]"
            readonly
            initialRating={3}
            emptySymbol={<FaRegStar />}
            fullSymbol={<FaStar />}
          />
        </div>
      </div>
      <div className="absolute top-12 right-8 z-50 bg-white opacity-0 group-hover:opacity-100 flex gap-5 items-center">
        <div className="w-10 h-10 rounded-full hover:bg-primary  bg-[#F2F2F2] flex justify-center items-center">
          <FaBasketShopping className="hover:text-white" size={20} />
        </div>
        <div className="w-10 flex justify-center hover:bg-primary items-center h-10 border border-solid rounded-full border-black/30 bg-white">
          <FaRegHeart size={20} className="hover:text-white" />
        </div>
        <div className="w-10 flex justify-center hover:bg-primary items-center h-10 border border-solid rounded-full border-black/30 bg-white">
          <IoMdEye size={20} className="hover:text-white" />
        </div>
      </div>
    </div>
  );
};

export default ProductCardSmall;
