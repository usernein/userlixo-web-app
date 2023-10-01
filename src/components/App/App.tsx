import { FC, useEffect } from "react";
import styles from "./App.module.scss";
import { Outlet, useSearchParams } from "react-router-dom";
import { WebAppProvider } from "@vkruglikov/react-telegram-web-app";
import { StateApiContext } from "../../context/StateApiContext.ts";
import { useContextSelector } from "use-context-selector";

interface AppProps {}

const App: FC<AppProps> = () => {
  const updateState = useContextSelector(
    StateApiContext,
    (state) => state.updateState,
  );
  const updateOriginalState = useContextSelector(
    StateApiContext,
    (state) => state.updateOriginalState,
  );

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const settingsJson =
      searchParams.get("settings") ||
      '{"language": "en", "sudoers": ["usernein"]}';
    updateState({ settings: JSON.parse(settingsJson) });
    updateOriginalState({ settings: JSON.parse(settingsJson) });

    const infoJson = searchParams.get("info") ?? "{}";
    updateState({ info: JSON.parse(infoJson) });
    updateOriginalState({ info: JSON.parse(infoJson) });
    // it would trigger an infinite loop if we add updateState and updateOriginalState to the dependency array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <div className={styles.App}>
      <WebAppProvider options={{ smoothButtonsTransition: true }}>
        <Outlet />
      </WebAppProvider>
    </div>
  );
};

export default App;
