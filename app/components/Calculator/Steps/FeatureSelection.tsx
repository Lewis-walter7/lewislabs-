import { FEATURES } from "../pricingData";

interface FeatureSelectionProps {
    selectedFeatures: string[];
    onToggle: (id: string) => void;
}

export default function FeatureSelection({ selectedFeatures, onToggle }: FeatureSelectionProps) {
    return (
        <div className="space-y-6">
            <h3 className="text-2xl font-bold outfit">Add Premium Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {FEATURES.map((feature) => (
                    <button
                        key={feature.id}
                        onClick={() => onToggle(feature.id)}
                        className={`p-4 rounded-xl border flex items-center justify-between transition-all ${selectedFeatures.includes(feature.id)
                                ? "bg-secondary/20 border-secondary text-white shadow-lg shadow-secondary/10"
                                : "bg-white/5 border-white/10 text-muted hover:bg-white/10"
                            }`}
                    >
                        <div className="text-left">
                            <h4 className="font-bold text-white">{feature.title}</h4>
                            <p className="text-xs opacity-70 mt-1">{feature.description}</p>
                        </div>
                        <div className="text-right">
                            <span className={`block w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedFeatures.includes(feature.id) ? "bg-secondary border-secondary" : "border-white/20"
                                }`}>
                                {selectedFeatures.includes(feature.id) && <span className="text-white text-xs">✓</span>}
                            </span>
                            <span className="text-xs font-mono text-secondary/80 mt-2 block">+${feature.price}</span>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
