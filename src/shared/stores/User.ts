import { User } from "@graphql/index";
import { create } from "zustand";

interface UserStore {
    user?: User;
    setUser: (user: User) => void;
}

export const useUserStore = create<UserStore>(() => ({
    user: undefined,
    setUser() {
        
    },
}))