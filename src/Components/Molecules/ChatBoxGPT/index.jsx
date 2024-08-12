import React, { useState } from "react";
import chatService from "../../../service/chatservice";
import styles from "./index.module.scss";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();
const ChatBox = async () => {
  const [messages, setMessages] = useState([]); // Armazena todas as mensagens
  const [input, setInput] = useState(""); // Armazena o valor atual do input
  const [loading, setLoading] = useState(false); // Controla o estado de carregamento

  const openai = new OpenAI({
    organization: process.env.ORG_ID,
    project: process.env.PROJECT_ID,
  });
  const tools = [
    {
      type: "function",
      function: {
        name: "get_current_weather",
        description: "Get the current weather in a given location",
        parameters: {
          type: "object",
          properties: {
            location: {
              type: "string",
              description: "The city and state, e.g. San Francisco, CA",
            },
            unit: { type: "string", enum: ["celsius", "fahrenheit"] },
          },
          required: ["location"],
        },
      },
    },
  ];

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: messages,
    tools: tools,
    tool_choice: "auto",
  });

  return (
    <div className={styles.chatBox}>
      <div className={styles.messages}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={
              msg.sender === "user" ? styles.userMessage : styles.botMessage
            }
          >
            {msg.text}
          </div>
        ))}
        {loading && <div className={styles.loading}>Carregando...</div>}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Digite sua mensagem..."
        className={styles.input}
      />
      <button
        onClick={sendMessage}
        className={styles.sendButton}
        disabled={loading}
      >
        Enviar
      </button>
    </div>
  );
};

export default ChatBox;
