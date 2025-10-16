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
              { label: "Kesto", content: "15 min" },
              { label: "Toteutus", content: "Teams/puhelin" },
              { label: "Kenelle", content: "Nopea neuvonta" },
              { label: "Hinta", content: "Maksuton" }
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
              { label: "Kartoitus", content: "2 tapaamista tilanteesta" },
              { label: "Analyysi", content: "Keskeiset kehityskohteet" },
              { label: "Toimenpiteet", content: "1-2 suositusta" },
              { label: "Raportti", content: "Yhteenveto kirjallisena" }
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
              { label: "Sopimus", content: "Kuukausisopimus" },
              { label: "Tapaamiset", content: "2-4 sparrausta/kk" },
              { label: "Fokus", content: "Strategia, kasvu, ratkaisut" },
              { label: "Kenelle", content: "Yrittäjät ja johto" },
              { label: "Hyödyt", content: "Selkeä suunta, nopeat päätökset" }
            ]}
          />
          <ServiceCard
            title={"Innovaatio-\npaketti – AI ja digitalisaatio"}
            description="Nopealla prototypoinnilla arvioimme liiketoimintamallisi mahdollisuuksia. Digitaalisten palveluiden ideointi, AI-ratkaisujen kartoitus, työpaja ja tulosten analyysi."
            price="4 900 € (alv 0%)"
            buttonText="Kysy lisää"
            onButtonClick={handleContactClick}
            detailsType="flip"
            details={[
              { label: "Kesto", content: "4-6 viikkoa" },
              { label: "Prosessi", content: "Työpaja → Prototyyppi → Esittely" },
              { label: "Teknologiat", content: "AI ja digitaaliset ratkaisut" },
              { label: "Lopputulos", content: "Prototyyppi ja toteutussuunnitelma" },
              { label: "Kenelle", content: "Teknologiasta kilpailuetua hakeville" }
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
