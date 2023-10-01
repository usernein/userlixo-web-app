import React, { FC } from "react";
import styles from "./SettingSelectItem.module.scss";
import { SettingSelect } from "../../types/Setting.ts";
import Ripple from "../../ui-kit/Ripple/Ripple";

interface SettingSelectItemProps {
  setting: SettingSelect;
  onChange?: React.JSX.IntrinsicElements["select"]["onChange"];
}

const SettingSelectItem: FC<SettingSelectItemProps> = ({
  setting,
  onChange,
}) => (
  <Ripple className={styles.SettingSelectItem}>
    <div className={styles.label}>{setting.label}</div>

    <select
      className={styles.select}
      onChange={onChange}
      defaultValue={setting.value}
    >
      {setting.options.map((option) => {
        return (
          <option
            key={option.value}
            value={option.value}
            className={styles.option}
          >
            {option.label}
          </option>
        );
      })}
    </select>
  </Ripple>
);

export default SettingSelectItem;
