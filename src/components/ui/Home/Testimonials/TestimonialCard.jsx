"use client";

import Image from "next/image";
import comma from "/public/assets/HomePage/Testimonial/comma.svg";
import client1 from "/public/assets/HomePage/Testimonial/client1.png";
import Rating from "react-rating";
import { BsStar, BsStarFill } from "react-icons/bs";
const TestimonialCard = () => {
  return (
    <div className="space-y-4 bg-white p-6">
      <Image src={comma} alt="" />
      <p>
        Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
        Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales.
        Donec sed neque eget
      </p>
      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-center gap-3">
            <Image src={client1} alt="" />
            <div>
              {" "}
              <h4 className="text-text-color text-lg font-medium">
                Robert Fox
              </h4>
              <p className="text-[#999999] text-sm">customer</p>
            </div>
          </div>
        </div>
        <div>
          <Rating
            className="text-[#FF8A00] !flex gap-1"
            fullSymbol={<BsStarFill />}
            emptySymbol={<BsStar />}
            readonly
            initialRating={3}
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
