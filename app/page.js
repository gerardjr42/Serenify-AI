"use client";
import { useState } from "react";
import NavBar from "./components/NavBar";

export default function Home() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: `Hello, I'm Serenify, your AI-powered therapy assistant. I'm here to support you on your mental health journey and provide information about our services. How can I help you today?`,
    },
  ]);

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

        // // Add proper formatting
        // const formattedChunk = chunk
        //   // replace all newlines with <br>
        //   .replace("<br>", "\n\n");

        assistantMessage.content += chunk;
        // real-time updates of the assistant's response as it's being received, without affecting the other messages in the conversation history.
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
    // <>
    //   <div>
    //     <Spline scene="https://prod.spline.design/6nHbXNojOn8UGSpN/scene.splinecode" />
    //   </div>
    //   <Box
    //     width="100vw"
    //     height="100vh"
    //     display="flex"
    //     flexDirection="column"
    //     justifyContent="center"
    //     alignItems="center"
    //   >
    //     <Box>
    //       <h1>Serenify</h1>
    //     </Box>
    //     <Stack
    //       direction="column"
    //       spacing={3}
    //       width="600px"
    //       height="700px"
    //       border="1px solid #ccc"
    //       p={2}
    //     >
    //       <Stack
    //         direction="column"
    //         p={2}
    //         spacing={2}
    //         flexGrow={1}
    //         overflow="auto"
    //         maxHeight="100%"
    //         // width="100%"
    //       >
    //         {messages.map((message, index) => (
    //           <Box
    //             key={index}
    //             display="flex"
    //             justifyContent={
    //               message.role === "assistant" ? "flex-start" : "flex-end"
    //             }
    //             width="100%"
    //             mb={2}
    //           >
    //             <Box
    //               bgcolor={
    //                 message.role === "assistant"
    //                   ? "primary.main"
    //                   : "secondary.main"
    //               }
    //               p={2}
    //               borderRadius={2}
    //               color="white"
    //               maxWidth="80%"
    //             >
    //               <ReactMarkdown
    //                 remarkPlugins={[remarkGfm]}
    //                 components={{
    //                   h1: ({ node, ...props }) => (
    //                     <h1
    //                       className="mt-4 mb-2 text-xl font-bold"
    //                       {...props}
    //                     />
    //                   ),
    //                   h2: ({ node, ...props }) => (
    //                     <h2
    //                       className="mt-4 mb-2 text-lg font-semibold"
    //                       {...props}
    //                     />
    //                   ),
    //                   p: ({ node, ...props }) => (
    //                     <p className="mb-2" {...props} />
    //                   ),
    //                   ul: ({ node, ...props }) => (
    //                     <ul className="mb-2 ml-6 list-disc" {...props} />
    //                   ),
    //                   ol: ({ node, ...props }) => (
    //                     <ol className="mb-2 ml-6 list-decimal" {...props} />
    //                   ),
    //                   li: ({ node, ...props }) => (
    //                     <li className="mb-1" {...props} />
    //                   ),
    //                 }}
    //                 className="markdown-content"
    //               >
    //                 {message.content}
    //               </ReactMarkdown>
    //             </Box>
    //           </Box>
    //         ))}
    //       </Stack>
    //       <Stack direction="row" spacing={2}>
    //         <TextField
    //           label="message"
    //           fullWidth
    //           value={message}
    //           onChange={(e) => setMessage(e.target.value)}
    //           onKeyDown={(e) =>
    //             e.key === "Enter" && !e.shiftKey && handleSendMessage()
    //           }
    //         />
    //         <Button variant="contained" onClick={handleSendMessage}>
    //           Send
    //         </Button>
    //       </Stack>
    //     </Stack>
    //   </Box>
    // </>
    <div className="bg-black min-h-screen">
      <NavBar />
      <main>
        <h1>Welcome to Serenify</h1>
      </main>
    </div>
  );
}
