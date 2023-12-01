import React from "react";

import "../LearningOptions/LearningOptions.css";

const QuestionTemplate = (props) => {

  const optionsMarkup = props.payload['answer_options'].map((option, index) => (
    <button
      className="learning-option-button"
      key={index}
      onClick={() => props.actionProvider.handleAnswer(option, props.payload)}
    >
      {option}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default QuestionTemplate;
