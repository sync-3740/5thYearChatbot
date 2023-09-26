import React from "react";

import "../LearningOptions/LearningOptions.css";

const BPVariation = (props) => {
  const options = [
    { text: "Sleep", handler: () => {props.actionProvider.handleRequest("Sleep"); props.actionProvider.handleNewMessage("Blood pressure tends to drop when you sleep, then quickly increase when you awaken. Sleep deprivation increases blood pressure")}, id: 1 },
    { text: "Respiration and Heart Rate", handler: () => {props.actionProvider.handleRequest("Respiration and Heart Rate"); props.actionProvider.handleNewMessage("Respiration and heart rate affect blood pressure.")}, id: 2 },
    { text: "Mental and Physical Activity", handler: () => {props.actionProvider.handleRequest("Mental and Physical Activity"); props.actionProvider.handleNewMessage("Mental and physical activity affect blood pressure.")}, id: 3 },
    { text: "Smoking", handler: () => {props.actionProvider.handleRequest("Smoking"); props.actionProvider.handleNewMessage("Smoking raises your blood pressure with each cigarette.")}, id: 4 },
    { text: "Waste Excretion", handler: () => {props.actionProvider.handleRequest("Waste Excretion"); props.actionProvider.handleNewMessage("Defecation or a bladder full of urine may raise blood pressure.")}, id: 5 },
    { text: "Alcohol", handler: () => {props.actionProvider.handleRequest("Alcohol"); props.actionProvider.handleNewMessage("Consuming more than two ounces of alcohol on a daily basis raises blood pressure.")}, id: 6 },
    { text: "Low Blood Pressure Information", handler: () => {props.actionProvider.handleRequest("Low Blood Pressure Information"); props.actionProvider.handleNewMessage("Low blood pressure is known as hypotension. Naturally low blood pressure is unlikely to cause any symptoms and is normally nothing to worry about. But if your blood pressure drops too low, it can restrict the amount of blood flowing to your brain and other vital organs, which can cause unsteadiness, dizziness or fainting.")}, id: 7 },

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

export default BPVariation;
