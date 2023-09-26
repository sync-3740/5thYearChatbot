import React from "react";

import "../LearningOptions/LearningOptions.css";

const LifestyleOptions = (props) => {
  const options = [
    { text: "Physical Activity", handler: () => {props.actionProvider.handleRequest("Physical Activity"); props.actionProvider.handleNewWidgetMessage("Exercising regularly is an important part of a healthy lifestyle. In addition to helping with your weight, boosting your mental health, and even helping you sleep better, exercise also reduces your blood pressure and can reduce your risk of heart and circulatory diseases by up to 35%! Everyone can benefit from exercise, be it aerobic, resistance or flexibility exercise.", "ExerciseOptions")}, id: 1 },
    { text: "Diet", handler: () => {props.actionProvider.handleRequest("Diet"); props.actionProvider.handleNewMessage("A healthy and balanced diet can help you lower and control your blood pressure, help with weight management, and decrease your risk of developing heart conditions. Try to make sustainable healthy changes to your diet. Crash diets aimed at losing weight rarely lead to permanent results and don't help you build healthy habits.")}, id: 2 },
    { text: "Salt", handler: () => {props.actionProvider.handleRequest("Salt"); props.actionProvider.handleNewMessage("Salt, which is sometimes also called sodium, is necessary in your diet in small amounts. Too much of it, however, can affect your body and increase your blood pressure. Adults should eat no more than 6 grams of salt a day, which about one level teaspoon.")}, id: 3 },
    { text: "Fats", handler: () => {props.actionProvider.handleRequest("Fats"); props.actionProvider.handleNewMessage("Alongside being present in commercially processed foods, fats are naturally found in lots of the plant- and animal-based foods that we eat.  Fats are good for the body in small amounts, as they are a great source of energy and our bodies need them to function properly. However, too many saturated fats can increase the risk of having heart attacks and strokes.")}, id: 4 },
    { text: "Alcohol", handler: () => {props.actionProvider.handleRequest("Alcohol"); props.actionProvider.handleNewMessage("Drinking more than the recommended limit (14 units per week) can have serious effects on your health. Having more than three drinks in one sitting temporarily increases your blood pressure, but repeated binge drinking can lead to long-term increases and hypertension. People who have more than two drinks per day have an increased risk of high blood pressure compared with non-drinkers. You could also be consuming more calories than you think from drinking alcohol alone.")}, id: 5 },
    { text: "Smoking", handler: () => {props.actionProvider.handleRequest("Smoking"); props.actionProvider.handleNewWidgetMessage("It’s widely known that smoking is very damaging to our health. Smoking causes about 90% of lung cancers, and it also causes cancer in many other parts of the body, including the mouth, throat, bladder, liver, stomach, and pancreas. But how does smoking damage your heart and circulation?", "SmokingOptions")}, id: 6 },
    { text: "Sleep", handler: () => {props.actionProvider.handleRequest("Sleep"); props.actionProvider.handleNewMessage("Consistently getting less sleep can increase your risk of high blood pressure, heart disease, and even gaining weight. When you are tired you might be more likely to reach for sugary snacks throughout the day and to skip exercise. Lack of sleep can also affect the hormones in your body that make you hungry and keep you feeling full. Aim for 6-8 hours of sleep each night to maintain a healthy lifestyle and heart. It has even been found that having a couple of naps each week could decrease your risk of heart attacks and strokes.")}, id: 7 },
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

export default LifestyleOptions;
