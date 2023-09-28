import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Commands from "./pages/Commands/Commands";
import Settings from "./pages/Settings/Settings";
import Plugins from "./pages/Plugins/Plugins";
import App from "./components/App/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="commands" element={<Commands />} />
          <Route path="settings" element={<Settings />} />
          <Route path="plugins" element={<Plugins />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
