import { create } from "zustand";

type DarkModeProps = {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
};

export const useDarkMNode = create<DarkModeProps>((set) => ({
  isDarkMode: false,
  setIsDarkMode: (isDarkMode) => set({ isDarkMode }),
}));
