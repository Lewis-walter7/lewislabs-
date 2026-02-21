import Footer from "../components/Footer";
import Link from "next/link";

export default function About() {
    return (
        <main className="min-h-screen bg-black grid-background selection:bg-primary/30 selection:text-white overflow-x-hidden">

            {/* Hero Section */}
            <section className="relative pb-20 pt-32 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-primary/20 via-secondary/10 to-transparent rounded-full blur-[120px] -z-10"></div>
                <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] -z-10"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="inline-block mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm animate-fade-in">
                            <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                About Lewis Labs
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold outfit leading-[1.1] mb-8 tracking-tight animate-fade-in delay-100">
                            Crafting Digital{" "}
                            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                                Excellence
                            </span>
                            <br />
                            Through Pure Engineering
                        </h1>

                        <p className="text-xl md:text-2xl text-muted leading-relaxed font-light mb-12 max-w-3xl mx-auto animate-fade-in delay-200">
                            Lewis Labs is a boutique software studio dedicated to building high-performance digital products. We merge technical precision with artistic design to create industry-leading experiences.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-300">
                            <Link
                                href="/start"
                                className="gradient-primary px-8 py-4 rounded-full text-white font-semibold text-lg hover:scale-105 transition-transform shadow-lg shadow-primary/25"
                            >
                                Start Your Project
                            </Link>
                            <Link
                                href="/work"
                                className="px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white font-semibold text-lg transition-colors"
                            >
                                View Our Work
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent border-y border-white/5"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        {[
                            { label: "Years of Experience", value: "5+", color: "from-violet-500 to-purple-500" },
                            { label: "Projects Completed", value: "120+", color: "from-blue-500 to-cyan-500" },
                            { label: "Completion Rate", value: "100%", color: "from-emerald-500 to-green-500" },
                            { label: "Happy Clients", value: "50+", color: "from-pink-500 to-rose-500" }
                        ].map((stat, idx) => (
                            <div
                                key={idx}
                                className="text-center group animate-fade-in"
                                style={{ animationDelay: `${0.1 * idx}s` }}
                            >
                                <div className={`text-5xl md:text-6xl lg:text-7xl font-bold outfit mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform`}>
                                    {stat.value}
                                </div>
                                <div className="text-muted text-xs md:text-sm uppercase tracking-widest font-semibold">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-32 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                        {/* Left: Mission & Vision */}
                        <div className="space-y-12">
                            <div className="animate-fade-in">
                                <h2 className="text-4xl md:text-5xl font-bold outfit mb-3">
                                    Our{" "}
                                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                        Philosophy
                                    </span>
                                </h2>
                                <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mb-12"></div>
                            </div>

                            <div className="glass p-8 rounded-3xl border-white/5 hover:bg-white/[0.03] transition-all animate-fade-in delay-100">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl">
                                        🎯
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Our Mission</h3>
                                    </div>
                                </div>
                                <p className="text-muted leading-relaxed text-base font-light pl-16">
                                    "To empower forward-thinking brands by delivering bespoke software solutions that aren't just functional, but exceptional. We believe every line of code is an opportunity to create something beautiful and impactful."
                                </p>
                            </div>

                            <div className="glass p-8 rounded-3xl border-white/5 hover:bg-white/[0.03] transition-all animate-fade-in delay-200">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center text-2xl">
                                        🚀
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Our Vision</h3>
                                    </div>
                                </div>
                                <p className="text-muted leading-relaxed text-base font-light pl-16">
                                    To be the go-to partner for premium software development and design, recognized globally for our commitment to quality, innovation, and user-centricity.
                                </p>
                            </div>
                        </div>

                        {/* Right: Core Values */}
                        <div className="space-y-6">
                            <div className="mb-8 animate-fade-in">
                                <h3 className="text-3xl font-bold outfit mb-3">Core Values</h3>
                                <p className="text-muted text-sm">The principles that guide everything we do</p>
                            </div>

                            {[
                                {
                                    title: "Precision",
                                    desc: "We obsess over the details, ensuring every pixel and interaction is intentional.",
                                    icon: "🎯",
                                    gradient: "from-violet-500/10 to-purple-500/10"
                                },
                                {
                                    title: "Innovation",
                                    desc: "We embrace the latest technologies to solve complex problems in unique ways.",
                                    icon: "💡",
                                    gradient: "from-blue-500/10 to-cyan-500/10"
                                },
                                {
                                    title: "Transparency",
                                    desc: "We build trust through clear communication and honest collaboration.",
                                    icon: "🤝",
                                    gradient: "from-emerald-500/10 to-green-500/10"
                                }
                            ].map((value, idx) => (
                                <div
                                    key={idx}
                                    className={`glass p-6 rounded-2xl border-white/5 hover:border-white/10 transition-all group cursor-pointer animate-fade-in bg-gradient-to-br ${value.gradient}`}
                                    style={{ animationDelay: `${0.3 + (0.1 * idx)}s` }}
                                >
                                    <div className="flex gap-5 items-start">
                                        <div className="text-4xl group-hover:scale-110 transition-transform">
                                            {value.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                                {value.title}
                                            </h3>
                                            <p className="text-muted leading-relaxed text-sm">
                                                {value.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
