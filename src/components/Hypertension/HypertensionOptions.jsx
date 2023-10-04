import React from "react";

import "../LearningOptions/LearningOptions.css";

const HypertensionOptions = (props) => {
  const options = [
    { text: "What is hypertension?", handler: () => {props.actionProvider.handleRequest("What is hypertension?"); props.actionProvider.handleNewMessage("Hypertension is a blood pressure above 140/90 mmHg. Around a third of all adults in Scotland have hypertension, but because it does not usually have any specific symptoms many people don't know it. It is important to have your blood pressure measured by your doctor, or to monitor it at home."); props.actionProvider.handleNewVideoMessage("Even though hypertension doesn't cause any obvious symptoms, it increases your risk of developing heart and circulatory conditions, such as heart attacks or strokes.", "https://www.youtube.com/embed/NY61nitdcrE")}, id: 1 },
    { text: "What causes hypertension?", handler: () => {props.actionProvider.handleRequest("What causes hypertension?"); props.actionProvider.handleNewMessage("Most of the people with high blood pressure have primary or essential hypertension. This means their high blood pressure is not caused by an underlying disease. In most cases, there may not be one single cause, but rather several small causes which together cause a substantial risk of hypertension. These are known as risk factors, of which there are two kinds: modifiable and non-modifiable."); props.actionProvider.handleNewMessage("Modifiable risk factors are things you can change. By making changes to your lifestyle, you can significantly lower your blood pressure. Some of these changes include: Decreasing the amount of salt and fat in your diet, Doing regular physical exercise, Losing weight, Stopping smoking, Decreasing your alcohol consumption.")}, id: 2 },
    { text: "Secondary hypertension", handler: () => {props.actionProvider.handleRequest("Secondary hypertension"); props.actionProvider.handleNewMessage("Some diseases, such as kidney disease and diabetes, can lead to higher blood pressure. This is known as secondary hypertension.")}, id: 3 },
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

export default HypertensionOptions;
