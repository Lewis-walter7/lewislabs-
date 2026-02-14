import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WebsiteScanner from "./components/Scanner/WebsiteScanner";
import OptimizationShowcase from "./components/BeforeAfter/OptimizationShowcase";
import TechGrid from "./components/TechStack/TechGrid";
import TrustFactors from "./components/Trust/TrustFactors";
import CompetitorSection from "./components/CompetitorAnalysis/CompetitorSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-primary/30 selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Clients />
      <Services />
      <OptimizationShowcase />
      <TechGrid />
      <CompetitorSection />
      <TrustFactors />
      <WebsiteScanner />

      {/* Additional sections can be added here (Portfolio, About, Testimonials) */}

      <Contact />

      <Footer />
    </main>
  );
}
