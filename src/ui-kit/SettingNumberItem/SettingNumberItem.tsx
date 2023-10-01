import React, { FC } from "react";
import styles from "./SettingNumberItem.module.scss";
import { SettingNumber } from "../../types/Setting.ts";
import Ripple from "../../ui-kit/Ripple/Ripple";

interface SettingNumberItemProps {
  setting: SettingNumber;
  onChange?: React.JSX.IntrinsicElements["input"]["onChange"];
}

const SettingNumberItem: FC<SettingNumberItemProps> = ({
  setting,
  onChange,
}) => (
  <Ripple className={styles.SettingNumberItem}>
    <div className={styles.label}>{setting.label}</div>

    <input
      type="number"
      className={styles.number}
      defaultValue={setting.value}
      onChange={onChange}
    ></input>
  </Ripple>
);

export default SettingNumberItem;
