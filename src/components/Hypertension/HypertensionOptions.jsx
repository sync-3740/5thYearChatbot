import React from "react";

import "../LearningOptions/LearningOptions.css";

const HypertensionOptions = (props) => {
  const options = [
    { text: "What is hypertension?", handler: () => {props.actionProvider.handleRequest("What is hypertension?"); props.actionProvider.handleNewMessage("What is hypertension?", "https://www.youtube.com/embed/NY61nitdcrE")}, id: 1 },
    { text: "What causes hypertension?", handler: () => {props.actionProvider.handleRequest("What causes hypertension?"); props.actionProvider.handleNewMessage("What causes hypertension?")}, id: 2 },
    { text: "Secondary hypertension", handler: () => {props.actionProvider.handleRequest("Secondary hypertension"); props.actionProvider.handleNewMessage("Secondary hypertension")}, id: 3 },
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

export default HypertensionOptions;
