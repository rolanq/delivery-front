import { create } from "zustand";

interface AppStore {
  isLoaded: boolean;
  setIsLoaded: (newState: boolean) => void;
  isAuth: boolean;
  AuthBottomSheetOpen: boolean;
  triggerAuthBottomSheet: (newState: boolean) => void;
}
export const useAppStore = create<AppStore>((set) => ({
  isLoaded: false,
  setIsLoaded: (newState) => {
    set({ isLoaded: newState });
  },
  isAuth: false,
  AuthBottomSheetOpen: false,
  triggerAuthBottomSheet: (newState: boolean) => {
    set({ AuthBottomSheetOpen: newState });
  },
}));
