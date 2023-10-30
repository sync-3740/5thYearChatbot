import React from "react";

import "../LearningOptions/LearningOptions.css";

const BPandMe = (props) => {
  const options = [
    { text: "Age", handler: () => {props.actionProvider.handleRequest("Age"); props.actionProvider.handleNewMessage("Age")}, id: 1 },
    { text: "Sex", handler: () => {props.actionProvider.handleRequest("Sex"); props.actionProvider.handleNewMessage("Sex")}, id: 2 },
    { text: "Ethnicity", handler: () => {props.actionProvider.handleRequest("Ethnicity"); props.actionProvider.handleNewMessage("Ethnicity")}, id: 3 },
    { text: "Obesity", handler: () => {props.actionProvider.handleRequest("Obesity"); props.actionProvider.handleNewMessage("Obesity")}, id: 4 },
    { text: "Weight", handler: () => {props.actionProvider.handleRequest("Weight"); props.actionProvider.handleNewVideoMessage("Weight", "https://www.youtube.com/embed/gaaTW0Elxgg")}, id: 5 },
    { text: "Waist Circumference", handler: () => {props.actionProvider.handleRequest("Waist Circumference"); props.actionProvider.handleNewVideoMessage("Waist Circumference", "https://www.youtube.com/embed/t4LYqIxWHQQ")}, id: 6 },
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

export default BPandMe;
