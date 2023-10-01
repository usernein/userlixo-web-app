import { AppState, CurrentOriginalState } from "./types/AppState.ts";
import { AppReducerActionType } from "./types/AppReducerActionType.ts";
import React from "react";
import { AppReducer, initialState } from "./AppReducer.ts";
import { PartialDeep } from "type-fest";

type useAppReducerReturn = {
  state: CurrentOriginalState["current"];
  originalState: CurrentOriginalState["original"];
  updateState: (newStateValues: PartialDeep<AppState>) => void;
  updateOriginalState: (newStateValues: PartialDeep<AppState>) => void;
};

export const useAppReducer = (): useAppReducerReturn => {
  const [state, dispatch] = React.useReducer(AppReducer, initialState);

  const updateState = (newStateValues: PartialDeep<AppState>) => {
    console.debug("updateState", JSON.stringify(newStateValues, null, 2));
    dispatch({
      type: AppReducerActionType.UPDATE_STATE,
      payload: { current: newStateValues },
    });
  };

  const updateOriginalState = (newStateValues: PartialDeep<AppState>) => {
    dispatch({
      type: AppReducerActionType.UPDATE_STATE,
      payload: { original: newStateValues },
    });
  };

  return {
    state: state.current,
    originalState: state.original,
    updateState,
    updateOriginalState,
  };
};
