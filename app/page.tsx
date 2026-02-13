import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-primary/30 selection:text-white">
      <Navbar />
      <Hero />
      <Clients />
      <Services />

      {/* Additional sections can be added here (Portfolio, About, Testimonials) */}

      <Contact />

      <Footer />
    </main>
  );
}
