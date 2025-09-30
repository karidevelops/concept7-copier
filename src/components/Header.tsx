const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-primary shadow-md">
      <div className="container mx-auto px-6 max-w-7xl flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold text-primary-foreground uppercase tracking-wider">Concept7</span>
        </div>
        <nav className="hidden md:flex gap-10">
          <a 
            href="#palvelut" 
            className="text-base font-semibold text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-300 uppercase tracking-wide"
          >
            Palvelut
          </a>
          <a 
            href="#minusta" 
            className="text-base font-semibold text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-300 uppercase tracking-wide"
          >
            Minusta
          </a>
          <a 
            href="#yhteys" 
            className="text-base font-semibold text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-300 uppercase tracking-wide"
          >
            Yhteystiedot
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
