import AvailabilityWidget from '@/app/components/Status/AvailabilityWidget';
import SystemMetrics from '@/app/components/Status/SystemMetrics';
import Link from 'next/link';
import ActivityLog from '@/app/components/Status/ActivityLog';
import WorldMap from '@/app/components/Status/WorldMap';

export default function StatusPage() {
    return (
        <main className="min-h-screen pt-32 px-6 pb-12 bg-black overflow-hidden relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Command Center</h1>
                        <p className="text-muted text-lg">Real-time operational status and availability.</p>
                    </div>
                    <Link href="/" className="text-white/50 hover:text-white transition-colors">
                        ← Back to Mission Control
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[400px]">
                    {/* Availability - Takes 1 col */}
                    <div className="col-span-1">
                        <AvailabilityWidget />
                    </div>

                    {/* Metrics - Takes 2 cols */}
                    <div className="col-span-1 md:col-span-2">
                        <SystemMetrics />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                    {/* Map - Takes 2 cols */}
                    <WorldMap />

                    {/* Activity Log - Takes 1 col */}
                    <ActivityLog />
                </div>
            </div>
        </main>
    );
}
