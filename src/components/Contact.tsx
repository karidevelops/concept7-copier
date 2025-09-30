import { Mail, Phone, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="yhteys" className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Yhteystiedot
        </h2>
        <div className="space-y-6">
          <a 
            href="mailto:kari.vatka@concept7.fi"
            className="flex items-center gap-4 text-lg text-foreground hover:text-accent transition-all duration-300 hover:translate-x-2 group"
          >
            <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            <span>kari.vatka@concept7.fi</span>
          </a>
          <a 
            href="tel:+358456367653"
            className="flex items-center gap-4 text-lg text-foreground hover:text-accent transition-all duration-300 hover:translate-x-2 group"
          >
            <Phone className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            <span>045 636 7653</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/kari-vatka"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-lg text-foreground hover:text-accent transition-all duration-300 hover:translate-x-2 group"
          >
            <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            <span>linkedin.com/in/kari-vatka</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
