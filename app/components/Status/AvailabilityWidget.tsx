"use client";

import { motion } from "framer-motion";

export default function AvailabilityWidget() {
    const capacity = 85; // 85% full

    return (
        <div className="glass p-6 rounded-2xl border border-white/10 h-full flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-muted text-sm uppercase tracking-widest font-bold">Current Status</h3>
                <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-green-400 text-xs font-bold">OPERATIONAL</span>
                </div>
            </div>

            <div>
                <div className="flex justify-between text-sm mb-2">
                    <span className="text-white">March Capacity</span>
                    <span className="text-primary font-mono">{capacity}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${capacity}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-green-500 to-primary"
                    />
                </div>
                <p className="text-xs text-muted mt-3">
                    Limited slots remaining for Q1. <br />
                    <span className="text-white hover:underline cursor-pointer">Book a consultation</span> to secure your timeline.
                </p>
            </div>
        </div>
    );
}
