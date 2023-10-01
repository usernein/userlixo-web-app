import { FC } from "react";
import styles from "./DashboardOverview.module.scss";
import Avatar from "../../ui-kit/Avatar/Avatar";
import {
  Command,
  HardDrives,
  PuzzlePiece,
  Warning,
  WarningOctagon,
} from "@phosphor-icons/react";
import { useContextSelector } from "use-context-selector";
import { StateDataContext } from "../../context/StateDataContext.ts";

interface DashboardOverviewProps {}

const DashboardOverview: FC<DashboardOverviewProps> = () => {
  const info = useContextSelector(
    StateDataContext,
    (state) => state.state.info,
  );

  return (
    <div className={styles.DashboardOverview}>
      <div className={styles.header}>
        <Avatar src={info.picture ?? ""} />
        <div className={styles.title}>{info.name ?? "unknown"}</div>
        <div className={styles.userlixoVersion}>
          Running UserLixo v{info.version}
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.row}>
          <PuzzlePiece size={16} weight="bold" />
          18 plugins loaded
        </div>
        <div className={styles.row}>
          <Command size={16} weight="bold" />
          18 commands available
        </div>
        <div className={styles.row}>
          <HardDrives size={16} weight="bold" />
          Uptime: 18:08:23
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.errorBadge}>
          <WarningOctagon size={14} weight="bold" />
          Upgrade failed
        </div>
        <div className={styles.warningBadge}>
          <Warning size={14} weight="bold" />2 plugins pending review
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
