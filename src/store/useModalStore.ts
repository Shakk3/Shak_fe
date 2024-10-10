import { create } from "zustand";
import { devtools } from "zustand/middleware"

type useModalState = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export const useModalStore = create<useModalState>()(
  devtools(set => ({
    isOpen: false,
    openModal: () => set({isOpen: true}),
    closeModal: () => set({isOpen: false}),
  }))
);