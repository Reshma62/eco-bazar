"use client";
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Banner.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Link from "next/link";
const BannerSlider = () => {
  const arr = [1, 2, 3, 4];
  return (
    <Swiper
      modules={[Pagination]}
      className="mySwiper "
      pagination={{
        clickable: true,
      }}
    >
      {arr.map((i) => (
        <SwiperSlide key={i}>
          <div
            style={{ background: "url('/assets/HomePage/Banner/banner1.svg')" }}
            className="bg-no-repeat bg-cover py-36 px-12 text-white flex items-center "
          >
            <div>
              {" "}
              <h1 className="text-5xl font-semibold max-w-[382px] w-full mb-5">
                Fresh & Healthy Organic Food
              </h1>
              <h3 className="text-2xl font-medium max-w-[170px] w-full mb-8 border-l-2 pl-3 border-solid border-primary text-white/60 uppercase tracking-[0.72px]">
                Sale Up to <span className="text-white">48%</span> off
              </h3>
              <Link
                href={"/shop"}
                className="bg-primary inline-flex py-4 px-10 rounded-full font-semibold  items-center gap-3"
              >
                Shop now <FaArrowRightLong />
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerSlider;
