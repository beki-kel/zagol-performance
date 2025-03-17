"use client";

import React, { useState, useRef, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faQuestionCircle,
  faEllipsisV,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

// Extend message type for typing indicator
interface Message {
  sender: string;
  text: string;
  isTyping?: boolean;
}
interface ChatSupportProps {
  mobileVisible?: boolean;
  onClose?: () => void;
}

const ChatSupport: React.FC<ChatSupportProps> = ({
  mobileVisible,
  onClose,
}) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  // New ref for messages container
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom every time messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  const handleSendMessage = () => {
    if (input.trim()) {
      // Append user's message
      setMessages((prev) => [...prev, { sender: "user", text: input }]);
      setInput("");
      // After a delay, simulate bot response with animated typing icon
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "", isTyping: true },
        ]);
      }, 100);
    }
  };

  // Update FAQ handler to also simulate bot loading response
  const handleFAQ = (question: string) => {
    setMessages((prev) => [...prev, { sender: "user", text: question }]);
    // Simulate bot loading response after a short delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "", isTyping: true },
      ]);
    }, 1000);
  };

  // New functionality for options
  const handleNewChat = () => {
    setMessages([]);
    setShowOptions(false);
  };

  const handleDeleteLast = () => {
    setMessages((prev) => prev.slice(0, -2));
    setShowOptions(false);
  };

  return (
    <>
      {/* Chat Popover: show if mobileVisible OR internal isChatOpen */}
      {(isChatOpen || mobileVisible) && (
        <div className="realtive">
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm"></div>
          <div className=" fixed bottom-0 right-0 w-[100vw] lg:w-[50vw] h-[100vh] bg-gradient-to-br from-white/30 to-white dark:from-[#1e1e1e]/10 dark:to-[#2e2e2e] shadow-2xl z-[1200] flex flex-col backdrop-blur-2xl  transform transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(41,149,211,0.3)]">
            <div className="flex justify-between items-center p-2 mb-2 border-b border-[#2995D3]/10 dark:border-[#444] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#2995D3]/10 to-transparent dark:from-[#1e1e1e]/10 opacity-30 rounded-t-lg" />
              <h3 className="text-lg font-bold text-neutral-200  dark:text-neutral-100 z-10">
                Ask Zagol{" "}
                <p className="text-sm font-thin text-neutral-200 ">
                  {" "}
                  Get AI-powered help
                </p>
              </h3>
              {/* New options container next to cancel icon */}
              <div className="relative flex items-center space-x-10 z-10 ">
                {/* Customer Service Section */}
                <div className="hidden lg:flex items-start justify-start p-2 bg-gray-100/30 dark:bg-gray-800 rounded-md mx-4 my-2 ">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="h-5 w-5 text-[#2995D3] mr-2"
                  />
                  <span
                    className="text-sm text-neutral-900 dark:text-neutral-100 cursor-pointer"
                    title="Call this short no; we will be there to help you"
                    onClick={() => {
                      navigator.clipboard.writeText("123-456-7890");
                      alert("Phone number copied to clipboard");
                    }}
                  >
                    123-456-7890
                  </span>
                </div>
                <button
                  onClick={() => setShowOptions((prev) => !prev)}
                  className="text-xl text-neutral-900 dark:text-neutral-100 hover:text-[#1e7bb5] dark:hover:text-[#2995D3] transition-colors"
                >
                  <FontAwesomeIcon icon={faEllipsisV} />
                </button>
                <button
                  onClick={() => {
                    if (mobileVisible && onClose) {
                      onClose();
                    } else {
                      toggleChat();
                    }
                  }}
                  className="text-2xl text-neutral-900 dark:text-neutral-100 hover:text-[#1e7bb5] dark:hover:text-[#2995D3] transition-colors"
                >
                  &times;
                </button>
                {showOptions && (
                  <div className="absolute top-10 right-5 w-32 text-center flex flex-col items-center justify-center bg-white dark:bg-gray-700 shadow-lg rounded-lg z-20">
                    <button
                      onClick={handleNewChat}
                      className="block py-2 w-full  text-sm text-neutral-900 dark:text-neutral-100 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      New Chat
                    </button>
                    <div className="border-b w-full"></div>
                    <button
                      onClick={handleDeleteLast}
                      className="block py-2 w-full text-sm text-neutral-900 dark:text-neutral-100 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      Delete Last Message
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* FAQ Section */}

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* Bot Initial Message */}
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <DotLottieReact
                    src="https://lottie.host/a5a400f7-c268-47c3-9256-76ee58ef657e/VeQUxCxp8E.lottie"
                    loop
                    autoplay
                  />
                </div>
                <div className="relative flex flex-col max-w-[75%] p-4 bg-gradient-to-br from-[#2995D3] to-[#1e7bb5] text-white rounded-2xl shadow-md before:absolute before:-inset-1 before:bg-gradient-to-r before:from-[#2995D3]/30 before:to-transparent before:rounded-2xl before:animate-shine">
                  <p className="text-sm font-medium">
                    Hey! How can I help you today?
                  </p>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="py-1 lg:px-16">
                <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                  <div
                    onClick={() =>
                      handleFAQ(
                        "Can you show me the available flights departing from Addis Ababa to Bahirdar?"
                      )
                    }
                    className="p-3 bg-white/30 shadow-sm rounded-lg hover:shadow-md cursor-pointer text-sm font-thin text-neutral-700 flex items-center"
                  >
                    <FontAwesomeIcon
                      icon={faQuestionCircle}
                      className="h-6 w-6 mr-2 text-[#2995D3]"
                    />
                    Can you show me the available flights departing from Addis
                    Ababa to Bahirdar?
                  </div>
                  <div
                    onClick={() =>
                      handleFAQ(
                        "Can you Recommend me the best hotels in Addis Ababa?"
                      )
                    }
                    className="p-3 bg-white/30 shadow-sm rounded-lg hover:shadow-md cursor-pointer text-sm font-thin text-neutral-700 flex items-center"
                  >
                    <FontAwesomeIcon
                      icon={faQuestionCircle}
                      className="h-6 w-6 mr-2 text-[#2995D3]"
                    />
                    Can you Recommend me the best hotels in Addis Ababa?
                  </div>
                  <div
                    onClick={() =>
                      handleFAQ(
                        "What is the flight cancellation policy at Zagol?"
                      )
                    }
                    className="p-3 bg-white/30 shadow-sm rounded-lg hover:shadow-md cursor-pointer text-sm font-thin text-neutral-700 flex items-center"
                  >
                    <FontAwesomeIcon
                      icon={faQuestionCircle}
                      className="h-6 w-6 mr-2 text-[#2995D3]"
                    />
                    What are the flight cancellation policies at Zagol?
                  </div>
                  <div
                    onClick={() =>
                      handleFAQ(
                        "What services can I get from Zagol? Tell me about it."
                      )
                    }
                    className="p-3 bg-white/30 shadow-sm rounded-lg hover:shadow-md cursor-pointer text-sm font-thin text-neutral-700 flex items-center"
                  >
                    <FontAwesomeIcon
                      icon={faQuestionCircle}
                      className="h-6 w-6 mr-2 text-[#2995D3]"
                    />
                    What services can I get from Zagol? Tell me about it.
                  </div>
                </div>
              </div>

              {/* Render Messages */}
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`relative max-w-[75%]  rounded-2xl  ${
                      msg.sender === "user"
                        ? "p-4 shadow-md  bg-gradient-to-br from-[#b6bec3] to-[#adcadc] text-white dark:from-[#444] dark:to-[#555]"
                        : ""
                    }`}
                  >
                    <div className="text-sm font-medium dark:text-neutral-100" />
                    {msg.isTyping ? (
                      <button className="w-16 h-16">
                        <DotLottieReact
                          src="https://lottie.host/a1c8d568-a307-4018-bb80-ea81b4b51df2/Me2u7u2n7z.lottie"
                          loop
                          autoplay
                        />
                      </button>
                    ) : (
                      <p className="text-sm relative z-10 dark:text-neutral-100">
                        {msg.text}
                      </p>
                    )}
                  </div>
                </div>
              ))}
              {/* Dummy div to scroll into view */}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area without animated gradient border */}
            <div className="p-4 pt-0 relative">
              <div className="flex items-center gap-1 backdrop-blur-sm rounded-xl px-2 py-1 shadow-inner border-b dark:border-none">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="block py-2.5 px-0 text-sm text-gray-900 dark:text-neutral-100 bg-transparent border-0 appearance-none dark:border-gray-600 dark:focus:border-[#2995D3] focus:outline-none focus:ring-0 focus:border-[#2995D3] peer w-[90%]"
                  placeholder="Type your message..."
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <button
                  onClick={handleSendMessage}
                  className="p-2 transition-all duration-300 hover:scale-105"
                >
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    className="w-7 h-7 text-[#2995D3]"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/*mobile view */}

      {/* Floating Action Button */}
      <div
        className={`w-20 h-20  ${
          isChatOpen
            ? "hidden"
            : "hidden lg:block fixed bottom-4 right-2 z-[1100]"
        }`}
      >
        <button
          onClick={toggleChat}
          className="w-14 h-14 p-2 bg-[#036ca8] rounded-full flex items-center justify-center shadow-lg focus:outline-none"
        >
          <DotLottieReact
            src="https://lottie.host/a5a400f7-c268-47c3-9256-76ee58ef657e/VeQUxCxp8E.lottie"
            loop
            autoplay
          />
        </button>
      </div>

      {/* Global Styling for Animated Gradient Border */}
      <style jsx global>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) rotate(15deg);
          }
          100% {
            transform: translateX(200%) rotate(15deg);
          }
        }
        .animate-shine {
          animation: shine 2s infinite;
        }
        /* Hide scrollbar for WebKit browsers */
        ::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        * {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
};

export default ChatSupport;
