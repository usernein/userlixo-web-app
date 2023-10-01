import { useAppReducer } from "../store/useAppReducer.ts";
import React, { PropsWithChildren } from "react";
import { StateDataContext } from "./StateDataContext.ts";
import { StateApiContext } from "./StateApiContext.ts";

export const AppContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const { state, originalState, updateState, updateOriginalState } =
    useAppReducer();

  return (
    <StateApiContext.Provider value={{ updateState, updateOriginalState }}>
      <StateDataContext.Provider value={{ state, originalState }}>
        {children}
      </StateDataContext.Provider>
    </StateApiContext.Provider>
  );
};
