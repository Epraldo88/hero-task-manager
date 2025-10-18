import React from "react";

const TaskFilter = ({ value, onChange }) => {
  const options = ["", "Pending", "On Progress", "Done"];

  return (
    <div className="flex items-center gap-3">
      <label className="text-sm font-medium text-gray-600">
        Filter by Status:
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="cursor-pointer border-[1px] border-gray-400 rounded-md px-3 py-2 text-sm focus:outline-none  "
      >
        {options.map((opt) => (
          <option className="" key={opt} value={opt}>
            {opt === "" ? "All" : opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TaskFilter;
