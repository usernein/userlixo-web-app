import ReactDOM from "react-dom/client";
import "./index.scss";
import { AppContextProvider } from "./context/AppContextProvider.tsx";
import React from "react";
import AppRouter from "./components/Router/AppRouter.tsx";

const AppRouterMemo = React.memo(AppRouter);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AppContextProvider>
    <AppRouterMemo />
  </AppContextProvider>,
);
