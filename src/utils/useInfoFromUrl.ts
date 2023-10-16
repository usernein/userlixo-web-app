import { useSearchParams } from "react-router-dom";
import { InfoData } from "../store/types/InfoSlice.ts";

export const useInfoFromUrl = () => {
  const [searchParams] = useSearchParams();

  const infoJSON = searchParams.get("info");
  const info = infoJSON ? JSON.parse(infoJSON) : {};

  return info as Partial<InfoData>;
};
