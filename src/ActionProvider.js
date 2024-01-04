// import { click } from "@testing-library/user-event/dist/click";
import message_to_response from "./Chatbot_Responses";
import TestModule from "./Question_Bank";
import axios from "axios";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.createClientMessage = createClientMessage
    //this.createCustomMessage = createCustomMessage
    this.setState = setStateFunc;
  }

  componentDidMount() {
    this.getIP();
    this.createUser();
  }

  empty() {
    const emptyMessage = this.createChatBotMessage("Hello, it appears you have not entered a message. Type in your questions about blood pressure to get information.")
    this.updateChatbotState(emptyMessage);
    //localStorage.removeItem("IP_Address");
  };

  handleRequest = (clicked) => {
    const question = this.createClientMessage(clicked)
    this.updateChatbotState(question)
  }

  handleNewMessage = (clicked) => {
    var message;
    if (Array.isArray(message_to_response[clicked])){
      message = this.createChatBotMessage(
        message_to_response[clicked][0],
        {
          widget: "MoreInfo", payload: clicked
        }
      );
    } else {
      message = this.createChatBotMessage(
        message_to_response[clicked],
      );
    }

    this.updateChatbotState(message);
  }

  handleNewExtraMessage = (clicked) => {
    const message = this.createChatBotMessage(
      message_to_response[clicked][1],
    );

    this.updateChatbotState(message);
  }

  handleNewSummaryMessage = (question, response) => {
    
    var [new_response, new_extra] = this.format_message(response)
    if (new_extra == "None"){
      var message = this.createChatBotMessage(
        new_response,
      );
    } else {
      var message = this.createChatBotMessage(
        new_response, 
        {
          widget: "MoreInfoAPI", payload: [question, new_extra]
        }
      );
    }

    this.updateChatbotState(message);
  }

  handleNewExtraSummaryMessage = (info_array) => {
    const message = this.createChatBotMessage(
      info_array[1],
    );

    this.updateChatbotState(message);
  }

  handleNewWidgetMessage = (clicked, widget) => {
    const message = this.createChatBotMessage(
      message_to_response[clicked],
      {
        widget: widget
      }
    );

    this.updateChatbotState(message);
  }

  handleNewImage = (image_name) => {
    const message = this.createChatBotMessage(
      {
        widget: "ImageHandler", payload: image_name
      }
    );

    this.updateChatbotState(message);
  }

  handleNewImageMessage = (clicked, image_name) => {
    const message = this.createChatBotMessage(
      message_to_response[clicked],
      {
        widget: "ImageHandler", payload: image_name
      }
    );

    this.updateChatbotState(message);
  }

  handleNewVideoMessage = (clicked, video_url) => {
    const message = this.createChatBotMessage(
      message_to_response[clicked],
      {
        widget: "VideoHandler", payload: video_url
      }
    );

    this.updateChatbotState(message);
  }

  handleNewHyperlinkMessage = (clicked, link) => {
    const message = this.createChatBotMessage(
      message_to_response[clicked],
      {
        widget: "HyperlinkHandler", payload: link
      }
    );

    this.updateChatbotState(message);
  }

  addMessage = (response) => {
    const message = this.createChatBotMessage(
      response,
    );

    this.updateChatbotState(message);
  }

  handleOfficeBP = () => {
    var clicked = "Office BP"
    for (let i = 0; i < message_to_response[clicked].length - 1; i++){
      this.addMessage(message_to_response[clicked][i])
    }
    const message = this.createChatBotMessage(
      message_to_response[clicked][message_to_response[clicked].length - 1],
      {
        widget: "ImageHandler", payload: "office_bp"
      }
    );

    this.updateChatbotState(message);

  }

  format_message(message){
    const firstDotIndex = message.indexOf('.');
    const secondDotIndex = message.indexOf('.', firstDotIndex + 1);

    if (secondDotIndex !== -1) {
      var formatted_message = message.substring(0, secondDotIndex + 1); // Include the second full stop
      var extra_message = message.substring(secondDotIndex + 1).trim();
      return [formatted_message, extra_message]
    } else {
      return [message, "None"]
    }
  }

  handleTest = (test_type) => {
    TestModule.chooseTest(test_type)

    const question = TestModule.get_nextQuestion();

    console.log("Question, ", question)
    
    this.addMessage(message_to_response[test_type])
    this.handleQuestion(question)
    
  }

  handleQuestion = (question) => {
    const message = this.createChatBotMessage(
      question["question"],
      {
        widget: "QuestionTemplate", payload: question
      }
    );

    this.updateChatbotState(message)
  }

  handleAnswer = (answer, question) => {

    this.handleRequest(answer)

    if (answer == question["correct_answer"]){
      this.addMessage("Congrats you're correct")
      TestModule.get_runningTotal(true)
    } else {
      this.addMessage("Sorry that's wrong")
      TestModule.get_runningTotal(false)
    }

    var next_question = TestModule.get_nextQuestion();

    if (next_question == "Finished") {
      
      var score = TestModule.get_runningTotal(false);
      this.addMessage("Quiz Finished, your score was "+ score + " out of " + TestModule.getTest().length + "!")
      this.handleNewWidgetMessage("Finished Test", "TestSelector")

    } else {
      const message = this.createChatBotMessage(
        next_question["question"],
        {
          widget: "QuestionTemplate", payload: next_question
        }
      );
      this.updateChatbotState(message)
    }
    
  }
  
  updateChatbotState(message) {
 
// NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.
 
    
   this.setState(prevState => ({
    	...prevState, messages: [...prevState.messages, message]
    }))
  }
}

export default ActionProvider
