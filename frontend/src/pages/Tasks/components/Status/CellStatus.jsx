import StatusSelection from "components/StatusSelection";
import useTasks from "hooks/useTasks";
import React from "react";

const CellStatus = ({ data }) => {
  const { updateTask } = useTasks();

  const onChangeStatus = (value) => {
    updateTask({ id: data.id, data: { ...data, status: value } });
  };

  return (
    <div>
      <StatusSelection value={data.status} onChange={onChangeStatus} />
    </div>
  );
};

export default CellStatus;
