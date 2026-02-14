"use client";

import { useState, useEffect } from 'react';

export default function SystemMetrics() {
    const [metrics, setMetrics] = useState<any>(null);

    useEffect(() => {
        fetch('/api/status')
            .then(res => res.json())
            .then(data => setMetrics(data));

        const interval = setInterval(() => {
            // Randomize latency slightly for realism
            if (metrics) {
                setMetrics((prev: any) => ({
                    ...prev,
                    latency: `${Math.floor(20 + Math.random() * 10)}ms`
                }));
            }
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    if (!metrics) return <div className="glass p-6 rounded-2xl border border-white/10 h-full animate-pulse">Loading Metrics...</div>;

    return (
        <div className="glass p-6 rounded-2xl border border-white/10 h-full">
            <h3 className="text-muted text-sm uppercase tracking-widest font-bold mb-6">System Telemetry</h3>

            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <div className="text-xs text-muted mb-1">API Latency</div>
                    <div className="text-2xl font-mono text-primary font-bold">{metrics.latency}</div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <div className="text-xs text-muted mb-1">Uptime (30d)</div>
                    <div className="text-2xl font-mono text-green-400 font-bold">{metrics.uptime}</div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <div className="text-xs text-muted mb-1">Total Deployments</div>
                    <div className="text-2xl font-mono text-white font-bold">{metrics.deployments}</div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <div className="text-xs text-muted mb-1">Active Services</div>
                    <div className="text-2xl font-mono text-white font-bold">{metrics.services.length}</div>
                </div>
            </div>
        </div>
    );
}
