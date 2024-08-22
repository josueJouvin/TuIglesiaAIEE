import { create } from "zustand";
import { User } from "../types";
import { devtools, persist } from "zustand/middleware";

type UserState = {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void
};
export const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        setUser: (user) => set({ user }),
        clearUser: () => set({user: null})
      }),
      {
        name: "user-storage",
      }
    )
  )
);
