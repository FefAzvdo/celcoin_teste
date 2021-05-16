import "./styles.css";
import * as mock from "../../assets/mock";
import ScrollMenu from "react-horizontal-scrolling-menu";

//DATA VINDO DE UMA API
import GeneralInfoCard from "../../components/GeneralInfoCard";
import { useState } from "react";

export default function GeneralInfoSection() {
  return (
    <div className="main_white_board_general_info">
      <strong className="main_title_header">Informações Gerais</strong>
      <div className="card_list">
        {mock.generalInfoMock.map((card, index) => (
          <GeneralInfoCard
            key={index}
            icon={card.icon}
            number={card.number}
            description={card.description}
            percentage={card.percentage}
            badgeColor={card.percentage < 0 ? "#EF0C35" : "#1CBF84"}
            hiddenBoxDescription={card.hiddenBoxDescription}
            hiddenBoxValue={card.hiddenBoxValue}
          />
        ))}
      </div>
    </div>
  );
}
