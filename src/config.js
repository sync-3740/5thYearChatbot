import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from "./components/LearningOptions/LearningOptions";
import BPOptions from "./components/BloodPressure/BPOptions";
import LinkList from "./components/LinkList/LinkList";
import GeneralBP from "./components/BloodPressure/GeneralBP";
import BPVariation from "./components/BloodPressure/BPVariation";
import BPMeasurement from "./components/BloodPressure/BPMeasurement";
import BPandMe from "./components/BloodPressure/BPandMe";
import HypertensionOptions from "./components/Hypertension/HypertensionOptions";
import CholesterolOptions from "./components/Cholesterol/CholesterolOptions";
import CholesterolTypes from "./components/Cholesterol/CholesterolTypes";
import LifestyleOptions from "./components/Lifestyle/LifestyleOptions";
import ExerciseOptions from "./components/Lifestyle/PhysicalActivity";
import SmokingOptions from "./components/Lifestyle/SmokingOptions";
import MedicationOptions from "./components/Medication/MedicationOptions";
import {ACEInhibitors, Angiotensin, CalciumChannel, DiureticsOptions, Diuretics, BetaBlockers} from "./components/Medication/All_Medications";
import WomenOptions from "./components/Women/WomenOptions";
import PregnancyHypertension from "./components/Women/PregnancyHypertension";
import ImageHandler from "./components/ImageHandler/ImageHandler";
import VideoHandler from "./components/ImageHandler/VideoHandler";

const config = { 
   botName: "HeartBot",
   initialMessages: [createChatBotMessage("Hi, I'm here to help. What do you want to learn?", {
   widget: "learningOptions",
   //botAvatar: "H",
   }),
   ],
   customStyles: {
      botMessageBox: {
         backgroundColor: "#376B7E",
      },
      chatButton: {
         backgroundColor: "#376B7E",
      },
      //botAvatar: (props) => <ChatbotAvatar {...props} />,
      //botMessageBox: CustomBotMessage,
   },
   widgets: [
   {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
   },
   {
      widgetName: "BPOptions",
      widgetFunc: (props) => <BPOptions {...props} />,
   },
   {
      widgetName: "GeneralBP",
      widgetFunc: (props) => <GeneralBP {...props} />,
   },
   {
      widgetName: "BPVariation",
      widgetFunc: (props) => <BPVariation {...props} />,
   },
   {
      widgetName: "BPMeasurement",
      widgetFunc: (props) => <BPMeasurement {...props} />,
   },
   {
      widgetName: "BPandMe",
      widgetFunc: (props) => <BPandMe {...props} />,
   },
   {
      widgetName: "HypertensionOptions",
      widgetFunc: (props) => <HypertensionOptions {...props} />,
   },
   {
      widgetName: "CholesterolOptions",
      widgetFunc: (props) => <CholesterolOptions {...props} />,
   },
   {
      widgetName: "CholesterolTypes",
      widgetFunc: (props) => <CholesterolTypes {...props} />,
   },
   {
      widgetName: "LifestyleOptions",
      widgetFunc: (props) => <LifestyleOptions {...props} />,
   },
   {
      widgetName: "ExerciseOptions",
      widgetFunc: (props) => <ExerciseOptions {...props} />,
   },
   {
      widgetName: "SmokingOptions",
      widgetFunc: (props) => <SmokingOptions {...props} />,
   },
   {
      widgetName: "MedicationOptions",
      widgetFunc: (props) => <MedicationOptions {...props} />,
   },
   {
      widgetName: "ACEInhibitors",
      widgetFunc: (props) => <ACEInhibitors {...props} />,
   },
   {
      widgetName: "Angiotensin",
      widgetFunc: (props) => <Angiotensin {...props} />,
   },
   {
      widgetName: "CalciumChannel",
      widgetFunc: (props) => <CalciumChannel {...props} />,
   },
   {
      widgetName: "Diuretics",
      widgetFunc: (props) => <Diuretics {...props} />,
   },
   {
      widgetName: "DiureticsOptions",
      widgetFunc: (props) => <DiureticsOptions {...props} />,
   },
   {
      widgetName: "BetaBlockers",
      widgetFunc: (props) => <BetaBlockers {...props} />,
   },
   {
      widgetName: "WomenOptions",
      widgetFunc: (props) => <WomenOptions {...props} />,
   },
   {
      widgetName: "PregnancyHypertension",
      widgetFunc: (props) => <PregnancyHypertension {...props} />,
   },
   {
      widgetName: "ImageHandler",
      widgetFunc: (props) => <ImageHandler {...props} />,
   },
   {
      widgetName: "VideoHandler",
      widgetFunc: (props) => <VideoHandler {...props} />,
   },
   {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
         options: [
           {
             text: "Introduction to JS",
             url:
               "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
             id: 1,
           },
           {
             text: "Mozilla JS Guide",
             url:
               "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
             id: 2,
           },
           {
             text: "Frontend Masters",
             url: "https://frontendmasters.com",
             id: 3,
           },
         ],
       },
    },
   ],
}

export default config