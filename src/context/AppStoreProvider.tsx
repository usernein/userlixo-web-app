import { FC, PropsWithChildren } from "react";
import { AppStoreContext } from "./AppStoreContext.ts";
import { createAppStore } from "../store/createAppStore.ts";
import { useInfoFromUrl } from "../utils/useInfoFromUrl.ts";
import { useSettingsFromUrl } from "../utils/useSettingsFromUrl.ts";
import { settingsStorageKey } from "../data/constants.ts";
import { useCommandsFromUrl } from "@/utils/useCommandsFromUrl.ts";
import { usePluginsFromUrl } from "@/utils/usePluginsFromUrl.ts";
import { SettingsData } from "@/store/types/SettingsSlice.ts";
import { InfoData } from "@/store/types/InfoSlice.ts";

export const AppStoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const infoData = useInfoFromUrl();
  const settingsData = useSettingsFromUrl();
  const commandsData = useCommandsFromUrl();
  const pluginsData = usePluginsFromUrl();

  const storeInitialValues: Partial<InfoData & SettingsData> = {
    ...infoData,
    plugins: pluginsData,
    commands: commandsData,
    settings: settingsData,
  };

  console.log({ storeInitialValues });

  sessionStorage.setItem(settingsStorageKey, JSON.stringify(settingsData));

  const appStore = createAppStore(storeInitialValues);

  return (
    <AppStoreContext.Provider value={appStore}>
      {children}
    </AppStoreContext.Provider>
  );
};
