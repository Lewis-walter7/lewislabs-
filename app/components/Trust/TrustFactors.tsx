import { motion } from "framer-motion";

const guarantees = [
    {
        title: "Bug-Free Warranty",
        description: "If you find a bug within 30 days of launch, we fix it for free. No questions asked. We write tests, not excuses.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /></svg>
        )
    },
    {
        title: "100% Performance",
        description: "We guarantee a Google Lighthouse score of 90+ on desktop. Your site will be faster than 99% of the internet.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
        )
    },
    {
        title: "On-Time Delivery",
        description: "We respect deadlines. If we miss our agreed launch date, you get a discount for every day we're late.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
        )
    }
];

export default function TrustFactors() {
    return (
        <section className="py-24 px-6 relative border-t border-white/5 grid-background">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none"></div>
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        We take the <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">Risk</span>, you get the <span className="text-white">Reward</span>.
                    </h2>
                    <p className="text-xl text-muted max-w-2xl mx-auto">
                        Most agencies overpromise and underdeliver. We put our money where our mouth is with ironclad guarantees.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {guarantees.map((item, i) => (
                        <div key={i} className="glass !bg-black p-8 rounded-2xl border border-white/5 hover:border-green-500/30 transition-colors group relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center mb-6 border border-green-500/20 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-muted leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-muted">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Verified by independent audits
                    </div>
                </div>
            </div>
        </section>
    );
}
