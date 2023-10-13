import React from "react";

import "../LearningOptions/LearningOptions.css";

const SmokingOptions = (props) => {
  const options = [
    { text: "Short Term Effects", handler: () => {props.actionProvider.handleRequest("Short Term Effects"); props.actionProvider.handleNewMessage("Short Term Effects")}, id: 1 },
    { text: "Long Term Effects", handler: () => {props.actionProvider.handleRequest("Long Term Effects"); props.actionProvider.handleNewMessage("Long Term Effects")}, id: 2 },
    { text: "Lung Problems from Smoking", handler: () => {props.actionProvider.handleRequest("Lung Problems from Smoking"); props.actionProvider.handleNewMessage("Lung Problems from Smoking")}, id: 3 },
    { text: "Heart Problems from Smoking", handler: () => {props.actionProvider.handleRequest("Heart Problems from Smoking"); props.actionProvider.handleNewMessage("Heart Problems from Smoking")}, id: 4 },
    { text: "Fertility Problems from Smoking", handler: () => {props.actionProvider.handleRequest("Fertility Problems from Smoking"); props.actionProvider.handleNewMessage("Fertility Problems from Smoking")}, id: 5 },
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

export default SmokingOptions;
