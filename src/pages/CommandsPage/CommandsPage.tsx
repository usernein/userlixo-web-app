import { FC } from "react";
import styles from "./CommandsPage.module.scss";
import TelegramBackButton from "../../components/TelegramBackButton/TelegramBackButton";

interface CommandsProps {}

const CommandsPage: FC<CommandsProps> = () => {
  return (
    <div className={styles.CommandsPage}>
      <TelegramBackButton />
      Nothing here yet.
    </div>
  );
};

export default CommandsPage;
