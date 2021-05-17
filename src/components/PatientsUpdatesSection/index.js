import AttandanceHistoryCard from "../AttandanceHistoryCard";
import "./styles.css";

//SIMULAÇÃO DE DADOS VINDOS DA API
import * as mocks from "../../assets/mock";

export default function PatientsUpdatesSection() {
  return (
    <div className="main_white_board_general_info" style={{ padding: 0 }}>
      <strong className="main_title_header">Atualizações de pacientes</strong>
      <div className="card_list">
        <div style={{ display: "flex" }}>
          <div style={{ flex: 4 }} className="wrapper_PatientsUpdatesSection">
            {mocks.patientsUpdatesMock.map((card) => (
              <AttandanceHistoryCard
                icon={card.icon}
                name={card.name}
                tests={card.tests}
                date={card.date}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
