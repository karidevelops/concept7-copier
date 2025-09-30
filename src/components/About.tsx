const About = () => {
  return (
    <section id="minusta" className="py-20 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-30"></div>
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          Minusta
        </h2>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-border shadow-[var(--shadow-elegant)]">
          <p className="hover:text-foreground transition-colors duration-300">
            Olen yrittäjyys- ja kasvukonsultti, joka auttaa yrityksiä kirkastamaan tarjoomansa, 
            optimoimaan toimintansa ja rakentamaan kestävää kasvua. Taustani kattaa laajan 
            kokemuksen eri kokoisista yrityksistä startupeista pk-yrityksiin.
          </p>
          <p className="hover:text-foreground transition-colors duration-300">
            Vahvuuteni on käytännönläheinen ote ja kyky yhdistää strateginen näkemys arjen 
            toteutukseen. Uskon, että menestyvä liiketoiminta syntyy selkeästä tarjoomasta, 
            oikeasta hinnoittelusta ja tehokkaasta toiminnasta.
          </p>
          <p className="hover:text-foreground transition-colors duration-300">
            Työskentelen mieluiten pitkäjänteisissä kumppanuuksissa, joissa voin olla mukana 
            rakentamassa yrityksen menestystä askeleittain. Samalla olen käytettävissä myös 
            yksittäisten haasteiden ratkaisemiseen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
