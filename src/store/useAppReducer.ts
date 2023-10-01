import { AppState, CurrentOriginalState } from "./types/AppState.ts";
import { AppReducerActionType } from "./types/AppReducerActionType.ts";
import React from "react";
import { AppReducer } from "./AppReducer.ts";
import { PartialDeep } from "type-fest";
import { useSearchParams } from "react-router-dom";

type useAppReducerReturn = {
  state: CurrentOriginalState["current"];
  originalState: CurrentOriginalState["original"];
  updateState: (newStateValues: PartialDeep<AppState>) => void;
  updateOriginalState: (newStateValues: PartialDeep<AppState>) => void;
};

const useInitialAppState = (): AppState => {
  const [searchParams] = useSearchParams();

  const infoJson = searchParams.get("info");
  const info = infoJson ? JSON.parse(infoJson) : {};

  const settingsJson = searchParams.get("settings");
  const settings = settingsJson ? JSON.parse(settingsJson) : {};

  return {
    info,
    settings,
  };
};

export const useAppReducer = (): useAppReducerReturn => {
  const initialAppState = useInitialAppState();

  const initialState: CurrentOriginalState = {
    current: initialAppState,
    original: initialAppState,
  };

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
