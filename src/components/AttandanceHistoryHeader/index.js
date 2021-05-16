export default function AttandanceHistoryHeader() {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div style={{ flex: 4 }}>
        <span
          style={{
            fontWeight: "bold",
            fontSize: "18px",
            color: "#303B5B",
            marginRight: "10px",
          }}
        >
          Histórico de atendimentos
        </span>
        <button
          style={{
            width: "104px",
            height: "24px",
            background: "linear-gradient(93.05deg, #00A3FF 0%, #0057FF 100%)",
            borderRadius: "20px",
            outline: 0,
            border: 0,
            color: "#fff",
          }}
        >
          VER TODOS
        </button>
      </div>

      <span
        style={{
          flex: 1.3,
          fontWeight: "bold",
          fontSize: "18px",
          color: "#303B5B",
          marginRight: "10px",
        }}
      >
        Teste mais realizado
      </span>
    </div>
  );
}
