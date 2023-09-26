import React from "react";

import "../LearningOptions/LearningOptions.css";

const BPOptions = (props) => {
  const options = [
    { text: "What is blood pressure?", handler: () => {props.actionProvider.handleRequest("What is blood pressure?"); props.actionProvider.handleNewWidgetMessage("When the heart pumps blood around the body, the blood puts pressure on the walls of blood vessels. This is known as blood pressure.", "GeneralBP")}, id: 1 },
    { text: "How is blood pressure measured?", handler: () => {props.actionProvider.handleRequest("How is blood pressure measured?"); props.actionProvider.handleNewWidgetMessage("Blood pressure is measured with a blood pressure monitor (sphygmomanometer). There are two main kinds of blood pressure monitors: automatic and manual. Both machines use an inflatable cuff placed around your upper arm.", "BPMeasurement")}, id: 2 },
    { text: "How does my body affect blood pressure?", handler: () => {props.actionProvider.handleRequest("How does my body affect blood pressure?"); props.actionProvider.handleNewWidgetMessage("Your body can affect your blood pressure depending on a number of factors, click on the ones listed below to find out more", "BPandMe")}, id: 3 },
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
