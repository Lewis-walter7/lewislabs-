import Link from 'next/link';

const techGroups = [
    {
        title: "Frontend & Mobile",
        description: "Building immersive, high-performance user experiences.",
        items: [
            {
                name: "Next.js",
                description: "Server-side rendering for blazing fast page loads and SEO dominance.",
                icon: (
                    <svg viewBox="0 0 180 180" fill="none" className="w-8 h-8 fill-current">
                        <mask id="mask_next" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
                            <circle cx="90" cy="90" r="90" fill="black" />
                        </mask>
                        <g mask="url(#mask_next)">
                            <circle cx="90" cy="90" r="90" fill="black" stroke="white" strokeWidth="6" />
                            <path d="M149.508 157.527L69.143 54H54V125.351H64.209V69.9003L138.767 165.795C142.533 163.326 146.139 160.556 149.508 157.527Z" fill="white" />
                            <path d="M115 54V125.351H125.209V54H115Z" fill="white" />
                        </g>
                    </svg>
                )
            },
            {
                name: "React Native",
                description: "Native iOS and Android apps using a single, shared codebase.",
                icon: (
                    <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-8 h-8 fill-current text-[#61DAFB]">
                        <circle r="2.05" />
                        <g fill="none" stroke="currentColor" strokeWidth="1">
                            <ellipse rx="11" ry="4.2" />
                            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                        </g>
                    </svg>
                )
            },
            {
                name: "Tailwind CSS",
                description: "Utility-first styling for rapid, custom, and responsive designs.",
                icon: (
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-[#38BDF8]">
                        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C10.337,13.382,8.976,12,6.001,12z" />
                    </svg>
                )
            },
            {
                name: "Framer Motion",
                description: "Complex animations and gestures for a premium, app-like feel.",
                icon: (
                    <svg viewBox="0 0 14 21" className="w-8 h-8 fill-current text-white">
                        <path d="M0 0h14v7H7L0 0zm0 7h7l7 7H0V7zm0 7h7l7 7H7v-7H0z" />
                    </svg>
                )
            }
        ]
    },
    {
        title: "Backend & Core",
        description: "Robust, scalable server logic and data management.",
        items: [
            {
                name: "Node.js",
                description: "High-throughput asynchronous event-driven JavaScript runtime.",
                icon: (
                    <svg viewBox="0 0 32 32" className="w-8 h-8 fill-current text-[#68A063]">
                        <path d="M16 2.5l14 8v16l-14 8-14-8v-16z" stroke="currentColor" strokeWidth="2" fill="none" />
                        <circle cx="16" cy="16" r="4" fill="currentColor" />
                    </svg>
                )
            },
            {
                name: "Python (Django)",
                description: "Secure, rapid development for complex data processing and AI.",
                icon: (
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-[#3776AB]">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                        <path d="M11 7h2v6h-2zm0 8h2v2h-2z" />
                    </svg>
                )
            },
            {
                name: "PostgreSQL",
                description: "The world's most advanced open-source relational database.",
                icon: (
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-[#336791]">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41C17.92 5.77 20 8.65 20 12c0 2.08-.81 3.98-2.11 5.39z" />
                    </svg>
                )
            },
            {
                name: "Rust",
                description: "Systems programming for critical performance paths.",
                icon: (
                    <svg viewBox="0 0 106 106" className="w-8 h-8 fill-current text-white">
                        <path d="M69.75 87.75c-4.5 2.25-10.5 4.5-16.5 4.5-6 0-12-2.25-16.5-4.5l-6 10.5C36.75 101.25 45 105 53.25 105c8.25 0 16.5-3.75 22.5-6.75l-6-10.5z M101.25 58.5c0-4.5-2.25-7.5-6-9.75 1.5-6.75-1.5-14.25-8.25-16.5-1.5-2.25-3-5.25-5.25-6.75 3-7.5-3.75-15-11.25-13.5-3-2.25-5.25-4.5-8.25-6-4.5-8.25-18-5.25-19.5 5.25-4.5-.75-9-.75-13.5 0-1.5-9.75-15-13.5-19.5-5.25-3 1.5-5.25 3.75-8.25 6-7.5-1.5-14.25 6-11.25 13.5-2.25 1.5-3.75 4.5-5.25 6.75-6.75 2.25-9.75 9.75-8.25 16.5-6 2.25-6 5.25-6 9.75 0 8.25 6 15 15.75 15.75 3.75 12 18 19.5 29.25 19.5 11.25 0 25.5-7.5 29.25-19.5 9.75-.75 16.5-8.25 16.5-15.75zM22.5 59.25c-3-.75-5.25-3.75-5.25-6.75 0-3.75 3-6.75 6.75-6.75 3.75 0 6.75 3 6.75 6.75 0 3-3 6-8.25 6.75z m29.25 31.5c-9 0-19.5-5.25-23.25-13.5 3.75-6 10.5-8.25 17.25-8.25 0 0 1.5 6 6 6 4.5 0 6-6 6-6 7.5 0 14.25 2.25 17.25 8.25-3.75 8.25-13.5 13.5-23.25 13.5z m28.5-24c-3-.75-8.25-3.75-8.25-6.75 0-3.75 3-6.75 6.75-6.75 3.75 0 6.75 3 6.75 6.75 0 3-2.25 6-5.25 6.75z" />
                    </svg>
                )
            }
        ]
    },
    {
        title: "Cloud & Infrastructure",
        description: "Enterprise-grade hosting, scaling, and security.",
        items: [
            {
                name: "AWS",
                description: "Scalable cloud computing solutions for global reach.",
                icon: (
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-[#FF9900]">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41C17.92 5.77 20 8.65 20 12c0 2.08-.81 3.98-2.11 5.39z" />
                    </svg>
                )
            },
            {
                name: "Vercel",
                description: "Optimal hosting for Next.js, with global edge network.",
                icon: (
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-white">
                        <path d="M12 1L24 22H0L12 1Z" />
                    </svg>
                )
            },
            {
                name: "Docker",
                description: "Containerization for consistent deployment environments.",
                icon: (
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-[#2496ED]">
                        <path d="M4 10h4v4H4v-4zm0 5h4v4H4v-4zm-1-5H0v4h3v-4zm0 5H0v4h3v-4zm5-10h4v4H8V5zm5 0h4v4h-4V5zm5 0h4v4h-4V5zm-10 5h4v4h-4v-4zm5 0h4v4h-4v-4zm5 0h4v4h-4v-4z" />
                    </svg>
                )
            },
            {
                name: "Google Cloud",
                description: "Data analytics and machine learning infrastructure.",
                icon: (
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-[#4285F4]">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41C17.92 5.77 20 8.65 20 12c0 2.08-.81 3.98-2.11 5.39z" />
                    </svg>
                )
            }
        ]
    },
    {
        title: "CRM & ERP Integrations",
        description: "Seamlessly connecting your business operations.",
        items: [
            {
                name: "Salesforce",
                description: "Custom API integrations for enterprise CRM data sync.",
                icon: (
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-[#00A1E0]">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    </svg>
                )
            },
            {
                name: "HubSpot",
                description: "Marketing automation and lead tracking pipelines.",
                icon: (
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-[#FF7A59]">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    </svg>
                )
            },
            {
                name: "Shopify / ERP",
                description: "E-commerce inventory and order management systems.",
                icon: (
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-[#95BF47]">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    </svg>
                )
            },
            {
                name: "Stripe",
                description: "Secure payment processing and subscription billing.",
                icon: (
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-[#6772E5]">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    </svg>
                )
            }
        ]
    }
];

export default function TechGrid() {
    return (
        <section className="py-24 px-6 bg-black relative border-y border-white/5">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-20">
                <div className="text-center mb-16">
                    <div className="inline-block mb-4 px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                        <span className="text-sm font-bold text-muted">Technical Mastery</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Built with the <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">World's Best Tech</span>.
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {techGroups.map((group, i) => (
                        <div key={i} className="space-y-6">
                            <div className="border-l-4 border-primary/50 pl-6">
                                <h3 className="text-2xl font-bold text-white mb-2">{group.title}</h3>
                                <p className="text-muted">{group.description}</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {group.items.map((tech, j) => (
                                    <div key={j} className="group relative glass p-4 rounded-xl border border-white/5 hover:border-primary/50 hover:bg-white/5 transition-all duration-300">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-white/70 group-hover:text-white group-hover:scale-110 transition-transform">
                                                {tech.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white group-hover:text-primary transition-colors">{tech.name}</h4>
                                                <p className="text-xs text-muted mt-1 leading-relaxed">
                                                    {tech.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
