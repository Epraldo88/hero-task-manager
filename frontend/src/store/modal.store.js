import { create } from "zustand";

export const useModalStore = create((set) => ({
  action: "", // CREATE | EDIT
  setAction: (value) => set({ action: value }),
}));
