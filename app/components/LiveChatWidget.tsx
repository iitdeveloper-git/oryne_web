"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LiveChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi! 👋 How can I help you today?",
      time: "Just now",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const quickReplies = [
    { icon: "💰", text: "Pricing Info" },
    { icon: "📅", text: "Book a Demo" },
    { icon: "🎓", text: "Features" },
    { icon: "💬", text: "Talk to Sales" },
  ];

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([
        ...messages,
        {
          type: "user",
          text: inputValue,
          time: "Just now",
        },
        {
          type: "bot",
          text: "Thanks for your message! Our team will get back to you shortly. 😊",
          time: "Just now",
        },
      ]);
      setInputValue("");
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              onClick={() => setIsOpen(true)}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-2xl flex items-center justify-center text-3xl cursor-pointer group"
            >
              {/* Pulsing rings */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="absolute inset-0 rounded-full bg-blue-500"
              />
              <motion.div
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.3, 0, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.5,
                }}
                className="absolute inset-0 rounded-full bg-purple-500"
              />

              {/* Icon */}
              <motion.span
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
                className="relative z-10"
              >
                💬
              </motion.span>

              {/* Notification badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 3, type: "spring" }}
                className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg"
              >
                1
              </motion.div>

              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="absolute right-full mr-3 whitespace-nowrap bg-secondary-900 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Chat with us! 👋
              </motion.div>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Chat Window */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200"
              style={{ maxHeight: "calc(100vh - 100px)" }}
            >
              {/* Header */}
              <motion.div
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-2xl border-2 border-white/30"
                  >
                    🤖
                  </motion.div>
                  <div>
                    <h3 className="text-white font-bold text-lg">
                      Oryne Support
                    </h3>
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{
                          scale: [1, 1.3, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                        }}
                        className="w-2 h-2 bg-green-400 rounded-full"
                      />
                      <span className="text-blue-100 text-xs">Online</span>
                    </div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                >
                  ✕
                </motion.button>
              </motion.div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex ${
                      message.type === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] ${
                        message.type === "user"
                          ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                          : "bg-white border border-gray-200 text-secondary-900"
                      } rounded-2xl px-4 py-3 shadow-md`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <span
                        className={`text-xs mt-1 block ${
                          message.type === "user"
                            ? "text-blue-100"
                            : "text-secondary-500"
                        }`}
                      >
                        {message.time}
                      </span>
                    </div>
                  </motion.div>
                ))}

                {/* Quick Replies */}
                {messages.length <= 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-2"
                  >
                    <p className="text-xs text-secondary-500 text-center mb-2">
                      Quick actions:
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {quickReplies.map((reply, index) => (
                        <motion.button
                          key={index}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            setMessages([
                              ...messages,
                              {
                                type: "user",
                                text: reply.text,
                                time: "Just now",
                              },
                              {
                                type: "bot",
                                text: `Great! Let me help you with ${reply.text}. 🎯`,
                                time: "Just now",
                              },
                            ]);
                          }}
                          className="bg-white border-2 border-gray-200 hover:border-blue-400 rounded-xl p-3 text-sm font-medium text-secondary-700 hover:text-blue-600 transition-all shadow-sm hover:shadow-md"
                        >
                          <div className="text-2xl mb-1">{reply.icon}</div>
                          {reply.text}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Input Area */}
              <motion.div
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                className="p-4 bg-white border-t border-gray-200"
              >
                <div className="flex gap-2">
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-sm"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSendMessage}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    <span className="text-xl">→</span>
                  </motion.button>
                </div>
                <p className="text-xs text-secondary-400 mt-2 text-center">
                  Avg response time: 2 minutes
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default LiveChatWidget;
