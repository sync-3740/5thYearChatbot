import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    { text: "Blood Pressure", handler: () => {props.actionProvider.handleRequest("Blood Pressure"); props.actionProvider.handleNewWidgetMessage("Fantastic, what do you want to know about Blood Pressure?","BPOptions")}, id: 1 },
    { text: "Hypertension", handler: () => {props.actionProvider.handleRequest("Hypertension"); props.actionProvider.handleNewWidgetMessage("Fantastic, what do you want to know about hypertension?", "HypertensionOptions")}, id: 2 },
    { text: "Cholesterol", handler: () => {props.actionProvider.handleRequest("Cholesterol"); props.actionProvider.handleNewWidgetMessage("Fantastic, what do you want to know about cholesterol?", "CholesterolOptions")}, id: 3 },
    { text: "A Healthy Lifestyle", handler: () => {props.actionProvider.handleRequest("A Healthy Lifestyle"); props.actionProvider.handleNewWidgetMessage("To reduce blood pressure, it is important to work on modifiable risk factors listed below. Click on any of them for more information", "LifestyleOptions")}, id: 4 },
    { text: "Medicines", handler: () => {props.actionProvider.handleRequest("Medicines"); props.actionProvider.handleNewWidgetMessage("Information on specific types of medication can be found by clicking any of the options below", "MedicationOptions")}, id: 5 },
    { text: "Differences for Women", handler: () => {props.actionProvider.handleRequest("Differences for Women"); props.actionProvider.handleNewWidgetMessage("The main differences to consider if you are a women are listed below. Click on any of the options for more information", "WomenOptions")}, id: 6 },
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
