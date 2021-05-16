import AttandanceHistoryHeader from "../../components/AttandanceHistoryHeader";
import AttandanceHistorySection from "../../components/AttandanceHistorySection";
import MainHeader from "../../components/MainHeader";
import GeneralInfoSection from "../../components/GeneralInfoSection";
import ImportantUpdatesHeader from "../../components/ImportantUpdatesHeader";
import ImportantUpdatesSection from "../../components/ImportantUpdatesSection";

export default function DashboardPage({ isVisible }) {
  return (
    <div className="main_white_board">
      <div className="attandance_history_wrapper">
        <MainHeader />
      </div>
      <div style={{ opacity: isVisible ? 1 : 0, transition: "all .2s" }}>
        <GeneralInfoSection />
        <div className="attandance_history_wrapper">
          <AttandanceHistoryHeader />
          <AttandanceHistorySection />
        </div>

        <div className="attandance_history_wrapper">
          <ImportantUpdatesHeader />
          <ImportantUpdatesSection />
        </div>
      </div>
    </div>
  );
}
