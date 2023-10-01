import React, { FC } from "react";
import styles from "./Ripple.module.scss";
import useRipple from "use-ripple-hook";
import clsx from "clsx";

type RippleProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
} & Parameters<typeof useRipple>[0];

const Ripple: FC<RippleProps> = ({
  as: Tag = "div",
  children,
  className,
  onClick,
  ...props
}) => {
  const [ripple, event] = useRipple({
    color: "rgba(255, 255, 255, 0.15)",
    duration: 500,
    ...props,
  });

  return (
    <Tag
      ref={ripple}
      onPointerDown={event}
      className={clsx(styles.Ripple, className)}
      onClick={onClick}
    >
      {children}
    </Tag>
  );
};

export default Ripple;
