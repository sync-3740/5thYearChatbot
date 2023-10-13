import React from "react";

import "../LearningOptions/LearningOptions.css";

const BPVariation = (props) => {
  const options = [
    { text: "Sleep", handler: () => {props.actionProvider.handleRequest("Sleep"); props.actionProvider.handleNewMessage("Sleep")}, id: 1 },
    { text: "Respiration and Heart Rate", handler: () => {props.actionProvider.handleRequest("Respiration and Heart Rate"); props.actionProvider.handleNewMessage("Respiration and Heart Rate")}, id: 2 },
    { text: "Mental and Physical Activity", handler: () => {props.actionProvider.handleRequest("Mental and Physical Activity"); props.actionProvider.handleNewMessage("Mental and Physical Activity")}, id: 3 },
    { text: "Smoking", handler: () => {props.actionProvider.handleRequest("Smoking"); props.actionProvider.handleNewMessage("Smoking")}, id: 4 },
    { text: "Waste Excretion", handler: () => {props.actionProvider.handleRequest("Waste Excretion"); props.actionProvider.handleNewMessage("Waste Excretion")}, id: 5 },
    { text: "Alcohol", handler: () => {props.actionProvider.handleRequest("Alcohol"); props.actionProvider.handleNewMessage("Alcohol")}, id: 6 },
    { text: "Low Blood Pressure Information", handler: () => {props.actionProvider.handleRequest("Low Blood Pressure Information"); props.actionProvider.handleNewMessage("Low Blood Pressure Information")}, id: 7 },

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
