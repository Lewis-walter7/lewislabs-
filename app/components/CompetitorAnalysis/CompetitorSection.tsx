"use client";

import ComparisonTable from "./ComparisonTable";

export default function CompetitorSection() {
    return (
        <section className="py-24 px-6 bg-black relative">
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Stop Guessing. <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Start Winning.</span>
                    </h2>
                    <p className="text-xl text-muted max-w-2xl mx-auto">
                        See why leading brands and startups choose Lewis Labs significantly faster delivery, superior quality, and zero risk.
                    </p>
                </div>

                <div className="glass rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-primary/5">
                    <ComparisonTable />
                </div>

                <div className="mt-8 text-center">
                    <p className="text-sm text-muted">
                        *Comparison based on average industry standards for custom software development.
                    </p>
                </div>
            </div>
        </section>
    );
}
