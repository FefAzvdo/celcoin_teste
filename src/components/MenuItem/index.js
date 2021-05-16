import "./styles.css";

export default function MenuItem({
  name,
  icon,
  isSelected = false,
  onClickMenuButton,
}) {
  return (
    <button
      onClick={onClickMenuButton}
      className="navigation_menu_options_item"
      style={{
        // backgroundColor: isSelected ? "#EFF2F9" : "transparent",
        backgroundColor: "transparent",
        border: 0,
        outline: 0,
        width: "100%",
      }}
    >
      <div style={{ marginRight: "15px", display: "flex" }}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={icon} fill={isSelected ? "#303B5B" : "#EFF2F9"} />
        </svg>
      </div>
      <div>
        <p
          style={{
            color: isSelected ? "#303B5B" : "#fff",
            fontWeight: isSelected ? "bold" : "normal",
          }}
        >
          {name}
        </p>
      </div>
    </button>
  );
}
