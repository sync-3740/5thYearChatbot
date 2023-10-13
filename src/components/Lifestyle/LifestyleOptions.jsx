import React from "react";

import "../LearningOptions/LearningOptions.css";

const LifestyleOptions = (props) => {
  const options = [
    { text: "Physical Activity", handler: () => {props.actionProvider.handleRequest("Physical Activity"); props.actionProvider.handleNewWidgetMessage("Life Physical Activity", "ExerciseOptions")}, id: 1 },
    { text: "Diet", handler: () => {props.actionProvider.handleRequest("Diet"); props.actionProvider.handleNewVideoMessage("Life Diet", "https://www.youtube.com/embed/XgioHTbJgCc")}, id: 2 },
    { text: "Salt", handler: () => {props.actionProvider.handleRequest("Salt"); props.actionProvider.handleNewVideoMessage("Life Salt", "https://www.youtube.com/embed/vEm6bfDRV3w")}, id: 3 },
    { text: "Fats", handler: () => {props.actionProvider.handleRequest("Fats"); props.actionProvider.handleNewVideoMessage("Life Fats", "https://www.youtube.com/embed/5oy0Tl8GA8I")}, id: 4 },
    { text: "Alcohol", handler: () => {props.actionProvider.handleRequest("Alcohol"); props.actionProvider.handleNewMessage("Life Alcohol")}, id: 5 },
    { text: "Smoking", handler: () => {props.actionProvider.handleRequest("Smoking"); props.actionProvider.handleNewWidgetMessage("Life Smoking", "SmokingOptions")}, id: 6 },
    { text: "Sleep", handler: () => {props.actionProvider.handleRequest("Sleep"); props.actionProvider.handleNewMessage("Life Sleep")}, id: 7 },
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

export default LifestyleOptions;
