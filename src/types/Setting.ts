export type BaseSetting = {
  name: string;
  label: string;
};

export type SettingBoolean = BaseSetting & {
  type: "boolean";
  options?: never;
  value: boolean;
};

export type SettingString = BaseSetting & {
  type: "string";
  options?: never;
  value: string;
};

export type SettingNumber = BaseSetting & {
  type: "number";
  options?: never;
  value: number;
};

export type SettingSelect = BaseSetting & {
  type: "select";
  options: { label: string; value: string }[];
  value: string;
};

export type Setting =
  | SettingBoolean
  | SettingString
  | SettingNumber
  | SettingSelect;
