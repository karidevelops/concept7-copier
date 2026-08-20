import { Button } from "@/components/ui/button";

const InterimBoard = () => {
  const handleContactClick = () => {
    document.getElementById('yhteys')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="interim" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center uppercase tracking-tight">
          Interim-johtaminen & hallitustyö
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>

        <div className="space-y-6 text-lg text-foreground leading-relaxed max-w-4xl mx-auto text-center">
          <p>
            Otan vastuuta silloin kun yritys tarvitsee kokenutta johtajaa nopeasti – organisaatiomuutoksen, kasvuvaiheen tai avoimen johtajapaikan aikana. Taustallani on operatiivisen johdon, myynnin, rekrytoinnin ja kustannushallinnan kokemus sekä useampi läpiviety yritysosto.
          </p>
          <p>
            Toimin myös hallitusjäsenenä pk-yrityksissä, joissa halutaan käytännönläheistä, liiketoimintavetoista näkökulmaa hallitustyöhön.
          </p>
          <p>
            Toimeksiannot sovitaan aina tapauskohtaisesti tilanteen ja laajuuden mukaan.
          </p>
        </div>

        <div className="flex justify-center mt-12">
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-accent hover:bg-accent-dark text-accent-foreground shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105 font-semibold"
            onClick={handleContactClick}
          >
            Ota yhteyttä
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InterimBoard;
