import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const StatusSummaryChart = ({ data }) => {
  const chartData = {
    labels: data.map((res) => res.status),
    datasets: [
      {
        label: "Tasks",
        data: data.map((res) => res.total),
        backgroundColor: ["#3B82F6", "#F59E0B", "#10B981"], // blue, orange, green
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom" },
    },
  };

  return (
    <div className="h-64 flex items-center justify-center">
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default StatusSummaryChart;
