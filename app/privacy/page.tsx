"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
    const sections = [
        {
            title: "1. Information Collection",
            content: "We collect information you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with us through our AI chatbot. This may include your name, email address, and project details."
        },
        {
            title: "2. Use of Information",
            content: "We use the information we collect to provide, maintain, and improve our services, to communicate with you about your projects, and to develop new engineering solutions."
        },
        {
            title: "3. Data Sharing",
            content: "We do not sell your personal information. We may share information with trusted third-party service providers (such as Resend for email delivery or OpenAI/Ollama for chatbot functionality) only as necessary to provide our services."
        },
        {
            title: "4. Security",
            content: "We implement robust technical and organizational measures to protect your data. As a software engineering studio, we prioritize security-by-design in all our internal and client-facing systems."
        },
        {
            title: "5. Your Rights",
            content: "You have the right to access, update, or delete your personal information. If you wish to exercise these rights, please contact us at lewisindusa@gmail.com."
        }
    ];

    return (
        <main className="min-h-screen bg-black grid-background selection:bg-primary/30 selection:text-white overflow-x-hidden">

            <section className="relative pt-40 pb-20">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
                        >
                            <span className="text-sm font-medium bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent uppercase tracking-widest">
                                Privacy
                            </span>
                        </motion.div>
                        <h1 className="text-5xl md:text-7xl font-bold outfit mb-8 tracking-tighter">
                            Privacy <span className="gradient-text">Policy</span>
                        </h1>
                        <p className="text-xl text-muted font-light max-w-2xl mx-auto italic">
                            Last Updated: February 21, 2026
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-12 pb-32">
                        {sections.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-[2rem] glass border-white/5 bg-white/[0.02] hover:bg-white/[0.03] transition-all"
                            >
                                <h2 className="text-2xl font-bold text-white mb-6 outfit tracking-tight">{section.title}</h2>
                                <p className="text-muted leading-relaxed font-light text-lg">
                                    {section.content}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
