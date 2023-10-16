import { useSearchParams } from "react-router-dom";
import { PluginsData } from "@/store/types/InfoSlice.ts";

export const usePluginsFromUrl = () => {
  const [searchParams] = useSearchParams();

  const pluginsJSON = searchParams.get("plugins");
  const plugins = pluginsJSON ? JSON.parse(pluginsJSON) : {};

  return plugins as Partial<PluginsData>;
};
