"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface SettingsAppProps {
    onBack: () => void;
    isDarkMode: boolean;
    onThemeChange: (dark: boolean) => void;
}

export default function SettingsApp({ onBack, isDarkMode, onThemeChange }: SettingsAppProps) {
    const [soundEnabled, setSoundEnabled] = useState(true);

    const ToggleSwitch = ({ enabled, onToggle }: { enabled: boolean; onToggle: () => void }) => (
        <button
            onClick={onToggle}
            className={`relative w-12 h-7 rounded-full transition-colors ${enabled ? 'bg-green-500' : 'bg-gray-600'
                }`}
        >
            <motion.div
                className="absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-md"
                animate={{ left: enabled ? '22px' : '2px' }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
        </button>
    );

    const SettingRow = ({ icon, label, value, onClick }: any) => (
        <div
            onClick={onClick}
            className={`flex items-center justify-between p-4 border-b cursor-pointer ${isDarkMode
                    ? 'bg-white/5 border-white/10 active:bg-white/10'
                    : 'bg-white border-gray-200 active:bg-gray-50'
                }`}
        >
            <div className="flex items-center gap-3">
                <div className="text-2xl">{icon}</div>
                <div className={isDarkMode ? 'text-white' : 'text-gray-800'}>{label}</div>
            </div>
            {value}
        </div>
    );

    return (
        <div className={`flex flex-col h-full relative ${isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'}`}>
            {/* Header */}
            <div className={`flex items-center gap-3 p-4 border-b ${isDarkMode ? 'border-white/10' : 'border-gray-300'}`}>
                <button onClick={onBack} className="text-blue-500 hover:text-blue-400 text-xl">
                    ←
                </button>
                <div className="font-bold text-xl">Settings</div>
            </div>

            {/* Settings List */}
            <div className="flex-1 overflow-y-auto">
                {/* Game Settings Section */}
                <div className={`p-4 text-xs uppercase tracking-wider ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Game Settings</div>
                <SettingRow
                    icon="🔊"
                    label="Sound Effects"
                    value={<ToggleSwitch enabled={soundEnabled} onToggle={() => setSoundEnabled(!soundEnabled)} />}
                />

                {/* Appearance Section */}
                <div className={`p-4 text-xs uppercase tracking-wider ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Appearance</div>
                <SettingRow
                    icon="🌙"
                    label="Dark Mode"
                    value={<ToggleSwitch enabled={isDarkMode} onToggle={() => onThemeChange(!isDarkMode)} />}
                />

                {/* About Section */}
                <div className={`p-4 text-xs uppercase tracking-wider ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>About</div>
                <div className={`p-6 mx-4 rounded-xl border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-300 shadow-sm'}`}>
                    <div className="text-center mb-4">
                        <div className="text-4xl mb-2">📱</div>
                        <div className="font-bold text-lg">Lewis Labs Phone</div>
                        <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Version 1.0.0</div>
                    </div>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Developer</span>
                            <span>Lewis Labs</span>
                        </div>
                        <div className="flex justify-between">
                            <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Contact</span>
                            <a href="mailto:hello@lewislabs.com" className="text-blue-400 hover:underline">
                                Email
                            </a>
                        </div>
                        <div className="flex justify-between">
                            <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Portfolio</span>
                            <a href="https://github.com/Lewis-walter7" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className={`p-4 text-center text-xs mt-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                    Built with ❤️ by Lewis Labs
                </div>
            </div>
        </div>
    );
}
