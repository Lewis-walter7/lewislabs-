import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative pb-14 pt-24 overflow-hidden">
            <div className="hero-glow top-0 left-1/2 -translate-x-1/2 opacity-20"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 animate-fade-in text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-white/5 text-xs font-bold text-primary mb-8">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Accepting new projects
                        </div>
                        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold outfit leading-[1] mb-6 tracking-tight">
                            Engineering <span className="gradient-text">Premium</span> Digital Products
                        </h1>
                        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed font-light">
                            We specialize in custom web applications, native Android development, and bespoke UI/UX designs that elevate your brand.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">
                            <button className="w-full sm:w-auto gradient-primary px-10 py-5 rounded-3xl font-bold text-white shadow-2xl shadow-primary/40 hover:scale-105 transition-transform text-lg">
                                Explore Services
                            </button>
                            <button className="w-full sm:w-auto glass glass-hover px-10 py-5 rounded-3xl font-bold text-white border-white/10 hover:bg-white/5 transition-all text-lg">
                                View Portfolio
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <div className="relative w-full aspect-square max-w-lg mx-auto">
                            {/* Abstract decorative elements */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>

                            <div className="glass rounded-[2rem] p-8 border-white/10 relative overflow-hidden h-full flex flex-col justify-center gap-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold">Modern Tech Stack</h3>
                                        <p className="text-sm text-text-muted">Next.js, Tailwind, TypeScript</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold">Android Native</h3>
                                        <p className="text-sm text-text-muted">Kotlin, Jetpack Compose</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold">UI/UX Excellence</h3>
                                        <p className="text-sm text-text-muted">Figma, Framer Motion</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
