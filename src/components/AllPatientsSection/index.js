import AllPatientsCard from "../AllPatientsCard";
import * as mocks from "../../assets/mock";

export default function AllPatientsSection() {
  return (
    <div style={{ display: "flex" }}>
      <div
        className="wrapper_AttandanceHistorySection"
        style={{ flexDirection: "column" }}
      >
        {mocks.allPatientsMock.map((card) => (
          <AllPatientsCard
            profileImage={card.profileImage}
            name={card.name}
            tests={card.tests}
            realizedTestsQtd={card.realizedTestsQtd}
            canceledTestsQtd={card.canceledTestsQtd}
            pendingTestQtd={card.pendingTestQtd}
          />
        ))}
      </div>
    </div>
  );
}
