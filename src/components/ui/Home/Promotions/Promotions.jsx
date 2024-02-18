"use client";

import { useEffect, useRef, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const formatTimeUnit = (unit) => (unit < 10 ? `0${unit}` : `${unit}`);

const Promotions = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [mins, setMins] = useState("00");
  const [secs, setSecs] = useState("00");
  let interval = useRef();
  const startTimer = () => {
    const countDownDate = new Date("Mar 30, 2025 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setDays(formatTimeUnit(days));
        setHours(formatTimeUnit(hours));
        setMins(formatTimeUnit(mins));
        setSecs(formatTimeUnit(secs));
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <section>
      <div className="container">
        <div className="flex md:flex-row flex-col gap-6  justify-between">
          <div
            style={{
              background:
                "url('/assets/HomePage/Promotions/vegetableBanner.svg')",
            }}
            className=" basis-full bg-no-repeat bg-cover h-[536px] text-center rounded-lg text-white"
          >
            <p className="text-sm uppercase font-medium mt-6">Best Deals</p>
            <h2 className="font-semibold text-[40px] my-4">
              Sale of the Month
            </h2>
            {/* count down */}
            <div className="flex justify-center gap-3 mb-5">
              <div>
                <p className="text-2xl">{days}</p>
                <p className="text-xs uppercase">Days</p>
              </div>
              <span className="text-2xl">:</span>
              <div>
                <p className="text-2xl">{hours}</p>
                <p className="text-xs uppercase">Hours</p>
              </div>
              <span className="text-2xl">:</span>
              <div>
                <p className="text-2xl">{mins}</p>
                <p className="text-xs uppercase">Mins</p>
              </div>
              <span className="text-2xl">:</span>
              <div>
                <p className="text-2xl">{secs}</p>
                <p className="text-xs uppercase">Secs</p>
              </div>
            </div>
            {/* button */}
            <div className="text-center flex justify-center">
              <button className="bg-white text-primary py-[14px] px-9 rounded-full font-semibold flex items-center gap-3  justify-center">
                Shop now <FaArrowRightLong />
              </button>
            </div>
          </div>
          <div
            style={{
              background: "url('/assets/HomePage/Promotions/meatBanner.svg')",
            }}
            className=" basis-full rounded-lg  bg-no-repeat bg-cover h-[536px] text-center text-white"
          >
            <p className="text-sm uppercase font-medium mt-6">85% Fat Free</p>
            <h2 className="font-semibold text-[40px] my-4">Low-Fat Meat</h2>
            <p className="text-xl mb-[30px]">
              Started at{" "}
              <span className="text-[#FF8A00] font-semibold text-2xl">
                $79.99
              </span>
            </p>
            {/* button */}
            <div className="text-center flex justify-center">
              {" "}
              <button className="bg-white text-primary py-[14px] px-9 rounded-full font-semibold flex items-center gap-3  justify-center">
                Shop now <FaArrowRightLong />
              </button>
            </div>
          </div>
          <div
            style={{
              background: "url('/assets/HomePage/Promotions/fruitBanner.svg')",
            }}
            className=" basis-full bg-no-repeat rounded-lg  bg-cover h-[536px] text-center"
          >
            <p className="text-sm uppercase font-medium mt-6">Summer Sale</p>
            <h2 className="font-semibold text-[40px] my-4">100% Fresh Fruit</h2>
            <p className="text-xl mb-[30px]">
              Up to
              <span className="text-[#FF8A00] bg-text-color px-3 py-2 rounded-md ml-3 font-semibold text-2xl">
                64% OFF
              </span>
            </p>
            {/* button */}
            <div className="text-center flex justify-center">
              {" "}
              <button className="bg-white text-primary py-[14px] px-9 rounded-full font-semibold flex items-center gap-3  justify-center">
                Shop now <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
