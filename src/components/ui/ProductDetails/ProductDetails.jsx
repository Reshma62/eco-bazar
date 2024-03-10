"use client";

import {
  FaAngleDown,
  FaAngleUp,
  FaFacebookF,
  FaHeart,
  FaInstagram,
  FaPinterest,
  FaRegHeart,
  FaStar,
  FaStarHalf,
  FaTwitter,
} from "react-icons/fa6";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./style.css";
import Rating from "react-rating";
import { Image } from "@nextui-org/react";
import { CiShoppingBasket } from "react-icons/ci";

const ProductDetails = () => {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
      originalClass: "",
      thumbnailHeight: "",
      originalHeight: "500px",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  const renderLeftNav = (onClick, disabled) => (
    <div
      className="absolute -left-[64px] bottom-0 text-[#999] text-xl"
      onClick={onClick}
      disabled={disabled}
    >
      <FaAngleDown className="text-xl" />
    </div>
  );

  const renderRightNav = (onClick, disabled) => (
    <div
      className="absolute -left-[67px] top-0 text-[#999] text-xl"
      onClick={onClick}
      disabled={disabled}
    >
      <FaAngleUp />
    </div>
  );

  return (
    <div className="flex gap-6">
      <div className="basis-1/2">
        <div className="relative">
          <ImageGallery
            additionalClass="hello_res h-[800px]"
            showThumbnails
            thumbnailPosition="left"
            items={images}
            renderLeftNav={renderLeftNav}
            renderRightNav={renderRightNav}
            showPlayButton={false}
          />
        </div>
      </div>
      <div className="basis-1/2">
        {/* Prodcut title */}
        <h1 className="inline text-[36px] font-semibold text-text-color capitalize">
          Chinese Cabbage{" "}
        </h1>
        <span className="bg-primary/20 text-primary px-2 py-1 rounded ">
          In stock
        </span>
        {/* Rating */}
        <div className="flex gap-3 items-center">
          <div className="flex items-center gap-1">
            <Rating
              className="text-[#FF8A00]"
              fullSymbol={<FaStar />}
              emptySymbol={<FaStarHalf />}
              initialRating={5}
              readonly={true}
            />
            <span>4 Reviews</span>
          </div>
          <span className="inline-block w-1 h-1 bg-gray rounded-full"></span>
          <p>
            <span>SKU:</span> 2,51,594
          </p>
        </div>
        {/* price info */}
        <div className="py-5 flex items-center gap-5 border-b border-solid border-slate-200 mb-6">
          <p className="text-primary text-2xl font-medium">
            <span className="line-through text-[#B3B3B3] text-xl mr-2 font-normal">
              $48.00
            </span>
            $17.28
          </p>
          <button className="px-3 bg-error/20 text-error rounded-large py-1">
            64% Off
          </button>
        </div>
        {/* Brand info and description */}
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <p className="capitalize">brand:</p>
              <Image src="/assets/Products/brand.png" alt="" />
            </div>
            <div className="flex items-center gap-2">
              <p className="capitalize">share item:</p>
              <div className="flex items-center ">
                <div className="bg-transparent hover:bg-primary rounded-full p-3 hover:text-white duration-400 transition-all cursor-pointer text-[#4D4D4D]">
                  <FaFacebookF />
                </div>
                <div className="bg-transparent hover:bg-primary rounded-full p-3 hover:text-white duration-400 transition-all cursor-pointer text-[#4D4D4D]">
                  <FaTwitter />
                </div>
                <div className="bg-transparent hover:bg-primary rounded-full p-3 hover:text-white duration-400 transition-all cursor-pointer text-[#4D4D4D]">
                  <FaPinterest />
                </div>
                <div className="bg-transparent hover:bg-primary rounded-full p-3 hover:text-white duration-400 transition-all cursor-pointer text-[#4D4D4D]">
                  <FaInstagram />
                </div>
              </div>
            </div>
          </div>{" "}
          <p className="text-[#808080] my-6 border-b border-solid border-slate-200 pb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cum
            architecto illum, ipsa explicabo rerum beatae, incidunt velit fuga
            corrupti pariatur illo. Fuga quasi dolorum magni perspiciatis quis
            facere deserunt?
          </p>{" "}
        </div>
        {/* Add to cart button */}
        <div className="flex justify-between gap-3 border-b border-solid border-slate-200 pb-6">
          <div className="border border-slate-400 px-2 rounded-full flex items-center justify-between basis-[120px]">
            <button className="text-center bg-[#F2F2F2] w-8 h-8 rounded-full hover:bg-primary hover:text-white transition text-lg font-semibold">
              +
            </button>
            <span>1</span>
            <button className="text-center bg-[#F2F2F2] hover:bg-primary hover:text-white transition w-8 h-8 rounded-full text-lg font-semibold">
              -
            </button>
          </div>
          <div className="flex-1">
            <button className="text-white font-medium hover:bg-transparent hover:text-primary hover:border-primary border-2 border-solid border-transparent transition text-lg bg-primary w-full rounded-full py-4 flex items-center gap-3 justify-center">
              Add to cart <CiShoppingBasket size={24} />
            </button>
          </div>
          <div className="basis-14">
            <div className="bg-primary/20 text-primary rounded-full p-5 cursor-pointer hover:bg-primary hover:text-white transition">
              <FaRegHeart />
            </div>
          </div>
        </div>
        <div className="my-5">
          <p className="text-text-color font-medium">
            Category:{" "}
            <span className="text-[#808080] font-normal">Vegetables</span>
          </p>
          <p className="text-text-color font-medium mt-3">
            Tags: <span className="text-[#808080] font-normal">Vegetables</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
