import { useContextSelector } from "use-context-selector";
import { AppStoreContext } from "./AppStoreContext.ts";

export const useStoreContext = () => {
  return useContextSelector(AppStoreContext, (store) => store);
};
