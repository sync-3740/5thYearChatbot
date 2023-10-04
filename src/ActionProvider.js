class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.createClientMessage = createClientMessage
    this.setState = setStateFunc;
  }
  
  empty() {
    const emptyMessage = this.createChatBotMessage("Hello, it appears you have not entered a message. Type in your questions about blood pressure to get information.")
    this.updateChatbotState(emptyMessage)
  }

  handleRequest = (clicked) => {
    const question = this.createClientMessage(clicked)
    this.updateChatbotState(question)
  }

  handleNewMessage = (response) => {
    const message = this.createChatBotMessage(
      response
    );

    this.updateChatbotState(message);
  }

  handleNewWidgetMessage = (response, widget) => {
    const message = this.createChatBotMessage(
      response,
      {
        widget: widget
      }
    );

    this.updateChatbotState(message);
  }

  handleNewImageMessage = (response, image_name) => {
    const message = this.createChatBotMessage(
      response,
      {
        widget: "ImageHandler", payload: image_name
      }
    );

    this.updateChatbotState(message);
  }

  handleNewVideoMessage = (response, video_url) => {
    const message = this.createChatBotMessage(
      response,
      {
        widget: "VideoHandler", payload: video_url
      }
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