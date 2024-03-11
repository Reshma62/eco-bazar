"use client";
import { Image, useDisclosure } from "@nextui-org/react";
import product1 from "/public/assets/HomePage/Products/ChaniseCabbage.png";
import { FaBasketShopping } from "react-icons/fa6";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import Link from "next/link";
import QuickViewModal from "../QuickViewModal/QuickViewModal";

const ProductCard = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <div>
        <div className="group relative border transition duration-150 hover:border-[#2C742F] hover:shadow-[0px_0px_12px_0px_rgba(32,181,38,0.32)] border-solid border-[#E6E6E6]  rounded-md p-4">
          <Image src={product1.src} alt="" />{" "}
          <Link href={`/shop/productId`}>
            <h2 className="text-[#4D4D4D] text-sm ">Chanise Cabbage</h2>
          </Link>
          <div className="flex justify-between items-center">
            <p className="text-text-color font-medium">$14.99</p>
            <div className="w-10 h-10 rounded-full group-hover:bg-primary  bg-[#F2F2F2] flex justify-center items-center">
              <FaBasketShopping className="group-hover:text-white" size={20} />
            </div>
          </div>
          <div>
            <Rating
              className="text-[#FF8A00]"
              readonly
              initialRating={3}
              emptySymbol={<FaRegStar />}
              fullSymbol={<FaStar />}
            />
          </div>
          <div className="absolute top-3 right-4 z-50 space-y-3 opacity-0 group-hover:opacity-100">
            <div className="w-10 flex justify-center items-center h-10 border border-solid rounded-full border-black/30 bg-white hover:bg-primary hover:text-white cursor-pointer">
              <FaRegHeart size={20} className="" />
            </div>
            <div className="w-10 flex justify-center items-center h-10 border border-solid rounded-full border-black/30 bg-white hover:bg-primary hover:text-white cursor-pointer">
              <IoMdEye onClick={() => onOpen()} size={20} />
            </div>
          </div>
        </div>{" "}
      </div>
      <QuickViewModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};

export default ProductCard;
