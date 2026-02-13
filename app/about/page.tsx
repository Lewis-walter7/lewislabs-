import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
    return (
        <main className="min-h-screen bg-black selection:bg-primary/30 selection:text-white">
            <Navbar />

            <section className="relative pb-14 pt-24 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -z-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="animate-fade-in max-w-4xl">
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold outfit leading-[1.1] mb-8 tracking-tight">
                            Crafting Digital <span className="gradient-text">Excellence</span> <br /> Through Pure Engineering
                        </h1>
                        <p className="text-xl md:text-2xl text-muted leading-relaxed font-light mb-12">
                            Lewis Labs is a boutique software studio dedicated to building high-performance digital products. We merge technical precision with artistic design to create industry-leading experiences.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 border-y border-white/5 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { label: "Years of Experience", value: "5+" },
                            { label: "Projects Completed", value: "120+" },
                            { label: "Completion Rate", value: "100%" },
                            { label: "Happy Clients", value: "50+" }
                        ].map((stat, idx) => (
                            <div key={idx} className="text-center animate-fade-in" style={{ animationDelay: `${0.1 * idx}s` }}>
                                <div className="text-5xl md:text-6xl font-bold outfit gradient-text mb-2">{stat.value}</div>
                                <div className="text-muted text-sm uppercase tracking-widest font-semibold">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="animate-fade-in">
                            <h2 className="text-4xl md:text-5xl font-bold outfit mb-8">Our <span className="gradient-text">Philosophy</span></h2>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
                                    <p className="text-muted leading-relaxed text-lg font-light italic border-l-2 border-primary pl-6">
                                        "To empower forward-thinking brands by delivering bespoke software solutions that aren't just functional, but exceptional. We believe every line of code is an opportunity to create something beautiful and impactful."
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
                                    <p className="text-muted leading-relaxed text-lg font-light">
                                        To be the go-to partner for premium software development and design, recognized globally for our commitment to quality, innovation, and user-centricity.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            {[
                                { title: "Precision", desc: "We obsess over the details, ensuring every pixel and interaction is intentional.", icon: "🎯" },
                                { title: "Innovation", desc: "We embrace the latest technologies to solve complex problems in unique ways.", icon: "🚀" },
                                { title: "Transparency", desc: "We build trust through clear communication and honest collaboration.", icon: "🤝" }
                            ].map((value, idx) => (
                                <div key={idx} className="glass p-8 rounded-[2rem] border-white/5 animate-fade-in flex gap-6 items-start group hover:bg-white/[0.05] transition-all" style={{ animationDelay: `${0.2 + (0.1 * idx)}s` }}>
                                    <div className="text-4xl">{value.icon}</div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{value.title}</h3>
                                        <p className="text-muted leading-relaxed text-sm">{value.desc}</p>
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
