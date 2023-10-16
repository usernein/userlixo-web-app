import React, { FC } from "react";
import styles from "./SettingStringItem.module.scss";
import { SettingString } from "@/types/Setting.ts";
import { Label } from "@/components/ui/label.tsx";
import { Input } from "@/components/ui/input.tsx";
import * as _ from "lodash";

interface SettingStringItemProps {
  setting: SettingString;
  onChange?: React.JSX.IntrinsicElements["input"]["onChange"];
}

const SettingStringItem: FC<SettingStringItemProps> = ({
  setting,
  onChange,
}) => {
  const uniqueId = _.uniqueId("setting-string-item-");
  return (
    <div className={styles.SettingStringItem}>
      <Label htmlFor={uniqueId}>{setting.label}</Label>
      <Input
        type="text"
        id={uniqueId}
        placeholder={setting.label}
        defaultValue={setting.value}
        onChange={onChange}
      />
    </div>
  );
};

export default SettingStringItem;
