import { projects } from '@/app/components/Work/work-data';
import Link from 'next/link';

// Correct dynamic params type for Next.js App Router
type Props = {
    params: { slug: string }
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default function ProjectPage({ params }: Props) {
    const project = projects.find(p => p.slug === params.slug);

    if (!project) return <div className="min-h-screen pt-32 text-center">Project not found</div>;

    return (
        <main className="min-h-screen pt-32 pb-20 px-6 bg-black">
            <div className="max-w-4xl mx-auto">
                <Link href="/work" className="text-muted hover:text-white mb-8 inline-block transition-colors">← Back to Work</Link>

                <div className="flex flex-col md:flex-row gap-8 items-start justify-between mb-12">
                    <div>
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">{project.category}</span>
                        <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center min-w-[200px]">
                        <div className="text-xs text-muted uppercase font-bold mb-1">Impact Metric</div>
                        <div className="text-2xl md:text-3xl font-bold text-primary">{project.metric}</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-8 text-lg text-muted leading-relaxed">
                        <div>
                            <h3 className="text-white text-xl font-bold mb-4">The Challenge</h3>
                            <p>
                                Legacy systems were preventing the client from scaling. High latency caused user churn,
                                and the monolithic architecture made deploying new features risky and slow.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-white text-xl font-bold mb-4">The Solution</h3>
                            <p>
                                We re-architected the core system using {project.techStack[0]} and {project.techStack[1]}.
                                This allowed for independent scaling of services and introduced strict type safety to prevent runtime errors.
                            </p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                            <h3 className="text-white text-xl font-bold mb-4">Key Results</h3>
                            <ul className="space-y-2">
                                {project.results.map((result, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-green-500">✓</span> {result}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="glass p-6 rounded-2xl border border-white/10">
                            <h3 className="text-white font-bold mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map(tech => (
                                    <span key={tech} className="bg-black border border-white/10 px-3 py-1 rounded text-sm text-muted">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <button className="w-full gradient-primary py-4 rounded-full text-white font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                            View Live Project ↗
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
