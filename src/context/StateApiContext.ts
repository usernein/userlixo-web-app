import { createContext } from "react";
import { StateApiContextValues } from "./types/StateApiContextValues.ts";

export const StateApiContext = createContext<StateApiContextValues>(
  {} as StateApiContextValues,
);
