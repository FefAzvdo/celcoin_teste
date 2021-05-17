import "./styles.css";
import renataImage from "../../assets/images/renata_perfil.jpg";
import * as icons from "../../assets/icons";

const ProfileBoxMiniCard = ({
  profileImage = renataImage,
  name = "Renata Augusto Ferreira",
  tests = "TDAH CAB ADHD, Autismo",
}) => {
  return (
    <div
      className="important_update_card_wrapper_ImportantUpdatesCard"
      style={{ borderRight: "1px solid #EFF2F9", alignItems: "center" }}
    >
      <div className="important_update_card_image_ImportantUpdatesCard">
        <img
          src={profileImage}
          alt="Imagem do paciente"
          style={{ borderRadius: "6px", width: "64px", height: "64px" }}
        />
      </div>
      <div className="important_update_card_info_column_ImportantUpdatesCard">
        <p className="card_info_client_name">{name}</p>
        <p className="card_info_mini_header" style={{ fontSize: "12px" }}>
          DIAGNÓSTICO
        </p>
        <strong
          className="card_info_completed_test"
          style={{ color: "#1EAC79" }}
        >
          {tests}
        </strong>
      </div>
    </div>
  );
};

const TestsBoxMiniCard = ({ description, quantity, color }) => {
  return (
    <div className="mini_tests_box_wrapper">
      <strong style={{ fontSize: "36px", color }}>{quantity}</strong>
      <span style={{ fontSize: "12px", color }}>{description}</span>
    </div>
  );
};

const ActionsBoxMiniCard = () => {
  return (
    <div>
      <button className="pencil_button">{icons.bluePencilIcon}</button>
      <button className="send_text_button">ENVIAR NOVO TESTE</button>
      <button className="update_sign_up_button">ALTERAR CADASTRO</button>
    </div>
  );
};

export default function AllPatientsCard({
  profileImage,
  name,
  tests,
  realizedTestsQtd,
  canceledTestsQtd,
  pendingTestQtd,
}) {
  return (
    <div className="all_patients_card_wrapper">
      <div className="patient_profile_box">
        <ProfileBoxMiniCard
          profileImage={profileImage}
          name={name}
          tests={tests}
        />
      </div>
      <div className="tests_box">
        <TestsBoxMiniCard
          description="Testes realizados"
          quantity={realizedTestsQtd}
          color="#1EAC79"
        />
        <TestsBoxMiniCard
          description="Testes cancelados"
          quantity={canceledTestsQtd}
          color="#EF0C35"
        />
        <TestsBoxMiniCard
          description="Testes pendentes"
          quantity={pendingTestQtd}
          color="#FF6B00"
        />
      </div>
      <div className="actions_box">
        <ActionsBoxMiniCard />
      </div>
    </div>
  );
}
