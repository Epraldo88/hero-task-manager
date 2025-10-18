import Button from "components/Button";
import ButtonPrimary from "components/Button/ButtonPrimary";
import DateInput from "components/Form/DateInput";
import Label from "components/Form/Label";
import Textarea from "components/Form/Textarea";
import TextInput from "components/Form/TextInput";
import Modal from "components/Modal";
import Spinner from "components/Spinner";
import dayjs from "dayjs";
import useTasks from "hooks/useTasks";
import React, { useState } from "react";
import { useModalStore } from "store/modal.store";
import { dateDisplay } from "utils/date";

const baseFormData = {
  title: "",
  description: "",
  assignee: "",
  deadline_date: "",
};

const CreateTask = () => {
  const [formData, setFormData] = useState({ ...baseFormData });
  const { createTask } = useTasks();
  const { action, setAction } = useModalStore();
  const [isLoading, setIsLoading] = useState(false);

  const isSubmitDisabled = () => {
    if (!formData.title) return true;
    return false;
  };

  const onCloseModal = () => {
    setAction("");
    setIsLoading(false);
  };

  const onChange = (e) => {
    let { name, value } = e.target;
    if (name === "deadline_date") {
      value = dayjs(value).format("YYYY-MM-DD HH:mm:ss");
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (isSubmitDisabled() || isLoading) return;
    setIsLoading(true);
    createTask(formData, {
      onSuccess: () => {
        setFormData({ ...baseFormData });
        setIsLoading(false);
        setAction("");
      },
    });
  };

  return (
    <Modal
      isOpen={action === "CREATE"}
      onClose={onCloseModal}
      title={"Create Task"}
    >
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <Label>
            Title <span className="text-red-500">*</span>
          </Label>
          <TextInput
            name="title"
            value={formData.title}
            onChange={onChange}
            placeholder="Enter task title"
          />
        </div>
        <div>
          <Label>Description</Label>
          <Textarea
            name={"description"}
            value={formData.description}
            onChange={onChange}
            placeholder={"Write task description"}
          />
        </div>
        <div>
          <Label>Assignee</Label>
          <TextInput
            name={"assignee"}
            value={formData.assignee}
            onChange={onChange}
            placeholder={"Write assignee"}
          />
        </div>
        <div>
          <Label>Deadline</Label>
          <DateInput
            name={"deadline_date"}
            value={dateDisplay(formData.deadline_date)}
            onChange={onChange}
          />
        </div>
        <div>
          <ButtonPrimary
            type={"submit"}
            disabled={isSubmitDisabled() || isLoading}
            className={"w-full"}
          >
            {!isLoading ? (
              "Create Task"
            ) : (
              <div className="flex items-center gap-x-2 text-center justify-center">
                Submitting <Spinner />
              </div>
            )}
          </ButtonPrimary>
        </div>
      </form>
    </Modal>
  );
};

export default CreateTask;
