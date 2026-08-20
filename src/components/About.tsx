import profileImage from "@/assets/kari-vatka-new.jpg";
import referenssitImage from "@/assets/referenssit.png";

const About = () => {
  return (
    <section id="minusta" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center uppercase tracking-tight">
          Minusta
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
        
        <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
          <div className="md:w-1/3 flex justify-center">
            <img 
              src={profileImage} 
              alt="Profiilikuva Kari Vatka" 
              className="rounded-lg shadow-2xl w-[85%] max-w-sm h-auto object-cover"
            />
          </div>
          
          <div className="md:w-2/3 space-y-6 text-lg text-foreground leading-relaxed">
            <p>
              Olen <strong>Kari Vatka</strong>, yrittäjä ja liiketoiminnan kehittäjä. Perustin ja kasvatin teknologiayrityksen nollasta 25 hengen organisaatioksi ja olen johtanut useampia yritysostoja. Toimin tällä hetkellä kasvujohtajana, vastuualueenani mm. B2G SaaS -myynti, B2B-alihankintamyynti, rekrytointi, sopimushallinta ja kustannuslaskenta.
            </p>
            <p>
              Hyödynnän työssäni tekoälyä ja digitaalisia työkaluja päivittäin – sekä operatiivisen tehokkuuden että ohjelmistoprototyyppien rakentamisen kautta. Taustani antaa minulle laaja-alaisen näkökulman: en ole kapea-alainen erikoisosaaja, vaan liiketoiminnan ongelmanratkaisija, joka pystyy toimimaan myynnistä ja kasvusta rekrytointiin ja kustannushallintaan.
            </p>
            <p>
              Tuen yrityksiä kahdella tasolla. Isommissa toimeksiannoissa toimin interim-johtajana tai hallitusjäsenenä, jolloin otan operatiivista tai strategista vastuuta suoraan. Pienemmissä ja nopeammissa tarpeissa sparraan startupeja ja kasvuvaiheen pk-yrityksiä tarjooman kirkastamisessa, hinnoittelussa ja arjen haasteissa.
            </p>
          </div>
        </div>

        <div id="referenssit" className="mt-16">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center uppercase tracking-tight">
            Referenssit
          </h3>
          <img 
            src={referenssitImage} 
            alt="Referenssit" 
            className="w-full rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
