import React from "react";

import "../LearningOptions/LearningOptions.css";

const BPMeasurement = (props) => {
  const options = [
    { text: "What is blood pressure measured in?", handler: () => {props.actionProvider.handleRequest("What is blood pressure measured in?"); props.actionProvider.handleNewMessage("Blood pressure is measured in millimetres of mercury, which is noted as mmHg")}, id: 1 },
    { text: "What is the procedure like?", handler: () => {props.actionProvider.handleRequest("What is the procedure like?"); props.actionProvider.handleNewMessage("The cuff is wrapped around your upper arm and inflated until it feels tight, which limits blood flow to the rest of your arm. It can cause slight discomfort, but the tightness only lasts for a couple of seconds. The cuff is then slowly deflated, which lets blood flow return to normal. The sound of blood pulsing back into the arteries is used to measure blood pressure."); props.actionProvider.handleNewMessage("If your doctor is using a manual monitor, they will listen to the sound with a stethoscope. An automatic monitor will inflate the cuff and take the blood pressure readings with just the push of a button.")}, id: 2 },
    { text: "What do the blood pressure numbers mean?", handler: () => {props.actionProvider.handleRequest("What do the blood pressure numbers mean?"); props.actionProvider.handleNewMessage("All blood pressure measurements include two numbers which are systolic blood pressure (SBP) and diastolic blood pressure (DBP). These numbers reflect the pressure against blood vessel walls when the heart contracts (SBP) and relaxes (DBP) every time it beats")}, id: 3 },
    { text: "Can you give an example of a normal blood pressure measure?", handler: () => { props.actionProvider.handleRequest("Can you give an example of a normal blood pressure measure?"); props.actionProvider.handleNewMessage("A typical blood pressure measurement may look like this: \n 120/80 mmHg, which is read as “120 over 80 millimetres of mercury”. The first number (120) is the SBP, and the second number (80) is the DBP")}, id: 4 },
    { text: "Office BP", handler: () => {props.actionProvider.handleRequest("Office BP"); props.actionProvider.handleNewMessage("Blood pressure measured in a clinical setting, like the hospital or your GP's office, is known as an office blood pressure measurement (OBPM)")}, id: 5 },
    { text: "Home BP Measurement", handler: () => {props.actionProvider.handleRequest("Home BP Measurement"); props.actionProvider.handleNewMessage("This is a method of measuring your blood pressure at home using a blood pressure monitor. \nIt is able to give us better accurate readings compared to when it is checked at the clinic or at your GP.")}, id: 6 },
    { text: "Ambulatory BP Measurement", handler: () => {props.actionProvider.handleRequest("Ambulatory BP Measurement"); props.actionProvider.handleNewMessage("This is a method of measuring your blood pressure is monitored for 24 hrs using a portable device. A small digital blood pressure monitor is attached to a belt around your waist and connected to a cuff around your upper arm")}, id: 7 },
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

export default BPMeasurement;
