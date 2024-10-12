import { create } from "zustand";
import { devtools } from "zustand/middleware";

type dragStore = {
  isActive: boolean;
  setActive: (active: boolean) => void;
}

export const useDragImgStore = create<dragStore>()(
  devtools(set => ({
    isActive: false,
    setActive: (active) => set({isActive: active}),
  }))
);