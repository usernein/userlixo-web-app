import { FC } from "react";
import styles from "./App.module.scss";
import { Outlet } from "react-router-dom";
import { WebAppProvider } from "@vkruglikov/react-telegram-web-app";
import { AppContextProvider } from "../../context/AppContextProvider.tsx";

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <div className={styles.App}>
      <AppContextProvider>
        <WebAppProvider options={{ smoothButtonsTransition: true }}>
          <Outlet />
        </WebAppProvider>
      </AppContextProvider>
    </div>
  );
};

export default App;
