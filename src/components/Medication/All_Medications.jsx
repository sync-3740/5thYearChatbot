import React from "react";

import "../LearningOptions/LearningOptions.css";

const ACEInhibitors = (props) => {
  const options = [
    { text: "What are ACE Inhibitors?", handler: () => {props.actionProvider.handleRequest("What are ACE Inhibitors?"); props.actionProvider.handleNewMessage("ACE inhibitors are commonly used to treat high blood pressure. They are also used to treat other conditions, such as heart failure, diabetes, kidney disease, and can be given after a heart attack to protect the heart. ACE inhibitors are sometimes used together with other antihypertensives, like calcium channel blockers or diuretics.")}, id: 1 },
    { text: "Warnings/Cautions", handler: () => {props.actionProvider.handleRequest("Warnings/Cautions"); props.actionProvider.handleNewMessage("Do not take ACE inhibitors if you are pregnant. ACE inhibitors are known to cause birth defects or loss of the unborn baby. If you are pregnant or plan to get pregnant speak to your doctor about receiving an alternative medication.")}, id: 2 },
    { text: "How do they work?", handler: () => {props.actionProvider.handleRequest("How do they work?"); props.actionProvider.handleNewMessage("ACE inhibitors reduce the activity of an enzyme called angiotensin-converting enzyme (ACE). ACE creates a hormone, angiotensin II. Angiotensin II constricts the blood vessels, which makes them narrower and increases blood pressure. Angiotensin II also increases the reabsorption of water in the kidneys, which increases the volume of blood in the body. This increases blood pressure further. By reducing the action of ACE, ACE inhibitors reduce the amount of angiotensin II and, therefore, also the blood pressure increase caused by angiotensin II.")}, id: 3 },
    { text: "What do I need to tell my doctor before taking these?", handler: () => {props.actionProvider.handleRequest("What do I need to tell my doctor before taking these?"); props.actionProvider.handleNewMessage("Bring a list of your medications to your doctor to ensure that none of them interfere with ACE inhibitors. Also tell your doctor if you have previously had an allergic reaction to ACE inhibitors (swelling of the lips, eyes, throat, or neck). If you have previously tried ACE inhibitors and they had no effect on your blood pressure, it is important to tell your doctor this as well.")}, id: 4 },
    { text: "What should I be aware of while taking these?", handler: () => {props.actionProvider.handleRequest("What should I be aware of while taking these?"); props.actionProvider.handleNewMessage("Your kidney function will be monitored after starting an ACE inhibitor. You should check with your doctor before taking over-the-counter anti-inflammatory medications, like ibuprofen or naproxen.")}, id: 5 },
    { text: "Side Effects", handler: () => {props.actionProvider.handleRequest("Side Effects"); props.actionProvider.handleNewMessage("You might develop a dry, persistent cough when taking ACE inhibitors. This is a common but irritating side effect, so speak to your doctor about trying a different blood pressure medication."); props.actionProvider.handleNewMessage("ACE inhibitors may also cause rarer and more severe side effects. If you experience any of the following after beginning your ACE inhibitor treatment, contact your doctor immediately. Severe allergic reaction, Swelling of the lips, tongue, or throat. As well as this an unusually fast heartbeat, dizziness and confusion, inability to urinate, a change in urination, or blood in the urine could be signs of a kidney problem. A bad stomach-ache, nausea, or throwing up, dark urine, light coloured stool, fatigue, yellow skin or eyes, throwing up, or lack of appetite could be signs of a liver problem.")}, id: 6 },
    { text: "How is this drug best taken?", handler: () => {props.actionProvider.handleRequest("How is this drug best taken?"); props.actionProvider.handleNewMessage("Take the medication as prescribed by your doctors. This is usually either once a day (mornings) or twice a day (mornings and evenings).")}, id: 7 },
    { text: "What do I do if I miss a dose?", handler: () => {props.actionProvider.handleRequest("What do I do if I miss a dose?"); props.actionProvider.handleNewMessage("Try not to miss a dose, but if you do, take your missed dose as soon as you remember. If you remember your missed dose close to your next dose, do not take two doses - just take the next dose as usual.")}, id: 8 },
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
    { text: "What are Angiotensin Receptor Blockers (ARBs)?", handler: () => {props.actionProvider.handleRequest("What are Angiotensin Receptor Blockers (ARBs)?"); props.actionProvider.handleNewMessage("ARBs are commonly used to treat high blood pressure. They are also used to treat other conditions, such as heart failure, diabetes, kidney disease, and can be given after a heart attack to protect the heart. ARBs are sometimes used together with other antihypertensives, like calcium channel blockers or diuretics. ARBs work in a similar way to ACE inhibitors and are usually recommended if ACE inhibitors cause side effects.")}, id: 1 },
    { text: "Warnings/Cautions", handler: () => {props.actionProvider.handleRequest("Warnings/Cautions"); props.actionProvider.handleNewMessage("Do not take ARBs if you are pregnant. ARBs are known to cause birth defects or loss of the unborn baby. If you are pregnant or plan to get pregnant speak to your doctor about receiving an alternative medication.")}, id: 2 },
    { text: "How do they work?", handler: () => {props.actionProvider.handleRequest("How do they work?"); props.actionProvider.handleNewMessage("Angiotensin II receptor blockers (ARBs) work by blocking the action of a hormone called angiotensin II. Angiotensin II binds to specific receptors in the body that are known as angiotensin II receptor type 1 (AT1). When angiotensin II binds to the AT1 receptor in the heart, blood vessels, and kidneys, it narrows the blood vessels and makes the body retain salt and water. Blood pressure increases because there is a larger volume of blood (water retention) moving through a smaller space (narrower blood vessels). ARBs block the AT1 receptors so angiotensin II can't bind to it, which reduces blood pressure.")}, id: 3 },
    { text: "What do I need to tell my doctor before taking these?", handler: () => {props.actionProvider.handleRequest("What do I need to tell my doctor before taking these?"); props.actionProvider.handleNewMessage("Bring a list of your medications to your doctor to ensure that none of them interfere with ARBs. If you are pregnant or planning a pregnancy, do not take this drug. Tell your doctor if you have previously had an allergic reaction to ARBs (swelling of the lips, eyes, throat, or neck). If you have previously tried ARBs and they had no effect on your blood pressure, it is important to tell your doctor this as well.")}, id: 4 },
    { text: "What should I be aware of while taking these?", handler: () => {props.actionProvider.handleRequest("What should I be aware of while taking these?"); props.actionProvider.handleNewMessage("If you have a cough due to an ACE inhibitor, an ARB can be given as an alternative medication. It is recommended to avoid taking both ARBs and ACE inhibitors. This can cause kidney problems and increase the levels of potassium in the blood. High blood potassium can lead to abnormally heart rhythms (arrhythmia) which could be fatal.")}, id: 5 },
    { text: "Side Effects", handler: () => {props.actionProvider.handleRequest("Side Effects"); props.actionProvider.handleNewMessage("ARBs tend to be well tolerated, but can cause dizziness, headaches, cold or flu-like symptoms, and fatigue. These side effects often improve after a few days as your body gets used to the medication."); props.actionProvider.handleNewMessage("ARBs may also cause rarer and more severe side effects. If you experience any of the following after beginning your ARB treatment, contact your doctor immediately. Severe allergic reaction, Swelling of the lips, tongue, or throat. As well as this unusually fast heartbeat, dizziness, and confusion, inability to urinate, a change in urination, or blood in the urine could be signs of a kidney problem. Also, a bad stomach-ache, nausea, or throwing up, dark urine, light coloured stool, fatigue, yellow skin or eyes, throwing up, or lack of appetite could be signs of a liver problem."); props.actionProvider.handleNewMessage("If you have severe diarrhoea and vomiting, continuing your ARB treatment can make you dehydrated, which affects your kidneys. Please speak to your doctor if this occurs.")}, id: 6 },
    { text: "How is this drug best taken?", handler: () => {props.actionProvider.handleRequest("How is this drug best taken?"); props.actionProvider.handleNewMessage("Take the medication as prescribed by your healthcare provider. It is normally taken once in the morning.")}, id: 7 },
    { text: "What do I do if I miss a dose?", handler: () => {props.actionProvider.handleRequest("What do I do if I miss a dose?"); props.actionProvider.handleNewMessage("Try not to miss a dose, but if you do, take your missed dose as soon as you remember. If you remember your missed dose close to your next dose, do not take two doses - just take the next dose as usual.")}, id: 8 },
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
    { text: "What are Calcium Channel Blockers (CCBs)?", handler: () => {props.actionProvider.handleRequest("What are Calcium Channel Blockers (CCBs)?"); props.actionProvider.handleNewMessage("There are two types of calcium channel blockers (CCBs): dihydropyridines and non-dihydropyridines. The dihydropyridine class of CCBs (listed in the table above) are used to relax blood vessels and help with high blood pressure. Non-dihydropyridine CCBs (drugs like diltiazem or verapamil) are used more commonly to treat abnormal heart rhythms. The information provided here is about dihydropyridine CCBs and their use in high blood pressure.")}, id: 1 },
    { text: "How do they work?", handler: () => {props.actionProvider.handleRequest("How do they work?"); props.actionProvider.handleNewMessage("Special muscle cells, like those in the blood vessels, need calcium to contract. The heart pumps blood around the body by contracting and relaxing, while the blood vessels regulate blood flow by narrowing (constricting) and widening (dilating). Calcium moves in and out of cells through tiny channels, which can be blocked by calcium channel blockers. This reduces the amount of calcium that helps muscle cells contract. As a result, the muscle is more relaxed. When the muscles in blood vessels (specifically arteries) relax, blood pressure is lowered.")}, id: 2 },
    { text: "What do I need to tell my doctor before taking these?", handler: () => {props.actionProvider.handleRequest("What do I need to tell my doctor before taking these?"); props.actionProvider.handleNewMessage("Bring a list of your medications to your doctor to ensure that none of them interfere with CCBs. Tell your doctor if you have previously had an allergic reaction to CCBs. If you have previously tried CCBs and they had no effect on your blood pressure, it is important to tell your doctor this as well.")}, id: 3 },
    { text: "What should I be aware of while taking these?", handler: () => {props.actionProvider.handleRequest("What should I be aware of while taking these?"); props.actionProvider.handleNewMessage("Grapefruit and grapefruit juice could interfere with your CCB treatment. It could make the side effects worse, so it's best to avoid grapefruit if you are taking CCBs. It is recommended not to drink grapefruit juice as this can increase the severity of side effects.")}, id: 4 },
    { text: "Side Effects", handler: () => {props.actionProvider.handleRequest("Side Effects"); props.actionProvider.handleNewMessage("CCBs work by relaxing blood vessels, which actually causes some of the drugs' minor side effects. These side effects include flushing and headaches, and usually ease off within a few days as your body gets used to the new treatment. Other common side effects include constipation and swelling of the ankles. Constipation can be improved by increasing the amount of fibre in your diet and drinking more water. Tell your doctor if you experience swollen ankles and they can switch you to a CCB that is less likely to cause this side effect for you."); props.actionProvider.handleNewMessage("Rarer side effects include feeling sick or nauseous, dizziness, rash, high heart rate, and lethargy. If you have signs of a severe allergic reaction (swelling of the lips, tongue, or throat), you should seek immediate medical attention.")}, id: 5 },
    { text: "How is this drug best taken?", handler: () => {props.actionProvider.handleRequest("How is this drug best taken?"); props.actionProvider.handleNewMessage("Take the medication as prescribed by your healthcare provider. It is normally taken once in the morning.")}, id: 6 },
    { text: "What do I do if I miss a dose?", handler: () => {props.actionProvider.handleRequest("What do I do if I miss a dose?"); props.actionProvider.handleNewMessage("Try not to miss a dose, but if you do, take your missed dose as soon as you remember. If you remember your missed dose close to your next dose, do not take two doses - just take the next dose as usual.")}, id: 7 },
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
    { text: "What are Diuretics?", handler: () => {props.actionProvider.handleRequest("What are Diuretics?"); props.actionProvider.handleNewMessage("Diuretic drugs are used to lower blood pressure in hypertension and heart failure. They may also be useful in some kidney diseases or overdoses. Diuretics encourage diuresis, which is the increases passing of water in urine. Each type of diuretic drug differs slightly in how they work and how they are prescribed to lower blood pressure.")}, id: 1 },
    { text: "Warnings/Cautions", handler: () => {props.actionProvider.handleRequest("Warnings/Cautions"); props.actionProvider.handleNewMessage("Diuretic drugs tend to make you pass a lot more water than usual. Sometimes too much water and electrolytes are lost, which can cause severe health problems. Electrolytes, such as sodium, potassium, chloride, magnesium, calcium, and phosphate, are important minerals that your body needs to function. If you are experiencing diarrhoea or vomiting due to an illness, you should consult your doctor who may advise you to stop taking your diuretic medication until you feel better. This is to prevent you losing too much water and electrolytes. Do not take this medication if you are pregnant. This drug is known to cause birth defects or loss of the unborn baby. If you are pregnant, or plan to get pregnant call your doctor immediately to be prescribed an alternative medication which is suitable.")}, id: 2 },
    { text: "How do they work?", handler: () => {props.actionProvider.handleRequest("How do they work?"); props.actionProvider.handleNewMessage("The kidneys regulate the amount of water and salt in your blood by excreting more or less of them in your urine. Where salt goes, water follows, so when your kidneys filter out more salt int your urine, you will be passing more water as well. Diuretics are called “water pills” because of the way they work: they increase increasing the amount of salt and water than you pass out in your urine. This reduces the amount of fluid in your circulation, which also reduces your blood pressure.")}, id: 3 },
    { text: "The types of Diuretics?", handler: () => {props.actionProvider.handleRequest("The types of Diuretics?"); props.actionProvider.handleNewWidgetMessage("There are four types of diuretics: thiazides, thiazide-like diuretics, loop diuretics, and potassium-sparing diuretics. You can find out more about the different types by clicking the options below.", "DiureticOptions")}, id: 4 },
    { text: "What do I need to tell my doctor before taking these?", handler: () => {props.actionProvider.handleRequest("What do I need to tell my doctor before taking these?"); props.actionProvider.handleNewMessage("Bring a list of your medications to your doctor to ensure that they do not interfere with your planned treatment and that they do not have any diuretic effects. Taking multiple diuretic medications could put you at risk of losing too many electrolytes or fluids. Tell your doctor if you have previously had an allergic reaction to diuretic medications (swelling of the lips, eyes, throat, or neck). If you have previously tried diuretics and they had no effect on your blood pressure, it is important to tell your doctor this as well.")}, id: 5 },
    { text: "What should I be aware of while taking these?", handler: () => {props.actionProvider.handleRequest("What should I be aware of while taking these?"); props.actionProvider.handleNewMessage("Given that diuretics make you pass more urine, you may have frequent visits to the toilet. If this is a problem in your day-to-day activities, you should discuss this with your doctor. It is likely that your dose can be divided and spread out through the day to interfere less with your activities.")}, id: 6 },
    { text: "Side Effects", handler: () => {props.actionProvider.handleRequest("Side Effects"); props.actionProvider.handleNewMessage("Common diuretic side effects include: Thirst, Increased need to use the toilet, Dizziness when standing up, Skin rash (especially with thiazides), Stomach upset, Erectile dysfunction, Skin sensitivity to sunlight."); props.actionProvider.handleNewMessage("Muscle cramps, nausea, headaches, and fatigue may all be signs that you are losing too many electrolytes in your urine. Tell your doctor if you notice that your urine output has decreased dramatically despite being on a diuretic. If you have signs of a severe allergic reaction (swelling of the lips, tongue, or throat), you should seek immediate medical attention.")}, id: 7 },
    { text: "How is this drug best taken?", handler: () => {props.actionProvider.handleRequest("How is this drug best taken?"); props.actionProvider.handleNewMessage("Take the medication as prescribed by your healthcare provider. Try to take it at the same time every day.")}, id: 8 },
    { text: "What do I do if I miss a dose?", handler: () => {props.actionProvider.handleRequest("What do I do if I miss a dose?"); props.actionProvider.handleNewMessage("Try not to miss a dose, but if you do, take your missed dose as soon as you remember. If you remember your missed dose close to your next dose, do not take two doses - just take the next dose as usual.")}, id: 9 },
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
    { text: "Thiazide Diuretics", handler: () => {props.actionProvider.handleRequest("Thiazide Diuretics"); props.actionProvider.handleNewMessage("Thiazide and thiazide-like diuretics are the most commonly prescribed diuretics, and they are often combined with other high blood pressure medications. Thiazide diuretics have a weak action on the kidneys, so they may not make you pass as much urine as other types of diuretics. Thiazide diuretics also widen your blood vessels. Together these two effects work to lower your blood pressure.")}, id: 1 },
    { text: "Thiazide-like Diuretics", handler: () => {props.actionProvider.handleRequest("Thiazide-like Diuretics"); props.actionProvider.handleNewMessage("Thiazide and thiazide-like diuretics are the most commonly prescribed diuretics, and they are often combined with other high blood pressure medications. Thiazide-like diuretics work in the same way, although they have a slightly different chemical structure.")}, id: 2 },
    { text: "Loop Diuretics", handler: () => {props.actionProvider.handleRequest("Loop Diuretics"); props.actionProvider.handleNewMessage("Loop diuretics have a complex mechanism of action, which involves stopping your kidneys from absorbing electrolytes and triggering the release of certain chemicals by your body. The cascade of events eventually leads to passing more water and a lower blood volume and, therefore, blood pressure. Loop diuretics also widen your blood vessels.")}, id: 3 },
    { text: "Potassium-sparing Diuretics", handler: () => {props.actionProvider.handleRequest("Potassium-sparing Diuretics"); props.actionProvider.handleNewMessage("Potassium, like sodium, chloride, and magnesium, is an electrolyte that your body needs in small amounts to function. Because diuretics cause you to lose electrolytes in addition to water, you may be at risk of losing too much potassium. Like their name suggests, potassium-sparing diuretics make you pass more water without depriving you of potassium.")}, id: 4 },
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
    { text: "What are Beta Blockers?", handler: () => {props.actionProvider.handleRequest("What are Beta Blockers?"); props.actionProvider.handleNewMessage("Beta-blockers are used to treat a variety of heart and blood vessel conditions to reduce frequency of chest pain (angina), prevent further heart attacks, control life threatening heart rhythms, heart failure and lower blood pressure. Beta blockers are sometimes also prescribed for anxiety, because they can help control the physical symptoms of an anxiety attack.")}, id: 1 },
    { text: "Warnings/Cautions", handler: () => {props.actionProvider.handleRequest("Warnings/Cautions"); props.actionProvider.handleNewMessage("Do not stop taking a beta blocker suddenly without consulting your healthcare professional.")}, id: 2 },
    { text: "How do they work?", handler: () => {props.actionProvider.handleRequest("How do they work?"); props.actionProvider.handleNewMessage("Beta blockers work by making your heart beat more slowly and with less force. Because blood is pushed into your arteries with less force, there is less pressure on the artery walls.")}, id: 3 },
    { text: "What do I need to tell my doctor before taking these?", handler: () => {props.actionProvider.handleRequest("What do I need to tell my doctor before taking these?"); props.actionProvider.handleNewMessage("Bring a list of your medications to your doctor to ensure that they do not interfere with your planned treatment. Please let your doctor know if you have asthma, as beta blockers can make your asthma worse. You should also tell your doctor if you have been previously diagnosed with an unusually slow heartrate. Tell your doctor if you have previously had an allergic reaction to beta blockers (swelling of the lips, eyes, throat, or neck). If you have previously tried beta blockers and they had no effect on your blood pressure, it is important to tell your doctor this as well.")}, id: 4 },
    { text: "What should I be aware of while taking these?", handler: () => {props.actionProvider.handleRequest("What should I be aware of while taking these?"); props.actionProvider.handleNewMessage("Taking a beta blocker may increase your blood sugar levels, so if you have diabetes you may need to monitor your blood sugar closely. The dose of your antidiabetic medication might also need to be adjusted.")}, id: 5 },
    { text: "Side Effects", handler: () => {props.actionProvider.handleRequest("Side Effects"); props.actionProvider.handleNewMessage("Common beta blocker side effects include: Dizziness, Headaches, Tiredness, Cold hands and feet, Vivid dreams (especially in older people)."); props.actionProvider.handleNewMessage("If you have signs of a severe allergic reaction (swelling of the lips, tongue, or throat), you should seek immediate medical attention. If you feel extremely dizzy or faint, or your heartbeat is very slow and you feel very cold, contact a healthcare professional.")}, id: 6 },
    { text: "How is this drug best taken?", handler: () => {props.actionProvider.handleRequest("How is this drug best taken?"); props.actionProvider.handleNewMessage("Take the medication as prescribed by your healthcare provider. Try to take it at the same time every day.")}, id: 7 },
    { text: "What do I do if I miss a dose?", handler: () => {props.actionProvider.handleRequest("What do I do if I miss a dose?"); props.actionProvider.handleNewMessage("Try not to miss a dose, but if you do, take your missed dose as soon as you remember. If you remember your missed dose close to your next dose, do not take two doses - just take the next dose as usual.")}, id: 8 },
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
