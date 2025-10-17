import ButtonDelete from "components/Button/ButtonDelete";
import ButtonView from "components/Button/ButtonView";
import useTasks from "hooks/useTasks";
import React from "react";
import { useModalStore } from "store/modal.store";
import { useTaskStore } from "store/task.store";

const RowAction = ({ data }) => {
  const { setSelectedTask } = useTaskStore();
  const { setAction } = useModalStore();
  const { deleteTask } = useTasks();

  const onView = () => {
    setSelectedTask(data);
    setAction("VIEW");
  };

  const onDelete = () => {
    setSelectedTask(data);
    setAction("ALERT");
  };

  return (
    <div className="flex gap-x-2">
      <ButtonView onClick={onView} />
      <ButtonDelete onClick={onDelete} />
    </div>
  );
};

export default RowAction;
