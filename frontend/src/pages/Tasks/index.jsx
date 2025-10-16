import Table from "components/Table";
import React from "react";
import { taskColumns } from "./columns";
import { dummyData } from "./dummyData";
import { useTaskStore } from "store/task.store";

const Tasks = () => {
  const { setSelectedTask } = useTaskStore();

  return (
    <div>
      {/*  */}
      <Table
        columns={taskColumns}
        datas={dummyData}
        rowClick={(data) => setSelectedTask(data)}
      />
      {/* </div> */}
    </div>
  );
};

export default Tasks;
