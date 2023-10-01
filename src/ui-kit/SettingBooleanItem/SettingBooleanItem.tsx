import React, { FC } from "react";
import styles from "./SettingBooleanItem.module.scss";
import { SettingBoolean } from "../../types/Setting.ts";
import Ripple from "../Ripple/Ripple";

interface SettingBooleanItemProps {
  setting: SettingBoolean;
  onChange?: React.JSX.IntrinsicElements["input"]["onChange"];
}

const SettingBooleanItem: FC<SettingBooleanItemProps> = ({
  setting,
  onChange,
}) => (
  <Ripple as="label" className={styles.SettingBooleanItem}>
    <div className={styles.label}>{setting.label}</div>

    <input
      type="checkbox"
      className={styles.boolean}
      defaultChecked={setting.value}
      onChange={onChange}
    ></input>
  </Ripple>
);

export default SettingBooleanItem;
