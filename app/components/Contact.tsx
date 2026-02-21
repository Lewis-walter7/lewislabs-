"use client";

import { useState } from "react";

export default function Contact() {
    const [pending, setPending] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setPending(true);
        setError("");
        setSuccess(false);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        };

        try {
            const res = await fetch("/api/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setSuccess(true);
                (e.target as HTMLFormElement).reset();
            } else {
                const errorData = await res.json();
                setError(errorData.error?.message || "Something went wrong. Please try again.");
            }
        } catch (err) {
            setError("Failed to send message. Please check your connection.");
        } finally {
            setPending(false);
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden grid-background">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="glass !bg-black p-8 md:p-16 rounded-[3rem] border-white/5 animate-fade-in shadow-2xl">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-6xl font-bold outfit mb-6">Ready to build <span className="gradient-text">something great</span>?</h2>
                            <p className="text-xl text-muted max-w-2xl mx-auto font-light leading-relaxed">
                                Let's collaborate to bring your vision to life with world-class engineering and design.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-muted uppercase tracking-widest mb-2 ml-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="Your name"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-all placeholder:text-white/20"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-muted uppercase tracking-widest mb-2 ml-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="your@email.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-all placeholder:text-white/20"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-muted uppercase tracking-widest mb-2 ml-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    placeholder="Tell us about your project..."
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-all placeholder:text-white/20 resize-none"
                                ></textarea>
                            </div>

                            <div className="text-center pt-4">
                                <button
                                    type="submit"
                                    disabled={pending}
                                    data-cursor="send"
                                    className="gradient-primary px-12 py-5 rounded-2xl font-bold text-white shadow-2xl shadow-primary/30 hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100 text-lg min-w-[200px]"
                                >
                                    {pending ? "Sending..." : "Send Message"}
                                </button>
                            </div>

                            {success && (
                                <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-2xl text-center animate-fade-in">
                                    Message sent successfully! We'll get back to you soon.
                                </div>
                            )}
                            {error && (
                                <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 text-accent rounded-2xl text-center animate-fade-in">
                                    {error}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
