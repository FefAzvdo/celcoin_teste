import "./styles.css";

export default function MostRealizedTestCard({ icon, test, times }) {
  return (
    <div className="attandance_card_wrapper_MostRealizedTestCard">
      <div>
        <div className="image_icon_wrapper_MostRealizedTestCard">
          <span>{icon}</span>
        </div>
        <p className="info_style_MostRealizedTestCard">{test}</p>
        <p className="caption_style_MostRealizedTestCard">
          LICENÇAS DISPONÍVEIS:
        </p>
        <div className="button_and_info_container_MostRealizedTestCard">
          <p className="info_style_MostRealizedTestCard">{times}</p>
          <button className="button_style_MostRealizedTestCard">
            COMPRAR MAIS
          </button>
        </div>
      </div>
    </div>
  );
}
