"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Wizard() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        projectType: 'Web Development',
        budget: '',
        message: ''
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleNext = () => setStep(prev => prev + 1);
    const handleBack = () => setStep(prev => prev - 1);

    const handleSubmit = async () => {
        setLoading(true);
        await fetch('/api/start-project', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json' }
        });
        setLoading(false);
        // Redirect or show success (for now, simple alert or redirect)
        alert("Inquiry Sent! We'll be in touch shortly.");
        router.push('/');
    };

    return (
        <div className="w-full max-w-2xl mx-auto glass p-8 rounded-3xl border border-white/10 relative overflow-hidden">
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-white/10">
                <motion.div
                    className="h-full bg-primary"
                    initial={{ width: "33%" }}
                    animate={{ width: `${(step / 3) * 100}%` }}
                />
            </div>

            <div className="mb-8 mt-4">
                <h2 className="text-3xl font-bold mb-2">
                    {step === 1 && "Let's start with the basics."}
                    {step === 2 && "Tell us about the project."}
                    {step === 3 && "Final details."}
                </h2>
                <p className="text-muted">Step {step} of 3</p>
            </div>

            <AnimatePresence mode="wait">
                {step === 1 && (
                    <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex flex-col gap-4"
                    >
                        <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-primary transition-colors" />
                        <input name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-primary transition-colors" />
                        <input name="company" placeholder="Company Name (Optional)" value={formData.company} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-primary transition-colors" />
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex flex-col gap-4"
                    >
                        <label className="text-sm text-muted">Project Type</label>
                        <select name="projectType" value={formData.projectType} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-primary transition-colors [&>option]:text-black">
                            <option>Web Development</option>
                            <option>Mobile App</option>
                            <option>UI/UX Design</option>
                            <option>Consulting</option>
                        </select>

                        <label className="text-sm text-muted">Budget Range</label>
                        <input name="budget" placeholder="e.g. $5k - $10k" value={formData.budget} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-primary transition-colors" />
                    </motion.div>
                )}

                {step === 3 && (
                    <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex flex-col gap-4"
                    >
                        <textarea name="message" placeholder="Tell us more about your vision..." rows={4} value={formData.message} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-primary transition-colors" />

                        <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-sm">
                            <h4 className="font-bold mb-2">Summary</h4>
                            <p className="text-muted">Name: <span className="text-white">{formData.name}</span></p>
                            <p className="text-muted">Type: <span className="text-white">{formData.projectType}</span></p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex justify-between mt-8">
                {step > 1 ? (
                    <button onClick={handleBack} className="text-muted hover:text-white transition-colors">← Back</button>
                ) : <div></div>}

                {step < 3 ? (
                    <button onClick={handleNext} className="bg-white text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">Continue</button>
                ) : (
                    <button onClick={handleSubmit} disabled={loading} className="gradient-primary text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/25 disabled:opacity-50">
                        {loading ? "Sending..." : "Submit Inquiry"}
                    </button>
                )}
            </div>
        </div>
    );
}
