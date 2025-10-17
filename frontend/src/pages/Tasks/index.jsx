import Table from "components/Table";
import React from "react";
import { taskColumns } from "./columns";
import { dummyData } from "./dummyData";
import { useTaskStore } from "store/task.store";
import useTasks from "hooks/useTasks";
import ButtonCreateTask from "./components/Action/ButtonCreateTask";
import CreateTask from "./components/CreateTask";

const Tasks = () => {
  const { setSelectedTask } = useTaskStore();
  const { tasks, isError, isLoading } = useTasks();

  if (isLoading) return;
  if (isError) return;

  return (
    <div>
      <div>
        <ButtonCreateTask />
      </div>
      {/*  */}
      <Table
        columns={taskColumns}
        datas={tasks}
        rowClick={(data) => setSelectedTask(data)}
      />
      {/* </div> */}
      <CreateTask />
    </div>
  );
};

export default Tasks;
