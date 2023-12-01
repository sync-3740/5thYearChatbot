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

  getIP = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");
    //console.log(res.data);
    localStorage.setItem("IP_Address", JSON.stringify(res.data.ip));
    return res.data.ip;
  };

  createUser = async () => {
    var ip_address = JSON.parse(localStorage.getItem("IP_Address"));
    if (ip_address == null){
      ip_address = await this.getIP()
    }

    fetch('http://130.209.243.228:3001/addusers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ip_address}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        //console.log(data);
      });
  };

  createResponse = async (question, response) => {
    var time = Date();
    var ip_address = JSON.parse(localStorage.getItem("IP_Address"));
    if (ip_address == null){
      ip_address = await this.getIP()
    }

    fetch('http://130.209.243.228:3001/addquestions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({time, question, response, ip_address}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        //console.log(data);
      });
  };

  empty() {
    const emptyMessage = this.createChatBotMessage("Hello, it appears you have not entered a message. Type in your questions about blood pressure to get information.")
    this.updateChatbotState(emptyMessage);
    //localStorage.removeItem("IP_Address");
  };

  store_data(question, response){
    var stored_data = JSON.parse(localStorage.getItem("Data"));
    var ip_address = JSON.parse(localStorage.getItem("IP_Address"));
    const json_data = {Time: Date(), Question: question, Response: response}

    if (stored_data == null){
      stored_data = []
    }
    stored_data.push(json_data)
    //console.log(stored_data)
    if (ip_address == null){
      this.getIP();
      this.createUser();
    }
    this.createResponse(question, response);

    localStorage.setItem("Data", JSON.stringify(stored_data));
  }

  handleRequest = (clicked) => {
    const question = this.createClientMessage(clicked)
    this.updateChatbotState(question)
  }

  handleNewMessage = (clicked) => {
    var message;
    if (Array.isArray(message_to_response[clicked])){
      this.store_data(clicked, message_to_response[clicked][0])
      message = this.createChatBotMessage(
        message_to_response[clicked][0],
        {
          widget: "MoreInfo", payload: clicked
        }
      );
    } else {
      this.store_data(clicked, message_to_response[clicked])
      message = this.createChatBotMessage(
        message_to_response[clicked],
      );
    }

    this.updateChatbotState(message);
  }

  handleNewExtraMessage = (clicked) => {
    this.store_data(clicked + " 1", message_to_response[clicked][1])
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
    this.store_data(question, new_response)

    this.updateChatbotState(message);
  }

  handleNewExtraSummaryMessage = (info_array) => {
    this.store_data(info_array[0] + " 1", info_array[1])
    const message = this.createChatBotMessage(
      info_array[1],
    );

    this.updateChatbotState(message);
  }

  handleNewWidgetMessage = (clicked, widget) => {
    this.store_data(clicked, message_to_response[clicked])
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
    this.store_data(clicked, message_to_response[clicked])
    const message = this.createChatBotMessage(
      message_to_response[clicked],
      {
        widget: "ImageHandler", payload: image_name
      }
    );

    this.updateChatbotState(message);
  }

  handleNewVideoMessage = (clicked, video_url) => {
    this.store_data(clicked, message_to_response[clicked])
    const message = this.createChatBotMessage(
      message_to_response[clicked],
      {
        widget: "VideoHandler", payload: video_url
      }
    );

    this.updateChatbotState(message);
  }

  handleNewHyperlinkMessage = (clicked, link) => {
    this.store_data(clicked, message_to_response[clicked])
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
    this.store_data(clicked, message_to_response[clicked])
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
