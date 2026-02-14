"use client";

export default function WorldMap() {
    // Coordinates for "clients" (approximate styling on a 100% width/height background)
    const locations = [
        { name: "New York", top: "35%", left: "25%" },
        { name: "London", top: "25%", left: "48%" },
        { name: "Berlin", top: "28%", left: "52%" },
        { name: "Tokyo", top: "38%", left: "88%" },
        { name: "Sydney", top: "75%", left: "90%" },
        { name: "Sao Paulo", top: "65%", left: "30%" },
    ];

    return (
        <div className="lg:col-span-2 glass p-8 rounded-2xl border border-white/10 h-[300px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-[length:100%] bg-no-repeat bg-center opacity-20 contrast-200 grayscale group-hover:opacity-30 transition-opacity duration-700"></div>

            <div className="relative z-10 w-full h-full pointer-events-none">
                <h3 className="text-2xl font-bold mb-2">Global Reach</h3>
                <p className="text-muted mb-6">Active projects in <span className="text-white font-bold">{locations.length} Regions</span></p>

                {/* Render Dots */}
                {locations.map((loc, i) => (
                    <div
                        key={i}
                        className="absolute w-3 h-3 group-hover:scale-125 transition-transform duration-300"
                        style={{ top: loc.top, left: loc.left }}
                    >
                        <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" style={{ animationDelay: `${i * 0.5}s` }}></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>

                        {/* Tooltip on hover (needs pointer-events-auto on parent container if we interaction) */}
                    </div>
                ))}
            </div>
        </div>
    );
}
