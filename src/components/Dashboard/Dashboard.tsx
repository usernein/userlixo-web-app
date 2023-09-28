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

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => (
  <div className={styles.Dashboard}>
    <DashboardOverview />

    <div className={styles.itemsGroup}>
      <MenuItem icon={<ArrowsClockwise size={28} />} label="Restart" />
      <MenuItem icon={<Download size={28} />} label="Upgrade" />
    </div>
    <NavigateMenuItem
      icon={<Command size={28} />}
      label="Commands"
      navigateTo="/commands"
    />
    <NavigateMenuItem
      icon={<PuzzlePiece size={28} />}
      label="Plugins"
      navigateTo="/plugins"
    />
    <NavigateMenuItem
      icon={<GearSix size={28} />}
      label="Settings"
      navigateTo="/settings"
    />
  </div>
);

export default Dashboard;
