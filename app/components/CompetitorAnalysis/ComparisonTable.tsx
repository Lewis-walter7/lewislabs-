"use client";

import { motion } from "framer-motion";

const features = [
    {
        name: "Delivery Time",
        sub: "From concept to launch",
        lewis: "2-4 Weeks",
        agency: "3-6 Months",
        freelance: "Unpredictable",
    },
    {
        name: "Code Quality",
        sub: "Scalability & Performance",
        lewis: "Enterprise-Grade",
        agency: "Often Outsourced",
        freelance: "Hit or Miss",
    },
    {
        name: "Design",
        sub: "Visual Impact",
        lewis: "World-Class 3D/Motion",
        agency: "Generic Templates",
        freelance: "Basic / Standard",
    },
    {
        name: "Risk Guarantee",
        sub: "Safety for your investment",
        lewis: "100% Money-Back",
        agency: "None",
        freelance: "None",
    },
    {
        name: "Post-Launch",
        sub: "Support & Updates",
        lewis: "Dedicated Partner",
        agency: "Hourly Billing $$$",
        freelance: "Often Ghosted",
    },
];

const CheckIcon = () => (
    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 shadow-[0_0_15px_rgba(74,222,128,0.3)]">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
    </div>
);

const CrossIcon = () => (
    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/20">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
    </div>
);

export default function ComparisonTable() {
    return (
        <div className="relative">
            {/* Background Glow for the Winner Column */}
            <div className="absolute top-0 left-1/4 w-1/4 h-full bg-primary/5 blur-3xl -z-10 rounded-full hidden md:block"></div>

            <div className="overflow-x-auto pb-4">
                <table className="w-full text-left border-separate border-spacing-0 min-w-[800px]">
                    <thead>
                        <tr>
                            <th className="p-6 text-sm font-medium text-muted w-[30%] border-b border-white/5 bg-black/20 backdrop-blur-sm rounded-tl-2xl"></th>

                            {/* Lewis Labs Header - Pop out effect */}
                            <th className="p-6 relative w-[25%] border-t border-x border-white/10 bg-[#0A0A0A] rounded-t-2xl shadow-[0_-10px_40px_rgba(139,92,246,0.1)]">
                                <div className="absolute top-4 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-secondary px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider shadow-lg shadow-primary/25">
                                    Recommended
                                </div>
                                <div className="text-lg font-bold text-white text-center">
                                    Lewis Labs
                                </div>
                            </th>

                            <th className="p-6 text-lg font-semibold text-white/40 w-[22.5%] text-center border-b border-white/5 bg-black/20 backdrop-blur-sm">Traditional Agency</th>
                            <th className="p-6 text-lg font-semibold text-white/40 w-[22.5%] text-center border-b border-white/5 bg-black/20 backdrop-blur-sm rounded-tr-2xl">Freelancer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {features.map((feature, i) => (
                            <tr key={i} className="group">
                                {/* Feature Name */}
                                <td className={`p-4 border-b border-white/5 bg-black/20 backdrop-blur-sm group-hover:bg-white/[0.02] transition-colors ${i === features.length - 1 ? 'rounded-bl-2xl' : ''}`}>
                                    <div className="font-bold text-lg text-white mb-1">{feature.name}</div>
                                    <div className="text-xs text-muted font-mono uppercase tracking-wider">{feature.sub}</div>
                                </td>

                                {/* Lewis Labs Column - Highlighted */}
                                <td className={`p-4 border-x border-white/10 bg-[#0A0A0A] relative group-hover:bg-[#111] transition-colors ${i === features.length - 1 ? 'rounded-b-2xl border-b' : ''}`}>
                                    {/* Glowing visual for the cell */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                                    <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center">
                                        <CheckIcon />
                                        <span className="font-bold text-white text-lg leading-tight">
                                            {feature.lewis}
                                        </span>
                                    </div>
                                </td>

                                {/* Agency Column */}
                                <td className={`p-4 border-b border-white/5 bg-black/20 backdrop-blur-sm text-center group-hover:bg-white/[0.02] transition-colors`}>
                                    <div className="flex flex-col items-center justify-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                        <CrossIcon />
                                        <span className="text-muted font-medium">
                                            {feature.agency}
                                        </span>
                                    </div>
                                </td>

                                {/* Freelancer Column */}
                                <td className={`p-4 border-b border-white/5 bg-black/20 backdrop-blur-sm text-center group-hover:bg-white/[0.02] transition-colors ${i === features.length - 1 ? 'rounded-br-2xl' : ''}`}>
                                    <div className="flex flex-col items-center justify-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                        <CrossIcon />
                                        <span className="text-muted font-medium">
                                            {feature.freelance}
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
