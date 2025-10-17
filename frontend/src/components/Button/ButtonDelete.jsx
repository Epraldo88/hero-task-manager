import React from "react";
import Button from ".";
import { Trash, Trash2 } from "lucide-react";

const ButtonDelete = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      className={"bg-red-500 hover:bg-red-600 text-white"}
    >
      <Trash2 size={18} />
    </Button>
  );
};

export default ButtonDelete;
