"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TicTacToe from "./TicTacToe";
import Image from "next/image";
import BugSquasher from "./BugSquasher";

type AppName = "TicTacToe" | "BugSquasher" | null;

export default function PhoneScreen() {
    const [activeApp, setActiveApp] = useState<AppName>(null);
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        };
        updateTime(); // Initial set
        const timer = setInterval(updateTime, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleOpenApp = (app: AppName) => {
        setActiveApp(app);
    };

    const handleHomeBoxClick = () => {
        setActiveApp(null);
    };

    return (
        <div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] border-8 border-[#333] shadow-2xl overflow-hidden mx-auto select-none">
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-8 z-50 flex justify-between items-center px-6">
                <div className="text-[10px] font-bold text-white">{time}</div>
                <div className="flex gap-1.5">
                    <div className="w-4 h-2.5 bg-white rounded-[2px]"></div>
                    <div className="w-0.5 h-2.5 bg-white/50 rounded-[1px]"></div>
                </div>
            </div>

            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-2xl z-50"></div>

            {/* Content Area */}
            <div className="w-full h-full pt-8 pb-4 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center relative group">

                {/* Interaction Hint */}
                <div className="absolute inset-0 z-40 bg-black/40 flex flex-col items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none">
                    <div className="bg-black/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 animate-bounce">
                        <span className="text-white font-bold text-sm">👆 Tap to Play!</span>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {!activeApp ? (
                        /* Home Screen */
                        <motion.div
                            key="home"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            className="grid grid-cols-4 gap-4 p-4 mt-8"
                        >
                            {/* TicTacToe Icon */}
                            <button
                                onClick={() => handleOpenApp("TicTacToe")}
                                className="flex flex-col items-center gap-1 group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-2xl shadow-lg border border-white/10 group-active:scale-95 transition-transform">
                                    🎮
                                </div>
                                <span className="text-[10px] text-white font-medium drop-shadow-md">TicTacToe</span>
                            </button>

                            {/* BugSquasher Icon */}
                            <button
                                onClick={() => handleOpenApp("BugSquasher")}
                                className="flex flex-col items-center gap-1 group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-700 flex items-center justify-center text-2xl shadow-lg border border-white/10 group-active:scale-95 transition-transform">
                                    🐛
                                </div>
                                <span className="text-[10px] text-white font-medium drop-shadow-md">Bug Bash</span>
                            </button>

                            {/* Placeholder Icons */}
                            {[...Array(2)].map((_, i) => (
                                <div key={i} className="flex flex-col items-center gap-1 opacity-50 grayscale cursor-not-allowed">
                                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-2xl border border-white/5">
                                        ?
                                    </div>
                                    <span className="text-[10px] text-white/50 font-medium">Coming Soon</span>
                                </div>
                            ))}

                        </motion.div>
                    ) : (
                        /* App View */
                        <motion.div
                            key="app"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="w-full h-full bg-black relative"
                        >
                            {/* Back/Home Indicator (in-app) */}
                            <button
                                onClick={handleHomeBoxClick}
                                className="absolute top-4 left-4 z-40 text-white/50 hover:text-white p-2"
                            >
                                ← Back
                            </button>

                            {activeApp === "TicTacToe" && <TicTacToe />}
                            {activeApp === "BugSquasher" && <BugSquasher />}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Bottom Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white rounded-full opacity-50 z-50 cursor-pointer hover:opacity-100 transition-opacity" onClick={handleHomeBoxClick}></div>
            </div>
        </div>
    );
}
