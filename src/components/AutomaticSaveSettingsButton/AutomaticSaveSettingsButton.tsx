import { FC, useContext } from "react";
import { StateDataContext } from "../../context/StateDataContext.ts";
import { MainButton } from "@vkruglikov/react-telegram-web-app";

interface AutomaticSaveSettingsButtonProps {}

const AutomaticSaveSettingsButton: FC<
  AutomaticSaveSettingsButtonProps
> = () => {
  const { originalState, state } = useContext(StateDataContext);

  return (
    state != originalState && (
      <MainButton
        text={"Save settings"}
        onClick={() => {
          // sendData to Telegram
          console.log("Send settings to Telegram!");
        }}
      />
    )
  );
};

export default AutomaticSaveSettingsButton;
