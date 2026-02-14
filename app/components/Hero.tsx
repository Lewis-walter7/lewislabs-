import Link from "next/link";
import Scene from "./Hero3D/Scene";
import PhoneScreen from "./Hero/PhoneScreen";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* 3D Background */}
            <Scene />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-left">
                        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm animate-fade-in">
                            <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                Premium Digital Solutions
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 animate-fade-in delay-100">
                            Transform your ideas into <br />
                            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                                Digital Reality
                            </span>
                        </h1>

                        <p className="text-xl text-muted max-w-xl mb-12 animate-fade-in delay-200">
                            Lewis Labs is a boutique software studio crafting high-performance websites,
                            mobile apps, and digital experiences that define brands.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-300">
                            <Link
                                href="/start"
                                className="gradient-primary px-8 py-4 rounded-full text-white font-semibold text-lg hover:scale-105 transition-transform shadow-lg shadow-primary/25 text-center"
                            >
                                Start Project
                            </Link>
                            <Link
                                href="/work"
                                className="px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white font-semibold text-lg transition-colors text-center"
                            >
                                View Portfolio
                            </Link>
                        </div>
                    </div>

                    {/* Right Side - Phone */}
                    <div className="relative z-20 animate-fade-in delay-500 flex justify-center lg:block mt-12 lg:mt-0">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10"></div>
                        <PhoneScreen />
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 text-white">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
            </div>
        </section >
    );
}
