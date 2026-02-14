"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import QuoteCalculator from "./Calculator/QuoteCalculator";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [showCalculator, setShowCalculator] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-6"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`glass rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-300 bg-black/80 backdrop-blur-md border border-white/10 ${scrolled ? "shadow-2xl" : ""
                        }`}>
                        <Link href="/" className="flex items-center gap-3">
                            <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-lg border border-white/10">
                                <Image
                                    src="/logo.png"
                                    alt="Lewis Labs Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-2xl font-bold tracking-tighter outfit hidden sm:block">
                                Lewis<span className="text-muted">Labs</span>
                            </span>
                        </Link>

                        <div className="hidden md:flex items-center gap-10 text-sm font-semibold">
                            <Link href="/#services" className="text-muted hover:text-white transition-colors">Services</Link>
                            <Link href="/work" className="text-muted hover:text-white transition-colors">Portfolio</Link>
                            <Link href="/about" className="text-muted hover:text-white transition-colors">About</Link>
                            <Link href="/dashboard-demo" className="text-muted hover:text-white transition-colors">Portal</Link>
                            <Link href="/status" className="flex items-center gap-2 text-muted hover:text-white transition-colors">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                Status
                            </Link>
                            <Link
                                href="/start"
                                className="gradient-primary px-6 py-2.5 rounded-full text-white hover:scale-105 transition-all shadow-lg shadow-primary/30"
                            >
                                Get a Quote
                            </Link>
                        </div>
                        <button className="md:hidden text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
                        </button>
                    </div>
                </div>
            </nav>
            {showCalculator && <QuoteCalculator onClose={() => setShowCalculator(false)} />}
        </>
    );
}
