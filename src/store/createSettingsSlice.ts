import { StateCreator } from "zustand";
import { SettingsSlice } from "./types/SettingsSlice.ts";
import { settingsStorageKey } from "../data/constants.ts";
import * as _ from "lodash";

export const createSettingsSlice: StateCreator<SettingsSlice> = (set, get) => ({
  settings: {},

  setSettings: (settings) => {
    set({
      settings: {
        ...get().settings,
        ...settings,
      },
    });
  },

  hasSettingsChanged: () => {
    const originalSettings = JSON.parse(
      sessionStorage.getItem(settingsStorageKey) ?? "{}",
    );

    const { settings } = get();

    return !_.isEqual(originalSettings, settings);
  },
});
