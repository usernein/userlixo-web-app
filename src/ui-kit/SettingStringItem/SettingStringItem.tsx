import React, { FC } from "react";
import styles from "./SettingStringItem.module.scss";
import { SettingString } from "../../types/Setting.ts";
import Ripple from "../../ui-kit/Ripple/Ripple";
import clsx from "clsx";

interface SettingStringItemProps {
  setting: SettingString;
  onChange?: React.JSX.IntrinsicElements["input"]["onChange"];
}

const SettingStringItem: FC<SettingStringItemProps> = ({
  setting,
  onChange,
}) => (
  <Ripple className={styles.SettingStringItem}>
    <input
      type="text"
      className={clsx(styles.text, "peer duration-100")}
      defaultValue={setting.value}
      onChange={onChange}
    ></input>

    <div
      className={clsx(
        styles.label,
        "duration-100 peer-focus:text-button peer-hover:text-button",
      )}
    >
      {setting.label}
    </div>
  </Ripple>
);

export default SettingStringItem;
