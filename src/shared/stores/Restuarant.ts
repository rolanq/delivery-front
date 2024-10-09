import { Restuarant } from "@graphql/graphql";
import { create } from "zustand";

interface RestuarantStore {
  restuarant?: Restuarant;
  setRestuarant: (restuarant: Restuarant) => void;
}

export const useRestuarantStore = create<RestuarantStore>((set) => ({
  restuarant: undefined,
  setRestuarant(restuarant) {
    set((state) => ({ ...state, restuarant }));
  },
}));
