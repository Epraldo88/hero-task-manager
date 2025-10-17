import { create } from "zustand";

export const useTaskStore = create((set) => ({
  tasks: [],
  selectedTask: {},
  isTaskEdited: false,
  setTasks: (datas) => set({ tasks: datas }),
  setSelectedTask: (data) => set({ selectedTask: data }),
  setIsTaskEdited: (value) => set({ isTaskEdited: value }),
}));
