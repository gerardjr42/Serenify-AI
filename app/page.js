"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: `Hello, I'm Serenify, your AI-powered therapy assistant. I'm here to support you on your mental health journey and provide information about our services. How can I help you today?`,
    },
  ]);

  const [message, setMessage] = useState("");

  const handleSendMessage = async () => {
    if (!message.trim()) return; // Prevent sending empty messages

    setMessage("");
    const newUserMessage = { role: "user", content: message };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([...messages, newUserMessage]),
      });

      if (!response.ok) throw new Error("Failed to send message");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = { role: "assistant", content: "" };

      setMessages((prevMessages) => [...prevMessages, assistantMessage]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value);

        // Add proper formatting
        const formattedChunk = chunk
          .replace(/\n/g, "<br>")
          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

        assistantMessage.content += formattedChunk;
        setMessages((prevMessages) =>
          prevMessages.map((msg, index) =>
            index === prevMessages.length - 1 ? { ...assistantMessage } : msg
          )
        );
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
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
          spacing={2}
          flexGrow={1}
          overflow="auto"
          maxHeight="100%"
        >
          {messages.map((message, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent={
                message.role === "assistant" ? "flex-start" : "flex-end"
              }
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
                dangerouslySetInnerHTML={{ __html: message.content }}
              />
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
          />
          <Button variant="contained" onClick={handleSendMessage}>
            Send
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
