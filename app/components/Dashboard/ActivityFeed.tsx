export default function ActivityFeed() {
    const activities = [
        { user: "Sarah J.", action: "uploaded 4 mockups", target: "Dashboard UI v2", time: "2h ago", icon: "🎨" },
        { user: "Lewis", action: "deployed to", target: "Staging (v2.4.1)", time: "5h ago", icon: "🚀" },
        { user: "System", action: "updated status to", target: "Development Phase", time: "1d ago", icon: "🤖" },
        { user: "Michael B.", action: "commented on", target: "API Specs", time: "1d ago", icon: "💬" },
    ];

    return (
        <div className="glass p-6 rounded-2xl border border-white/10 h-full">
            <h3 className="text-muted text-sm uppercase tracking-widest font-bold mb-4">Recent Activity</h3>
            <div className="space-y-4">
                {activities.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-3 hover:bg-white/5 rounded-lg transition-colors cursor-pointer">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-sm border border-white/5">
                            {item.icon}
                        </div>
                        <div className="flex-1">
                            <p className="text-sm">
                                <span className="font-bold text-white">{item.user}</span> {item.action} <span className="text-primary">{item.target}</span>
                            </p>
                            <p className="text-xs text-muted mt-1">{item.time}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="w-full mt-4 text-xs text-muted hover:text-white transition-colors py-2">View All History</button>
        </div>
    );
}
