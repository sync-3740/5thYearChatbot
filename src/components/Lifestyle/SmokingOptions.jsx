import React from "react";

import "../LearningOptions/LearningOptions.css";

const SmokingOptions = (props) => {
  const options = [
    { text: "Short Term Effects", handler: () => {props.actionProvider.handleRequest("Short Term Effects"); props.actionProvider.handleNewMessage("Smoking has immediate effects on your heart and circulation: smoking a cigarette instantly increases your heart rate and blood pressure.")}, id: 1 },
    { text: "Long Term Effects", handler: () => {props.actionProvider.handleRequest("Long Term Effects"); props.actionProvider.handleNewMessage("Chemicals in cigarette smoke narrow and clog your arteries. This is because the chemicals make the walls more sticky and fatty material sticks to them more easily. This fatty material, also known as plaque, builds up and narrows the space in your arteries that blood can flow through."); props.actionProvider.handleNewMessage("The narrower your arteries get, the less oxygen can be delivered to the rest of your body. As the arteries continue to clog up, your risk of having a heart attack or stroke increases - especially if the arteries carrying blood to your heart and brain get clogged. The risk of blood clots is also increased.")}, id: 2 },
    { text: "Lung Problems from Smoking", handler: () => {props.actionProvider.handleRequest("Lung Problems from Smoking"); props.actionProvider.handleNewMessage("Smoking is most commonly associated with diseases that directly affect the lungs, such as Lung cancer, Chronic obstructive pulmonary disease (COPD), which incorporates bronchitis and emphysema, Pneumonia. Smoking can also worsen lengthen the symptoms of other conditions that affect your lungs, such as asthma, or respiratory tract infections like COVID-19 or even the common cold.")}, id: 3 },
    { text: "Heart Problems from Smoking", handler: () => {props.actionProvider.handleRequest("Heart Problems from Smoking"); props.actionProvider.handleNewMessage("Smoking damages your heart and your blood circulation, increasing your risk of developing conditions such as Heart attacks, Strokes, Coronary heart disease, Peripheral vascular disease (damaged blood vessels).")}, id: 4 },
    { text: "Fertility Problems from Smoking", handler: () => {props.actionProvider.handleRequest("Fertility Problems from Smoking"); props.actionProvider.handleNewMessage("Smoking can reduce the fertility of both men and women. In men, smoking can cause impotence because it limits the blood supply to the penis. Smoking during pregnancy increases the risk of complications such as Miscarriage, Premature (early) birth, A low birth-weight baby, Stillbirth.")}, id: 5 },
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

export default SmokingOptions;
