"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CameraAppProps {
    onBack: () => void;
    isDarkMode: boolean;
}

export default function CameraApp({ onBack, isDarkMode }: CameraAppProps) {
    const [photo, setPhoto] = useState(false);
    const [flash, setFlash] = useState(false);

    const takePhoto = () => {
        // Flash effect
        setFlash(true);
        setTimeout(() => setFlash(false), 200);

        // Show polaroid
        setTimeout(() => setPhoto(true), 300);
    };

    const deletePhoto = () => {
        setPhoto(false);
    };

    return (
        <div className={`flex flex-col h-full text-white relative ${isDarkMode ? 'bg-black' : 'bg-gray-900'
            }`}>
            {/* Flash Effect */}
            <AnimatePresence>
                {flash && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-white z-50"
                    />
                )}
            </AnimatePresence>

            {/* Header */}
            <div className="flex items-center justify-between p-4 z-10">
                <button onClick={onBack} className={`text-xl ${isDarkMode ? 'text-yellow-400 hover:text-yellow-300' : 'text-blue-400 hover:text-blue-300'
                    }`}>
                    ←
                </button>
                <div className="font-bold">Camera</div>
                <div className="w-6"></div>
            </div>

            {/* Viewfinder */}
            <div className="flex-1 relative overflow-hidden">
                {/* Grid overlay */}
                <div className="absolute inset-0 z-10 pointer-events-none grid grid-cols-3 grid-rows-3">
                    {[...Array(9)].map((_, i) => (
                        <div key={i} className="border border-white/20"></div>
                    ))}
                </div>

                {/* "Live view" - gradient + message */}
                <div className={`absolute inset-0 flex items-center justify-center ${isDarkMode
                        ? 'bg-gradient-to-br from-purple-900 via-blue-900 to-black'
                        : 'bg-gradient-to-br from-indigo-800 via-purple-800 to-gray-900'
                    }`}>
                    <div className="text-center space-y-4">
                        <div className="text-6xl">📸</div>
                        <div className="text-xl font-bold">Lewis Labs</div>
                        <div className="text-sm text-gray-400">Portfolio Snapshot</div>
                    </div>
                </div>

                {/* Polaroid Photo */}
                <AnimatePresence>
                    {photo && (
                        <motion.div
                            initial={{ opacity: 0, y: 100, scale: 0.5 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            className="absolute inset-0 flex items-center justify-center z-20 bg-black/80"
                            onClick={deletePhoto}
                        >
                            <div className="bg-white p-4 pb-16 shadow-2xl rotate-2">
                                <div className="w-56 h-56 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 flex items-center justify-center">
                                    <div className="text-center text-white space-y-2">
                                        <div className="text-4xl">✨</div>
                                        <div className="font-bold text-xl">Lewis Labs</div>
                                        <div className="text-xs">Premium Development</div>
                                    </div>
                                </div>
                                <div className="text-center mt-4 text-gray-700 font-handwriting text-sm">
                                    Tap to dismiss
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="p-8 flex items-center justify-center gap-8">
                <div className="w-12"></div>

                {/* Shutter Button */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={takePhoto}
                    className="w-20 h-20 rounded-full border-4 border-white bg-white/20 flex items-center justify-center"
                >
                    <div className="w-16 h-16 rounded-full bg-white"></div>
                </motion.button>

                <div className="w-12"></div>
            </div>
        </div>
    );
}
