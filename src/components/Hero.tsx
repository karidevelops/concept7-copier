import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("yhteys");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-background pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-50"></div>
      <div className="container mx-auto px-6 py-20 max-w-4xl text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-in">
          Kasvu, kannattavuus ja arjen ratkaisut.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in [animation-delay:200ms]">
          Sparraan niin pieniä startupeja kuin kasvuvaiheessa olevia pk-yrityksiä. Kirkastetaan tarjooma, 
          optimoidaan kustannukset ja rakennetaan hinnoittelu, joka kestää kasvun. Olen tukenasi myös 
          yrityksen arkisissa haasteissa.
        </p>
        <Button 
          variant="accent" 
          size="lg"
          onClick={scrollToContact}
          className="text-base px-8 shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] animate-scale-in [animation-delay:400ms]"
        >
          Ota yhteyttä
        </Button>
      </div>
    </section>
  );
};

export default Hero;
