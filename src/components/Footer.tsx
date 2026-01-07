import { Linkedin } from "lucide-react";
import logoTwoakt from "@/assets/logo-twoakt.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img 
            src={logoTwoakt} 
            alt="twoakt" 
            className="h-5 w-auto opacity-60" 
          />
          
          <nav className="flex items-center gap-8">
            <a 
              href="#how-i-help" 
              className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              How I help
            </a>
            <a 
              href="#how-i-work" 
              className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              How I work
            </a>
            <a 
              href="#about" 
              className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
          </nav>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/in/paul-baratte/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <p className="font-sans text-sm text-muted-foreground">
              © {currentYear} twoakt
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
