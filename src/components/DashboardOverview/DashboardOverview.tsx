import { FC } from "react";
import styles from "./DashboardOverview.module.scss";
import Avatar from "../../ui-kit/Avatar/Avatar";
import { Command, HardDrives, PuzzlePiece } from "@phosphor-icons/react";
import { useStoreContext } from "@/context/useStoreContext.ts";
import { useStore } from "zustand";
import { getCommands, getInfo, getPlugins } from "@/store/selectors.ts";
import UptimeCountUp from "@/components/UptimeCountUp/UptimeCountUp.tsx";

interface DashboardOverviewProps {}

const DashboardOverview: FC<DashboardOverviewProps> = () => {
  const store = useStoreContext();
  const info = useStore(store, getInfo);
  const plugins = useStore(store, getPlugins);
  const commands = useStore(store, getCommands);

  const userPluginsCount = Object.keys(plugins?.user ?? {}).length;
  const botPluginsCount = Object.keys(plugins?.bot ?? {}).length;

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
          {userPluginsCount} user plugins loaded
        </div>
        <div className={styles.row}>
          <PuzzlePiece size={16} weight="bold" />
          {botPluginsCount} bot plugins loaded
        </div>
        <div className={styles.row}>
          <Command size={16} weight="bold" />
          {commands?.length ?? 0} commands available
        </div>
        <div className={styles.row}>
          <HardDrives size={16} weight="bold" />
          Uptime: <UptimeCountUp />
        </div>
      </div>

      {/*<div className={styles.footer}>*/}
      {/*  <div className={styles.errorBadge}>*/}
      {/*    <WarningOctagon size={14} weight="bold" />*/}
      {/*    Upgrade failed*/}
      {/*  </div>*/}
      {/*  <div className={styles.warningBadge}>*/}
      {/*    <Warning size={14} weight="bold" />2 plugins pending review*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};

export default DashboardOverview;
