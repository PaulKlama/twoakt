import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  onContactClick: () => void;
}

const CTASection = ({ onContactClick }: CTASectionProps) => {
  return (
    <section className="py-24 md:py-32 border-t border-border relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-secondary/40 pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-headline font-display text-foreground mb-6">
            Ready to move forward?
          </h2>
          
          <p className="font-sans text-2xl text-muted-foreground mb-10">
            Let's act.
          </p>
          
          <button 
            onClick={onContactClick}
            className="group font-sans font-semibold px-10 py-4 bg-foreground text-background rounded-full hover:bg-foreground/90 transition-all text-base inline-flex items-center gap-2"
          >
            Book a call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
