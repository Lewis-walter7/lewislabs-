export default function StructuredData() {
    const organizationData = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Lewis Labs",
        "image": "https://lewislabs.vercel.app/logo.png",
        "@id": "https://lewislabs.vercel.app",
        "url": "https://lewislabs.vercel.app",
        "telephone": "+254702075876",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Nairobi",
            "addressCountry": "KE"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": -1.2921,
            "longitude": 36.8219
        },
        "sameAs": [
            "https://github.com/Lewis-walter7",
            "https://www.linkedin.com/in/lewisindusa12/",
            "https://twitter.com/lewisindusa",
            "https://instagram.com/lewisindusa"
        ],
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "fromTime": "09:00",
            "toTime": "18:00"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        />
    );
}
