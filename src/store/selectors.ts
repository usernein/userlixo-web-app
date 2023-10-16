import { AppStore } from "./types/AppStore.ts";

export const getInfo = (state: AppStore) => ({
  name: state.name,
  version: state.version,
  picture: state.picture,
  id: state.id,
  start_time: state.start_time,
});

export const getSettings = (state: AppStore) => ({
  settings: state.settings,
  setSettings: state.setSettings,
});

export const getCommands = (state: AppStore) => state.commands;

export const getPlugins = (state: AppStore) => state.plugins;

export const getHasSettingsChanged = (state: AppStore) =>
  state.hasSettingsChanged;
