import React from "react";

import "../LearningOptions/LearningOptions.css";

const BPandMe = (props) => {
  const options = [
    { text: "Age", handler: () => {props.actionProvider.handleRequest("Age"); props.actionProvider.handleNewMessage("Age is a non modifiable factor, meaning that you don't have control over it. As you grow older your blood pressure increases, this is due to a number of reasons such as: reduction in kidney function, less ability to rid the body of salt, hardening of the arteries.")}, id: 1 },
    { text: "Sex", handler: () => {props.actionProvider.handleRequest("Sex"); props.actionProvider.handleNewMessage("Sex is a non modifiable factor, meaning that you don't have control over it. Blood pressure (BP) is generally higher in men than in women regardless of age. In young adults (ages 18 to 35), high blood pressure is more prevalent in men than women. But after women reach the age of 50 (when most women lose their estrogen through menopause or removal of their ovaries), women have a higher prevalence of high blood pressure than men.")}, id: 2 },
    { text: "Ethnicity", handler: () => {props.actionProvider.handleRequest("Ethnicity"); props.actionProvider.handleNewMessage("Ethnicity is a non modifiable factor, meaning that you don't have control over it. It is known that there is a higher prevalence of hypertension in black populations. Hypertension related complications in black populations for example end stage renal disease. Also it is known that African Americans are generally more responsive to diuretic and calcium channel blockers than to ACE inhibitors or beta blockers.")}, id: 3 },
    { text: "Obesity", handler: () => {props.actionProvider.handleRequest("Obesity"); props.actionProvider.handleNewMessage("The greater the weight gain the greater the risk of high blood pressure. People who are obese have increased cardiac output (flow of blood from the heart) and increased peripheral resistance (resistance to the passage of blood through the arteries). As a result, more blood needs to be pumped to provide nutrients to their bodies' increased tissues. Many organs, particularly the kidneys, don't accept increased blood flow, so they produce hormones to reduce it by narrowing the arteries, thus increasing peripheral resistance and blood pressure. Obese people often take in more salt than lean people, and they're more sensitive to the blood-pressure-raising effect of salt. Obesity is associated with an increase in the activity of the nervous system, which can cause narrowing of blood vessels. There has been data shown that when people with high blood pressure lose weight, their blood pressure generally decreases")}, id: 4 },
    { text: "Weight", handler: () => {props.actionProvider.handleRequest("Weight"); props.actionProvider.handleNewVideoMessage("For every 10-pound weight gain, the systolic blood pressure goes up 4 to 5 millimeters of mercury. Therefore, you don't have to be overweight or obese for weight gain to raise your blood pressure. Even a small weight loss can help manage or prevent high blood pressure.", "https://www.youtube.com/embed/gaaTW0Elxgg")}, id: 5 },
    { text: "Waist Circumference", handler: () => {props.actionProvider.handleRequest("Waist Circumference"); props.actionProvider.handleNewVideoMessage("Central obesity where there is fat around the waist has been positively correlated with high blood pressure in several populations.", "https://www.youtube.com/embed/t4LYqIxWHQQ")}, id: 6 },
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

export default BPandMe;
