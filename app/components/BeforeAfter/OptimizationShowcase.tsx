import Slider from "./Slider";

export default function OptimizationShowcase() {
    // Using placeholder images for demo purposes. 
    // Ideally, these would be actual screenshots of a "Before" vs "After" site.
    const beforeImage = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop&grayscale"; // Boring/Matrix code
    const afterImage = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"; // Vibrant/Tech

    return (
        <section className="py-24 px-6 bg-black relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                    <div className="inline-block mb-4 px-4 py-1 rounded-full border border-white/10 bg-white/5">
                        <span className="text-sm font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Optimization Impact
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        From outdated to <br />
                        <span className="text-white">outstanding.</span>
                    </h2>

                    <p className="text-lg text-muted mb-8 leading-relaxed">
                        Slow websites cost money. We don't just visually upgrade your site; we rebuild the engine.
                        Our optimizations typically result in:
                    </p>

                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-bold">98</div>
                            <span className="text-white font-medium">Google Performance Score</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                            </div>
                            <span className="text-white font-medium">Sub-Second Load Times</span>
                        </li>
                    </ul>
                </div>

                <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-purple-600 rounded-3xl opacity-30 blur-lg"></div>
                    <Slider
                        beforeImage={beforeImage}
                        afterImage={afterImage}
                        beforeLabel="Legacy Site"
                        afterLabel="Lewis Labs V2"
                    />
                </div>
            </div>
        </section>
    );
}
