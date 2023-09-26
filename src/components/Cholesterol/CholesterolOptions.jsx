import React from "react";

import "../LearningOptions/LearningOptions.css";

const CholesterolOptions = (props) => {
  const options = [
    { text: "What is cholesterol?", handler: () => {props.actionProvider.handleRequest("What is cholesterol?"); props.actionProvider.handleNewMessage("Cholesterol is a fat-like substance that is mostly made in the liver. It is carried around the body in structures called lipoproteins, which are “parcels” of fat and protein. The body needs cholesterol for its cells to function, but too much in the blood can lead to heart and blood vessel disease, which can contribute to heart attacks and strokes.")}, id: 1 },
    { text: "What is high cholesterol?", handler: () => {props.actionProvider.handleRequest("What is high cholesterol?"); props.actionProvider.handleNewMessage("When you have too much cholesterol in your blood, this is called having a 'high cholesterol'. High cholesterol does not cause symptoms, but it causes changes inside the body without you knowing by clogging up arteries. Blood tests can find out whether you have a high cholesterol.")}, id: 2 },
    { text: "Cholesterol and Diet", handler: () => {props.actionProvider.handleRequest("Cholesterol and Diet"); props.actionProvider.handleNewMessage("Eating foods high in saturated and trans-fat can raise your cholesterol by increasing the amount of LDL in the blood. The more LDL in the blood, the more cholesterol is deposited into the artery walls.")}, id: 3},
    { text: "What are the different types of cholesterol?", handler: () => {props.actionProvider.handleRequest("What are the different types of cholesterol?"); props.actionProvider.handleNewWidgetMessage("Lipoproteins can be divided into low-density lipoprotein (LDL) which contain more fat and cholesterol, and high-density lipoprotein (HDL) which contain very little cholesterol. Therefore, cholesterol is sometimes called LDL-cholesterol and HDL-cholesterol, depending on how it is transported around the body.", "CholesterolTypes")}, id: 4 },
    { text: "How do I lower my cholesterol?", handler: () => {props.actionProvider.handleRequest("How do I lower my cholesterol?"); props.actionProvider.handleNewMessage("Eating a healthy diet with less saturated fat can help to lower your cholesterol. So can taking part in regular exercise, stopping smoking and limiting alcohol intake to less than 14 units a week.")}, id: 5 },
    { text: "Cholesterol Medication?", handler: () => {props.actionProvider.handleRequest("Cholesterol Medication?"); props.actionProvider.handleNewMessage("If you have changed your lifestyle and diet and your cholesterol levels are still high, then your doctor can prescribe certain medications. Statins are the most common medication and work by reducing the amount of cholesterol the body makes.")}, id: 6 },
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
