"use client";

import { useState } from "react";

export default function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const askChatbot = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setAnswer("");

    try {
      const response = await fetch("/api/askChatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();
      setAnswer(data.answer || "No response received.");
    } catch (error) {
      console.error("Error asking chatbot:", error);
      setAnswer("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
      setQuestion("");
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700"
        aria-label="Open Chat"
      >
        💬
      </button>

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-16 right-4 bg-white w-80 shadow-lg rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Chatbot</h2>
            <button
              onClick={toggleChat}
              className="text-gray-600 hover:text-gray-800"
              aria-label="Close Chat"
            >
              ✖
            </button>
          </div>
          <div className="overflow-y-auto max-h-48 mb-4">
            {answer && <p className="bg-gray-100 p-2 rounded">{answer}</p>}
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 border rounded p-2"
            />
            <button
              onClick={askChatbot}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              disabled={loading}
            >
              {loading ? "..." : "Send"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
