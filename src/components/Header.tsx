import logoTwoakt from "@/assets/logo-twoakt.png";

interface HeaderProps {
  onContactClick: () => void;
}

const Header = ({ onContactClick }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/50">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center">
          <img 
            src={logoTwoakt} 
            alt="twoakt" 
            className="h-8 md:h-10 w-auto" 
          />
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#how-i-help" 
            className="font-sans text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            How I help
          </a>
          <a 
            href="#how-i-work" 
            className="font-sans text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            How I work
          </a>
          <a 
            href="#about" 
            className="font-sans text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            About
          </a>
        </nav>

        <button 
          onClick={onContactClick} 
          className="font-sans text-sm font-semibold px-5 py-2.5 bg-primary text-primary-foreground hover:bg-ink-light transition-colors"
        >
          Contact
        </button>
      </div>
    </header>
  );
};

export default Header;
