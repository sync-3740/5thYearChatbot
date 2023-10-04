class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase()
    
    if (lowerCaseMessage === "") {
      this.actionProvider.empty()
    } else {
    
      fetch("https://api.vectara.io:443/v1/query", {
        headers: {
          // "api_key": "INSERT KEY",
          // "corpora_ids": 1,
          // "customer_id": 1614570070,
          "Content-Type": "application/json",
          authorization: "INSERT TOKEN",
          // API_KEY - INSERT KEY
          // API implementation not working yet
          "customer-id": "1614570070",
        },
        body: "{\"query\":[{\"query\":\"" + lowerCaseMessage + "\",\"queryContext\":\"\",\"start\":0,\"numResults\":10,\"contextConfig\":{\"charsBefore\":0,\"charsAfter\":0,\"sentencesBefore\":2,\"sentencesAfter\":2,\"startTag\":\"%START_SNIPPET%\",\"endTag\":\"%END_SNIPPET%\"},\"corpusKey\":[{\"customerId\":1614570070,\"corpusId\":1,\"semantics\":0,\"metadataFilter\":\"\",\"lexicalInterpolationConfig\":{\"lambda\":0.025},\"dim\":[]}],\"summary\":[{\"maxSummarizedResults\":5,\"responseLang\":\"eng\",\"summarizerPromptName\":\"vectara-summary-ext-v1.2.0\"}]}]}",
        method: "post",
        })
        .then((res) => res.json())
        .then((data) => {console.log(data); this.actionProvider.handleNewMessage(data.responseSet[0].summary[0].text)})
        .catch((error) => console.log(error))
                  

          // if (lowerCaseMessage.includes("javascript")) {
          //   this.actionProvider.handleJavascriptList();
          // }
        }
    }
}

export default MessageParser