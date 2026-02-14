"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BugSquasher() {
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30);
    const [isPlaying, setIsPlaying] = useState(false);
    const [activeBug, setActiveBug] = useState<number | null>(null);
    const [highScore, setHighScore] = useState(0);

    // Sound effects (optional/future)
    // const squashSound = useSound('/squash.mp3');

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isPlaying && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsPlaying(false);
            if (score > highScore) setHighScore(score);
            setActiveBug(null);
        }
        return () => clearInterval(timer);
    }, [isPlaying, timeLeft, score, highScore]);

    useEffect(() => {
        let bugTimer: NodeJS.Timeout;
        if (isPlaying) {
            const speed = Math.max(400, 1000 - score * 20); // Gets faster as you score
            bugTimer = setInterval(() => {
                const randomPos = Math.floor(Math.random() * 9);
                setActiveBug(randomPos);
            }, speed);
        }
        return () => clearInterval(bugTimer);
    }, [isPlaying, score]);

    const handleSquash = (index: number) => {
        if (index === activeBug) {
            setScore((prev) => prev + 1);
            setActiveBug(null); // Remove bug immediately
            // squashSound.play();
        } else {
            // Penalty for missing?
            setScore((prev) => Math.max(0, prev - 1));
        }
    };

    const startGame = () => {
        setScore(0);
        setTimeLeft(30);
        setIsPlaying(true);
    };

    return (
        <div className="flex flex-col h-full bg-[#1e1e2e] text-white p-4 relative overflow-hidden rounded-[2.5rem]">
            {/* Header */}
            <div className="flex justify-between items-center mb-4 z-10">
                <div className="bg-white/10 px-3 py-1 rounded-full text-xs font-mono">
                    Score: <span className="text-green-400 font-bold">{score}</span>
                </div>
                <div className="bg-white/10 px-3 py-1 rounded-full text-xs font-mono">
                    Time: <span className={`${timeLeft < 10 ? 'text-red-400 animate-pulse' : 'text-blue-400'} font-bold`}>{timeLeft}s</span>
                </div>
            </div>

            {/* Game Area */}
            <div className="grid grid-cols-3 gap-3 flex-1 content-center relative z-0">

                {[...Array(9)].map((_, i) => (
                    <button
                        key={i}
                        className="w-full aspect-square rounded-xl bg-white/5 border border-white/10 active:scale-95 transition-transform flex items-center justify-center relative overflow-hidden group"
                        onClick={() => handleSquash(i)}
                        disabled={!isPlaying}
                    >
                        <AnimatePresence>
                            {activeBug === i && (
                                <motion.div
                                    initial={{ scale: 0, rotate: 180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                    className="text-4xl filter drop-shadow-lg cursor-pointer"
                                >
                                    🐛
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                ))}
            </div>

            {/* Start/Game Over Overlay */}
            {!isPlaying && (
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-20 flex flex-col items-center justify-center p-6 text-center">
                    <h2 className="text-3xl font-black bg-gradient-to-br from-green-400 to-emerald-600 bg-clip-text text-transparent mb-2">
                        {timeLeft === 0 ? "GAME OVER" : "BUG BASH"}
                    </h2>

                    {timeLeft === 0 && (
                        <p className="text-muted mb-6">
                            You squashed <span className="text-white font-bold">{score}</span> bugs!
                            {score >= highScore && score > 0 && <span className="block text-yellow-400 text-xs mt-1">✨ New High Score!</span>}
                        </p>
                    )}

                    {!isPlaying && timeLeft === 30 && (
                        <p className="text-sm text-muted mb-6">
                            Tap the bugs before they disappear! <br />
                            We squash code bugs, you squash visual ones.
                        </p>
                    )}

                    <button
                        onClick={startGame}
                        className="px-8 py-3 bg-green-500 hover:bg-green-400 text-black font-bold rounded-full shadow-lg shadow-green-500/25 transition-all hover:scale-105"
                    >
                        {timeLeft === 0 ? "Play Again" : "Start Squashing"}
                    </button>
                </div>
            )}
        </div>
    );
}
