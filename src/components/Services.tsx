import ServiceCard from "./ServiceCard";

const Services = () => {
  const handleContactClick = () => {
    document.getElementById('yhteys')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="palvelut" className="py-24 bg-secondary relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center uppercase tracking-tight">
          Palvelupaketit
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            title="Nopea sparraus – 15 min"
            description="Pikakartoitus tavoitteista, tilanteesta ja seuraavasta askeleesta. Keskustelun aikana voidaan jo ideoida ratkaisumalleja. Toteutus Teamsissa tai puhelimitse."
            price="0 € (alv 0%)"
            buttonText="Varaa aika"
            onButtonClick={handleContactClick}
            detailsType="flip"
            details={[
              { label: "Kesto", content: "15 minuuttia" },
              { label: "Toteutus", content: "Microsoft Teams tai puhelimitse" },
              { label: "Kenelle sopii", content: "Nopea neuvonpyyntö, ensitapaaminen" },
              { label: "Hinta", content: "Maksuton, ei sitoumuksia" }
            ]}
          />
          <ServiceCard
            title="Starttipaketti – Idean sparraus tai arjen haasteet"
            description="Kasvuhaluisille ja toimintaa tehostaville yrityksille ja startupeille. Sisältää idean sparrauksen yrityksen olemassaolevasta haasteista ja 1-2 konkreettista toimenpidesuositusta."
            price="1 200 € (alv 0%)"
            buttonText="Kysy lisää"
            onButtonClick={handleContactClick}
            detailsType="flip"
            details={[
              { label: "Alkukartoitus", content: "2 tapaamista yrityksen tilanteesta ja tavoitteista." },
              { label: "Analysointi", content: "Tunnistetaan keskeisimmät kehityskohteet." },
              { label: "Toimenpiteet", content: "1-2 konkreettista suositusta käyttöön." },
              { label: "Raportti", content: "Yhteenveto ja suositukset kirjallisena." }
            ]}
          />
          <ServiceCard
            title="Yrittäjän ja johdon tuki & sparraus"
            description="Säännöllinen sparraus päätösten tueksi. Sisältää fokus-keskustelut ja tiiviit toimenpidesuositukset. Tehtävät määritellään tapauskohtaisesti yrityksen tarpeen mukaan. Palvelun voit irtisanoa milloin vain ilman irtisanomisaikaa."
            price="2 000 € / kk (alv 0%)"
            buttonText="Kysy lisää"
            onButtonClick={handleContactClick}
            isPopular={true}
            detailsType="flip"
            details={[
              { label: "Sopimus", content: "Kuukausisopimus, jatkuva yhteistyö" },
              { label: "Tapaamiset", content: "2-4 sparrausta/kk, joustavasti" },
              { label: "Fokus", content: "Strategia, kasvu, haasteiden ratkaisu" },
              { label: "Kenelle", content: "Yrittäjät ja johto" },
              { label: "Hyödyt", content: "Selkeämpi suunta, nopeammat päätökset" }
            ]}
          />
          <ServiceCard
            title="Innovaatiopaketti – AI ja digitalisaatio"
            description="Nopealla prototypoinnilla arvioimme liiketoimintamallisi mahdollisuuksia. Digitaalisten palveluiden ideointi, AI-ratkaisujen kartoitus, työpaja ja tulosten analyysi."
            price="4 900 € (alv 0%)"
            buttonText="Kysy lisää"
            onButtonClick={handleContactClick}
            detailsType="flip"
            details={[
              { label: "Kesto", content: "4-6 viikkoa" },
              { label: "Prosessi", content: "Työpaja → Prototypointi → Esittely" },
              { label: "Teknologiat", content: "AI-ratkaisut, digitaaliset palvelut" },
              { label: "Lopputulos", content: "Prototyyppi, toteutussuunnitelma, potentiaalin arvio" },
              { label: "Kenelle", content: "Yrityksille, jotka hakevat kilpailuetua teknologiasta" }
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
