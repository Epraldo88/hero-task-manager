import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PerformanceChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.performance_status),
    datasets: [
      {
        label: "Total",
        data: data.map((item) => item.total),
        backgroundColor: ["#EF4444", "#9CA3AF", "#10B981"], // Ontime, Late, Not Evaluated
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
      title: {
        display: true,
        text: "Performance Overview",
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default PerformanceChart;
