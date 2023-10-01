import { useNavigate } from "react-router-dom";
import { FC, ReactNode } from "react";
import MenuItem from "../../ui-kit/MenuItem/MenuItem";

interface NavigateMenuItemProps {
  icon: ReactNode;
  label: string;
  navigateTo: string;
}

const NavigateMenuItem: FC<NavigateMenuItemProps> = ({
  label,
  icon,
  navigateTo,
}) => {
  const navigate = useNavigate();

  return (
    <MenuItem
      icon={icon}
      label={label}
      hasSubMenu
      onClick={() =>
        navigate({ pathname: navigateTo, search: window.location.search })
      }
    />
  );
};

export default NavigateMenuItem;
