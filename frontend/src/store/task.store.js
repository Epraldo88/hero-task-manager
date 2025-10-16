import { create } from "zustand";

export const useTaskStore = create((set) => ({
  tasks: [],
  selectedTask: {},
  setTasks: (datas) => set({ tasks: datas }),
  setSelectedTask: (data) => set({ selectedTask: data }),
}));
