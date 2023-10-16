export type PluginInfo = {
  basename: string;
  type: string;
  title: string;
  description: string;
  filename: string;
  notation: string;
};

export type PluginsData = {
  user: Record<string, PluginInfo>;
  bot: Record<string, PluginInfo>;
};

export type InfoData = {
  version: string;
  name: string;
  picture: string;
  id: number;
  start_time: number;
  commands: string[];
  plugins: Partial<PluginsData>;
};

export type InfoSlice = Partial<InfoData>;
