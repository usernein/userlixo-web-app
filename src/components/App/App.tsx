import { FC } from "react";
import styles from "./App.module.scss";
import { Outlet } from "react-router-dom";
import { WebAppProvider } from "@vkruglikov/react-telegram-web-app";
import { AppStoreProvider } from "../../context/AppStoreProvider.tsx";
import { useSettingsFromUrl } from "@/utils/useSettingsFromUrl.ts";

interface AppProps {}

const App: FC<AppProps> = () => {
  const settings = useSettingsFromUrl();

  sessionStorage.setItem("userlixo-settings", JSON.stringify(settings));

  return (
    <div className={styles.App}>
      <AppStoreProvider>
        <WebAppProvider options={{ smoothButtonsTransition: true }}>
          <Outlet />
        </WebAppProvider>
      </AppStoreProvider>
    </div>
  );
};

export default App;
