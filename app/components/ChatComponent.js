"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
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
          return reader.read().then(({ done, value }) => {
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
            return readChunk();
          });
        }

        return readChunk();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Box
        width="100vw"
        height="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <h1>Serenify</h1>
        </Box>
        <Stack
          direction="column"
          spacing={3}
          width="600px"
          height="700px"
          border="1px solid #ccc"
          p={2}
        >
          <Stack
            direction="column"
            p={2}
            spacing={2}
            flexGrow={1}
            overflow="auto"
            maxHeight="100%"
            // width="100%"
          >
            {messages.map((message, index) => (
              <Box
                key={index}
                display="flex"
                justifyContent={
                  message.role === "assistant" ? "flex-start" : "flex-end"
                }
                width="100%"
                mb={2}
              >
                <Box
                  bgcolor={
                    message.role === "assistant"
                      ? "primary.main"
                      : "secondary.main"
                  }
                  p={2}
                  borderRadius={2}
                  color="white"
                  maxWidth="80%"
                >
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h1: ({ node, ...props }) => (
                        <h1
                          className="mt-4 mb-2 text-xl font-bold"
                          {...props}
                        />
                      ),
                      h2: ({ node, ...props }) => (
                        <h2
                          className="mt-4 mb-2 text-lg font-semibold"
                          {...props}
                        />
                      ),
                      p: ({ node, ...props }) => (
                        <p className="mb-2" {...props} />
                      ),
                      ul: ({ node, ...props }) => (
                        <ul className="mb-2 ml-6 list-disc" {...props} />
                      ),
                      ol: ({ node, ...props }) => (
                        <ol className="mb-2 ml-6 list-decimal" {...props} />
                      ),
                      li: ({ node, ...props }) => (
                        <li className="mb-1" {...props} />
                      ),
                    }}
                    className="markdown-content"
                  >
                    {message.content}
                  </ReactMarkdown>
                </Box>
              </Box>
            ))}
          </Stack>
          <Stack direction="row" spacing={2}>
            <TextField
              label="message"
              fullWidth
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && !e.shiftKey && handleSendMessage()
              }
              InputProps={{
                style: { color: "white" },
              }}
            />
            <Button variant="contained" onClick={handleSendMessage}>
              Send
            </Button>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
