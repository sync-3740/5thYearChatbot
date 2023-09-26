import React from "react";

import "../LearningOptions/LearningOptions.css";

const ExerciseOptions = (props) => {
  const options = [
    { text: "Aerobic Exercise", handler: () => {props.actionProvider.handleRequest("Aerobic Exercise"); props.actionProvider.handleNewMessage("Aerobic exercise means physical activities that get you out of breath. People often think about things like walking, running, cycling, or swimming. Regular aerobic exercise can help your heart health and over time you will find that you don't get out of breath as quickly as you used to.")}, id: 1 },
    { text: "Resistance Exercise", handler: () => {props.actionProvider.handleRequest("Resistance Exercise"); props.actionProvider.handleNewMessage("Resistance exercise, sometimes also called strength training, means exercises that strengthen your muscles. This can mean anything that works your muscles harder than your usual day-to-day activities: lifting weights or using cable machines at your gym, but also bodyweight exercises or training with resistance bands.")}, id: 2 },
    { text: "Flexibility Exercise", handler: () => {props.actionProvider.handleRequest("Flexibility Exercise"); props.actionProvider.handleNewMessage("Improving and maintaining your balance with exercises like yoga or pilates helps you avoid falls and injury. Stretching your muscles can also improve flexibility, which will help you move easier during other forms of exercise, as well as your daily activities.")}, id: 3 },
    { text: "How much should I exercise", handler: () => {props.actionProvider.handleRequest("How much should I exercise"); props.actionProvider.handleNewMessage("Try and aim for 150 minutes, or 2 and a half hours, of moderate intensity exercise per week. This is roughly the same as 75 minutes of intense exercise per week. It's better to exercise 20-30 minutes most days of the week, than to focus all of your exercise in a just a couple of days. This also helps you to get used to exercising regularly.")}, id: 4 },
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

export default ExerciseOptions;
