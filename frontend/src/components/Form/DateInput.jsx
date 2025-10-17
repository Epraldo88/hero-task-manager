import React from "react";

const DateInput = ({ name, value, onChange }) => {
  return (
    <input
      type="date"
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border rounded-md border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
    />
  );
};

export default DateInput;
