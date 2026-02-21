export const projects = [
    {
        slug: "art-gallery",
        title: "Art Gallery",
        category: "Web Application",
        url: "https://nickarts.vercel.app",
        metric: "40% Latency Reduction",
        description: "Building an Art Gallery website with Next.js.",
        longDescription: "A high-performance digital sanctuary for curated art pieces, focusing on immersive visual storytelling and instantaneous page transitions.",
        techStack: ["Next.js", "Tailwind", "Framer Motion", "Sanity CMS"],
        challenge: "The client faced significant bounce rates due to slow high-resolution image loading. The original platform was built on a legacy CMS that struggled with modern image optimization patterns.",
        solution: "We implemented a custom Next.js architecture utilizing Edge Image Optimization and blur-up placeholders. Combined with Framer Motion, we created a 'physical' sensation of motion between gallery rooms.",
        results: [
            "Improved Lighthouse performance score from 45 to 98",
            "SOC2 Compliance achieved via secure architecture",
            "40% reduction in first-contentful-paint (FCP)"
        ],
        details: [
            { label: "Core Tech", value: "Next.js 14" },
            { label: "Design System", value: "Tailwind / Radix" },
            { label: "Animation", value: "Framer Motion" }
        ]
    },
    {
        slug: "e-commerce-scale-up",
        title: "E-Commerce Scale-Up",
        category: "E-Commerce",
        url: "https://phonemallexpress.com",
        metric: "300% Traffic Increase",
        description: "Building an Electronics website with Next.js that handles 50k users concurrent Searches.",
        longDescription: "Re-engineering an enterprise-scale electronics marketplace to handle extreme global traffic spikes without compromising on sub-second search speeds.",
        techStack: ["Next.js", "Tailwind", "Nest JS", "MongoDB", "Redis"],
        challenge: "The existing infrastructure crashed during high-demand events. Search queries took upwards of 4 seconds, leading to a massive loss in potential sales during holiday peaks.",
        solution: "We migrated the search logic to a distributed GraphQL layer with Redis caching. We also introduced an event-driven inventory system that prevented overselling under high concurrency.",
        results: [
            "Handled Black Friday traffic spike of 50k users",
            "Increased mobile conversion rate by 25%",
            "Implemented real-time inventory syncing across 5 regions"
        ],
        details: [
            { label: "Search Speed", value: "<150ms" },
            { label: "Concurrency", value: "50k users" },
            { label: "Uptime", value: "99.99%" }
        ]
    },
    {
        slug: "motors-website",
        title: "Motors Website",
        category: "Marketplace",
        url: "https://citybossmotors.vercel.app",
        metric: "50k Concurrent Users",
        description: "Building a Motors website with Next.js that handles 50k users concurrent Searches.",
        longDescription: "A sophisticated automotive marketplace featuring heavy-duty search filtering and real-time bid tracking for high-value assets.",
        techStack: ["Next.js", "Tailwind", "Nest JS", "PostgreSQL", "Socket.io"],
        challenge: "Managing thousands of automotive listings with real-time bidding meant the database was constantly overwhelmed by read/write locks.",
        solution: "A read-replica database architecture was implemented for listing browsing, while Socket.io was used to push bid updates in real-time without polling.",
        results: [
            "Handled 50k concurrent users seamlessly",
            "25% increase in mobile engagement",
            "Real-time bid latency reduced to <50ms"
        ],
        details: [
            { label: "Real-time", value: "Socket.io" },
            { label: "Database", value: "PostgreSQL" },
            { label: "Scaling", value: "AWS RDS" }
        ]
    },
    {
        slug: "city-boss-realtors",
        title: "City Boss Realtors",
        category: "Real Estate",
        url: "https://citybossrealtors.vercel.app",
        metric: "200% Lead Generation",
        description: "Connecting buyers and sellers through an premium real estate platform.",
        longDescription: "A high-end property portal featuring virtual tours, interactive map searches, and automated lead qualifying pipelines.",
        techStack: ["Next.js", "Tailwind", "Google Maps API", "Prisma"],
        challenge: "Potential buyers were struggling to visualize property locations and neighborhoods, leading to low-quality inquiries for the sales team.",
        solution: "We integrated a custom-styled Google Maps experience and a multi-step virtual tour system that increased user time-on-site and filtered high-intent leads.",
        results: [
            "200% increase in qualified monthly leads",
            "40% reduction in sales cycle time",
            "Implemented 3D virtual tour viewer integration"
        ],
        details: [
            { label: "Mapping", value: "Google Maps" },
            { label: "Automation", value: "Zapier/CRM" },
            { label: "Speed", value: "Edge Cached" }
        ]
    },
    {
        slug: "mobitower-accessories",
        title: "Mobitower Accessories",
        category: "E-Commerce",
        url: "https://mobitoweraccessories.com",
        metric: "150% Sales Growth",
        description: "Premium mobile accessories marketplace optimized for conversion.",
        longDescription: "A high-performance e-commerce platform dedicated to premium mobile accessories, featuring a streamlined checkout flow and lightning-fast product discovery.",
        techStack: ["Next.js", "Tailwind CSS", "Shopify Engine", "Framer Motion"],
        challenge: "The brand struggled with a high cart abandonment rate due to a complex, multi-step checkout process and slow mobile performance on product pages.",
        solution: "We re-engineered the storefront using a headless Shopify approach with Next.js. We implemented a slide-out 'Quick Buy' feature and optimized all asset delivery via global CDN nodes.",
        results: [
            "150% increase in monthly conversion rate",
            "Average page load time reduced to <1.2s",
            "Successful integration of localized payment gateways"
        ],
        details: [
            { label: "Conversion", value: "+35%" },
            { label: "Performance", value: "99/100" },
            { label: "Checkout", value: "One-Page" }
        ]
    }
];
