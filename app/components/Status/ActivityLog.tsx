"use client";

import { useState, useEffect, useRef } from "react";

const mockActivities = [
    "Deployed v2.4.1 to production",
    "Optimized database queries (latency -15%)",
    "Ran security audit: PASSED",
    "Scaled API Gateway instances",
    "Updated CDN edge rules",
    "Patched SSL certificates",
    "Refactored user authentication flow",
    "Integrated Stripe webhook events",
    "Cleaned up S3 buckets",
    "Monitored server health: OK"
];

export default function ActivityLog() {
    const [activities, setActivities] = useState<string[]>(mockActivities.slice(0, 5));
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const randomActivity = mockActivities[Math.floor(Math.random() * mockActivities.length)];
            const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false });
            const newLog = `[${timestamp}] ${randomActivity}`;

            setActivities(prev => {
                const newActivities = [...prev, newLog];
                if (newActivities.length > 8) newActivities.shift(); // Keep logs manageable
                return newActivities;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // Auto-scroll to bottom
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [activities]);

    return (
        <div className="glass p-8 rounded-2xl border border-white/10 h-[300px] flex flex-col font-mono text-xs">
            <h3 className="text-muted text-sm uppercase tracking-widest font-sans font-bold mb-4">Live Activity Log</h3>
            <div ref={containerRef} className="flex-1 overflow-hidden flex flex-col gap-2 opacity-80">
                {activities.map((log, i) => (
                    <div key={i} className="border-l-2 border-primary/50 pl-3">
                        <span className="text-primary">{">"}</span> {log}
                    </div>
                ))}
                <div className="animate-pulse text-primary mt-2">_</div>
            </div>
        </div>
    );
}
