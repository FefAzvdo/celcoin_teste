import "./styles.css";

export default function AttandanceHistoryCard({ icon, name, tests, date }) {
  return (
    <div className="attandance_card_wrapper" style={{ padding: "10px" }}>
      <div>
        <div className="image_icon_wrapper">
          <span>{icon}</span>
        </div>
        <p className="name_style">{name}</p>
        <p className="caption_style">TESTE REALIZADO</p>
        <p className="info_style">{tests}</p>
        <p className="caption_style">REALIZADO EM:</p>
        <p className="info_style">{date}</p>
      </div>
    </div>
  );
}
