"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, User, Bot, Sparkles, RotateCcw } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Message {
    id: string;
    text: string;
    sender: "user" | "bot";
    timestamp: Date;
}

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Initial greeting if no messages
    const DEFAULT_MESSAGE: Message = {
        id: "1",
        text: "Hi there! I'm your Lewis Labs assistant. How can I help you build something amazing today?",
        sender: "bot",
        timestamp: new Date(),
    };

    // Hydrate from localStorage
    useEffect(() => {
        const saved = localStorage.getItem("lewis_labs_chat_history");
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                // Convert string timestamps back to Date objects
                const hydrated = parsed.map((msg: any) => ({
                    ...msg,
                    timestamp: new Date(msg.timestamp)
                }));
                setMessages(hydrated.length > 0 ? hydrated : [DEFAULT_MESSAGE]);
            } catch (e) {
                console.error("Failed to parse chat history:", e);
                setMessages([DEFAULT_MESSAGE]);
            }
        } else {
            setMessages([DEFAULT_MESSAGE]);
        }
    }, []);

    // Sync to localStorage
    useEffect(() => {
        if (messages.length > 0) {
            localStorage.setItem("lewis_labs_chat_history", JSON.stringify(messages));
        }
    }, [messages]);

    const clearHistory = () => {
        if (confirm("Clear chat history?")) {
            localStorage.removeItem("lewis_labs_chat_history");
            setMessages([DEFAULT_MESSAGE]);
        }
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!inputValue.trim() || isTyping) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: "user",
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue("");
        setIsTyping(true);

        try {
            const apiMessages = messages.map(msg => ({
                role: msg.sender === "user" ? "user" : "assistant",
                content: msg.text
            }));
            apiMessages.push({ role: "user", content: inputValue });

            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: apiMessages }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.details || errorData.error || "Failed to get response");
            }

            const data = await response.json();
            const botMessage: Message = {
                id: Date.now().toString(),
                text: data.message?.content || "I'm sorry, I couldn't process that. Please try again or contact us directly.",
                sender: "bot",
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error("Chat Error:", error);
            const errorMessage: Message = {
                id: Date.now().toString(),
                text: "Sorry, I'm having trouble connecting right now. Please try again later.",
                sender: "bot",
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="w-[90vw] md:w-[400px] h-[600px] max-h-[80vh] bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/10 bg-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                                    <Sparkles className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-sm">Lewis Assistant</h3>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="text-[10px] text-white/40 uppercase tracking-widest font-medium">Online</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={clearHistory}
                                    title="Clear History"
                                    className="p-2 hover:bg-white/5 rounded-full text-white/40 hover:text-white transition-colors"
                                >
                                    <RotateCcw className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-white/5 rounded-full text-white/40 hover:text-white transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, x: msg.sender === "user" ? 10 : -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed overflow-hidden ${msg.sender === "user"
                                            ? "bg-primary text-white rounded-tr-none shadow-lg shadow-primary/20"
                                            : "bg-white/5 border border-white/10 text-white rounded-tl-none prose prose-invert prose-sm max-w-none"
                                            }`}
                                    >
                                        {msg.sender === "user" ? (
                                            msg.text
                                        ) : (
                                            <ReactMarkdown
                                                remarkPlugins={[remarkGfm]}
                                                components={{
                                                    table: ({ node, ...props }) => (
                                                        <div className="overflow-x-auto my-4 rounded-lg border border-white/10">
                                                            <table className="min-w-full divide-y divide-white/10 bg-white/5" {...props} />
                                                        </div>
                                                    ),
                                                    thead: ({ node, ...props }) => <thead className="bg-white/10" {...props} />,
                                                    th: ({ node, ...props }) => <th className="px-4 py-2 text-left text-xs font-semibold text-primary uppercase tracking-wider" {...props} />,
                                                    td: ({ node, ...props }) => <td className="px-4 py-2 border-t border-white/5 text-xs text-white/80" {...props} />,
                                                    ul: ({ node, ...props }) => <ul className="list-disc ml-4 my-2 space-y-1" {...props} />,
                                                    ol: ({ node, ...props }) => <ol className="list-decimal ml-4 my-2 space-y-1" {...props} />,
                                                    li: ({ node, ...props }) => <li className="text-white/80" {...props} />,
                                                    p: ({ node, ...props }) => <p className="mb-2 last:mb-0" {...props} />,
                                                    strong: ({ node, ...props }) => <strong className="text-primary font-bold" {...props} />,
                                                }}
                                            >
                                                {msg.text}
                                            </ReactMarkdown>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="flex justify-start"
                                >
                                    <div className="bg-white/5 border border-white/10 text-white p-4 rounded-2xl rounded-tl-none flex gap-1 items-center">
                                        <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
                                        <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                                        <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-6 border-t border-white/10 bg-black/20">
                            <div className="relative flex items-center gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                                    placeholder="Type a message..."
                                    disabled={isTyping}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/50 transition-all placeholder:text-white/20 disabled:opacity-50"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!inputValue.trim() || isTyping}
                                    className="p-3 bg-primary rounded-xl text-white hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100 shadow-lg shadow-primary/30"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-300 ${isOpen ? "bg-white/10 text-white border border-white/20" : "gradient-primary text-white shadow-primary/30"
                    }`}
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
            </motion.button>
        </div>
    );
}
