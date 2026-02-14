import Link from 'next/link';

const techStack = [
    {
        name: "Next.js",
        description: "The React Framework for production. We choose it for server-side rendering, SEO dominance, and blazing fast page loads.",
        icon: (
            <svg viewBox="0 0 180 180" fill="none" className="w-10 h-10 fill-current">
                <mask id="mask0_408_134" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
                    <circle cx="90" cy="90" r="90" fill="black" />
                </mask>
                <g mask="url(#mask0_408_134)">
                    <circle cx="90" cy="90" r="90" fill="black" stroke="white" strokeWidth="6" />
                    <path d="M149.508 157.527L69.143 54H54V125.351H64.209V69.9003L138.767 165.795C142.533 163.326 146.139 160.556 149.508 157.527Z" fill="white" />
                    <path d="M115 54V125.351H125.209V54H115Z" fill="white" />
                </g>
            </svg>
        )
    },
    {
        name: "React",
        description: "The library for web and native user interfaces. It allows us to build complex, interactive UI with reusable components.",
        icon: (
            <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-10 h-10 fill-current text-[#61DAFB]">
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
        name: "TypeScript",
        description: "JavaScript with syntax for types. It catches errors before they happen, ensuring your application is robust and bug-free.",
        icon: (
            <svg viewBox="0 0 128 128" className="w-10 h-10">
                <path fill="#007ACC" d="M2,0h124c1.1,0,2,0.9,2,2v124c0,1.1-0.9,2-2,2H2c-1.1,0-2-0.9-2-2V2C0,0.9,0.9,0,2,0z" />
                <path fill="#FFF" d="M66.6,104v-9.6h9c2,0,3.3-0.5,4-1.6c0.5-0.9,0.7-2.7,0.7-5.3c0-2-0.4-3.5-1.1-4.4c-0.7-0.9-2.2-1.8-4.5-2.6l-5.6-2c-3.7-1.3-6.4-2.9-8-4.7c-1.6-1.8-2.5-4.5-2.5-7.9c0-3.6,1.4-6.6,4.1-8.9c2.7-2.3,6.5-3.5,11.2-3.5c4.1,0,7.6,0.8,10.6,2.5s5,4,6.2,6.9l-8,3.6c-1-1.7-2.3-3-3.8-3.7c-1.4-0.8-3.2-1.1-5.1-1.1c-2.3,0-4,0.5-5.1,1.5c-1.1,1-1.6,2.3-1.6,4.1c0,1.8,0.4,3.1,1.1,4c0.8,0.9,2.4,1.8,4.8,2.7l5.3,1.9c4,1.4,6.8,3.2,8.4,5.2c1.6,2,2.4,4.9,2.4,8.6c0,3.8-1.4,6.9-4.3,9.2c-2.9,2.3-6.9,3.5-12.2,3.5c-4.9,0-8.9-1-12.1-3s-5.3-4.9-6.5-8.5l8.5-3.6c0.8,2.1,2.1,3.7,3.9,4.7C62.8,103.6,64.6,104,66.6,104z M106.1,104H95.4V54.4h35.9v9H106.1V104z" />
            </svg>
        )
    },
    {
        name: "Tailwind CSS",
        description: "A utility-first CSS framework. It enables us to rapidly build custom designs without fighting against layout defaults.",
        icon: (
            <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current text-[#38BDF8]">
                <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C10.337,13.382,8.976,12,6.001,12z" />
            </svg>
        )
    },
    {
        name: "Rust",
        description: "A language empowering everyone to build reliable and efficient software. Used for high-performance backend logic.",
        icon: (
            <svg viewBox="0 0 106 106" className="w-10 h-10 fill-current text-white">
                <path d="M69.75 87.75c-4.5 2.25-10.5 4.5-16.5 4.5-6 0-12-2.25-16.5-4.5l-6 10.5C36.75 101.25 45 105 53.25 105c8.25 0 16.5-3.75 22.5-6.75l-6-10.5z M101.25 58.5c0-4.5-2.25-7.5-6-9.75 1.5-6.75-1.5-14.25-8.25-16.5-1.5-2.25-3-5.25-5.25-6.75 3-7.5-3.75-15-11.25-13.5-3-2.25-5.25-4.5-8.25-6-4.5-8.25-18-5.25-19.5 5.25-4.5-.75-9-.75-13.5 0-1.5-9.75-15-13.5-19.5-5.25-3 1.5-5.25 3.75-8.25 6-7.5-1.5-14.25 6-11.25 13.5-2.25 1.5-3.75 4.5-5.25 6.75-6.75 2.25-9.75 9.75-8.25 16.5-6 2.25-6 5.25-6 9.75 0 8.25 6 15 15.75 15.75 3.75 12 18 19.5 29.25 19.5 11.25 0 25.5-7.5 29.25-19.5 9.75-.75 16.5-8.25 16.5-15.75zM22.5 59.25c-3-.75-5.25-3.75-5.25-6.75 0-3.75 3-6.75 6.75-6.75 3.75 0 6.75 3 6.75 6.75 0 3-3 6-8.25 6.75z m29.25 31.5c-9 0-19.5-5.25-23.25-13.5 3.75-6 10.5-8.25 17.25-8.25 0 0 1.5 6 6 6 4.5 0 6-6 6-6 7.5 0 14.25 2.25 17.25 8.25-3.75 8.25-13.5 13.5-23.25 13.5z m28.5-24c-3-.75-8.25-3.75-8.25-6.75 0-3.75 3-6.75 6.75-6.75 3.75 0 6.75 3 6.75 6.75 0 3-2.25 6-5.25 6.75z" />
            </svg>
        )
    },
    {
        name: "Framer Motion",
        description: "A production-ready motion library for React. Used for complex animations, gestures, and layout transitions.",
        icon: (
            <svg viewBox="0 0 14 21" className="w-10 h-10 fill-current text-white">
                <path d="M0 0h14v7H7L0 0zm0 7h7l7 7H0V7zm0 7h7l7 7H7v-7H0z" />
            </svg>
        )
    }
];

export default function TechMarquee() {
    return (
        <section className="py-20 overflow-hidden bg-black relative border-y border-white/5">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 mb-12 text-center relative z-20">
                <div className="inline-block mb-4 px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                    <span className="text-sm font-bold text-muted">Powering Your Success</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold">
                    Built with the <span className="text-white">World's Best Tech</span>.
                </h2>
            </div>

            <div className="flex animate-marquee hover:[animation-play-state:paused] w-max">
                {[...techStack, ...techStack, ...techStack].map((tech, i) => (
                    <div key={i} className="group relative mx-8 flex flex-col items-center justify-center cursor-pointer">
                        {/* Icon */}
                        <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-white group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                            {tech.icon}
                        </div>

                        {/* Label */}
                        <span className="mt-4 text-sm font-bold text-muted group-hover:text-white transition-colors">{tech.name}</span>

                        {/* Hover Card (Tooltip) */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 bg-[#0A0A0A] border border-white/20 p-4 rounded-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-50 pointer-events-none shadow-2xl shadow-primary/20">
                            <div className="text-xs font-bold text-primary mb-1 uppercase tracking-wider">Why we use it</div>
                            <p className="text-sm text-muted leading-relaxed">
                                {tech.description}
                            </p>
                            {/* Arrow */}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-white/20"></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
