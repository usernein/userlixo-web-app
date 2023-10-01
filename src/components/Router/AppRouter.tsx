import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App/App.tsx";
import Dashboard from "../Dashboard/Dashboard.tsx";
import CommandsPage from "../../pages/CommandsPage/CommandsPage.tsx";
import SettingsPage from "../../pages/SettingsPage/SettingsPage.tsx";
import PluginsPage from "../../pages/PluginsPage/PluginsPage.tsx";

interface RouterProps {}

const AppRouter: FC<RouterProps> = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="commands" element={<CommandsPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="plugins" element={<PluginsPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
