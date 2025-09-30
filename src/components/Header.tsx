import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-7xl">
        <div className="text-2xl font-bold text-foreground">C7</div>
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("palvelut")}
            className="text-foreground hover:text-accent transition-colors duration-200"
          >
            Palvelut
          </button>
          <button
            onClick={() => scrollToSection("minusta")}
            className="text-foreground hover:text-accent transition-colors duration-200"
          >
            Minusta
          </button>
          <button
            onClick={() => scrollToSection("yhteys")}
            className="text-foreground hover:text-accent transition-colors duration-200"
          >
            Yhteys
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
