import React from "react";

import "../LearningOptions/LearningOptions.css";

const CholesterolTypes = (props) => {
  const options = [
    { text: "About LDL cholesterol", handler: () => {props.actionProvider.handleRequest("About LDL cholesterol"); props.actionProvider.handleNewMessage("Low-density lipoprotein (LDL) carries cholesterol from the liver to the tissues, including to the walls of your arteries. As cholesterol builds up inside the artery walls, the arteries get narrower. Your arteries also get stiffer and they lose their ability to expand and contract along with the changing pressure of the blood being pumped from your heart. Because there is less space for blood to move through, blood pressure increases.")}, id: 5 },
    { text: "About HDL cholesterol", handler: () => {props.actionProvider.handleRequest("About HDL cholesterol"); props.actionProvider.handleNewMessage("High-density lipoprotein (HDL) helps to clear excessive cholesterol from the blood and carries it to the liver where it can be broken down and removed from the body, so it is called 'good cholesterol'.")}, id: 6 },
    { text: "About Atherosclerosis", handler: () => {props.actionProvider.handleRequest("About Atherosclerosis"); props.actionProvider.handleNewMessage("Fat build-up in the arteries is atherosclerosis. Atherosclerosis literally means “hardening of the arteries”, making it harder for blood to travel to the different organs, including the heart and brain. Because LDL is a big contributor to atherosclerosis, it is called 'bad cholesterol'.")}, id: 7 },
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

export default CholesterolTypes;
