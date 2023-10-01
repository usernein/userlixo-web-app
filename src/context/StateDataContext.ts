import { createContext } from "react";
import { StateDataContextValues } from "./types/StateDataContextValues.ts";

export const StateDataContext = createContext<StateDataContextValues>(
  {} as StateDataContextValues,
);
