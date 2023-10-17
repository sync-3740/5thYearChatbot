import message_to_response from "./Chatbot_Responses";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.createClientMessage = createClientMessage
    //this.createCustomMessage = createCustomMessage
    this.setState = setStateFunc;
  }
  
  empty() {
    const emptyMessage = this.createChatBotMessage("Hello, it appears you have not entered a message. Type in your questions about blood pressure to get information.")
    this.updateChatbotState(emptyMessage)
  }

  store_data(question, response){
    var stored_data = JSON.parse(localStorage.getItem("Data"));
    const json_data = {Time: Date(), Question: question, Response: response}

    if (stored_data == null){
      stored_data = []  
    }
    stored_data.push(json_data)
    console.log(stored_data)
    localStorage.setItem("Data", JSON.stringify(stored_data));
  }

  handleRequest = (clicked) => {
    const question = this.createClientMessage(clicked)
    this.updateChatbotState(question)
  }

  handleNewMessage = (clicked) => {
    this.store_data(clicked, message_to_response[clicked])
    const message = this.createChatBotMessage(
      message_to_response[clicked]
    );

    this.updateChatbotState(message);
  }

  handleNewSummaryMessage = (question, response) => {
    this.store_data(question, response)
    const message = this.createChatBotMessage(
      response
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

  addMessage = (response) => {
    const message = this.createChatBotMessage(
      response,
    );

    this.updateChatbotState(message);
  }
  
  updateChatbotState(message) {
 
// NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.
 
    
   this.setState(prevState => ({
    	...prevState, messages: [...prevState.messages, message]
    }))
  }
}

export default ActionProvider