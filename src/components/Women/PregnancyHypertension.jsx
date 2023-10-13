import React from "react";

import "../LearningOptions/LearningOptions.css";

const PregnancyHypertension = (props) => {
  const options = [
    { text: "Pregnancy and Hypertension", handler: () => {props.actionProvider.handleRequest("Pregnancy and Hypertension"); props.actionProvider.handleNewMessage("Pregnancy and Hypertension")}, id: 1 },
    { text: "BP drugs to avoid in pregnancy", handler: () => {props.actionProvider.handleRequest("BP drugs to avoid in pregnancy"); props.actionProvider.handleNewMessage("BP drugs to avoid in pregnancy")}, id: 2 },
    { text: "What is Gestational Hypertension?", handler: () => {props.actionProvider.handleRequest("What is Gestational Hypertension?"); props.actionProvider.handleNewMessage("What is Gestational Hypertension?")}, id: 3 },
    { text: "What is Preeclampsia?", handler: () => {props.actionProvider.handleRequest("What is Preeclampsia?"); props.actionProvider.handleNewMessage("What is Preeclampsia?")}, id: 4 },
    { text: "How can I prevent Gestational Hypertension?", handler: () => {props.actionProvider.handleRequest("How can I prevent Gestational Hypertension?"); props.actionProvider.handleNewMessage("How can I prevent Gestational Hypertension?")}, id: 5 },

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

export default PregnancyHypertension;
