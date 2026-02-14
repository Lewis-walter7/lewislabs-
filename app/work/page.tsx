"use client";

import { useState } from 'react';
import ProjectCard from '@/app/components/Work/ProjectCard';
import { projects } from '@/app/components/Work/work-data';
import { motion, AnimatePresence } from 'framer-motion';

export default function WorkPage() {
    const [filter, setFilter] = useState('All');

    const filteredProjects = projects.filter(project => {
        if (filter === 'All') return true;
        if (filter === 'Web') return project.category.includes('Web');
        if (filter === 'Mobile') return project.category.includes('Mobile');
        if (filter === 'SaaS') return project.category.includes('SaaS');
        if (filter === 'E-Commerce') return project.category.includes('E-Commerce');
        return true;
    });

    return (
        <main className="min-h-screen pt-32 pb-20 px-6 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Work that <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Outputs Growth</span>.
                    </h1>
                    <p className="text-xl text-muted max-w-2xl">
                        We don't just write code. We engineer digital assets that reduce costs, increase revenue, and scale effortlessly.
                    </p>
                </div>

                {/* Filter Section */}
                <div className="flex gap-4 mb-12 overflow-x-auto pb-4 scrollbar-hide">
                    {['All', 'Web', 'Mobile', 'SaaS', 'E-Commerce'].map(item => (
                        <button
                            key={item}
                            onClick={() => setFilter(item)}
                            className={`px-6 py-2 rounded-full text-sm font-bold border transition-all duration-300 ${filter === item ? 'bg-white text-black border-white scale-105' : 'bg-transparent text-muted border-white/10 hover:text-white hover:border-white/30'}`}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                layout
                                key={project.slug}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ProjectCard project={project} index={index} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </main>
    );
}
