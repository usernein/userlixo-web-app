import { FC } from "react";
import styles from "./App.module.scss";
import { Outlet } from "react-router-dom";

interface AppProps {}

const App: FC<AppProps> = () => (
  <div className={styles.App}>
    <Outlet />
  </div>
);

export default App;
