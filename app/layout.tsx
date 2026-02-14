import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";


const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Lewis Labs | Premium Software & Design Studio",
  description: "Boutique software company specializing in premium web development, Android applications, and high-end UI/UX design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${outfit.variable}`}>
      <body className="antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
