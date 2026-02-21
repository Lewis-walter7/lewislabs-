import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WebsiteScanner from "./components/Scanner/WebsiteScanner";
import CompetitorSection from "./components/CompetitorAnalysis/CompetitorSection";
import TrustFactors from "./components/Trust/TrustFactors";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-primary/30 selection:text-white overflow-x-hidden">
      <Hero />
      <Clients />
      <Services />
      <CompetitorSection />
      <TrustFactors />
      <WebsiteScanner />
      <Contact />

      <Footer />
    </main>
  );
}
