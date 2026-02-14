"use client";

import { motion } from "framer-motion";

const phases = [
    { name: "Discovery", status: "completed", date: "Jan 10 - Jan 24" },
    { name: "Design", status: "completed", date: "Jan 25 - Feb 14" },
    { name: "Development", status: "active", date: "Feb 15 - Mar 10" },
    { name: "QA & Testing", status: "pending", date: "Mar 11 - Mar 20" },
    { name: "Launch", status: "pending", date: "Mar 25" },
];

export default function ProjectTimeline() {
    return (
        <div className="glass p-6 rounded-2xl border border-white/10 mb-6 relative overflow-hidden">
            <h3 className="text-muted text-sm uppercase tracking-widest font-bold mb-6">Phase Timeline</h3>

            <div className="relative">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 rounded-full"></div>
                <div className="absolute top-1/2 left-0 h-1 bg-primary/30 -translate-y-1/2 rounded-full" style={{ width: '50%' }}></div>

                <div className="relative z-10 flex justify-between">
                    {phases.map((phase, i) => (
                        <div key={i} className="flex flex-col items-center group">
                            <div className={`w-4 h-4 rounded-full border-4 transition-all duration-300 z-10 
                            ${phase.status === 'completed' ? 'bg-primary border-primary scale-125' :
                                    phase.status === 'active' ? 'bg-black border-primary scale-150 shadow-[0_0_15px_rgba(var(--primary),0.5)]' :
                                        'bg-black border-white/20'}`}
                            >
                                {phase.status === 'active' && <div className="absolute inset-0 rounded-full animate-ping bg-primary opacity-50"></div>}
                            </div>
                            <div className="mt-4 text-center">
                                <div className={`text-sm font-bold ${phase.status === 'active' ? 'text-primary' : phase.status === 'completed' ? 'text-white' : 'text-muted'}`}>
                                    {phase.name}
                                </div>
                                <div className="text-xs text-muted mt-1 opacity-0 group-hover:opacity-100 transition-opacity absolute w-32 left-1/2 -translate-x-1/2 bg-black px-2 py-1 rounded border border-white/10">
                                    {phase.date}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
