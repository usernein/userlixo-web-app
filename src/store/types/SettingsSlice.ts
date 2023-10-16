export type SettingsObject = {
  language: string;
  sudoers: string;
  logs_chat: string;
  prefixes: string;
  web_app_url: string;
};

export type SettingsData = {
  settings: Partial<SettingsObject>;
};

export type SettingsActions = {
  setSettings: (partialSettings: Partial<SettingsObject>) => void;
  hasSettingsChanged: () => boolean;
};

export type SettingsSlice = SettingsData & SettingsActions;
