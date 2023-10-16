import { StateCreator } from "zustand";
import { InfoSlice } from "./types/InfoSlice.ts";

export const createInfoSlice: StateCreator<InfoSlice> = () => ({
  version: "",
  name: "",
  picture: "",
  id: 0,
  start_time: 0,
});
