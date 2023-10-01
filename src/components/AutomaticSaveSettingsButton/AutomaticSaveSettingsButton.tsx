import { FC } from "react";
import { StateDataContext } from "../../context/StateDataContext.ts";
import { MainButton } from "@vkruglikov/react-telegram-web-app";
import { useContextSelector } from "use-context-selector";
import * as _ from "lodash";

interface AutomaticSaveSettingsButtonProps {}

const AutomaticSaveSettingsButton: FC<
  AutomaticSaveSettingsButtonProps
> = () => {
  const originalState = useContextSelector(
    StateDataContext,
    (state) => state.originalState,
  );
  const state = useContextSelector(StateDataContext, (state) => state.state);

  return (
    !_.isEqual(state, originalState) && (
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
