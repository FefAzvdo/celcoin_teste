import AttandanceHistoryHeader from "../../components/AttandanceHistoryHeader";
import AttandanceHistorySection from "../../components/AttandanceHistorySection";
import MainHeader from "../../components/MainHeader";
import GeneralInfoSection from "../../components/GeneralInfoSection";
import ImportantUpdatesHeader from "../../components/ImportantUpdatesHeader";
import ImportantUpdatesSection from "../../components/ImportantUpdatesSection";

export default function DashboardPage({ isVisible }) {
  return (
    // <div className="main_white_board">
    //   <div className="attandance_history_wrapper">
    //     <MainHeader />
    //   </div>
    //   <div>
    //     <GeneralInfoSection />

    //     <div className="attandance_history_wrapper">
    //       <AttandanceHistoryHeader />
    //       <AttandanceHistorySection />
    //     </div>

    //     <div className="attandance_history_wrapper">
    //       <ImportantUpdatesHeader />
    //       <ImportantUpdatesSection />
    //     </div>
    //   </div>
    // </div>

    <div
      style={{
        backgroundColor: "#eff2f9",
        paddingTop: "10px",
        paddingBottom: "10px",
        borderRadius: "16px",
      }}
    >
      <div style={{ backgroundColor: "#fff" }}>
        <MainHeader />
      </div>
      <div
        style={{
          backgroundColor: "#eff2f9",
          padding: "10px",
          marginTop: "20px",
        }}
      >
        <GeneralInfoSection />
      </div>
      <div style={{ padding: "10px" }}>
        <AttandanceHistoryHeader />
      </div>
      <div
        style={{
          backgroundColor: "#fff",
          marginTop: "20px",
          marginBottom: "20px",
          padding: "10px",
        }}
      >
        <AttandanceHistorySection />
      </div>
      <div style={{ backgroundColor: "#eff2f9", padding: "10px" }}>
        <ImportantUpdatesHeader />
        <ImportantUpdatesSection />
      </div>
    </div>
  );
}
