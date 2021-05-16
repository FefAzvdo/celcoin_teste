import * as icons from "../../assets/icons";
import AttandanceHistoryCard from "../AttandanceHistoryCard";
import MostRealizedTestCard from "../MostRealizedTestCard";
import "./styles.css";

//SIMULAÇÃO DE DADOS VINDOS DA API
import * as mocks from "../../assets/mock";

export default function AttandanceHistorySection() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 4 }} className="wrapper_AttandanceHistorySection">
        {mocks.attandanceHistoryMock.map((card) => (
          <AttandanceHistoryCard
            icon={card.icon}
            name={card.name}
            tests={card.tests}
            date={card.date}
          />
        ))}
      </div>
      <div style={{ flex: 1.3 }} className="wrapper_AttandanceHistorySection">
        <MostRealizedTestCard
          icon={icons.bigPinkHexagonIcon}
          test="Autismo"
          times="13"
        />
      </div>
    </div>
  );
}
