import React from "react";

import "../LearningOptions/LearningOptions.css";

const WomenOptions = (props) => {
  const options = [
    { text: "Oral Contraceptives", handler: () => {props.actionProvider.handleRequest("Oral Contraceptives"); props.actionProvider.handleNewMessage("Oral Contraceptive Pills (OCPs) may increase blood pressure in some women. Evidence suggests that combined oral contraceptive pill(COC) may cause a small increase in BP in some women. Severe hypertension may be induced by the COC in a small minority of women. But subsides when the contraceptive is discontinued."); props.actionProvider.handleNewMessage("Progestogen only contraceptive pills (POP) do not appear to induce any increase in blood pressure.")}, id: 1 },
    { text: "Pregnancy", handler: () => {props.actionProvider.handleRequest("Pregnancy"); props.actionProvider.handleNewWidgetMessage("Fantastic, what do you want to know about pregnancy and hypertension?", "PregnancyHypertension")}, id: 2 },
    { text: "Menopause", handler: () => {props.actionProvider.handleRequest("Menopause"); props.actionProvider.handleNewMessage("Blood pressure generally increases after menopause. Menopause-related hormonal changes can lead to weight gain and make your blood pressure more reactive to salt in your diet which, in turn, can lead to higher blood pressure."); props.actionProvider.handleNewMessage("Some types of hormone therapy for menopause also may contribute to increases in blood pressure. Taking estrogenic hormones doesn't seem to elevate blood pressure or make the postmenopausal woman more sensitive to salt or stress. For this reason, postmenopausal women who have high blood pressure may be given estrogens.")}, id: 3 },
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

export default WomenOptions;
