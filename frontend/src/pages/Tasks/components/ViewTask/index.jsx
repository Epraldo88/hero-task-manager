import TextInput from "components/Form/TextInput";
import Textarea from "components/Form/Textarea";
import Modal from "components/Modal";
import { useEffect, useState } from "react";
import { useModalStore } from "store/modal.store";
import { useTaskStore } from "store/task.store";
import EditLayout from "./EditLayout/EditLayout";
import ButtonSubmit from "../Action/ButtonSubmit";
import DateInput from "components/Form/DateInput";
import { dateDisplay } from "utils/date";
import PerformanceTag from "components/PerformanceTag";
import Label from "components/Form/Label";
import StatusSelection from "components/StatusSelection";
import useTasks from "hooks/useTasks";
import TaskLogs from "./TaskLogs";

const ViewTask = () => {
  const { selectedTask, setSelectedTask } = useTaskStore();
  const { action, setAction } = useModalStore();
  const [formData, setFormData] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const { useTaskDetail, updateTask } = useTasks();
  const { data: detail } = useTaskDetail(selectedTask.id);

  useEffect(() => {
    if (Object.keys(selectedTask).length) setFormData({ ...selectedTask });
  }, [selectedTask]);

  const onChange = (e) => {
    let { name, value } = e.target;
    if (name === "deadline_date") {
      value = dayjs(value).format("YYYY-MM-DD HH:mm:ss");
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (!isEdit) setIsEdit(true);
  };

  const onStatusChange = (value) => {
    setFormData((prev) => ({ ...prev, status: value }));
    if (!isEdit) setIsEdit(true);
  };

  const isSubmitDisabled = () => {
    if (!formData.title) return true;
    return false;
  };

  const onCloseModal = () => {
    setSelectedTask({});
    setAction("");
    setFormData({});
  };

  const onSubmit = () => {
    updateTask({ id: formData.id, data: formData });
    onCloseModal();
  };

  return (
    <Modal
      isOpen={action === "VIEW"}
      onClose={onCloseModal}
      title={"View Task"}
      footer={
        isEdit && (
          <ButtonSubmit onClick={onSubmit} disabled={isSubmitDisabled()} />
        )
      }
    >
      <form className="space-y-4">
        <EditLayout label={"Title"} value={formData.title} required>
          <TextInput
            name={"title"}
            value={formData.title}
            onChange={onChange}
            placeholder={"Enter task title"}
          />
        </EditLayout>
        <EditLayout label={"Description"} value={formData.description}>
          <Textarea
            name={"description"}
            value={formData.description}
            onChange={onChange}
            placeholder={"Write task description"}
          />
        </EditLayout>
        <EditLayout label={"Assignee"} value={formData.assignee}>
          <TextInput
            name={"assignee"}
            value={formData.assignee}
            onChange={onChange}
            placeholder={"Write assignee"}
          />
        </EditLayout>
        <EditLayout
          label={"Deadline"}
          value={dateDisplay(formData.deadline_date)}
        >
          <DateInput
            name={"deadline_date"}
            value={dateDisplay(formData.deadline_date)}
            onChange={onChange}
          />
        </EditLayout>
        <div>
          <Label>Status</Label>
          <StatusSelection onChange={onStatusChange} value={formData.status} />
        </div>
        <div>
          <Label>Performance Status</Label>
          <PerformanceTag status={formData.performance_status} />
        </div>
        <div>
          <Label>Task Logs</Label>
          <TaskLogs datas={detail || []} />
        </div>
      </form>
    </Modal>
  );
};

export default ViewTask;
