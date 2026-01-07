import { ArrowRight } from "lucide-react";

interface HeroProps {
  onContactClick: () => void;
}

const Hero = ({ onContactClick }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient blurs - inspired by Formant Growth */}
      <div className="gradient-blur gradient-blur-1" />
      <div className="gradient-blur gradient-blur-2" />
      <div className="gradient-blur gradient-blur-3" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-sans text-sm md:text-base font-medium tracking-wide text-muted-foreground mb-8 animate-fade-in">
            Fractional CMO · HR Tech
          </p>
          
          <h1 className="text-display font-display text-foreground mb-8 animate-fade-in-up opacity-0 delay-100">
            Your next act in
            <br />
            marketing <span className="text-gradient">starts now</span>
          </h1>
          
          <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-up opacity-0 delay-200">
            Fractional CMO for HR Tech companies at key stages of growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0 delay-300">
            <button 
              onClick={onContactClick} 
              className="group font-sans font-semibold px-8 py-4 bg-foreground text-background rounded-full hover:bg-foreground/90 transition-all text-base flex items-center justify-center gap-2"
            >
              Book a call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="#how-i-help" 
              className="font-sans font-medium px-8 py-4 border border-border text-foreground rounded-full hover:bg-secondary transition-all text-base text-center"
            >
              Explore how I help
            </a>
          </div>
        </div>
      </div>
      
      {/* Separator line */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="container">
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
