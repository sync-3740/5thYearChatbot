import React from "react";

import "../LearningOptions/LearningOptions.css";

const BPMeasurement = (props) => {
  const options = [
    { text: "What is blood pressure measured in?", handler: () => {props.actionProvider.handleRequest("What is blood pressure measured in?"); props.actionProvider.handleNewMessage("What is blood pressure measured in")}, id: 1 },
    { text: "What is the procedure like?", handler: () => {props.actionProvider.handleRequest("What is the procedure like?"); props.actionProvider.handleNewMessage("What is the procedure like?"); props.actionProvider.handleNewImage("bp_procedure")}, id: 2 },
    { text: "What do the blood pressure numbers mean?", handler: () => {props.actionProvider.handleRequest("What do the blood pressure numbers mean?"); props.actionProvider.handleNewVideoMessage("What do the blood pressure numbers mean", "https://www.youtube.com/embed/FSjLLPuTkPI")}, id: 3 },
    { text: "Can you give an example of a normal blood pressure measure?", handler: () => { props.actionProvider.handleRequest("Can you give an example of a normal blood pressure measure?"); props.actionProvider.handleNewMessage("Can you give an example of a normal blood pressure measure?")}, id: 4 },
    { text: "Office BP", handler: () => {props.actionProvider.handleRequest("Office BP"); props.actionProvider.handleNewMessage("Office BP"); this.handleNewImage("office_bp")}, id: 5 },
    { text: "Home BP Measurement", handler: () => {props.actionProvider.handleRequest("Home BP Measurement"); props.actionProvider.handleNewImageMessage("Home BP Measurement", "bp_advice"); props.actionProvider.handleNewVideoMessage("Here is a brief video explaining this in more detail", "https://www.youtube.com/embed/iEwqy3lzK0c")}, id: 6 },
    { text: "Ambulatory BP Measurement", handler: () => {props.actionProvider.handleRequest("Ambulatory BP Measurement"); props.actionProvider.handleNewMessage("Ambulatory BP Measurement")}, id: 7 },
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

export default BPMeasurement;
