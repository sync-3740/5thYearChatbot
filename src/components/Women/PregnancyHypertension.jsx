import React from "react";

import "../LearningOptions/LearningOptions.css";

const PregnancyHypertension = (props) => {
  const options = [
    { text: "Pregnancy and Hypertension", handler: () => {props.actionProvider.handleRequest("Pregnancy and Hypertension"); props.actionProvider.handleNewMessage("High blood pressure can be dangerous for both mother and baby. If you are taking medication and want to become pregnant, first consult your doctor. Also keep in mind that if you already have high blood pressure, pregnancy could make it more severe."); props.actionProvider.handleNewMessage("Each woman is different, and your doctor will give you recommendations for your situation. Most women with high blood pressure should follow the following precautions before becoming pregnant. Get your blood pressure under control. Watch your diet and limit sodium. Be active and exercise. Regular physical activity will help you control your blood pressure and improve your physical condition. If you are overweight, lose weight to help you have a safer pregnancy and a healthier baby. If you smoke, quit. If you drink alcohol, stop. If you are on medication for high blood pressure (or any other condition), discuss all of your medications, including over-the-counter drugs and supplements, with all of your doctors. Never stop taking a prescription medication without first consulting the doctor who prescribed it.")}, id: 1 },
    { text: "BP drugs to avoid in pregnancy", handler: () => {props.actionProvider.handleRequest("BP drugs to avoid in pregnancy"); props.actionProvider.handleNewMessage("Blood pressure medicines that belong to 'ACE inhibitor' or 'ARB' class are not to be taken if you are pregnant, breast feeding or planning to get pregnant. Women who are taking ACE inhibitors or ARBs for high blood pressure should not become pregnant while on this class of drugs. If you are taking an ACE inhibitor or an ARB and think you might be pregnant, see your doctor immediately for assessment and advice. it is also important to read the drug information leaflet if you were to take a drug while you are pregnant.")}, id: 2 },
    { text: "What is Gestational Hypertension?", handler: () => {props.actionProvider.handleRequest("What is Gestational Hypertension?"); props.actionProvider.handleNewMessage("Some women who have never had high blood pressure may develop it while they are pregnant. When this happens after 20 weeks of pregnancy, it is known as gestational hypertension. This high blood pressure usually disappears after delivery. If the mother is not treated during pregnancy, high blood pressure can be dangerous to both the mother and baby. That is why doctors usually keep a close watch on blood pressure during pregnancy.")}, id: 3 },
    { text: "What is Preeclampsia?", handler: () => {props.actionProvider.handleRequest("What is Preeclampsia?"); props.actionProvider.handleNewMessage("Preeclampsia (sometimes known as toxemia of pregnancy) is a condition, closely related to gestational hypertension, that typically begins after the 20th week of pregnancy. It is usually characterized by high blood pressure and elevated protein in the urine. Delivery of the baby is the only cure for preeclampsia.")}, id: 4 },
    { text: "How can I prevent Gestational Hypertension?", handler: () => {props.actionProvider.handleRequest("How can I prevent Gestational Hypertension?"); props.actionProvider.handleNewMessage("There is no proven way to prevent gestational hypertension or preeclampsia and no test that will predict or diagnose these conditions. Only regular visits to your doctor will confirm that you're having a safe pregnancy. Your doctor will track your blood pressure and check the level of protein in your urine.")}, id: 5 },

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

export default PregnancyHypertension;
