"use client";

import React, { useState, useEffect } from "react";
import "./style.css";
import { FaAngleUp } from "react-icons/fa6";
function PriceRangeSlider() {
  // State variables
  const [minPrice, setMinPrice] = useState(50);
  const [maxPrice, setMaxPrice] = useState(250);

  // Function to validate range and update the fill color on slider
  useEffect(() => {
    const rangeFill = document.querySelector(".range-fill");

    // Calculate the percentage position for min and max values
    const minPercentage = ((minPrice - 10) / 490) * 100;
    const maxPercentage = ((maxPrice - 10) / 490) * 100;

    // Set the position and width of the fill color element to represent the selected range
    rangeFill.style.left = minPercentage + "%";
    rangeFill.style.width = maxPercentage - minPercentage + "%";
  }, [minPrice, maxPrice]);

  // Event handler for input change
  const handleInputChange = (e, type) => {
    const newValue = parseInt(e.target.value);
    if (type === "min") {
      setMinPrice(newValue);
    } else {
      setMaxPrice(newValue);
    }
  };
  const [openCategory, setOpenCategory] = useState(true);
  return (
    <>
      <div className="bg-white shadow-xl my-8 px-3 py-4 relative">
        <div
          onClick={() => setOpenCategory(!openCategory)}
          className="flex justify-between border-b border-solid border-gray"
        >
          <h2 className="capitalize text-[#1A1A1A] font-medium text-xl ">
            Price
          </h2>
          <FaAngleUp
            className={`${
              !openCategory ? "rotate-180" : "rotate-0"
            } transition-all duration-200`}
          />
        </div>
        <div
          className={`${
            openCategory ? "h-fit pt-6 " : "h-0 overflow-hidden"
          } transition-all duration-300`}
        >
          <div className="font-poppins w-full h-full flex flex-col items-center justify-center ">
            <div className="w-full">
              <div className="range-slider mb-8 mt-3 relative ">
                <div className="range-fill h-1 bg-primary"></div>

                <input
                  type="range"
                  className="min-price "
                  value={minPrice}
                  min="10"
                  max="500"
                  step="10"
                  onChange={(e) => handleInputChange(e, "min")}
                />
                <input
                  type="range"
                  className="max-price "
                  value={maxPrice}
                  min="10"
                  max="500"
                  step="10"
                  onChange={(e) => handleInputChange(e, "max")}
                />
              </div>

              <div className="price-content">
                <p className="text-sm font-medium text-[#4D4D4D] mb-6">
                  Price: ${minPrice} — ${maxPrice}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="font-poppins w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
      <div className="card">
        <h4>Price Range Slider</h4>

        <div className="price-content">
          <div>
            <label className="font-semibold text-base">Min</label>
            <p id="min-value" className="font-semibold text-xl">
              ${minPrice}
            </p>
          </div>

          <div>
            <label className="font-semibold text-base">Max</label>
            <p id="max-value" className="font-semibold text-xl">
              ${maxPrice}
            </p>
          </div>
        </div>

        <div className="range-slider">
          <div className="range-fill h-1 bg-green-500"></div>

          <input
            type="range"
            className="min-price "
            value={minPrice}
            min="10"
            max="500"
            step="10"
            onChange={(e) => handleInputChange(e, "min")}
          />
          <input
            type="range"
            className="max-price "
            value={maxPrice}
            min="10"
            max="500"
            step="10"
            onChange={(e) => handleInputChange(e, "max")}
          />
        </div>
      </div>
    </div> */}
    </>
  );
}

export default PriceRangeSlider;
