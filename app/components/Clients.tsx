export default function Clients() {
    const clients = [
        { name: "PhoneMallExpress", logo: "TF" },
        { name: "CityBossMotors", logo: "NX" },
        { name: "CityBossRealtors", logo: "AX" },
        { name: "MobiTower", logo: "ST" },
        { name: "Nick Arts Studio", logo: "VX" },
        { name: "Orbit", logo: "OR" },
    ];

    return (
        <section className="py-20 border-b border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <p className="text-center text-sm font-semibold text-muted uppercase tracking-[0.2em]">
                    Trusted by Innovative Teams
                </p>
            </div>

            <div className="relative flex overflow-hidden">
                <div className="animate-marquee flex items-center gap-12 md:gap-20">
                    {[...clients, ...clients].map((client, index) => (
                        <div key={index} className="flex items-center gap-3 transition-all opacity-40 grayscale hover:opacity-100 hover:grayscale-0 cursor-default group whitespace-nowrap">
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center font-bold text-white border border-white/10 group-hover:border-primary/50 transition-all">
                                {client.logo}
                            </div>
                            <span className="text-xl font-bold outfit">{client.name}</span>
                        </div>
                    ))}
                </div>

                {/* Fades for smooth transition edge-to-edge */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
            </div>
        </section>
    );
}
