import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InterimBoard from "@/components/InterimBoard";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <InterimBoard />
        <Services />
        <About />
        <Contact />
      </main>
      <CookieConsent />
      <footer className="bg-primary py-10">
        <div className="container mx-auto px-6 max-w-7xl text-center text-primary-foreground">
          <p className="text-lg font-semibold">© 2026 Concept7 Oy. Kaikki oikeudet pidätetään.</p>
        </div>
      </footer>
    </div>);

};

export default Index;