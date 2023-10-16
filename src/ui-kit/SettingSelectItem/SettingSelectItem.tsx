import { FC } from "react";
import styles from "./SettingSelectItem.module.scss";
import { SettingSelect } from "@/types/Setting.ts";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";

interface SettingSelectItemProps {
  setting: SettingSelect;
  onChange?: (value: string) => void;
}

const SettingSelectItem: FC<SettingSelectItemProps> = ({
  setting,
  onChange,
}) => (
  <SelectGroup className={styles.SettingSelectItem}>
    <SelectLabel className={styles.label}>{setting.label}</SelectLabel>
    <Select defaultValue={setting.value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        {setting.options.map((option) => {
          return (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  </SelectGroup>
);

export default SettingSelectItem;
