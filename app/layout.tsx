import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/Cursor/CustomCursor";
import SupportCountdown from "./components/Support/SupportCountdown";
import ChatBot from "./components/Chat/ChatBot";
import Navbar from "./components/Navbar";
import StructuredData from "./components/SEO/StructuredData";


const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lewislabs.vercel.app"), // Update with real domain if available
  title: {
    default: "Lewis Labs | Premium Software & Design Studio",
    template: "%s | Lewis Labs"
  },
  description: "Boutique software company specializing in premium web development, Android applications, and high-end UI/UX design. We engineer digital assets that scale.",
  keywords: ["Software Engineering", "Web Development", "App Development", "UI/UX Design", "Kenya Software Studio", "Premium Design"],
  authors: [{ name: "Lewis Indusa", url: "https://lewislabs.vercel.app" }],
  creator: "Lewis Indusa",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lewislabs.vercel.app",
    siteName: "Lewis Labs",
    title: "Lewis Labs | Premium Software & Design Studio",
    description: "Boutique software company specializing in premium web development, Android applications, and high-end UI/UX design.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Lewis Labs Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lewis Labs | Premium Software & Design Studio",
    description: "Boutique software company specializing in premium web development, Android applications, and high-end UI/UX design.",
    images: ["/logo.png"],
    creator: "@lewisindusa",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "YHDZufwHLqfdsp2O21-MVTfp0Np9Zn4wfWLI4NW_njs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${outfit.variable}`}>
      <body className="antialiased bg-background text-foreground">
        <CustomCursor />
        <StructuredData />
        <Navbar />
        <SupportCountdown />
        {children}
        <ChatBot />
      </body>
    </html>
  );
}
