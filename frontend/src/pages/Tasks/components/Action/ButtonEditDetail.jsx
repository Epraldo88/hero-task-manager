import { Pencil, X } from "lucide-react";
import React from "react";

const ButtonEditDetail = ({ onClick, isEdit }) => {
  const buttonStyle = () => {
    const color = isEdit ? "gray" : "yellow";
    return `bg-${color}-200 hover:bg-${color}-300`;
  };

  return (
    <div>
      <button
        onClick={onClick}
        className={`flex items-center justify-center cursor-pointer rounded-lg w-[38px] h-[38px] transition-all ${buttonStyle()}`}
      >
        {!isEdit ? <Pencil size={18} /> : <X size={18} />}
      </button>
    </div>
  );
};

export default ButtonEditDetail;
