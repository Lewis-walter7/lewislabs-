import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get("url");

    if (!url) {
        return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    try {
        const encodedUrl = encodeURIComponent(url.startsWith("http") ? url : `https://${url}`);
        const apiKey = process.env.GOOGLE_API_KEY ? `&key=${process.env.GOOGLE_API_KEY}` : "";

        // Using 'mobile' strategy by default as it's the standard for SEO now
        const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodedUrl}&category=PERFORMANCE&category=SEO&category=ACCESSIBILITY&strategy=mobile${apiKey}`;

        const res = await fetch(apiUrl);
        const data = await res.json();

        // Handle Quota/Error states by falling back to mock data
        if (data.error) {
            console.warn("API Error (falling back to demo):", data.error.message);
            return NextResponse.json({
                lighthouseResult: {
                    categories: {
                        performance: { score: 0.45 + Math.random() * 0.1 }, // Randomize slightly
                        seo: { score: 0.70 + Math.random() * 0.1 },
                        accessibility: { score: 0.60 + Math.random() * 0.1 },
                    }
                },
                isDemo: true
            });
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error("Scanner Error:", error);
        // Fallback for network errors
        return NextResponse.json({
            lighthouseResult: {
                categories: {
                    performance: { score: 0.5 },
                    seo: { score: 0.8 },
                    accessibility: { score: 0.7 },
                }
            },
            isDemo: true
        });
    }
}
