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
      try {
        const response = await fetch('http://127.0.0.1:5000/llm', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ input: lowerCaseMessage }),
        });

        console.log(response)

        const reader = response.body.getReader();
        var new_message = ""

        const decoder = new TextDecoder('utf-8');

        // Assuming 'data' is your Uint8Array
        
        while (true) {
          const { done, value } = await reader.read();

          if (done) {
            break;
          }

          const decodedData = decoder.decode(value);
          new_message += decodedData
          //console.log(new_message)
          this.actionProvider.handleNewSummaryMessage(new_message)


        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      
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