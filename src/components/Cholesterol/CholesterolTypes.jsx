import React from "react";

import "../LearningOptions/LearningOptions.css";

const CholesterolTypes = (props) => {
  const options = [
    { text: "About LDL cholesterol", handler: () => {props.actionProvider.handleRequest("About LDL cholesterol"); props.actionProvider.handleNewMessage("About LDL cholesterol")}, id: 5 },
    { text: "About HDL cholesterol", handler: () => {props.actionProvider.handleRequest("About HDL cholesterol"); props.actionProvider.handleNewMessage("About HDL cholesterol")}, id: 6 },
    { text: "About Atherosclerosis", handler: () => {props.actionProvider.handleRequest("About Atherosclerosis"); props.actionProvider.handleNewMessage("About Atherosclerosis")}, id: 7 },
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

export default CholesterolTypes;
