import { FC, ReactNode } from "react";
import styles from "./MenuItem.module.scss";
import clsx from "clsx";
import { CaretRight } from "@phosphor-icons/react";
import Ripple from "../Ripple/Ripple";

interface MenuItemProps {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
  className?: string;
  hasSubMenu?: boolean;
}

const defaultProps: Partial<MenuItemProps> = {
  hasSubMenu: false,
};

const MenuItem: FC<MenuItemProps> = ({
  icon,
  label,
  className,
  onClick,
  hasSubMenu,
}) => {
  return (
    <Ripple className={clsx(styles.MenuItem, className)} onClick={onClick}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.label}>{label}</div>
      {hasSubMenu && (
        <div className={styles.chevron}>
          <CaretRight size={20} weight="bold" />
        </div>
      )}
    </Ripple>
  );
};

MenuItem.defaultProps = defaultProps;

export default MenuItem;
