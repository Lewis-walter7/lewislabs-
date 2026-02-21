import { MetadataRoute } from 'next';
import { projects } from './components/Work/work-data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://lewislabs.vercel.app';

    // Core pages
    const routes = ['', '/work', '/about', '/terms', '/privacy', '/status'].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic project pages
    const projectRoutes = projects.map((project) => ({
        url: `${baseUrl}/work/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...routes, ...projectRoutes];
}
