import React from "react";

import "../LearningOptions/LearningOptions.css";

const ExerciseOptions = (props) => {
  const options = [
    { text: "Aerobic Exercise", handler: () => {props.actionProvider.handleRequest("Aerobic Exercise"); props.actionProvider.handleNewMessage("Aerobic Exercise")}, id: 1 },
    { text: "Resistance Exercise", handler: () => {props.actionProvider.handleRequest("Resistance Exercise"); props.actionProvider.handleNewMessage("Resistance Exercise")}, id: 2 },
    { text: "Flexibility Exercise", handler: () => {props.actionProvider.handleRequest("Flexibility Exercise"); props.actionProvider.handleNewMessage("Flexibility Exercise")}, id: 3 },
    { text: "How much should I exercise", handler: () => {props.actionProvider.handleRequest("How much should I exercise?"); props.actionProvider.handleNewMessage("How much should I exercise")}, id: 4 },
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

export default ExerciseOptions;
