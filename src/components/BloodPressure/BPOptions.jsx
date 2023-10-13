import React from "react";

import "../LearningOptions/LearningOptions.css";

const BPOptions = (props) => {
  const options = [
    { text: "What is blood pressure?", handler: () => {props.actionProvider.handleRequest("What is blood pressure?"); props.actionProvider.handleNewWidgetMessage("What is blood pressure?", "GeneralBP")}, id: 1 },
    { text: "How is blood pressure measured?", handler: () => {props.actionProvider.handleRequest("How is blood pressure measured?"); props.actionProvider.handleNewWidgetMessage("How is blood pressure measured?", "BPMeasurement")}, id: 2 },
    { text: "How does my body affect blood pressure?", handler: () => {props.actionProvider.handleRequest("How does my body affect blood pressure?"); props.actionProvider.handleNewWidgetMessage("How does my body affect blood pressure?", "BPandMe")}, id: 3 },
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

export default BPOptions;
