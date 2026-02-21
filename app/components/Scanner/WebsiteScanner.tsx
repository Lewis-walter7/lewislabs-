"use client";

import { useState, useEffect } from "react";

export default function WebsiteScanner() {
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<any>(null);
    const [error, setError] = useState("");
    const [logs, setLogs] = useState<string[]>([]);

    useEffect(() => {
        if (loading) {
            setLogs([]);
            const messages = [
                "Initializing scanner...",
                "Resolving DNS...",
                "Pinging server...",
                "Analyzing Core Web Vitals...",
                "Checking SEO meta tags...",
                "Verifying accessibility standards...",
                "Generating report..."
            ];

            let i = 0;
            // Add first message immediately
            setLogs([messages[0]]);
            i++;

            const interval = setInterval(() => {
                if (i < messages.length) {
                    setLogs(prev => [...prev, messages[i]]);
                    i++;
                }
            }, 1500); // New message every 1.5s (approx 10.5s total)

            return () => clearInterval(interval);
        }
    }, [loading]);

    const handleScan = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!url) return;

        setLoading(true);
        setResult(null);
        setError("");

        try {
            // Call our own API route to avoid CORS and hide API keys
            const res = await fetch(`/api/scan?url=${encodeURIComponent(url)}`);
            const data = await res.json();

            if (!res.ok || data.error) {
                throw new Error(data.error || "Failed to scan website.");
            }

            setResult(data);
        } catch (err: any) {
            console.error(err);
            setError(err.message || "Could not analyze this site. Please check the URL and try again.");
        } finally {
            setLoading(false);
        }
    };

    const getScoreColor = (score: number) => {
        if (score >= 0.9) return "text-green-400";
        if (score >= 0.5) return "text-yellow-400";
        return "text-red-400";
    };

    const getScoreLabel = (score: number) => {
        if (score >= 0.9) return "Good";
        if (score >= 0.5) return "Needs Improvement";
        return "Poor";
    };

    const calculateCriticalIssues = () => {
        if (!result) return 0;
        const audits = result.lighthouseResult.audits;
        let criticalCount = 0;

        Object.values(audits).forEach((audit: any) => {
            if (audit.scoreDisplayMode === 'numeric' && audit.score < 0.5) {
                criticalCount++;
            }
        });
        return criticalCount;
    };

    const handleDownload = () => {
        if (!result) return;

        const issueCount = calculateCriticalIssues();
        const reportData = {
            url: url,
            date: new Date().toISOString(),
            scores: {
                performance: result.lighthouseResult.categories.performance.score,
                seo: result.lighthouseResult.categories.seo.score,
                accessibility: result.lighthouseResult.categories.accessibility.score,
            },
            criticalIssuesCount: issueCount,
            audits: Object.values(result.lighthouseResult.audits)
                .filter((a: any) => a.scoreDisplayMode === 'numeric' && a.score < 0.5)
                .map((a: any) => ({ title: a.title, score: a.score })),
            note: "This is a summary report. Contact Lewis Labs for a full remediated audit."
        };

        const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: "application/json" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `lewis-labs-audit-${new URL(url.startsWith("http") ? url : `https://${url}`).hostname}.json`;
        link.click();
    };

    return (
        <section className="py-24 relative overflow-hidden grid-background" id="audit">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold outfit mb-6">
                        Is your website <span className="text-red-500">losing customers?</span>
                    </h2>
                    <p className="text-xl text-muted">
                        Run a free instant audit to check your Performance, SEO, and Accessibility scores.
                    </p>
                </div>

                <div className="glass !bg-black p-8 md:p-12 rounded-[2.5rem] border-white/5 relative z-10 shadow-2xl">
                    <form onSubmit={handleScan} className="flex flex-col md:flex-row gap-4">
                        <input
                            type="text"
                            placeholder="Enter your website URL (e.g. yourcompetitor.com)"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-all placeholder:text-white/20"
                        />
                        <button
                            type="submit"
                            disabled={loading || !url}
                            className="gradient-primary px-8 py-4 rounded-xl font-bold text-white shadow-lg shadow-primary/20 hover:scale-105 transition-all disabled:opacity-50 disabled:scale-100 whitespace-nowrap"
                        >
                            {loading ? "Scanning..." : "Run Free Audit"}
                        </button>
                    </form>

                    {/* Loading State: Terminal Animation */}
                    {loading && (
                        <div className="mt-8 mx-auto max-w-md bg-black/80 rounded-xl border border-white/10 p-4 font-mono text-xs text-left shadow-2xl animate-fade-in">
                            <div className="flex gap-2 mb-4 border-b border-white/10 pb-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                <span className="ml-auto text-muted">scan_process.exe</span>
                            </div>
                            <div className="space-y-2 h-[150px] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden flex flex-col-reverse">
                                <div className="animate-pulse text-primary">
                                    <span className="opacity-50 mr-2">{">"}</span>
                                    _
                                </div>
                                {[...logs].reverse().map((log, i) => (
                                    <div key={i} className="text-green-400">
                                        <span className="opacity-50 mr-2">{">"}</span>
                                        {log === "Generating report..." ? (
                                            <span className="animate-pulse">
                                                Generating report
                                                <span className="animate-[ping_1.5s_0.5s_ease-in-out_infinite]">.</span>
                                                <span className="animate-[ping_1.5s_0.7s_ease-in-out_infinite]">.</span>
                                                <span className="animate-[ping_1.5s_0.9s_ease-in-out_infinite]">.</span>
                                            </span>
                                        ) : (
                                            log
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Results View */}
                    {result && !loading && (
                        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in relative">
                            {result.isDemo && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500/20 text-yellow-300 border border-yellow-500/50 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest whitespace-nowrap z-20">
                                    ⚠️ API Limit Reached • Demo Data
                                </div>
                            )}
                            {['performance', 'seo', 'accessibility'].map((category) => {
                                const score = result.lighthouseResult.categories[category].score;
                                return (
                                    <div key={category} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                                        <h3 className="text-muted uppercase text-xs font-bold tracking-widest mb-4">{category}</h3>
                                        <div className={`text-4xl font-bold mb-2 ${getScoreColor(score)}`}>
                                            {Math.round(score * 100)}
                                        </div>
                                        <div className={`text-xs font-mono uppercase px-2 py-1 rounded-full inline-block ${getScoreColor(score)} bg-white/5`}>
                                            {getScoreLabel(score)}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {/* Action Plan */}
                    {result && !loading && (
                        <div className="mt-8 pt-8 border-t border-white/10 text-center animate-fade-in delay-100">
                            <p className="text-lg text-white mb-6">
                                We found <span className="text-red-400 font-bold">{calculateCriticalIssues()} critical issues</span> slowing down your site.
                            </p>
                            <button
                                onClick={handleDownload}
                                className="text-primary hover:text-white underline underline-offset-4 transition-colors"
                            >
                                Download Full Report (JSON) →
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[120px] -z-10"></div>
        </section>
    );
}
