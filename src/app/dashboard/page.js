"use client";

import React, { useState } from "react";
import "./Accordion.css"; // Import CSS file for styling

const Accordion = () => {
  const items = [
    { title: "Item 1", content: "Content for Item 1" },
    { title: "Item 2", content: "Content for Item 2" },
    { title: "Item 3", content: "Content for Item 3" },
  ];

  const [openIndex, setOpenIndex] = useState(-1); // Initialize with -1, indicating no item is open

  const toggleState = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index)); // If the index matches the openIndex, close it, else open it
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div onClick={() => toggleState(index)}>{item.title}</div>
          <div
            className={`grid overflow-hidden transition-all ease-in-out duration-300 ${
              openIndex === index // Check if the index matches the openIndex
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
