import MainHeader from "../../components/MainHeader";
import PatientsUpdatesSection from "../../components/PatientsUpdatesSection";

export default function PacientesPage() {
  return (
    <div className="main_white_board">
      <div className="attandance_history_wrapper">
        <MainHeader />
        <PatientsUpdatesSection />
      </div>
    </div>
  );
}
