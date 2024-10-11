import { create } from "zustand";

interface AppState {
  isAuth: boolean;
  AuthBottomSheetOpen: boolean;
  triggerAuthBottomSheet: (newState: boolean) => void;
}
export const useAppStore = create<AppState>((set) => ({
  isAuth: false,
  AuthBottomSheetOpen: false,
  triggerAuthBottomSheet: (newState: boolean) => {
    set({ AuthBottomSheetOpen: newState });
  },
}));
