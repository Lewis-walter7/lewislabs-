"use client";

import { motion } from "framer-motion";

interface NotesAppProps {
    onBack: () => void;
    isDarkMode: boolean;
}

export default function NotesApp({ onBack, isDarkMode }: NotesAppProps) {
    return (
        <div className="flex flex-col h-full bg-gradient-to-b from-yellow-50 to-yellow-100 text-gray-800 relative">
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-yellow-200/50">
                <button onClick={onBack} className="text-orange-600 hover:text-orange-700 text-xl">
                    ←
                </button>
                <div className="font-bold text-yellow-900">Notes</div>
                <div className="w-6"></div>
            </div>

            {/* Note Content */}
            <div className="flex-1 p-6 overflow-y-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                >
                    {/* Title */}
                    <div className="font-bold text-2xl mb-6 border-b-2 border-yellow-400 pb-2" style={{ fontFamily: 'Bradley Hand, cursive' }}>
                        Project Checklist
                    </div>

                    {/* Checklist Items */}
                    <div className="space-y-3 text-lg" style={{ fontFamily: 'Bradley Hand, cursive' }}>
                        <div className="flex items-start gap-3">
                            <span className="text-green-600 text-2xl">✓</span>
                            <span>Fast developer</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-green-600 text-2xl">✓</span>
                            <span>Clean, modern code</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-green-600 text-2xl">✓</span>
                            <span>Bug-free guarantee</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-green-600 text-2xl">✓</span>
                            <span>On-time delivery</span>
                        </div>
                        <div className="flex items-start gap-3 mt-6 pt-4 border-t-2 border-yellow-400">
                            <span className="text-2xl">→</span>
                            <span className="font-bold">Lewis Labs ✨</span>
                        </div>
                    </div>

                    {/* Footer Note */}
                    <div className="mt-8 pt-4 border-t border-yellow-400 text-sm text-gray-600 italic">
                        "The best code is code that just works."
                    </div>
                </motion.div>
            </div>

            {/* Paper texture effect */}
            <div className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
                }}
            ></div>
        </div>
    );
}
