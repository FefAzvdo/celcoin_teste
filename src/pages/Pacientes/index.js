import MainHeader, { SearchBox } from "../../components/MainHeader";
import PatientsUpdatesSection from "../../components/PatientsUpdatesSection";
import * as icons from "../../assets/icons";
import AllPatientsHeader from "../../components/AllPatientsHeader";

export default function PacientesPage() {
  return (
    <div className="main_white_board">
      <div className="attandance_history_wrapper">
        <MainHeader />
        <PatientsUpdatesSection />
      </div>
      <AllPatientsHeader />
    </div>
  );
}
