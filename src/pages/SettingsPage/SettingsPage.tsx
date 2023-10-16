import { FC } from "react";
import styles from "./SettingsPage.module.scss";
import TelegramBackButton from "../../components/TelegramBackButton/TelegramBackButton";
import SettingItem from "../../ui-kit/SettingItem/SettingItem";
import AutomaticSaveSettingsButton from "../../components/AutomaticSaveSettingsButton/AutomaticSaveSettingsButton.tsx";
import { useStoreContext } from "@/context/useStoreContext.ts";
import { useStore } from "zustand";
import { getSettings } from "@/store/selectors.ts";

interface SettingsPageProps {}

const SettingsPage: FC<SettingsPageProps> = () => {
  const store = useStoreContext();
  const { settings, setSettings } = useStore(store, getSettings);

  return (
    <div className={styles.SettingsPage}>
      <TelegramBackButton />
      <AutomaticSaveSettingsButton />

      <div className={styles.settingsGroup}>
        <SettingItem
          setting={{
            name: "language",
            type: "select",
            label: "Language",
            value: settings.language ?? "en",
            options: [
              { label: "English", value: "en" },
              { label: "Português", value: "pt" },
            ],
          }}
          onChange={(value) => {
            setSettings({ language: value as string });
          }}
        />

        <SettingItem
          setting={{
            name: "sudoers",
            type: "string",
            label: "Sudoers",
            value: settings.sudoers ?? "",
          }}
          onChange={(value) => {
            setSettings({ sudoers: value as string });
          }}
        />

        <SettingItem
          setting={{
            name: "logs_chat",
            type: "string",
            label: "Logs Chat",
            value: settings.logs_chat ?? "",
          }}
          onChange={(value) => {
            setSettings({ logs_chat: value as string });
          }}
        />

        <SettingItem
          setting={{
            name: "prefixes",
            type: "string",
            label: "Prefixes",
            value: settings.prefixes ?? "",
          }}
          onChange={(value) => {
            setSettings({ prefixes: value as string });
          }}
        />

        <SettingItem
          setting={{
            name: "web_app_url",
            type: "string",
            label: "Web App URL",
            value: settings.web_app_url ?? "",
          }}
          onChange={(value) => {
            setSettings({ web_app_url: value as string });
          }}
        />
      </div>
    </div>
  );
};

export default SettingsPage;
