import { AppReducerActionType } from "./AppReducerActionType.ts";
import { CurrentOriginalState } from "./AppState.ts";
import { PartialDeep } from "type-fest";

export type AppReducerSetSettingsAction = {
  type: AppReducerActionType.SET_STATE;
  payload: CurrentOriginalState;
};

export type AppReducerUpdateSettingsAction = {
  type: AppReducerActionType.UPDATE_STATE;
  payload: PartialDeep<CurrentOriginalState>;
};

export type AppReducerAction =
  | AppReducerSetSettingsAction
  | AppReducerUpdateSettingsAction;
