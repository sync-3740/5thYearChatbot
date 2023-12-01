import React from "react";

import "../LearningOptions/LearningOptions.css";

const TestSelector = (props) => {
  const options = [
    { text: "Starting Test", handler: () => {props.actionProvider.handleRequest("Starting Test"); props.actionProvider.handleTest("Starting Test")}, id: 1 },
    { text: "Basic Overview Test", handler: () => {props.actionProvider.handleRequest("Basic Overview Test"); props.actionProvider.handleTest("Basic Overview")}, id: 2 },
    { text: "All about Hypertension", handler: () => {props.actionProvider.handleRequest(""); props.actionProvider.handleTest("")}, id: 3 },
    { text: "What can you change to help", handler: () => {props.actionProvider.handleRequest(""); props.actionProvider.handleTest("")}, id: 4 },
   
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

export default TestSelector;
