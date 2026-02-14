import { TIMELINES } from "../pricingData";

interface TimelineSelectionProps {
    selectedTimeline: string | null;
    onSelect: (id: string) => void;
}

export default function TimelineSelection({ selectedTimeline, onSelect }: TimelineSelectionProps) {
    return (
        <div className="space-y-6">
            <h3 className="text-2xl font-bold outfit">When do you need it?</h3>
            <div className="space-y-3">
                {TIMELINES.map((timeline) => (
                    <button
                        key={timeline.id}
                        onClick={() => onSelect(timeline.id)}
                        className={`w-full p-5 rounded-2xl border flex items-center justify-between transition-all ${selectedTimeline === timeline.id
                                ? "bg-accent/20 border-accent text-white shadow-lg shadow-accent/10"
                                : "bg-white/5 border-white/10 text-muted hover:bg-white/10"
                            }`}
                    >
                        <div className="text-left flex items-center gap-4">
                            <div className={`w-3 h-3 rounded-full ${timeline.id === 'urgent' ? 'bg-red-500 animate-pulse' :
                                    timeline.id === 'fast' ? 'bg-yellow-500' : 'bg-green-500'
                                }`} />
                            <div>
                                <h4 className="font-bold text-white text-lg">{timeline.title}</h4>
                                <p className="text-sm opacity-70">{timeline.description}</p>
                            </div>
                        </div>
                        <div className="text-right font-mono text-accent">
                            {timeline.multiplier > 1 ? `x${timeline.multiplier} Rate` : 'Base Rate'}
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
