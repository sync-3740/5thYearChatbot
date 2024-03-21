import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    { text: "Blood Pressure", handler: () => {props.actionProvider.handleRequest("Blood Pressure"); props.actionProvider.handleNewWidgetMessage("Blood Pressure","BPOptions")}, id: 1 },
    { text: "Hypertension", handler: () => {props.actionProvider.handleRequest("Hypertension"); props.actionProvider.handleNewWidgetMessage("Hypertension", "HypertensionOptions")}, id: 2 },
    { text: "Cholesterol", handler: () => {props.actionProvider.handleRequest("Cholesterol"); props.actionProvider.handleNewWidgetMessage("Cholesterol", "CholesterolOptions")}, id: 3 },
    { text: "A Healthy Lifestyle", handler: () => {props.actionProvider.handleRequest("A Healthy Lifestyle"); props.actionProvider.handleNewWidgetMessage("A Healthy Lifestyle", "LifestyleOptions")}, id: 4 },
    { text: "Medicines", handler: () => {props.actionProvider.handleRequest("Medicines"); props.actionProvider.handleNewWidgetMessage("Medicines", "MedicationOptions")}, id: 5 },
    { text: "Differences for Women", handler: () => {props.actionProvider.handleRequest("Differences for Women"); props.actionProvider.handleNewWidgetMessage("Differences for Women", "WomenOptions")}, id: 6 },
    //{ text: "Test My Knowledge", handler: () => {props.actionProvider.handleRequest("Test My Knowledge"); props.actionProvider.handleNewWidgetMessage("Test My Knowledge", "TestSelector")}, id: 7 },
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

export default LearningOptions;
