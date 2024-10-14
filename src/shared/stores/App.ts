import { create } from "zustand";

interface AppStore {
  isLoaded: boolean;
  setIsLoaded: (newState: boolean) => void;
  isAuth: boolean;

  isOpenAuth: boolean;
  triggerAuth: (newState: boolean) => void;

  isOpenIntroduction: boolean;
  triggerIntroduction: (newState: boolean) => void;
}
export const useAppStore = create<AppStore>((set) => ({
  isLoaded: false,
  isOpenIntroduction: false,
  setIsLoaded: (newState) => {
    set({ isLoaded: newState });
  },
  isAuth: false,
  isOpenAuth: false,
  triggerAuth: (newState: boolean) => {
    set({ isOpenAuth: newState });
  },
  triggerIntroduction: (newState: boolean) => {
    set({ isOpenIntroduction: newState });
  },
}));
