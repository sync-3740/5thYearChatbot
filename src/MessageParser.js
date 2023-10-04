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
          // "api_key": "zwt_YDxiVlZ56qHin8xT-7H84DbQdPKSJB2ULIqgAg",
          // "corpora_ids": 1,
          // "customer_id": 1614570070,
          "Content-Type": "application/json",
          authorization: "Bearer eyJraWQiOiI3UHlBK3ZnQXZ2NGlycDhDMzc3ME5ld1V5QkxxMU5WRzhwWHZJYzVyalFVPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJlZTkzYjRhMi0wYjczLTQ0OTMtOWM3MC1mMDE3MWVjZThiY2UiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLXdlc3QtMi5hbWF6b25hd3MuY29tXC91cy13ZXN0LTJfa25VUkdWT2trIiwiY29nbml0bzp1c2VybmFtZSI6Impvbm55LmtlbnQzNzQwQGdtYWlsLmNvbSIsIm9yaWdpbl9qdGkiOiIwM2IzMDI5NS1lNDgyLTRmODAtYmI1Mi02MmQ0OTJmMWY1NWEiLCJhdWQiOiI0Nzh2dDByanVvMTBqNGM3dnBmMDN2a3RtZSIsImV2ZW50X2lkIjoiNzE4YTBlZjQtZDE2Ny00NWRkLWE4ZTctOWRkYjA1ZGZjMjc5IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2OTYzNDMwNDksImV4cCI6MTY5NjQzODE0MywiaWF0IjoxNjk2NDM0NTQzLCJqdGkiOiIyYzg2ZGVhNS1kYTA5LTQzM2QtODJkOC1iMjEzMjY2ZmY5MjMiLCJlbWFpbCI6Impvbm55LmtlbnQzNzQwQGdtYWlsLmNvbSJ9.a-jIa3g8qT1TdJ_S7fRlshQ7pnjfN85UjMAO-8ooFvqXkAcbI_SzytcIBZ-Q8VSVfzPvQOFjb7WFEbGD6cdFMOvDk6CGI14sDiZURAwA2g_8pDWvyU7myaXqhX55JtSZ3_9EY53i371r8KcbrUBWYEs98XzLRSJxhk6Uo9jahdFmoIYEEl1uAkMorPr4PQcb5gqRcGXv1j0HS62WmAkBESH_TOSo7PKE1BMJYcvKaTRroTMkRGrhH3yfnEXRUZx60dTVSzauCs9F4Zfy57J6bL7mRZInBjIbUjvPCfYw_E7_EdAWgkbf9zRw5vz9kshLH_6WLhQ19YnKB7w4TfT3qg",
          // API_KEY - zwt_YDxiVlZ56qHin8xT-7H84DbQdPKSJB2ULIqgAg
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