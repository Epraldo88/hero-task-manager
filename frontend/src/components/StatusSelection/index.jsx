import { ChevronDown } from "lucide-react";

const StatusSelection = ({ value, onChange }) => {
  const style = {
    Pending: "bg-blue-100 border-blue-500 text-blue-500",
    "On Progress": "bg-orange-100 border-orange-500 text-orange-500",
    Done: "bg-green-100 border-green-600 text-green-600",
  };

  const arrowStyle = {
    Pending: "text-blue-500",
    "On Progress": "text-orange-500",
    Done: "text-green-600",
  };

  const statuses = Object.keys(style);

  return (
    <div className="relative w-32">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`appearance-none w-[110px] text-xs px-2 py-1 border rounded-full text-center focus:outline-none transition cursor-pointer ${style[value]}`}
      >
        {statuses.map((status) => (
          <option key={status} value={status} className={style[status]}>
            {status}
          </option>
        ))}
      </select>
      <div className={`absolute right-5 top-1.5 ${arrowStyle[value]}`}>
        <ChevronDown size={18} />
      </div>
    </div>
  );
};

export default StatusSelection;
