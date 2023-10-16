import { FC } from "react";
import { MainButton, useWebApp } from "@vkruglikov/react-telegram-web-app";
import { useStoreContext } from "@/context/useStoreContext.ts";
import { useStore } from "zustand";
import { getHasSettingsChanged, getSettings } from "@/store/selectors.ts";

interface AutomaticSaveSettingsButtonProps {}

const AutomaticSaveSettingsButton: FC<
  AutomaticSaveSettingsButtonProps
> = () => {
  const store = useStoreContext();
  const { settings } = useStore(store, getSettings);
  const hasSettingsChanged = useStore(store, getHasSettingsChanged);
  const WebApp = useWebApp();

  return (
    hasSettingsChanged() && (
      <MainButton
        text={"Save settings"}
        onClick={() => {
          WebApp.sendData("save_settings--" + JSON.stringify(settings));
        }}
      />
    )
  );
};

export default AutomaticSaveSettingsButton;
