import { FC } from "react";
import styles from "./Dashboard.module.scss";
import MenuItem from "../../ui-kit/MenuItem/MenuItem";
import {
  ArrowsClockwise,
  Command,
  Download,
  GearSix,
  PuzzlePiece,
} from "@phosphor-icons/react";
import DashboardOverview from "../DashboardOverview/DashboardOverview";
import NavigateMenuItem from "../NavigateMenuItem/NavigateMenuItem";
import { useWebApp } from "@vkruglikov/react-telegram-web-app";

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => {
  const WebApp = useWebApp();

  const onRestartClick = () => {
    WebApp.sendData("restart");
  };

  const onUpgradeClick = () => {
    WebApp.sendData("upgrade");
  };
  return (
    <div className={styles.Dashboard}>
      <DashboardOverview />

      <div className={styles.settingsGroup}>
        <div className={styles.itemsGroup}>
          <MenuItem
            icon={<ArrowsClockwise size={28} />}
            label="Restart"
            onClick={onRestartClick}
          />
          <MenuItem
            icon={<Download size={28} />}
            label="Upgrade"
            onClick={onUpgradeClick}
          />
        </div>
        <NavigateMenuItem
          icon={<Command size={28} />}
          label="CommandsPage"
          navigateTo="/commands"
        />
        <NavigateMenuItem
          icon={<PuzzlePiece size={28} />}
          label="PluginsPage"
          navigateTo="/plugins"
        />
        <NavigateMenuItem
          icon={<GearSix size={28} />}
          label="Settings"
          navigateTo="/settings"
        />
      </div>
    </div>
  );
};

export default Dashboard;
