"use client";

import React, { useState, useEffect } from "react";
import "./style.css";
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

  return (
    <div className="font-poppins w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
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
    </div>
  );
}

export default PriceRangeSlider;
