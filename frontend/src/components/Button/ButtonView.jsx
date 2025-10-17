import React from "react";
import Button from ".";
import { Eye } from "lucide-react";

const ButtonView = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      className={"bg-purple-500 hover:bg-purple-600 text-white"}
    >
      <Eye size={18} />
    </Button>
  );
};

export default ButtonView;
