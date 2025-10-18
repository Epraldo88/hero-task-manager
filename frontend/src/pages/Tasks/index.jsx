import Table from "components/Table";
import useTasks from "hooks/useTasks";
import { taskColumns } from "./columns";
import ButtonCreateTask from "./components/Action/ButtonCreateTask";
import CreateTask from "./components/FormModal/CreateTask";
import DeleteConfirmationModal from "./components/DeleteConfirmationModal";
import Title from "components/Title";
import ViewTask from "./components/FormModal/ViewTask";

const Tasks = () => {
  const { tasks, isError, isLoading } = useTasks();

  if (isLoading) return;
  if (isError) return;

  return (
    <div>
      <Title>Task Management</Title>
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
