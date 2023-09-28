import { FC } from "react";
import styles from "./SettingsMenu.module.scss";

interface SettingsMenuProps {}

const SettingsMenu: FC<SettingsMenuProps> = () => (
  <div className={styles.SettingsMenu}></div>
);

export default SettingsMenu;
