import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const footerLinks = {
        services: [
            { name: "Web Development", href: "/#services" },
            { name: "iOS App Development", href: "/#services" },
            { name: "Android App Dev", href: "/#services" },
            { name: "Game Development", href: "/#services" },
            { name: "Video Editing", href: "/#services" },
            { name: "UI/UX Design", href: "/#services" },
            { name: "Software Solutions", href: "/#services" },
            { name: "SEO Optimization", href: "/#services" },
            { name: "Web Maintenance", href: "/#services" },
        ],
        company: [
            { name: "About Us", href: "/about" },
            { name: "Portfolio", href: "/work" },
            { name: "Contact", href: "/#contact" },
        ],
        resources: [
            { name: "Get Quote", href: "/start" },
            { name: "System Status", href: "/status" },
            { name: "GitHub", href: "https://github.com/Lewis-walter7" },
            { name: "LinkedIn", href: "https://www.linkedin.com/in/lewisindusa12/" },
        ],
    };

    return (
        <footer className="pt-6 pb-6 border-t border-white/5 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-16 mb-20">
                    {/* Brand Column */}
                    <div className="col-span-2 lg:col-span-2">
                        <Link href="/" className="flex items-center gap-3 mb-8">
                            <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-lg border border-white/10">
                                <Image
                                    src="/logo.png"
                                    alt="Lewis Labs Logo"
                                    fill
                                    unoptimized
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-2xl font-bold tracking-tighter outfit">
                                Lewis<span className="text-muted">Labs</span>
                            </span>
                        </Link>
                        <p className="text-muted max-w-sm mb-6 leading-relaxed font-light">
                            Engineering premium digital products with precision and purpose. Lewis Labs is a boutique software studio dedicated to technical excellence and user-centric design.
                        </p>
                        <a href="tel:+254702075876" className="flex items-center gap-3 text-muted hover:text-white transition-colors mb-8 group">
                            <div className="w-10 h-10 rounded-xl glass flex items-center justify-center group-hover:bg-white/10">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-primary">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                            </div>
                            <span className="font-mono text-sm">+254 702 075 876</span>
                        </a>
                        <div className="flex gap-4">
                            <Link href="https://www.linkedin.com/in/lewisindusa12/" target="_blank" className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-white/10 transition-all group">
                                <span className="sr-only">LinkedIn</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted group-hover:text-primary"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </Link>
                            <Link href="https://wa.me/+254702075876" target="_blank" className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-white/10 transition-all group">
                                <span className="sr-only">WhatsApp</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted group-hover:text-green-400"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z"></path></svg>
                            </Link>
                        </div>
                    </div>

                    {/* Links Columns - Side by side on mobile */}
                    <div className="col-span-1">
                        <h4 className="text-white font-bold mb-6 outfit uppercase text-xs tracking-[0.2em]">Services</h4>
                        <ul className="space-y-4">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-muted hover:text-white transition-colors text-sm font-light italic">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 outfit uppercase text-xs tracking-[0.2em]">Company</h4>
                        <ul className="space-y-4">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-muted hover:text-white transition-colors text-sm font-light italic">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-2 md:col-span-1">
                        <h4 className="text-white font-bold mb-6 outfit uppercase text-xs tracking-[0.2em]">Resources</h4>
                        <ul className="space-y-4">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-muted hover:text-white transition-colors text-sm font-light italic">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-muted uppercase tracking-widest font-semibold">
                    <p>© {new Date().getFullYear()} Lewis Labs. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
