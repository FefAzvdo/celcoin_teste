import MainHeader, { SearchBox } from "../../components/MainHeader";
import PatientsUpdatesSection from "../../components/PatientsUpdatesSection";
import * as icons from "../../assets/icons";
import AllPatientsHeader from "../../components/AllPatientsHeader";
import AllPatientsCard from "../../components/AllPatientsCard";
import AllPatientsSection from "../../components/AllPatientsSection";

export default function PacientesPage() {
  return (
    // <div className="main_white_board">
    //   <div
    //     className="attandance_history_wrapper"
    //     style={{ padding: 0, paddingTop: "10px" }}
    //   >
    //     <MainHeader />
    //     <PatientsUpdatesSection />
    //   </div>

    // <AllPatientsHeader />
    // <AllPatientsSection />
    // </div>

    <div
      style={{
        backgroundColor: "#fff",
        paddingTop: "10px",
        paddingBottom: "10px",
        borderRadius: "16px",
      }}
    >
      <div>
        <MainHeader />
      </div>
      <div
        style={{
          backgroundColor: "#eff2f9",
          padding: "10px",
          marginTop: "20px",
        }}
      >
        <PatientsUpdatesSection />
      </div>
      <div
        style={{
          backgroundColor: "#eff2f9",
          marginTop: "20px",
          marginBottom: "20px",
          padding: "10px",
        }}
      >
        <AllPatientsHeader />
        <AllPatientsSection />
      </div>
    </div>
  );
}
