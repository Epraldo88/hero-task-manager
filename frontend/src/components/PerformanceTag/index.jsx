import React from "react";

const PerformanceTag = ({ status }) => {
  const style = {
    "Not Evaluated": "bg-gray-100 border-gray-600 text-gray-600",
    Ontime: "bg-green-100 border-green-600 text-green-600",
    Late: "bg-red-100 border-red-500 text-red-500",
  };

  return (
    <div
      className={`w-24 text-center px-2 py-1 rounded-full text-xs t border-[1px] ${style[status]}`}
    >
      {status}
    </div>
  );
};

export default PerformanceTag;
