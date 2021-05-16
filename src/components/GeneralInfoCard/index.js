import "./styles.css";

export default function GeneralInfoCard({
  badgeColor = "#1cbf84",
  icon,
  number,
  description,
  percentage,
  hiddenBoxDescription,
  hiddenBoxValue,
}) {
  return (
    <div className="card_list_item_wrapper">
      <div className="card_list_floatting_box_centralizer">
        <div className="card_list_floatting_box">
          <p>{hiddenBoxDescription}</p>
          <span style={{ color: badgeColor }}>{hiddenBoxValue}</span>
        </div>
      </div>
      <div className="icons_centralizer">
        {icon}
        <div
          className="icon_percentage_wrapper"
          style={{ backgroundColor: badgeColor }}
        >
          <span>{`${percentage} %`}</span>
        </div>
      </div>

      <strong className="card_list_item_middle_row">{number}</strong>
      <strong className="card_list_item_down_row">{description}</strong>
    </div>
  );
}
