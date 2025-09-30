import ServiceCard from "./ServiceCard";

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById("yhteys");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      title: "Nopea sparraus – 15 min",
      description: "Pikakartoitus tavoitteista, tilanteesta ja seuraavasta askeleesta. Toteutus Teamsissa tai puhelimitse.",
      price: "0 € (alv 0%)",
      buttonText: "Varaa aika",
    },
    {
      title: "Starttipaketti – Idean sparraus tai arjen haasteet",
      description: "Kasvuhaluisille ja toimintaa tehostaville yrityksille ja startupeille. Sisältää idean sparrauksen yrityksen olemassaolevasta haasteista ja 1-2 konkreettista toimenpidesuositusta.",
      price: "1 200 € / kertapaketti (alv 0%)",
      buttonText: "Kysy lisää",
    },
    {
      title: "Yrittäjän ja johdon tuki & sparraus",
      description: "Säännöllinen sparraus päätösten tueksi. Sisältää fokus-keskustelut ja tiiviit toimenpidesuositukset. Tehtävät määritellään tapauskohtaisesti yrityksen tarpeen mukaan.",
      price: "2 000 € / kk (alv 0%)",
      buttonText: "Kysy lisää",
    },
    {
      title: "Innovaatiopaketti – AI ja digitalisaatio",
      description: "Nopealla prototypoinnilla arvioimme liiketoimintamallisi mahdollisuuksia. Digitaalisten palveluiden ideointi, AI-ratkaisujen kartoitus, työpaja ja tulosten analyysi.",
      price: "4 900 € (alv 0%)",
      buttonText: "Kysy lisää",
    },
  ];

  return (
    <section id="palvelut" className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center md:text-left">
          Palvelupaketit
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              onButtonClick={scrollToContact}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
