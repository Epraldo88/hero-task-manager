import React from "react";

const Textarea = ({ name, value, onChange, placeholder, rows = 3 }) => {
  return (
    <textarea
      name={name}
      rows={rows}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full border rounded-md border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
    />
  );
};

export default Textarea;
