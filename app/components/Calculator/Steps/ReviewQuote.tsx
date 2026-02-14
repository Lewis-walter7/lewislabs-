import { CalculatorState } from "../types";
import { SERVICES, FEATURES, TIMELINES } from "../pricingData";

interface ReviewQuoteProps {
    state: CalculatorState;
}

export default function ReviewQuote({ state }: ReviewQuoteProps) {
    const service = SERVICES.find((s) => s.id === state.service);
    const timeline = TIMELINES.find((t) => t.id === state.timeline);
    const selectedFeatures = FEATURES.filter((f) => state.features.includes(f.id));

    const baseTotal = (service?.basePrice || 0) + selectedFeatures.reduce((acc, f) => acc + f.price, 0);
    const total = baseTotal * (timeline?.multiplier || 1);

    return (
        <div className="space-y-6">
            <h3 className="text-2xl font-bold outfit">Your Estimated Quote</h3>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 space-y-4">
                {/* Service */}
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <div>
                        <h4 className="font-bold text-white">{service?.title}</h4>
                        <span className="text-xs text-muted">Base Project</span>
                    </div>
                    <span className="font-mono text-white">${service?.basePrice}</span>
                </div>

                {/* Features */}
                {selectedFeatures.map((feature) => (
                    <div key={feature.id} className="flex justify-between items-center text-sm">
                        <span className="text-muted">+ {feature.title}</span>
                        <span className="font-mono text-white">${feature.price}</span>
                    </div>
                ))}

                {/* Timeline */}
                <div className="flex justify-between items-center pt-2 text-sm text-accent">
                    <span>{timeline?.title} Timeline ({(timeline?.multiplier || 1)}x)</span>
                    <span>{(timeline?.multiplier || 1) > 1 ? 'Priority' : 'Standard'}</span>
                </div>

                {/* Total */}
                <div className="pt-4 mt-4 border-t border-white/20 flex justify-between items-end">
                    <span className="text-lg font-bold text-white">Estimated Total</span>
                    <div className="text-right">
                        <span className="text-3xl font-bold gradient-text block">${total.toFixed(0)}</span>
                        <span className="text-xs text-muted">USD</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
                <a href="mailto:hello@lewislabs.com?subject=Project Quote Inquiry" className="gradient-primary w-full py-4 rounded-xl font-bold text-white shadow-lg shadow-primary/20 hover:scale-105 transition-transform text-center block">
                    Book Strategy Call
                </a>
                <p className="text-xs text-center text-muted">
                    *Final price may vary based on specific requirements.
                </p>
            </div>
        </div>
    );
}
