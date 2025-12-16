import logoPhaseTwoCream from "@/assets/logo-phase-two-cream.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img 
            src={logoPhaseTwoCream} 
            alt="Phase Two" 
            className="h-8 w-auto"
          />
          
          <nav className="flex items-center gap-8">
            <a href="#offres" className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
              Offres
            </a>
            <a href="#expertise" className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
              Expertise
            </a>
            <a href="#apropos" className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
              À propos
            </a>
          </nav>
          
          <p className="font-sans text-sm text-muted-foreground">
            © {currentYear} Phase Two
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
