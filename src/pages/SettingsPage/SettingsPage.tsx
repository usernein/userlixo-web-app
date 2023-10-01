import { FC, useContext } from "react";
import styles from "./SettingsPage.module.scss";
import TelegramBackButton from "../../components/TelegramBackButton/TelegramBackButton";
import SettingItem from "../../ui-kit/SettingItem/SettingItem";
import AutomaticSaveSettingsButton from "../../components/AutomaticSaveSettingsButton/AutomaticSaveSettingsButton.tsx";
import { StateDataContext } from "../../context/StateDataContext.ts";
import { StateApiContext } from "../../context/StateApiContext.ts";

interface SettingsPageProps {}

const SettingsPage: FC<SettingsPageProps> = () => {
  const { state } = useContext(StateDataContext);
  const { updateState } = useContext(StateApiContext);

  const settings = state.settings;

  console.debug(JSON.stringify({ state }));

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
            value: settings?.language,
            options: [
              { label: "English", value: "en" },
              { label: "Português", value: "pt" },
            ],
          }}
          onChange={(value) => {
            updateState({
              settings: { language: value as string },
            });
          }}
        />

        <SettingItem
          setting={{
            name: "sudoers",
            type: "string",
            label: "Sudoers",
            value: (settings?.sudoers ?? []).join(", "),
          }}
          onChange={(value) => {
            updateState({
              settings: { sudoers: (value as string).split(",") },
            });
          }}
        />
      </div>
    </div>
  );
};

export default SettingsPage;
