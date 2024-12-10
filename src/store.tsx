import { create } from "zustand";

import { produce } from "immer";

interface StoreState {
  openMenu: boolean;
  setOpenMenu: (openMenu: boolean) => void;
}

export const useStore = create<StoreState>((set) => ({
  openMenu: false,
  setOpenMenu: (value) => {
    set(
      produce((state) => {
        state.openMenu = value;
      })
    );
  },
}));
