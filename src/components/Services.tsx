import ServiceCard from "./ServiceCard";

const Services = () => {
  const handleContactClick = () => {
    document.getElementById('yhteys')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="palvelut" className="py-24 bg-[var(--gradient-blue)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_50%)]"></div>
      </div>
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-center uppercase tracking-tight">
          Mitä me teemme
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-16 text-center max-w-3xl mx-auto">
          Tarjoamme kokonaisvaltaisia ratkaisuja yrityksen kasvuun ja kehitykseen
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Kasvustrategia"
            description="Rakennamme yhdessä selkeän kasvupolun, jossa on oikeat painopisteet ja realistiset tavoitteet. Mukana kulkee käytännön tukeminen, jotta strategia toteutuu arjessa."
            price="Alk. 2000€"
            buttonText="Kysy lisää"
            onButtonClick={handleContactClick}
          />
          <ServiceCard
            title="Tarjooman kirkastus"
            description="Autetaan yritystäsi selkeyttämään, mitä myydään ja kenelle. Tämä on pohja kaikelle muulle - kun tarjooma on kristallinkirkas, myynti, markkinointi ja hinnoittelu helpottuvat."
            price="Alk. 1500€"
            buttonText="Kysy lisää"
            onButtonClick={handleContactClick}
          />
          <ServiceCard
            title="Hinnoittelustrategia"
            description="Oikea hinnoittelu ei ole arvaus vaan laskelma. Rakennamme hinnoittelumallin, joka perustuu sekä kustannuksiin että asiakkaan kokemaan arvoon."
            price="Alk. 1500€"
            buttonText="Kysy lisää"
            onButtonClick={handleContactClick}
          />
          <ServiceCard
            title="Toiminnan tehostaminen"
            description="Tunnistetaan pullonkaulat ja rakennetaan sujuvammat prosessit. Tavoitteena on, että yritys toimii paremmin ilman että kaikki nojaa yhteen henkilöön."
            price="Alk. 2000€"
            buttonText="Kysy lisää"
            onButtonClick={handleContactClick}
          />
          <ServiceCard
            title="Myynti ja markkinointi"
            description="Auttaa rakentamaan ja tehostamaan asiakashankintaa ja myyntiprosesseja. Ei pelkkää konsultointia vaan myös käytännön tekemistä."
            price="Alk. 2500€"
            buttonText="Kysy lisää"
            onButtonClick={handleContactClick}
          />
          <ServiceCard
            title="Sparraus ja coaching"
            description="Jatkuva kumppanuus arjen päätöksenteossa. Säännölliset sparraussessiot, joissa käydään läpi ajankohtaisia haasteita ja mahdollisuuksia."
            price="Alk. 800€/kk"
            buttonText="Kysy lisää"
            onButtonClick={handleContactClick}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
