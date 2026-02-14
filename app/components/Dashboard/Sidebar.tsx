import Link from 'next/link';

export default function Sidebar() {
    return (
        <aside className="w-64 border-r border-white/10 hidden md:flex flex-col h-screen fixed left-0 top-0 bg-black/50 backdrop-blur-xl z-40">
            <div className="p-6 border-b border-white/10">
                <Link href="/" className="text-xl font-bold tracking-tighter outfit block">
                    Lewis<span className="text-muted">Labs</span>
                </Link>
                <div className="mt-2 text-xs text-muted uppercase tracking-wider font-bold">Client Portal Demo</div>
            </div>

            <nav className="flex-1 p-4 space-y-2">
                <div className="px-4 py-2 text-xs font-bold text-muted uppercase">Active Project</div>
                <Link href="#" className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-xl text-white font-medium border border-white/5 hover:border-primary/50 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">⚡</div>
                    <span>Fintech App V2</span>
                </Link>

                <div className="px-4 py-2 mt-6 text-xs font-bold text-muted uppercase">Navigation</div>
                <Link href="#" className="flex items-center gap-3 px-4 py-2 text-white hover:bg-white/5 rounded-lg transition-colors">
                    <span>📊</span> Dashboard
                </Link>
                <Link href="#" className="flex items-center gap-3 px-4 py-2 text-muted hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                    <span>📅</span> Timeline
                </Link>
                <Link href="#" className="flex items-center gap-3 px-4 py-2 text-muted hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                    <span>📁</span> Documents
                </Link>
                <Link href="#" className="flex items-center gap-3 px-4 py-2 text-muted hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                    <span>💬</span> Messages <span className="ml-auto bg-primary text-white text-[10px] px-1.5 py-0.5 rounded-full">2</span>
                </Link>
            </nav>

            <div className="p-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-white/10"></div>
                    <div>
                        <div className="text-sm font-bold">Guest User</div>
                        <div className="text-xs text-muted">View Only Access</div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
