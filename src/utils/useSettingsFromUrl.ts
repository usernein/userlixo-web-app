import { useSearchParams } from "react-router-dom";
import { SettingsObject } from "../store/types/SettingsSlice.ts";

export const useSettingsFromUrl = (): SettingsObject => {
  const [searchParams] = useSearchParams();

  const settingsJSON = searchParams.get("settings");
  const settings = settingsJSON ? JSON.parse(settingsJSON) : {};

  return {
    sudoers: settings.sudoers ?? "",
    language: settings.language,
    logs_chat: settings.logs_chat,
    prefixes: settings.prefixes,
    web_app_url: settings.web_app_url,
  };
};
