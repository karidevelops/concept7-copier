const About = () => {
  return (
    <section id="minusta" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center uppercase tracking-tight">
          Tervetuloa verkkosivuillemme
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
        <div className="space-y-8 text-lg text-foreground leading-relaxed max-w-4xl mx-auto">
          <p className="text-center">
            Olen yrittäjyys- ja kasvukonsultti, joka auttaa yrityksiä kirkastamaan tarjoomansa, 
            optimoimaan toimintansa ja rakentamaan kestävää kasvua. Taustani kattaa laajan 
            kokemuksen eri kokoisista yrityksistä startupeista pk-yrityksiin.
          </p>
          <p className="text-center">
            Vahvuuteni on käytännönläheinen ote ja kyky yhdistää strateginen näkemys arjen 
            toteutukseen. Uskon, että menestyvä liiketoiminta syntyy selkeästä tarjoomasta, 
            oikeasta hinnoittelusta ja tehokkaasta toiminnasta.
          </p>
          <p className="text-center">
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
