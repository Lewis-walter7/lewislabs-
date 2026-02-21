"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function TermsOfService() {
    const sections = [
        {
            title: "1. Agreement to Terms",
            content: "By accessing and using Lewis Labs' services, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, you are prohibited from using the site and our services."
        },
        {
            title: "2. Intellectual Property",
            content: "The software, design, and original content provided by Lewis Labs are the exclusive property of Lewis Labs and its licensors. All engineering artifacts and source code are protected by international copyright and trademark laws."
        },
        {
            title: "3. Service Delivery",
            content: "We provide boutique software engineering and design services. Timelines, deliverables, and specific project scopes are governed by individual service agreements executed between Lewis Labs and its clients."
        },
        {
            title: "4. Limitation of Liability",
            content: "In no event shall Lewis Labs be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services."
        },
        {
            title: "5. Governing Law",
            content: "These Terms shall be governed and construed in accordance with the laws of Kenya, without regard to its conflict of law provisions."
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
                            <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent uppercase tracking-widest">
                                Legal
                            </span>
                        </motion.div>
                        <h1 className="text-5xl md:text-7xl font-bold outfit mb-8 tracking-tighter">
                            Terms of <span className="gradient-text">Service</span>
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
