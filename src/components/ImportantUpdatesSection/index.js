import ImportantUpdatesCard from "../ImportantUpdatesCard";
import * as mocks from "../../assets/mock";
import "./styles.css";
export default function ImportantUpdatesSection() {
  return (
    <div className="important_update_card_list_ImportantUpdatesSection">
      {mocks.importantUptatesMock.map((card) => (
        <ImportantUpdatesCard
          profileImage={card.profileImage}
          name={card.name}
          test={card.test}
          isCompleted={card.isCompleted}
        />
      ))}
    </div>
  );
}
