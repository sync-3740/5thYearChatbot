import React from "react";

import "../LearningOptions/LearningOptions.css";

const GeneralBP = (props) => {
  const options = [
    { text: "Systolic BP", handler: () => {props.actionProvider.handleRequest("Systolic BP"); props.actionProvider.handleNewMessage("Systole is the rhythmic contraction of your heart muscle when it pumps blood."); props.actionProvider.handleNewMessage("During systole the chamber of the heart called left ventricle which is filled with blood contracts and pumps blood from the heart to the rest of the body.")}, id: 1 },
    { text: "Diastolic BP", handler: () => {props.actionProvider.handleRequest("Diastolic BP"); props.actionProvider.handleNewMessage("Diastole is the period between heart beats. This is the time when the ventricle refills with blood from the lungs."); props.actionProvider.handleNewMessage("Diastolic blood pressure is the lowest level your blood pressure reaches as your heart relaxes between beats.")}, id: 2 },
    { text: "BP Variation", handler: () => {props.actionProvider.handleRequest("BP Variation"); props.actionProvider.handleNewWidgetMessage("Blood pressure is one of the most variable measurement, and this variability is due to a variety of reasons. Click on them below to find out more", "BPVariation")}, id: 3 },
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

export default GeneralBP;
