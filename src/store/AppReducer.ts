import { AppState, CurrentOriginalState } from "./types/AppState.ts";
import { AppReducerAction } from "./types/AppReducerAction.ts";
import { AppReducerActionType } from "./types/AppReducerActionType.ts";
import deepmerge from "ts-deepmerge";

export const AppReducer = (
  state: CurrentOriginalState,
  action: AppReducerAction,
) => {
  // console.debug("AppReducer", JSON.stringify({ state, action }, null, 2));

  switch (action.type) {
    case AppReducerActionType.SET_STATE:
      return action.payload;
    case AppReducerActionType.UPDATE_STATE:
      return deepmerge.withOptions(
        { mergeArrays: false },
        state,
        action.payload,
      ) as CurrentOriginalState;
    default:
      return state;
  }
};

export const initialState: CurrentOriginalState = {
  current: {} as AppState,
  original: {} as AppState,
};
