"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface SupportStatus {
    isOpen: boolean;
    timeRemaining: number; // in milliseconds
    message: string;
    urgency: 'relaxed' | 'warning' | 'closed';
}

export default function SupportCountdown() {
    const [status, setStatus] = useState<SupportStatus | null>(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const OPEN_HOUR = 8;  // 8 AM EAT
    const CLOSE_HOUR = 20; // 8 PM EAT

    const getSupportStatus = (): SupportStatus => {
        // Get current time in EAT (UTC+3)
        const now = new Date();
        const eatTime = new Date(now.toLocaleString('en-US', { timeZone: 'Africa/Nairobi' }));
        const hour = eatTime.getHours();
        const minutes = eatTime.getMinutes();

        if (hour >= OPEN_HOUR && hour < CLOSE_HOUR) {
            // Support is open
            const closeTime = new Date(eatTime);
            closeTime.setHours(CLOSE_HOUR, 0, 0, 0);
            const diffMs = closeTime.getTime() - eatTime.getTime();

            const hoursRemaining = Math.floor(diffMs / (1000 * 60 * 60));
            const minutesRemaining = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

            const urgency = diffMs < 2 * 60 * 60 * 1000 ? 'warning' : 'relaxed'; // Less than 2 hours = warning

            return {
                isOpen: true,
                timeRemaining: diffMs,
                message: `Closes in ${hoursRemaining}h ${minutesRemaining}m`,
                urgency
            };
        } else {
            // Support is closed
            const openTime = new Date(eatTime);
            if (hour < OPEN_HOUR) {
                openTime.setHours(OPEN_HOUR, 0, 0, 0);
            } else {
                openTime.setDate(openTime.getDate() + 1);
                openTime.setHours(OPEN_HOUR, 0, 0, 0);
            }
            const diffMs = openTime.getTime() - eatTime.getTime();

            const hoursRemaining = Math.floor(diffMs / (1000 * 60 * 60));
            const minutesRemaining = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

            return {
                isOpen: false,
                timeRemaining: diffMs,
                message: `Opens in ${hoursRemaining}h ${minutesRemaining}m`,
                urgency: 'closed'
            };
        }
    };

    useEffect(() => {
        // Initial status
        setStatus(getSupportStatus());

        // Update every second
        const interval = setInterval(() => {
            setStatus(getSupportStatus());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    if (!status || !isVisible) return null;

    const colors = {
        relaxed: {
            bg: 'from-emerald-500/20 to-green-500/20',
            border: 'border-emerald-500/30',
            text: 'text-emerald-400',
            icon: '🟢'
        },
        warning: {
            bg: 'from-yellow-500/20 to-orange-500/20',
            border: 'border-yellow-500/30',
            text: 'text-yellow-400',
            icon: '🟡'
        },
        closed: {
            bg: 'from-red-500/20 to-gray-500/20',
            border: 'border-red-500/30',
            text: 'text-red-400',
            icon: '🔴'
        }
    };

    const currentColor = colors[status.urgency];

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                className="fixed bottom-6 left-6 z-[100] hidden md:block"
                onMouseEnter={() => setIsExpanded(true)}
                onMouseLeave={() => setIsExpanded(false)}
            >
                <motion.div
                    className={`glass backdrop-blur-xl rounded-2xl border ${currentColor.border} bg-gradient-to-br ${currentColor.bg} shadow-2xl overflow-hidden`}
                    animate={{
                        scale: status.urgency === 'warning' ? [1, 1.02, 1] : 1
                    }}
                    transition={{
                        duration: 2,
                        repeat: status.urgency === 'warning' ? Infinity : 0,
                        ease: "easeInOut"
                    }}
                >
                    <Link
                        href={status.isOpen ? "https://wa.me/+254702075876" : "/#contact"}
                        target={status.isOpen ? "_blank" : "_self"}
                        className="block p-4 group"
                    >
                        <div className="flex items-center gap-3">
                            {/* Icon */}
                            <motion.div
                                animate={{
                                    scale: status.urgency === 'warning' ? [1, 1.1, 1] : 1
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: status.urgency === 'warning' ? Infinity : 0
                                }}
                                className="text-2xl"
                            >
                                {currentColor.icon}
                            </motion.div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                    <span className="font-bold text-sm text-white">
                                        {status.isOpen ? 'Support Available' : 'Support Closed'}
                                    </span>
                                    {status.isOpen && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="12"
                                            height="12"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-white group-hover:translate-x-0.5 transition-transform"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    )}
                                </div>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={status.message}
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 5 }}
                                        className={`text-xs font-mono ${currentColor.text} font-semibold`}
                                    >
                                        {status.message}
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Close button */}
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setIsVisible(false);
                                }}
                                className="text-white/40 hover:text-white/80 transition-colors"
                                aria-label="Close"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>

                        {/* Expanded view */}
                        <AnimatePresence>
                            {isExpanded && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                    animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
                                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="text-xs text-muted border-t border-white/10 pt-3">
                                        {status.isOpen ? (
                                            <p>Click to chat with us on WhatsApp →</p>
                                        ) : (
                                            <p>Support hours: 8 AM - 8 PM EAT</p>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Link>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
