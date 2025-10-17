import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import {
  createTask,
  deleteTask,
  getTaskDetail,
  getTasks,
  updateTask,
} from "services/task.service";

const useTasks = () => {
  const queryClient = useQueryClient();

  const {
    data: tasks,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });

  const useTaskDetail = (id) =>
    useQuery({
      queryKey: ["task-detail", id],
      queryFn: () => getTaskDetail(id),
      enabled: !!id, // hanya jalan kalau id ada
    });

  const createTaskMutation = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });

  const updateTaskMutation = useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });

  const deleteTaskMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });

  return {
    tasks,
    isLoading,
    isError,
    useTaskDetail,
    createTask: createTaskMutation.mutate,
    updateTask: updateTaskMutation.mutate,
    deleteTask: deleteTaskMutation.mutate,
  };
};

export default useTasks;
