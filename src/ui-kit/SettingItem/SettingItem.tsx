import { FC } from "react";
import { Setting } from "@/types/Setting.ts";
import SettingBooleanItem from "../SettingBooleanItem/SettingBooleanItem.tsx";
import SettingNumberItem from "../SettingNumberItem/SettingNumberItem.tsx";
import SettingStringItem from "../SettingStringItem/SettingStringItem.tsx";
import SettingSelectItem from "../SettingSelectItem/SettingSelectItem.tsx";

interface SettingItemProps {
  setting: Setting;
  onChange: (value: unknown) => void;
}

const SettingItem: FC<SettingItemProps> = ({ setting, onChange }) => {
  switch (setting.type) {
    case "boolean":
      return (
        <SettingBooleanItem
          setting={setting}
          onChange={(e) => onChange(e.target.value)}
        />
      );
    case "number":
      return (
        <SettingNumberItem
          setting={setting}
          onChange={(e) => onChange(e.target.value)}
        />
      );
    case "string":
      return (
        <SettingStringItem
          setting={setting}
          onChange={(e) => onChange(e.target.value)}
        />
      );
    case "select":
      return <SettingSelectItem setting={setting} onChange={onChange} />;
    default:
      return <div>Unknown</div>;
  }
};

export default SettingItem;
