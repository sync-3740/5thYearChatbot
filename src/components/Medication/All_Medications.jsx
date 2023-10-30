import React from "react";

import "../LearningOptions/LearningOptions.css";

const ACEInhibitors = (props) => {
  const options = [
    { text: "What are ACE Inhibitors?", handler: () => {props.actionProvider.handleRequest("What are ACE Inhibitors?"); props.actionProvider.handleNewVideoMessage("What are ACE Inhibitors?", "https://www.youtube.com/embed/xIlaQuRaZmk")}, id: 1 },
    { text: "Warnings/Cautions", handler: () => {props.actionProvider.handleRequest("Warnings/Cautions"); props.actionProvider.handleNewMessage("ACE Inhibitors Warnings/Cautions")}, id: 2 },
    { text: "How do they work?", handler: () => {props.actionProvider.handleRequest("How do they work?"); props.actionProvider.handleNewMessage("How do ACE Inhibitors work?")}, id: 3 },
    { text: "What do I need to tell my doctor before taking these?", handler: () => {props.actionProvider.handleRequest("What do I need to tell my doctor before taking these?"); props.actionProvider.handleNewMessage("What do I need to tell my doctor before taking ACE Inhibitors?")}, id: 4 },
    { text: "What should I be aware of while taking these?", handler: () => {props.actionProvider.handleRequest("What should I be aware of while taking these?"); props.actionProvider.handleNewMessage("What should I be aware of while taking ACE Inhibitors?")}, id: 5 },
    { text: "Side Effects", handler: () => {props.actionProvider.handleRequest("Side Effects"); props.actionProvider.handleNewMessage("Side Effects of ACE Inhibitors")}, id: 6 },
    { text: "How is this drug best taken?", handler: () => {props.actionProvider.handleRequest("How is this drug best taken?"); props.actionProvider.handleNewMessage("How are ACE Inhibitors best taken?")}, id: 7 },
    { text: "What do I do if I miss a dose?", handler: () => {props.actionProvider.handleRequest("What do I do if I miss a dose?"); props.actionProvider.handleNewMessage("What do I do if I miss a dose of ACE Inhibitors?")}, id: 8 },
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

const Angiotensin = (props) => {
  const options = [
    { text: "What are Angiotensin Receptor Blockers (ARBs)?", handler: () => {props.actionProvider.handleRequest("What are Angiotensin Receptor Blockers (ARBs)?"); props.actionProvider.handleNewMessage("What are Angiotensin Receptor Blockers (ARBs)?")}, id: 1 },
    { text: "Warnings/Cautions", handler: () => {props.actionProvider.handleRequest("Warnings/Cautions"); props.actionProvider.handleNewMessage("ARBs Warnings/Cautions")}, id: 2 },
    { text: "How do they work?", handler: () => {props.actionProvider.handleRequest("How do they work?"); props.actionProvider.handleNewMessage("How do ARBs work?")}, id: 3 },
    { text: "What do I need to tell my doctor before taking these?", handler: () => {props.actionProvider.handleRequest("What do I need to tell my doctor before taking these?"); props.actionProvider.handleNewMessage("What do I need to tell my doctor before taking ARBs?")}, id: 4 },
    { text: "What should I be aware of while taking these?", handler: () => {props.actionProvider.handleRequest("What should I be aware of while taking these?"); props.actionProvider.handleNewMessage("What should I be aware of while taking ARBs?")}, id: 5 },
    { text: "Side Effects", handler: () => {props.actionProvider.handleRequest("Side Effects"); props.actionProvider.handleNewMessage("Side Effects of ARBs")}, id: 6 },
    { text: "How is this drug best taken?", handler: () => {props.actionProvider.handleRequest("How is this drug best taken?"); props.actionProvider.handleNewMessage("How are ARBs best taken?")}, id: 7 },
    { text: "What do I do if I miss a dose?", handler: () => {props.actionProvider.handleRequest("What do I do if I miss a dose?"); props.actionProvider.handleNewMessage("What do I do if I miss a dose of ARBs?")}, id: 8 },
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

const CalciumChannel = (props) => {
  const options = [
    { text: "What are Calcium Channel Blockers (CCBs)?", handler: () => {props.actionProvider.handleRequest("What are Calcium Channel Blockers (CCBs)?"); props.actionProvider.handleNewMessage("What are Calcium Channel Blockers (CCBs)?")}, id: 1 },
    { text: "How do they work?", handler: () => {props.actionProvider.handleRequest("How do they work?"); props.actionProvider.handleNewMessage("How do CCBs work?")}, id: 2 },
    { text: "What do I need to tell my doctor before taking these?", handler: () => {props.actionProvider.handleRequest("What do I need to tell my doctor before taking these?"); props.actionProvider.handleNewMessage("What do I need to tell my doctor before taking CCBs?")}, id: 3 },
    { text: "What should I be aware of while taking these?", handler: () => {props.actionProvider.handleRequest("What should I be aware of while taking these?"); props.actionProvider.handleNewMessage("What should I be aware of while taking CCBs?")}, id: 4 },
    { text: "Side Effects", handler: () => {props.actionProvider.handleRequest("Side Effects"); props.actionProvider.handleNewMessage("Side Effects of CCBs")}, id: 5 },
    { text: "How is this drug best taken?", handler: () => {props.actionProvider.handleRequest("How is this drug best taken?"); props.actionProvider.handleNewMessage("How are CCBs best taken?")}, id: 6 },
    { text: "What do I do if I miss a dose?", handler: () => {props.actionProvider.handleRequest("What do I do if I miss a dose?"); props.actionProvider.handleNewMessage("What do I do if I miss a dose of CCBs?")}, id: 7 },
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

const Diuretics = (props) => {
  const options = [
    { text: "What are Diuretics?", handler: () => {props.actionProvider.handleRequest("What are Diuretics?"); props.actionProvider.handleNewMessage("What are Diuretics?")}, id: 1 },
    { text: "Warnings/Cautions", handler: () => {props.actionProvider.handleRequest("Warnings/Cautions"); props.actionProvider.handleNewMessage("Diuretics Warnings/Cautions")}, id: 2 },
    { text: "How do they work?", handler: () => {props.actionProvider.handleRequest("How do they work?"); props.actionProvider.handleNewMessage("How do Diuretics work?")}, id: 3 },
    { text: "The types of Diuretics?", handler: () => {props.actionProvider.handleRequest("The types of Diuretics?"); props.actionProvider.handleNewWidgetMessage("The types of Diuretics?", "DiureticsOptions")}, id: 4 },
    { text: "What do I need to tell my doctor before taking these?", handler: () => {props.actionProvider.handleRequest("What do I need to tell my doctor before taking these?"); props.actionProvider.handleNewMessage("What do I need to tell my doctor before taking Diuretics?")}, id: 5 },
    { text: "What should I be aware of while taking these?", handler: () => {props.actionProvider.handleRequest("What should I be aware of while taking these?"); props.actionProvider.handleNewMessage("What should I be aware of while taking Diuretics?")}, id: 6 },
    { text: "Side Effects", handler: () => {props.actionProvider.handleRequest("Side Effects"); props.actionProvider.handleNewMessage("Side Effects of Diuretics")}, id: 7 },
    { text: "How is this drug best taken?", handler: () => {props.actionProvider.handleRequest("How is this drug best taken?"); props.actionProvider.handleNewMessage("How are Diuretics best taken?")}, id: 8 },
    { text: "What do I do if I miss a dose?", handler: () => {props.actionProvider.handleRequest("What do I do if I miss a dose?"); props.actionProvider.handleNewMessage("What do I do if I miss a dose of Diuretics?")}, id: 9 },
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

const DiureticsOptions = (props) => {
  const options = [
    { text: "Thiazide Diuretics", handler: () => {props.actionProvider.handleRequest("Thiazide Diuretics"); props.actionProvider.handleNewMessage("Thiazide Diuretics")}, id: 1 },
    { text: "Thiazide-like Diuretics", handler: () => {props.actionProvider.handleRequest("Thiazide-like Diuretics"); props.actionProvider.handleNewMessage("Thiazide-like Diuretics")}, id: 2 },
    { text: "Loop Diuretics", handler: () => {props.actionProvider.handleRequest("Loop Diuretics"); props.actionProvider.handleNewMessage("Loop Diuretics")}, id: 3 },
    { text: "Potassium-sparing Diuretics", handler: () => {props.actionProvider.handleRequest("Potassium-sparing Diuretics"); props.actionProvider.handleNewMessage("Potassium-sparing Diuretics")}, id: 4 },
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

const BetaBlockers = (props) => {
  const options = [
    { text: "What are Beta Blockers?", handler: () => {props.actionProvider.handleRequest("What are Beta Blockers?"); props.actionProvider.handleNewMessage("What are Beta Blockers?")}, id: 1 },
    { text: "Warnings/Cautions", handler: () => {props.actionProvider.handleRequest("Warnings/Cautions"); props.actionProvider.handleNewMessage("Beta Blockers Warnings/Cautions")}, id: 2 },
    { text: "How do they work?", handler: () => {props.actionProvider.handleRequest("How do they work?"); props.actionProvider.handleNewMessage("How do Beta Blockers work?")}, id: 3 },
    { text: "What do I need to tell my doctor before taking these?", handler: () => {props.actionProvider.handleRequest("What do I need to tell my doctor before taking these?"); props.actionProvider.handleNewMessage("What do I need to tell my doctor before taking Beta Blockers?")}, id: 4 },
    { text: "What should I be aware of while taking these?", handler: () => {props.actionProvider.handleRequest("What should I be aware of while taking these?"); props.actionProvider.handleNewMessage("What should I be aware of while taking Beta Blockers?")}, id: 5 },
    { text: "Side Effects", handler: () => {props.actionProvider.handleRequest("Side Effects"); props.actionProvider.handleNewMessage("Side Effects of Beta Blockers")}, id: 6 },
    { text: "How is this drug best taken?", handler: () => {props.actionProvider.handleRequest("How is this drug best taken?"); props.actionProvider.handleNewMessage("How are Beta Blockers best taken?")}, id: 7 },
    { text: "What do I do if I miss a dose?", handler: () => {props.actionProvider.handleRequest("What do I do if I miss a dose?"); props.actionProvider.handleNewMessage("What do I do if I miss a dose of Beta Blockers?")}, id: 8 },
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

export {ACEInhibitors, Angiotensin, CalciumChannel, Diuretics, DiureticsOptions, BetaBlockers};
