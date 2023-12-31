import React from "react";

import "../LearningOptions/LearningOptions.css";

const MedicationOptions = (props) => {
  const options = [
    { text: "ACE Inhibitors", handler: () => {props.actionProvider.handleRequest("ACE Inhibitors"); props.actionProvider.handleNewWidgetMessage("ACE Inhibitors","ACEInhibitors")}, id: 1 },
    { text: "Angiotensin Receptor Blockers", handler: () => {props.actionProvider.handleRequest("Angiotensin Receptor Blockers"); props.actionProvider.handleNewWidgetMessage("Angiotensin Receptor Blockers", "Angiotensin")}, id: 2 },
    { text: "Calcium Channel Blockers", handler: () => {props.actionProvider.handleRequest("Calcium Channel Blockers"); props.actionProvider.handleNewWidgetMessage("Calcium Channel Blockers", "CalciumChannel")}, id: 3 },
    { text: "Diuretics", handler: () => {props.actionProvider.handleRequest("Diuretics"); props.actionProvider.handleNewWidgetMessage("Diuretics", "Diuretics")}, id: 4 },
    { text: "Beta Blockers", handler: () => {props.actionProvider.handleRequest("Beta Blockers"); props.actionProvider.handleNewWidgetMessage("Beta Blockers", "BetaBlockers")}, id: 5 },
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

export default MedicationOptions;
