"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import QuoteCalculator from "./Calculator/QuoteCalculator";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [showCalculator, setShowCalculator] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when clicking a link
    const closeMobileMenu = () => setMobileMenuOpen(false);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    const navLinks = [
        { href: "/#services", label: "Services" },
        { href: "/work", label: "Portfolio" },
        { href: "/about", label: "About" },
        { href: "/status", label: "Status", hasIndicator: true },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-6"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`glass rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-300 bg-black/80 backdrop-blur-md border border-white/10 ${scrolled ? "shadow-2xl" : ""
                        }`}>
                        <Link href="/" className="flex items-center gap-3 relative z-[60]">
                            <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-lg border border-white/10">
                                <Image
                                    src="/logo.png"
                                    alt="Lewis Labs Logo"
                                    fill
                                    unoptimized
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-2xl font-bold tracking-tighter outfit hidden sm:block">
                                Lewis<span className="text-muted">Labs</span>
                            </span>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-10 text-sm font-semibold">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`text-muted hover:text-white transition-colors ${link.hasIndicator ? 'flex items-center gap-2' : ''}`}
                                >
                                    {link.hasIndicator && <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>}
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/start"
                                className="gradient-primary px-6 py-2.5 rounded-full text-white hover:scale-105 transition-all shadow-lg shadow-primary/30"
                            >
                                Get a Quote
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden text-white relative z-[60]"
                            aria-label="Toggle mobile menu"
                        >
                            <motion.div
                                animate={mobileMenuOpen ? "open" : "closed"}
                                className="w-6 h-6 flex flex-col justify-center items-center"
                            >
                                <motion.span
                                    variants={{
                                        closed: { rotate: 0, y: -4 },
                                        open: { rotate: 45, y: 0 }
                                    }}
                                    className="w-6 h-0.5 bg-white block transition-all origin-center"
                                />
                                <motion.span
                                    variants={{
                                        closed: { opacity: 1 },
                                        open: { opacity: 0 }
                                    }}
                                    className="w-6 h-0.5 bg-white block my-1 transition-all"
                                />
                                <motion.span
                                    variants={{
                                        closed: { rotate: 0, y: 4 },
                                        open: { rotate: -45, y: 0 }
                                    }}
                                    className="w-6 h-0.5 bg-white block transition-all origin-center"
                                />
                            </motion.div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeMobileMenu}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                        />

                        {/* Slide-in Menu */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                            className="fixed top-0 right-0 bottom-0 w-[280px] bg-black/95 backdrop-blur-xl border-l border-white/10 z-50 md:hidden overflow-y-auto"
                        >
                            <div className="flex flex-col h-full pt-24 px-6 pb-8">
                                {/* Navigation Links */}
                                <nav className="flex-1 space-y-2">
                                    {navLinks.map((link, index) => (
                                        <motion.div
                                            key={link.href}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={closeMobileMenu}
                                                className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted hover:text-white hover:bg-white/5 transition-all text-base font-semibold"
                                            >
                                                {link.hasIndicator && (
                                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                                )}
                                                {link.label}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>

                                {/* CTA Button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <Link
                                        href="/start"
                                        onClick={closeMobileMenu}
                                        className="block w-full gradient-primary px-6 py-4 rounded-xl text-white text-center font-bold shadow-lg shadow-primary/30"
                                    >
                                        Get a Quote
                                    </Link>
                                </motion.div>

                                {/* Footer Info */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="mt-8 pt-6 border-t border-white/10 space-y-3"
                                >
                                    <a
                                        href="tel:+254702075876"
                                        className="flex items-center gap-3 text-muted hover:text-white transition-colors text-sm"
                                        onClick={closeMobileMenu}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                        </svg>
                                        <span className="font-mono">+254 702 075 876</span>
                                    </a>
                                    <div className="flex gap-4 pt-2">
                                        <a
                                            href="https://www.linkedin.com/in/lewisindusa12/"
                                            target="_blank"
                                            className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:bg-white/10 transition-all"
                                            onClick={closeMobileMenu}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted">
                                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
                                            </svg>
                                        </a>
                                        <a
                                            href="https://wa.me/+254702075876"
                                            target="_blank"
                                            className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:bg-white/10 transition-all"
                                            onClick={closeMobileMenu}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted">
                                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {showCalculator && <QuoteCalculator onClose={() => setShowCalculator(false)} />}
        </>
    );
}
