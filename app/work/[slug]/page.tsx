import { projects } from '@/app/components/Work/work-data';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

import { Metadata } from 'next';

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find(p => p.slug === slug);

    if (!project) return { title: 'Project Not Found' };

    return {
        title: project.title,
        description: project.description,
        openGraph: {
            title: `${project.title} | Lewis Labs Case Study`,
            description: project.description,
            type: 'article',
            url: `https://lewislabs.vercel.app/work/${slug}`,
            images: [
                {
                    url: '/logo.png', // Ideally should use a project-specific image if available in data
                    width: 1200,
                    height: 630,
                    alt: project.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: project.title,
            description: project.description,
        },
    };
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;
    const project = projects.find(p => p.slug === slug);

    if (!project) return <div className="min-h-screen pt-32 text-center text-white font-outfit">Project not found</div>;

    return (
        <main className="min-h-screen bg-black selection:bg-primary/30 selection:text-white overflow-x-hidden">

            {/* Project Hero - More Spacious and Cinematic */}
            <section className="relative pt-30 pb-20 overflow-hidden grid-background border-b border-white/5">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none"></div>

                {/* Decorative background accent */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full -z-10"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl mx-auto text-center md:text-left">
                        <Link
                            href="/work"
                            className="inline-flex items-center gap-2 text-muted hover:text-white mb-16 transition-all group font-bold tracking-widest text-xs uppercase"
                        >
                            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Portfolio
                        </Link>

                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
                            <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-[10px] font-black outfit uppercase tracking-[0.2em]">
                                {project.category}
                            </span>
                            <div className="h-px w-12 bg-white/10 hidden md:block"></div>
                            <span className="text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase">Lewis Labs Case Study</span>
                        </div>

                        <h1 className="text-3xl md:text-[4rem] font-bold outfit mb-12 leading-[0.85] tracking-tighter">
                            {project.title.split(' ').map((word, i) => (
                                <span key={i} className={i === project.title.split(' ').length - 1 ? "gradient-text" : "text-white"}>
                                    {word}{' '}
                                </span>
                            ))}
                        </h1>

                        <div className="flex flex-col md:flex-row gap-12 items-center md:items-center justify-between">
                            <p className="text-2xl md:text-3xl text-muted/80 font-light leading-relaxed max-w-2xl">
                                {project.longDescription}
                            </p>

                            {/* Hero Action */}
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-cursor="play"
                                className="group flex items-center gap-3 text-white font-black tracking-widest text-sm hover:text-primary transition-colors whitespace-nowrap"
                            >
                                VISIT LIVE PROJECT
                                <div className="p-4 rounded-full border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content & Narrative Split */}
            <section className="py-32 relative bg-black">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 max-w-7xl mx-auto">

                        {/* Left Side: Rich Narrative */}
                        <div className="lg:col-span-7 space-y-32">

                            {/* Challenge Block */}
                            <div className="animate-fade-in group">
                                <div className="text-[10px] font-black text-primary tracking-[0.3em] uppercase mb-8 opacity-60">01 / The Challenge</div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 outfit leading-tight">
                                    Conquering complexity <br />through engineering.
                                </h2>
                                <p className="text-xl text-muted/60 leading-relaxed font-light italic border-l-2 border-primary/20 pl-8 py-2">
                                    "{project.challenge}"
                                </p>
                            </div>

                            {/* Solution Block */}
                            <div className="animate-fade-in group" style={{ animationDelay: '0.2s' }}>
                                <div className="text-[10px] font-black text-secondary tracking-[0.3em] uppercase mb-8 opacity-60">02 / The Solution</div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 outfit leading-tight">
                                    A multi-layered <br />technical infrastructure.
                                </h2>
                                <div className="p-10 md:p-16 glass !bg-white/[0.02] rounded-[3rem] border-white/5 relative overflow-hidden group hover:border-white/10 transition-all duration-700">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                                    <p className="text-xl text-muted/80 leading-relaxed font-light">
                                        {project.solution}
                                    </p>

                                    <div className="mt-16 pt-16 border-t border-white/5 grid grid-cols-2 gap-8">
                                        {project.techStack.map(tech => (
                                            <div key={tech} className="flex items-center gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
                                                <span className="text-xs font-bold text-white/40 tracking-widest uppercase">{tech}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Results & Metrics Dashboard */}
                        <div className="lg:col-span-5">
                            <div className="sticky top-32 space-y-8">
                                <div className="p-10 bg-white/5 rounded-[2.5rem] border border-white/10 space-y-12 backdrop-blur-3xl">
                                    <div>
                                        <h4 className="text-white font-black mb-10 outfit uppercase tracking-[0.25em] text-[10px] opacity-60 flex items-center gap-4">
                                            Outcome & Impact
                                            <div className="flex-1 h-px bg-white/5"></div>
                                        </h4>
                                        <div className="space-y-6">
                                            {project.results.map((result, i) => (
                                                <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.05] transition-colors group">
                                                    <div className="mt-1 w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                            <polyline points="20 6 9 17 4 12" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-sm font-light text-muted group-hover:text-white transition-colors">{result}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-white font-black mb-10 outfit uppercase tracking-[0.25em] text-[10px] opacity-60 flex items-center gap-4">
                                            Key Benchmarks
                                            <div className="flex-1 h-px bg-white/5"></div>
                                        </h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            {project.details?.map((detail, i) => (
                                                <div key={i} className="p-3 rounded-3xl bg-white/[0.02] border border-white/5">
                                                    <div className="text-[8px] text-muted/60 uppercase font-black tracking-widest mb-2">{detail.label}</div>
                                                    <div className="text-lg font-bold text-white outfit">{detail.value}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Final CTA */}
                                    <Link
                                        href="/#contact"
                                        className="w-full gradient-primary p-4 rounded-2xl text-white font-black tracking-[0.2em] text-xs shadow-2xl shadow-primary/30 hover:scale-[1.03] active:scale-95 transition-all text-center uppercase"
                                    >
                                        Start Your Evolution
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
