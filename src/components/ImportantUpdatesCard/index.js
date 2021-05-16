import "./styles.css";

export default function ImportantUpdatesCard({
  profileImage,
  name,
  test,
  isCompleted,
}) {
  return (
    <div className="important_update_card_wrapper_ImportantUpdatesCard">
      <div className="important_update_card_image_ImportantUpdatesCard">
        <img src={profileImage} alt="Imagem do paciente" />
      </div>
      <div className="important_update_card_info_column_ImportantUpdatesCard">
        <p className="card_info_mini_header">PACIENTE</p>
        <p className="card_info_client_name">{name}</p>
        {isCompleted ? (
          <p className="card_info_completed_test" style={{ color: "#1eac79" }}>
            COMPLETOU O TESTE: <strong>{test}</strong>
          </p>
        ) : (
          <p className="card_info_completed_test" style={{ color: "#EF0C35" }}>
            CANCELOU O TESTE: <strong>{test}</strong>
          </p>
        )}
        <p className="card_info_mini_header">REALIZADO EM: 20/10/2023</p>
      </div>
    </div>
  );
}
