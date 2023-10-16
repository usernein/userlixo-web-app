import { createStore } from "zustand";
import { createInfoSlice } from "./createInfoSlice.ts";
import { createSettingsSlice } from "./createSettingsSlice.ts";
import { AppStore } from "./types/AppStore.ts";

export const createAppStore = (initProps?: Partial<AppStore>) =>
  createStore<AppStore>((...args) => ({
    ...createSettingsSlice(...args),
    ...createInfoSlice(...args),
    ...initProps,
  }));
