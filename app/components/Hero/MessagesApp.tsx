"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
    id: number;
    text: string;
    sender: "lewis" | "user";
    delay: number;
}

const script: Message[] = [
    { id: 1, text: "Hey! 👋 I saw you checking out the site.", sender: "lewis", delay: 500 },
    { id: 2, text: "Need a high-performance web app?", sender: "lewis", delay: 1500 },
    { id: 3, text: "I build the kind of software that scales. Fast.", sender: "lewis", delay: 3000 },
    { id: 4, text: "Let's chat. Check out the 'Start Project' button below! 🚀", sender: "lewis", delay: 5000 },
];

interface MessagesAppProps {
    onBack: () => void;
    isDarkMode: boolean;
}

export default function MessagesApp({ onBack, isDarkMode }: MessagesAppProps) {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let timeouts: NodeJS.Timeout[] = [];

        script.forEach((msg) => {
            // Typing indicator before message
            const typeTimeout = setTimeout(() => {
                setIsTyping(true);
            }, msg.delay - 1000);

            // Show message
            const msgTimeout = setTimeout(() => {
                setIsTyping(false);
                setMessages((prev) => [...prev, msg]);
            }, msg.delay);

            timeouts.push(typeTimeout, msgTimeout);
        });

        return () => timeouts.forEach(clearTimeout);
    }, []);

    useEffect(() => {
        // Scroll to bottom within the container, not the page
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    return (
        <div className={`flex flex-col h-full relative ${isDarkMode ? 'bg-white text-black' : 'bg-gray-900 text-white'}`}>
            {/* Header */}
            <div className={`flex items-center gap-3 p-4 border-b backdrop-blur-md sticky top-0 z-10 ${isDarkMode ? 'border-gray-100 bg-white/80' : 'border-gray-700 bg-gray-800/80'
                }`}>
                <button onClick={onBack} className={`text-xl ${isDarkMode ? 'text-gray-600 hover:text-gray-800' : 'text-gray-400 hover:text-gray-200'}`}>
                    ←
                </button>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
                    L
                </div>
                <div className="flex-1">
                    <div className="font-bold text-sm">Lewis</div>
                    <div className={`text-[10px] ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>Active now</div>
                </div>
            </div>

            {/* Messages Area */}
            <div ref={messagesContainerRef} className={`flex-1 overflow-y-auto p-4 space-y-3 ${isDarkMode ? 'bg-gray-50/50' : 'bg-gray-800/50'}`}>
                {messages.map((msg) => (
                    <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                        <div
                            className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm shadow-sm ${msg.sender === "user"
                                    ? "bg-blue-500 text-white rounded-br-none"
                                    : isDarkMode
                                        ? "bg-white border border-gray-100 text-gray-800 rounded-bl-none"
                                        : "bg-gray-700 border border-gray-600 text-gray-100 rounded-bl-none"
                                }`}
                        >
                            {msg.text}
                        </div>
                    </motion.div>
                ))}

                {isTyping && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-start"
                    >
                        <div className={`px-4 py-3 rounded-2xl rounded-bl-none shadow-sm flex gap-1 ${isDarkMode ? 'bg-white border border-gray-100' : 'bg-gray-700 border border-gray-600'
                            }`}>
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                        </div>
                    </motion.div>
                )}
            </div>

            {/* Input Area (Visual only) */}
            <div className={`p-3 border-t ${isDarkMode ? 'border-gray-100 bg-white' : 'border-gray-700 bg-gray-800'}`}>
                <div className={`rounded-full px-4 py-2 text-sm cursor-not-allowed ${isDarkMode ? 'bg-gray-100 text-gray-400' : 'bg-gray-700 text-gray-500'}`}>
                    Type a message...
                </div>
            </div>
        </div>
    );
}
