"use client";

import { useState } from "react";
import Chart from "react-apexcharts";
const DashbordHome = () => {
  const [options] = useState({
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    },
    // Update options for Stacked Area Chart
    stacked: true,
    toolbar: {
      show: false,
    },
  });

  const [series] = useState([
    {
      name: "Series 1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
    {
      name: "Series 2",
      data: [10, 20, 35, 40, 29, 50, 60, 81],
    },
    {
      name: "Series 3",
      data: [5, 10, 25, 30, 19, 40, 50, 71],
    },
  ]);
  const [options2] = useState({
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    },
    // Update options for Area Chart
    stacked: true,
    stroke: {
      curve: "smooth",
    },
    fill: {
      opacity: 0.7, // Adjust opacity as needed
    },
  });

  const [series2] = useState([
    {
      name: "Series 1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
    {
      name: "Series 2",
      data: [10, 20, 35, 40, 29, 50, 60, 81],
    },
  ]);
  return (
    <div className="grid grid-cols-5 gap-10">
      <div className="mixed-chart col-span-3 h-[381px] bg-white px-3 py-2 rounded-lg shadow-xl">
        <h2>sales statics</h2>
        <Chart
          options={options2}
          series={series2}
          type="area"
          width="100%"
          height={"100%"}
        />
      </div>
      <div className="mixed-chart col-span-2 h-[350px] bg-white px-3 py-2 rounded-lg shadow-xl">
        <h2>Revenue Base on Area</h2>
        <Chart
          options={options}
          series={series}
          type="bar"
          width="100%"
          height={"100%"}
        />
      </div>
    </div>
  );
};

export default DashbordHome;
