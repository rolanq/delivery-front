import { Restuarant } from "@graphql/graphql";
import { create } from "zustand";

interface RestuarantsStore {
  restuarants: Restuarant[];
  setRestuarants: (restuarants: Restuarant[]) => void;
}

export const useRestuarantsStore = create<RestuarantsStore>((set) => ({
  restuarants: [],
  setRestuarants(restuarants) {
    set((state) => ({ ...state, restuarants }));
  },
}));
