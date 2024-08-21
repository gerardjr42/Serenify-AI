"use client";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ChatComponent() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: `Hello, I'm Serenify, your AI-powered therapy assistant. I'm here to support you on your mental health journey and provide information about our services. How can I help you today?`,
    },
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    setMessage("");
    const newUserMessage = { role: "user", content: message };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);

    fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([...messages, newUserMessage]),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Failed to send message");
        return response.body.getReader();
      })
      .then((reader) => {
        const decoder = new TextDecoder();
        let assistantMessage = { role: "assistant", content: "" };

        setMessages((prevMessages) => [...prevMessages, assistantMessage]);

        function readChunk() {
          reader.read().then(({ done, value }) => {
            if (done) return;
            const chunk = decoder.decode(value);
            assistantMessage.content += chunk;
            setMessages((prevMessages) =>
              prevMessages.map((msg, index) =>
                index === prevMessages.length - 1
                  ? { ...assistantMessage }
                  : msg
              )
            );
            readChunk();
          });
        }

        readChunk();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="flex justify-center items-start h-full bg-gradient-to-b from-purple-800/10 to-purple-900/10 rounded-lg">
      <div className="w-[500px] h-full rounded-lg drop-shadow-2xl shadow-white overflow-hidden flex flex-col">
        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="flex-1 overflow-y-auto p-4 ">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "assistant" ? "justify-start" : "justify-end"
                } mb-4`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === "assistant"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-700 text-white"
                  } shadow-md`}
                >
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h1: ({ node, ...props }) => (
                        <h1 className="text-xl font-bold mb-2" {...props} />
                      ),
                      h2: ({ node, ...props }) => (
                        <h2 className="text-lg font-semibold mb-2" {...props} />
                      ),
                      p: ({ node, ...props }) => (
                        <p className="mb-2" {...props} />
                      ),
                      ul: ({ node, ...props }) => (
                        <ul className="list-disc pl-4 mb-2" {...props} />
                      ),
                      ol: ({ node, ...props }) => (
                        <ol className="list-decimal pl-4 mb-2" {...props} />
                      ),
                      li: ({ node, ...props }) => (
                        <li className="mb-1" {...props} />
                      ),
                    }}
                    className="markdown-content"
                  >
                    {message.content}
                  </ReactMarkdown>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 bg-gray-800">
          <div className="flex items-center bg-gray-700 rounded-lg">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 bg-transparent text-white p-3 focus:outline-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && !e.shiftKey && handleSendMessage()
              }
            />
            <button
              onClick={handleSendMessage}
              className="p-3 text-blue-400 hover:text-blue-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
