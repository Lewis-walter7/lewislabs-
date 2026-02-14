import Sidebar from '@/app/components/Dashboard/Sidebar';
import KanbanBoard from '@/app/components/Dashboard/KanbanBoard';
import ProjectTimeline from '@/app/components/Dashboard/ProjectTimeline';
import ActivityFeed from '@/app/components/Dashboard/ActivityFeed';

export default function DashboardDemoPage() {
    return (
        <div className="bg-black min-h-screen text-white flex">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <main className="flex-1 md:pl-64 p-6 overflow-x-hidden">
                {/* Header */}
                <header className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold">Glassbox Portal <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full uppercase tracking-wider ml-2">Live Demo</span></h1>
                        <p className="text-muted">Transparent real-time project tracking.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="hidden sm:block text-sm text-muted hover:text-white transition-colors">Help & Support</button>
                        <div className="w-px h-6 bg-white/10 hidden sm:block"></div>
                        <button className="gradient-primary px-4 py-2 rounded-lg text-sm font-bold shadow-lg shadow-primary/20">
                            Client Login
                        </button>
                    </div>
                </header>

                {/* Timeline */}
                <ProjectTimeline />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Area: Kanban */}
                    <div className="lg:col-span-2">
                        <KanbanBoard />
                    </div>

                    {/* Sidebar Area: Activity & Files */}
                    <div className="space-y-6">
                        <ActivityFeed />

                        {/* File Widget */}
                        <div className="glass p-6 rounded-2xl border border-white/10">
                            <h3 className="text-muted text-sm uppercase tracking-widest font-bold mb-4">Latest Deliverables</h3>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5 hover:border-white/20 cursor-pointer transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="text-2xl">📄</div>
                                        <div>
                                            <div className="text-sm font-bold">Contract_Signed.pdf</div>
                                            <div className="text-xs text-muted">2.4 MB • Jan 10</div>
                                        </div>
                                    </div>
                                    <div className="text-primary hover:text-white">↓</div>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5 hover:border-white/20 cursor-pointer transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="text-2xl">🎨</div>
                                        <div>
                                            <div className="text-sm font-bold">Homepage_Mockup_v3.fig</div>
                                            <div className="text-xs text-muted">14 MB • Feb 12</div>
                                        </div>
                                    </div>
                                    <div className="text-primary hover:text-white">↓</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
