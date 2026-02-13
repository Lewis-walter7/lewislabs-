export default function Services() {
    const services = [
        {
            title: "Web Development",
            description: "Custom, high-performance web applications built with Next.js, React, and modern backend architectures.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            ),
            glow: "hover:shadow-purple-500/10"
        },
        {
            title: "Android App Dev",
            description: "Robust and feature-rich native Android applications developed with Kotlin for a seamless mobile experience.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
            ),
            glow: "hover:shadow-blue-500/10"
        },
        {
            title: "UI/UX Design",
            description: "User-centric interface designs that prioritize aesthetics and usability to drive engagement and conversions.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
            ),
            glow: "hover:shadow-rose-500/10"
        },
        {
            title: "SEO Optimization",
            description: "Data-driven SEO strategies designed to improve search rankings, drive organic traffic, and maximize online visibility.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
            ),
            glow: "hover:shadow-orange-500/10"
        },
        {
            title: "Web Maintenance",
            description: "Comprehensive support and maintenance services to ensure your digital products remain secure, fast, and up-to-date.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
            ),
            glow: "hover:shadow-cyan-500/10"
        },
        {
            title: "Software Solutions",
            description: "Bespoke digital architecture and automation tools designed to solve complex business challenges efficiently.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            ),
            glow: "hover:shadow-green-500/10"
        }
    ];

    return (
        <section id="services" className="py-32 bg-black/50 relative border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20 animate-fade-in">
                    <h2 className="text-4xl md:text-6xl font-bold outfit mb-6">Our <span className="gradient-text">Expertise</span></h2>
                    <p className="text-lg text-muted max-w-2xl mx-auto font-light">
                        We combine high-end engineering with artistic design to deliver digital products that define industries.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`glass glass-hover p-10 rounded-[2.5rem] border-white/5 transition-all duration-500 group ${service.glow} shadow-2xl shadow-transparent animate-fade-in`}
                            style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                        >
                            <div className="w-16 h-16 rounded-[1.5rem] bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-muted text-base leading-relaxed font-light">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
