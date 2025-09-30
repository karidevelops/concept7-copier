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
          Palvelupaketit
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            title="Nopea sparraus – 15 min"
            description="Pikakartoitus tavoitteista, tilanteesta ja seuraavasta askeleesta. Toteutus Teamsissa tai puhelimitse."
            price="0 € (alv 0%)"
            buttonText="Varaa aika"
            onButtonClick={handleContactClick}
          />
          <ServiceCard
            title="Starttipaketti – Idean sparraus tai arjen haasteet"
            description="Kasvuhaluisille ja toimintaa tehostaville yrityksille ja startupeille. Sisältää idean sparrauksen yrityksen olemassaolevasta haasteista ja 1-2 konkreettista toimenpidesuositusta."
            price="1 200 € / kertapaketti (alv 0%)"
            buttonText="Kysy lisää"
            onButtonClick={handleContactClick}
          />
          <ServiceCard
            title="Yrittäjän ja johdon tuki & sparraus"
            description="Säännöllinen sparraus päätösten tueksi. Sisältää fokus-keskustelut ja tiiviit toimenpidesuositukset. Tehtävät määritellään tapauskohtaisesti yrityksen tarpeen mukaan."
            price="2 000 € / kk (alv 0%)"
            buttonText="Kysy lisää"
            onButtonClick={handleContactClick}
          />
          <ServiceCard
            title="Innovaatiopaketti – AI ja digitalisaatio"
            description="Nopealla prototypoinnilla arvioimme liiketoimintamallisi mahdollisuuksia. Digitaalisten palveluiden ideointi, AI-ratkaisujen kartoitus, työpaja ja tulosten analyysi."
            price="4 900 € (alv 0%)"
            buttonText="Kysy lisää"
            onButtonClick={handleContactClick}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
