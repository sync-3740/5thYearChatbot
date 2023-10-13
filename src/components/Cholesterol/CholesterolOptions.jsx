import React from "react";

import "../LearningOptions/LearningOptions.css";

const CholesterolOptions = (props) => {
  const options = [
    { text: "What is cholesterol?", handler: () => {props.actionProvider.handleRequest("What is cholesterol?"); props.actionProvider.handleNewVideoMessage("What is cholesterol?", "https://www.youtube.com/embed/kLnvChjGxYk")}, id: 1 },
    { text: "What is high cholesterol?", handler: () => {props.actionProvider.handleRequest("What is high cholesterol?"); props.actionProvider.handleNewMessage("What is high cholesterol?")}, id: 2 },
    { text: "Cholesterol and Diet", handler: () => {props.actionProvider.handleRequest("Cholesterol and Diet"); props.actionProvider.handleNewMessage("Cholesterol and Diet")}, id: 3},
    { text: "What are the different types of cholesterol?", handler: () => {props.actionProvider.handleRequest("What are the different types of cholesterol?"); props.actionProvider.handleNewWidgetMessage("What are the different types of cholesterol?", "CholesterolTypes")}, id: 4 },
    { text: "How do I lower my cholesterol?", handler: () => {props.actionProvider.handleRequest("How do I lower my cholesterol?"); props.actionProvider.handleNewVideoMessage("How do I lower my cholesterol?", "https://www.youtube.com/embed/mOPy1f9-L38")}, id: 5 },
    { text: "Cholesterol Medication?", handler: () => {props.actionProvider.handleRequest("Cholesterol Medication?"); props.actionProvider.handleNewMessage("Cholesterol Medication?")}, id: 6 },
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

export default CholesterolOptions;
