import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Inquiries",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 0],
    },
  ],
};

const LineChart = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "65vh",
        left: "10vw",
        height: "60vh",
        width: "80vw",
      }}
    >
      <Line data={data} />
    </div>
  );
};

export default LineChart;
