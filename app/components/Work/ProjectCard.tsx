import Link from 'next/link';
import { motion } from 'framer-motion';

interface Props {
    project: any;
    index: number;
}

export default function ProjectCard({ project, index }: Props) {
    return (
        <Link href={`/work/${project.slug}`} className="block group" data-cursor="view">
            <div className="group relative p-6 !bg-black rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500 shadow-2xl">
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                        <span className="text-xs font-bold text-muted uppercase tracking-widest border border-white/10 px-2 py-1 rounded bg-black/20">
                            {project.category}
                        </span>
                        <span className="text-2xl">↗</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>

                    {/* Metric Badge */}
                    <div className="inline-block bg-primary/20 text-primary border border-primary/20 px-3 py-1 rounded-full text-sm font-bold mb-4">
                        ⚡ {project.metric}
                    </div>

                    <p className="text-muted text-sm mb-6 line-clamp-3">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech: string) => (
                            <span key={tech} className="text-xs bg-white/5 px-2 py-1 rounded text-muted group-hover:bg-white/10 transition-colors">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
}
