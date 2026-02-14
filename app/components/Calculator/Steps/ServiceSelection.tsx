import { SERVICES } from "../pricingData";

interface ServiceSelectionProps {
    selectedService: string | null;
    onSelect: (id: string) => void;
}

export default function ServiceSelection({ selectedService, onSelect }: ServiceSelectionProps) {
    return (
        <div className="space-y-6">
            <h3 className="text-2xl font-bold outfit">What do you need?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {SERVICES.map((service) => (
                    <button
                        key={service.id}
                        onClick={() => onSelect(service.id)}
                        className={`p-6 rounded-2xl border text-left transition-all duration-300 ${selectedService === service.id
                                ? "bg-primary/20 border-primary text-white scale-105 shadow-xl shadow-primary/10"
                                : "bg-white/5 border-white/10 text-muted hover:bg-white/10 hover:border-white/20"
                            }`}
                    >
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 text-2xl ${selectedService === service.id ? "bg-primary text-white" : "bg-white/10 text-white/50"
                            }`}>
                            {service.id === 'website' && '🌐'}
                            {service.id === 'webapp' && '💻'}
                            {service.id === 'mobile' && '📱'}
                        </div>
                        <h4 className="font-bold text-lg mb-2 text-white">{service.title}</h4>
                        <p className="text-sm opacity-80">{service.description}</p>
                        <div className="mt-4 text-xs font-mono text-primary/80">From ${service.basePrice}</div>
                    </button>
                ))}
            </div>
        </div>
    );
}
