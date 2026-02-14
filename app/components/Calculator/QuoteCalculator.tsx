"use client";

import { useState } from "react";
import { CalculatorState, INITIAL_STATE } from "./types";
import ServiceSelection from "./Steps/ServiceSelection";
import FeatureSelection from "./Steps/FeatureSelection";
import TimelineSelection from "./Steps/TimelineSelection";
import ReviewQuote from "./Steps/ReviewQuote";

export default function QuoteCalculator({ onClose }: { onClose: () => void }) {
    const [step, setStep] = useState(1);
    const [state, setState] = useState<CalculatorState>(INITIAL_STATE);

    const updateState = (updates: Partial<CalculatorState>) => {
        setState((prev) => ({ ...prev, ...updates }));
    };

    const handleNext = () => {
        if (step < 4) setStep(step + 1);
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const canProceed = () => {
        if (step === 1) return !!state.service;
        if (step === 3) return !!state.timeline;
        return true;
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl animate-fade-in overflow-hidden">
                {/* Progress Bar */}
                <div className="absolute top-0 left-0 h-1 bg-white/5 w-full">
                    <div
                        className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 ease-out"
                        style={{ width: `${(step / 4) * 100}%` }}
                    />
                </div>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-muted hover:text-white transition-colors z-10"
                >
                    ✕
                </button>

                {/* Content */}
                <div className="mt-4 min-h-[400px]">
                    {step === 1 && (
                        <ServiceSelection
                            selectedService={state.service}
                            onSelect={(id) => updateState({ service: id })}
                        />
                    )}
                    {step === 2 && (
                        <FeatureSelection
                            selectedFeatures={state.features}
                            onToggle={(id) => {
                                const features = state.features.includes(id)
                                    ? state.features.filter(f => f !== id)
                                    : [...state.features, id];
                                updateState({ features });
                            }}
                        />
                    )}
                    {step === 3 && (
                        <TimelineSelection
                            selectedTimeline={state.timeline}
                            onSelect={(id) => updateState({ timeline: id })}
                        />
                    )}
                    {step === 4 && (
                        <ReviewQuote state={state} />
                    )}
                </div>

                {/* Navigation Footer */}
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/5">
                    <div className="text-sm text-muted">
                        Step {step} of 4
                    </div>
                    <div className="flex gap-4">
                        {step > 1 && (
                            <button
                                onClick={handleBack}
                                className="px-6 py-2 rounded-xl text-sm font-medium text-muted hover:text-white transition-colors"
                            >
                                Back
                            </button>
                        )}
                        {step < 4 && (
                            <button
                                onClick={handleNext}
                                disabled={!canProceed()}
                                className="px-8 py-3 rounded-xl bg-white text-black font-bold hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                            >
                                Next Step →
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
