import Table from "components/Table";
import useTasks from "hooks/useTasks";
import { taskColumns } from "./columns";
import ButtonCreateTask from "./components/Action/ButtonCreateTask";
import CreateTask from "./components/CreateTask";
import DeleteConfirmationModal from "./components/DeleteConfirmationModal";
import ViewTask from "./components/ViewTask";

const Tasks = () => {
  const { tasks, isError, isLoading } = useTasks();

  if (isLoading) return;
  if (isError) return;

  return (
    <div>
      <div className="mb-4">
        <ButtonCreateTask />
      </div>
      <Table columns={taskColumns} datas={tasks} />
      <CreateTask />
      <ViewTask />

      <DeleteConfirmationModal />
    </div>
  );
};

export default Tasks;
