class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase()
    
    if (lowerCaseMessage === "") {
      this.actionProvider.empty()
    } else {
      this.actionProvider.addMessage("Fetching response...")
    
      fetch("https://api.vectara.io:443/v1/query", {
        headers: {
          "Content-Type": "application/json",
          //authorization: "Bearer eyJraWQiOiI3UHlBK3ZnQXZ2NGlycDhDMzc3ME5ld1V5QkxxMU5WRzhwWHZJYzVyalFVPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJlZTkzYjRhMi0wYjczLTQ0OTMtOWM3MC1mMDE3MWVjZThiY2UiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLXdlc3QtMi5hbWF6b25hd3MuY29tXC91cy13ZXN0LTJfa25VUkdWT2trIiwiY29nbml0bzp1c2VybmFtZSI6Impvbm55LmtlbnQzNzQwQGdtYWlsLmNvbSIsIm9yaWdpbl9qdGkiOiIwM2IzMDI5NS1lNDgyLTRmODAtYmI1Mi02MmQ0OTJmMWY1NWEiLCJhdWQiOiI0Nzh2dDByanVvMTBqNGM3dnBmMDN2a3RtZSIsImV2ZW50X2lkIjoiNzE4YTBlZjQtZDE2Ny00NWRkLWE4ZTctOWRkYjA1ZGZjMjc5IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2OTYzNDMwNDksImV4cCI6MTY5NjY0NzkyMCwiaWF0IjoxNjk2NjQ0MzIwLCJqdGkiOiJlMmUzMDdjMi1hYzE2LTQxZmMtOTAzOC1hNjc5ZmM2NDliMGYiLCJlbWFpbCI6Impvbm55LmtlbnQzNzQwQGdtYWlsLmNvbSJ9.Zv36ZoUvjH-qo93DViCQ0RvfJ4F7qCGrIGCw5HAvJ_4GoHsD8Q0ec3qp7ASlS9yU9UImYYK6DZ1gezWWe2DRQOaAtVIDmzzlUbWYZsQKrujDTNeSes6VdLhlGs3QzAeyJesDgJeD9t80eYPaK76Hlaqjs4BS3gsIArP1C86-NbEpQ7KXMYm_bKVJRPb3jxqRN9stmQhV1YA58MltcjIcboqAiB7SMzQ1n3ojhb7098_7TlPWbGF_IYFHG2Q3SD9bFZEdRS50C1gJ01xfp_KOdqAODwanbN7KkJpFJEksxcEBprOD3-i-uKYhsWfkoyZhfC9FyE8jRLyVeYFBlykLiQ",
          'x-api-key': 'zwt_YDxiVlZ56qHin8xT-7H84DbQdPKSJB2ULIqgAg',
          "customer-id": "1614570070",
        },
        body: "{\"query\":[{\"query\":\"" + lowerCaseMessage + "\",\"queryContext\":\"\",\"start\":0,\"numResults\":10,\"contextConfig\":{\"charsBefore\":0,\"charsAfter\":0,\"sentencesBefore\":2,\"sentencesAfter\":2,\"startTag\":\"%START_SNIPPET%\",\"endTag\":\"%END_SNIPPET%\"},\"corpusKey\":[{\"customerId\":1614570070,\"corpusId\":1,\"semantics\":0,\"metadataFilter\":\"\",\"lexicalInterpolationConfig\":{\"lambda\":0.025},\"dim\":[]}],\"summary\":[{\"maxSummarizedResults\":5,\"responseLang\":\"eng\",\"summarizerPromptName\":\"vectara-summary-ext-v1.2.0\"}]}]}",
        method: "post",
        })
        .then((res) => res.json())
        .then((data) => {
          //console.log(data)

          var response_summary = data.responseSet[0].summary[0].text
          
          this.actionProvider.handleNewSummaryMessage(lowerCaseMessage, response_summary)
        })
        .catch((error) => console.log(error))
                  

          // if (lowerCaseMessage.includes("javascript")) {
          //   this.actionProvider.handleJavascriptList();
          // }
        }
    }
}

export default MessageParser