import os
import bs4
from langchain import hub
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.chat_models import ChatOpenAI
from langchain_community.document_loaders import WebBaseLoader
from langchain_community.embeddings import OpenAIEmbeddings
from langchain_community.vectorstores import Chroma
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough
from langchain_community.document_loaders import BSHTMLLoader, DirectoryLoader
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Your LLM logic
def your_llm_function(input_data):
    # Perform your LLM operations here
    # Return the result
    return rag_chain.invoke(input_data)

# API endpoint to handle requests
@app.route('/llm', methods=['POST'])
def process_llm():
    data = request.get_json()
    input_data = data['input']
    result = your_llm_function(input_data)
    return jsonify({'result': result})

if __name__ == '__main__':
    os.environ["OPENAI_API_KEY"] = "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"


    folder_path = 'C:\\Users\\jonny\\Documents\\5thYearMastersProject\\ReactChatbot\\llm_data'

    loader = DirectoryLoader(path=folder_path, glob="**/*.html", loader_cls=BSHTMLLoader)

    docs = loader.load()
    #print(docs)

    text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
    splits = text_splitter.split_documents(docs)
    vectorstore = Chroma.from_documents(documents=splits, embedding=OpenAIEmbeddings())

    # Retrieve and generate using the relevant snippets of the blog.
    retriever = vectorstore.as_retriever()
    prompt = hub.pull("rlm/rag-prompt")
    llm = ChatOpenAI(model_name="gpt-3.5-turbo", temperature=0)


    def format_docs(docs):
        return "\n\n".join(doc.page_content for doc in docs)


    rag_chain = (
        {"context": retriever | format_docs, "question": RunnablePassthrough()}
        | prompt
        | llm
        | StrOutputParser()
    )

    app.run(debug=True)


