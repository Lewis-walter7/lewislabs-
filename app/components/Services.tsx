export default function Services() {
    const services = [
        {
            title: "Web Development",
            description: "Custom, high-performance web applications built with Next.js, React, and modern backend architectures.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            ),
            glow: "hover:shadow-primary/10"
        },
        {
            title: "Android App Dev",
            description: "Robust and feature-rich native Android applications developed with Kotlin for a seamless mobile experience.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
            ),
            glow: "hover:shadow-secondary/10"
        },
        {
            title: "iOS App Development",
            description: "High-end iOS applications developed with Swift and SwiftUI, focusing on performance and Apple's design principles.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M12 20.94c1.88-1.55 3.74-3.08 5.1-4.04 1.82-1.28 2.9-2.27 2.9-4.15 0-2.21-1.79-4-4-4-1.45 0-2.73.78-3.5 1.95-.77-1.17-2.05-1.95-3.5-1.95-2.21 0-4 1.79-4 4 0 1.88 1.08 2.87 2.9 4.15 1.36.96 3.22 2.49 5.1 4.04z"></path></svg>
            ),
            glow: "hover:shadow-accent/10"
        },
        {
            title: "Game Development",
            description: "Immersive 2D and 3D gaming experiences using industry-leading engines like Unity or Unreal Engine.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect x="2" y="6" width="20" height="12" rx="2"></rect><path d="M6 12h4"></path><path d="M8 10v4"></path><circle cx="15" cy="10" r="1"></circle><circle cx="18" cy="12" r="1"></circle></svg>
            ),
            glow: "hover:shadow-primary/10"
        },
        {
            title: "Video Editing",
            description: "Professional post-production, motion graphics, and cinematic storytelling to elevate your brand's narrative.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><path d="m22 8-6 4 6 4V8Z"></path><rect width="14" height="12" x="2" y="6" rx="2" ry="2"></rect></svg>
            ),
            glow: "hover:shadow-secondary/10"
        },
        {
            title: "UI/UX Design",
            description: "User-centric interface designs that prioritize aesthetics and usability to drive engagement and conversions.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
            ),
            glow: "hover:shadow-accent/10"
        },
        {
            title: "SEO Optimization",
            description: "Data-driven SEO strategies designed to improve search rankings, drive organic traffic, and maximize online visibility.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
            ),
            glow: "hover:shadow-primary/10"
        },
        {
            title: "Web Maintenance",
            description: "Comprehensive support and maintenance services to ensure your digital products remain secure, fast, and up-to-date.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
            ),
            glow: "hover:shadow-secondary/10"
        },
        {
            title: "Software Solutions",
            description: "Bespoke digital architecture and automation tools designed to solve complex business challenges efficiently.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            ),
            glow: "hover:shadow-accent/10"
        }
    ];

    return (
        <section id="services" className="py-32 relative overflow-hidden grid-background">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                            data-cursor="plus"
                            className={`glass !bg-black p-8 rounded-[2.5rem] border-white/5 hover:border-white/10 transition-all duration-500 group cursor-pointer relative overflow-hidden animate-fade-in ${service.glow}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
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
