import React from "react";

import "../LearningOptions/LearningOptions.css";

const WomenOptions = (props) => {
  const options = [
    { text: "Oral Contraceptives", handler: () => {props.actionProvider.handleRequest("Oral Contraceptives"); props.actionProvider.handleNewMessage("Oral Contraceptives")}, id: 1 },
    { text: "Pregnancy", handler: () => {props.actionProvider.handleRequest("Pregnancy"); props.actionProvider.handleNewWidgetMessage("Pregnancy", "PregnancyHypertension")}, id: 2 },
    { text: "Menopause", handler: () => {props.actionProvider.handleRequest("Menopause"); props.actionProvider.handleNewMessage("Menopause")}, id: 3 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default WomenOptions;
