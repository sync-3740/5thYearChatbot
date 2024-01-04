class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
    //this.chain = this.build_model();
  }

  async parse(message) {
    const lowerCaseMessage = message.toLowerCase()
    
    if (lowerCaseMessage === "") {
      this.actionProvider.empty()
    } else {
      this.actionProvider.addMessage("Fetching response...")

      fetch('http://127.0.0.1:5000/llm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: lowerCaseMessage }),
      })
        .then(response => response.json())
        .then(data => {
          console.log(data.result)
          this.actionProvider.handleNewSummaryMessage(lowerCaseMessage, data.result)
        })
        .catch(error => {
          console.error('Error:', error);
        });
      
    }
  }

    remove_references(message){
      const regex = / \[\d+\]/g;
      const regex2 = /\[\d+\] /g;
      const regex3 = /\[\d+\]/g;
      
      var new_message1 = message.replace(regex, '')
      var new_message2 = new_message1.replace(regex2, '')
      var new_message3 = new_message2.replace(regex3, '')

      return new_message3
      
    }

    
}

export default MessageParser