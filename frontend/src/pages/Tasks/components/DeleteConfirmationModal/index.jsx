import Button from "components/Button";
import Modal from "components/Modal";
import useTasks from "hooks/useTasks";
import { Trash2, X } from "lucide-react";
import React, { useState } from "react";
import { useModalStore } from "store/modal.store";
import { useTaskStore } from "store/task.store";

const DeleteConfirmationModal = () => {
  const { action, setAction } = useModalStore();
  const { selectedTask, setSelectedTask } = useTaskStore();
  const { deleteTask } = useTasks();

  const buttonStyle = (type) => {
    const color = type === "delete" ? "red" : "gray";
    return `w-full flex items-center justify-center gap-x-2 bg-${color}-500 hover:bg-${color}-600 text-white`;
  };

  const onClose = () => {
    setAction("");
    setSelectedTask({});
  };

  const onDelete = () => {
    deleteTask(selectedTask.id);
    onClose();
  };

  return (
    <Modal isOpen={action === "ALERT"} title={"Warning!"}>
      <div className="flex justify-center">
        <p className="text-center w-[300px]">
          Are you sure to delete this "
          <span className="font-semibold">{selectedTask.title}</span>" ? Once
          deleted, you can't recover it
        </p>
      </div>
      <div className="flex gap-x-4 mt-8">
        <Button className={buttonStyle("delete")} onClick={onDelete}>
          Delete <Trash2 size={18} />
        </Button>
        <Button className={buttonStyle("cancel")} onClick={onClose}>
          Cancel <X size={18} />
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteConfirmationModal;
