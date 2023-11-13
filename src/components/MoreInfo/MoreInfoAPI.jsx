import React from "react";

import "../LearningOptions/LearningOptions.css";

const MoreInfoAPI = (props) => {
  const options = [
    { text: "More Information", handler: () => {props.actionProvider.handleRequest("More Information"); props.actionProvider.handleNewExtraSummaryMessage(props.payload)}, id: 1 },
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

export default MoreInfoAPI;