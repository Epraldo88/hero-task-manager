import { create } from "zustand";

export const useModalStore = create((set) => ({
  action: "", // CREATE | VIEW | ALERT
  setAction: (value) => set({ action: value }),
}));
