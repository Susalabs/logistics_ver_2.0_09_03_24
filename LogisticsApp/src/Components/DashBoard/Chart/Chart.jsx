import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactApexChart from "react-apexcharts";

// Function to generate random data
const generateData = (startDate, count, range) => {
  const newData = [];
  for (let i = 0; i < count; i++) {
    const x = startDate + i * 86400000;
    const y =
      Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
    const z =
      Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
    newData.push([x, y, z]);
  }
  return newData;
};

const ApexChart = () => {
  const [series] = useState([
    {
      name: "Product1",
      data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 100,
      }),
    },
    {
      name: "Product2",
      data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 100,
      }),
    },
    {
      name: "Product3",
      data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 100,
      }),
    },
    {
      name: "Product4",
      data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 100,
      }),
    },
  ]);

  const [options] = useState({
    chart: {
      height: 400,
      type: "bubble",
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 0.8,
    },
    title: {
      text: "3D Bubble Chart",
    },
    xaxis: {
      tickAmount: 12,
      type: "datetime",
      labels: {
        rotate: 0,
      },
    },
    yaxis: {
      max: 110,
    },
    theme: {
      palette: "palette2",
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="bubble"
          height={400}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
