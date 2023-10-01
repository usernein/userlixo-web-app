import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App/App.tsx";
import Dashboard from "./components/Dashboard/Dashboard.tsx";
import CommandsPage from "./pages/CommandsPage/CommandsPage.tsx";
import SettingsPage from "./pages/SettingsPage/SettingsPage.tsx";
import PluginsPage from "./pages/PluginsPage/PluginsPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="commands" element={<CommandsPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="plugins" element={<PluginsPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
