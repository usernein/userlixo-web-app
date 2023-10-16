import { InfoSlice } from "./InfoSlice.ts";
import { SettingsSlice } from "./SettingsSlice.ts";

export type AppStore = InfoSlice & SettingsSlice;
