"use client";

import { motion } from "framer-motion";

const tasks = {
    todo: [
        { id: 1, title: "Finalize Privacy Policy", tag: "Legal", color: "bg-purple-500/20 text-purple-300" },
        { id: 2, title: "Audit Accessibility (WCAG)", tag: "QA", color: "bg-red-500/20 text-red-300" },
    ],
    inProgress: [
        { id: 3, title: "Implement Auth0 Integration", tag: "Backend", color: "bg-blue-500/20 text-blue-300" },
        { id: 4, title: "Refactor Dashboard UI", tag: "Frontend", color: "bg-green-500/20 text-green-300" },
        { id: 5, title: "Optimize Vercel Edge Config", tag: "DevOps", color: "bg-orange-500/20 text-orange-300" },
    ],
    done: [
        { id: 6, title: "Setup CI/CD Pipeline", tag: "DevOps", color: "bg-orange-500/20 text-orange-300" },
        { id: 7, title: "Design System V2", tag: "Design", color: "bg-pink-500/20 text-pink-300" },
    ]
};

export default function KanbanBoard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full overflow-x-auto pb-4">
            {/* Todo Column */}
            <div className="glass p-4 rounded-xl border border-white/5 flex flex-col gap-4 min-w-[280px]">
                <div className="flex justify-between items-center text-sm font-bold text-muted uppercase tracking-wider mb-2">
                    <span>To Do</span>
                    <span className="bg-white/10 px-2 py-0.5 rounded-full text-xs">{tasks.todo.length}</span>
                </div>
                {tasks.todo.map(task => (
                    <motion.div whileHover={{ y: -2 }} key={task.id} className="bg-white/5 p-4 rounded-lg border border-white/5 hover:border-white/20 transition-colors cursor-pointer group">
                        <div className={`text-[10px] font-bold px-2 py-1 rounded w-fit mb-2 ${task.color}`}>{task.tag}</div>
                        <h4 className="font-medium text-sm text-balance">{task.title}</h4>
                        <div className="mt-3 flex items-center justify-between">
                            <div className="flex -space-x-2">
                                <div className="w-6 h-6 rounded-full bg-gray-700 border border-black"></div>
                            </div>
                            <div className="text-xs text-muted">Due Tomorrow</div>
                        </div>
                    </motion.div>
                ))}
                <div className="p-3 border-2 border-dashed border-white/5 rounded-lg text-center text-sm text-muted cursor-not-allowed opacity-50">
                    + Add Task (Read Only)
                </div>
            </div>

            {/* In Progress Column */}
            <div className="glass p-4 rounded-xl border border-white/5 flex flex-col gap-4 min-w-[280px]">
                <div className="flex justify-between items-center text-sm font-bold text-muted uppercase tracking-wider mb-2">
                    <span className="text-primary">In Progress</span>
                    <span className="bg-primary/20 text-primary px-2 py-0.5 rounded-full text-xs">{tasks.inProgress.length}</span>
                </div>
                {tasks.inProgress.map(task => (
                    <motion.div whileHover={{ y: -2 }} key={task.id} className="bg-white/5 p-4 rounded-lg border-l-2 border-l-primary border-y border-r border-white/5 hover:border-white/20 transition-colors cursor-pointer">
                        <div className={`text-[10px] font-bold px-2 py-1 rounded w-fit mb-2 ${task.color}`}>{task.tag}</div>
                        <h4 className="font-medium text-sm text-balance">{task.title}</h4>
                        <div className="mt-3 flex items-center justify-between">
                            <div className="flex -space-x-2">
                                <div className="w-6 h-6 rounded-full bg-blue-500 border border-black"></div>
                                <div className="w-6 h-6 rounded-full bg-purple-500 border border-black"></div>
                            </div>
                            <div className="text-xs text-primary animate-pulse">Active Now</div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Done Column */}
            <div className="glass p-4 rounded-xl border border-white/5 flex flex-col gap-4 min-w-[280px]">
                <div className="flex justify-between items-center text-sm font-bold text-muted uppercase tracking-wider mb-2">
                    <span className="text-green-400">Completed</span>
                    <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full text-xs">{tasks.done.length}</span>
                </div>
                {tasks.done.map(task => (
                    <div key={task.id} className="bg-white/5 p-4 rounded-lg border border-white/5 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-black text-[10px]">✓</div>
                            <div className={`text-[10px] font-bold px-2 py-1 rounded w-fit ${task.color}`}>{task.tag}</div>
                        </div>
                        <h4 className="font-medium text-sm text-balance line-through text-muted">{task.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
}
