import Button from "components/Button";
import { Plus } from "lucide-react";
import React from "react";
import { useModalStore } from "store/modal.store";

const ButtonCreateTask = () => {
  const { setAction } = useModalStore();

  const onClick = () => {
    setAction("CREATE");
  };

  return (
    <Button
      className={
        "flex items-center gap-x-2 bg-blue-500 hover:bg-blue-600 text-white"
      }
      onClick={onClick}
    >
      Create Task{" "}
      <span>
        <Plus size={16} />
      </span>
    </Button>
  );
};

export default ButtonCreateTask;
