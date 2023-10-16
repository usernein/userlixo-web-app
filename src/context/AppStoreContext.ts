import { createContext } from "use-context-selector";
import { createAppStore } from "../store/createAppStore.ts";

export const AppStoreContext = createContext<ReturnType<typeof createAppStore>>(
  null as unknown as ReturnType<typeof createAppStore>,
);
