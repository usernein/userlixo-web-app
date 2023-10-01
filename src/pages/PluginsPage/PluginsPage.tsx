import { FC } from "react";
import styles from "./PluginsPage.module.scss";
import TelegramBackButton from "../../components/TelegramBackButton/TelegramBackButton";

interface PluginsProps {}

const PluginsPage: FC<PluginsProps> = () => (
  <div className={styles.PluginsPage}>
    <TelegramBackButton />
    Nothing here yet.
  </div>
);

export default PluginsPage;
