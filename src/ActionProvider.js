class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.createClientMessage = createClientMessage
    this.setState = setStateFunc;
  }
  
  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, friend.")
    this.updateChatbotState(greetingMessage)
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
  
  updateChatbotState(message) {
 
// NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.
 
    
   this.setState(prevState => ({
    	...prevState, messages: [...prevState.messages, message]
    }))
  }
}

export default ActionProvider