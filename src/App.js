import "./App.css";
import DashboardPage from "./pages/Dashboard";
import SideMenu from "./components/SideMenu";
import { useState } from "react";
import PacientesPage from "./pages/Pacientes";

function App() {
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");
  return (
    <div>
      <div className="background_image_blue_filter" />
      <div className="board_container">
        <SideMenu
          onSelectDashboard={() => setSelectedMenu("Dashboard")}
          onSelectPacientes={() => setSelectedMenu("Pacientes")}
          selected={selectedMenu}
        />
        {selectedMenu == "Dashboard" ? (
          <DashboardPage isVisible={selectedMenu == "Dashboard"} />
        ) : (
          <PacientesPage />
        )}
      </div>
    </div>
  );
}

export default App;
