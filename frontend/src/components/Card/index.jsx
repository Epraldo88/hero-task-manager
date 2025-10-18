import React from "react";

const Card = ({ label, children }) => {
  return (
    <div className="border-gray-200 border-[1px] rounded-lg p-3">
      <h3 className="text-lg font-semibold mb-2">{label}</h3>
      <div>{children}</div>
    </div>
  );
};

export default Card;
