import React from "react";

import "../LearningOptions/LearningOptions.css";

const GeneralBP = (props) => {
  const options = [
    { text: "Systolic BP", handler: () => {props.actionProvider.handleRequest("Systolic BP"); props.actionProvider.handleNewMessage("Systolic BP")}, id: 1 },
    { text: "Diastolic BP", handler: () => {props.actionProvider.handleRequest("Diastolic BP"); props.actionProvider.handleNewMessage("Diastolic BP")}, id: 2 },
    { text: "BP Variation", handler: () => {props.actionProvider.handleRequest("BP Variation"); props.actionProvider.handleNewWidgetMessage("BP Variation", "BPVariation")}, id: 3 },
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

export default GeneralBP;
