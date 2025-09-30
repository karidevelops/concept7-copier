import { Mail, Phone, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="yhteys" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Yhteystiedot
        </h2>
        <div className="space-y-6">
          <a 
            href="mailto:kari.vatka@concept7.fi"
            className="flex items-center gap-4 text-lg text-foreground hover:text-accent transition-colors duration-200"
          >
            <Mail className="w-6 h-6" />
            <span>kari.vatka@concept7.fi</span>
          </a>
          <a 
            href="tel:+358456367653"
            className="flex items-center gap-4 text-lg text-foreground hover:text-accent transition-colors duration-200"
          >
            <Phone className="w-6 h-6" />
            <span>045 636 7653</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/kari-vatka"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-lg text-foreground hover:text-accent transition-colors duration-200"
          >
            <Linkedin className="w-6 h-6" />
            <span>linkedin.com/in/kari-vatka</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
