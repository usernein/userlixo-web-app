export type AppState = {
  settings: {
    language?: string;
    sudoers?: string[];
  };
  info: {
    version?: string;
    name?: string;
    picture?: string;
    id?: number;
    lastBootTime?: number;
  };
};

export type CurrentOriginalState = {
  current: AppState;
  original: AppState;
};
