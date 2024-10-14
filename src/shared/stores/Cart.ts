import { Cart } from "@graphql/graphql";
import { create } from "zustand";

interface CartStore {
  cart?: Cart;
  loading: boolean;
  setLoading: (newState: boolean) => void;
  setCart: (cart: Cart) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cart: undefined,
  loading: true,
  setLoading: (newState) => set({ loading: newState }),
  setCart: (cart) => set({ cart: cart }),
}));
