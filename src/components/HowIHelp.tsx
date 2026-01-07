interface HowIHelpProps {
  onContactClick: () => void;
}

const HowIHelp = ({ onContactClick }: HowIHelpProps) => {
  return (
    <section id="how-i-help" className="py-20 md:py-32 scroll-mt-20">
      <div className="container">
        <div className="max-w-xl mb-16">
          <p className="font-sans text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-4">
            How I help
          </p>
          <h2 className="text-headline font-serif font-medium text-foreground">
            Two ways to act
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Fractional CMO */}
          <div className="group bg-secondary/50 p-8 md:p-12 border border-border hover:border-foreground/30 transition-all duration-300">
            <p className="font-sans text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-6">
              01
            </p>
            
            <h3 className="font-serif text-title font-medium text-foreground mb-4">
              Fractional CMO
            </h3>
            
            <p className="font-sans text-base text-ink-light mb-8 leading-relaxed">
              I step in as your senior marketing leader to bring clarity, structure, and momentum.
              From audit to roadmap, from execution to team leadership, I help you build marketing that supports your growth — at every stage.
            </p>
            
            <div className="space-y-3 mb-10">
              <p className="font-sans text-sm font-semibold text-foreground mb-3">Best for:</p>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <p className="font-sans text-sm text-ink-light">HR Tech companies scaling</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <p className="font-sans text-sm text-ink-light">Teams needing senior marketing leadership</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <p className="font-sans text-sm text-ink-light">Founders looking for impact, not noise</p>
              </div>
            </div>
            
            <button 
              onClick={onContactClick} 
              className="font-sans text-sm font-semibold text-foreground border-b-2 border-foreground pb-1 hover:opacity-70 transition-opacity"
            >
              Get in touch →
            </button>
          </div>
          
          {/* Marketing Leadership Advisory */}
          <div className="group bg-primary text-primary-foreground p-8 md:p-12 border border-primary">
            <p className="font-sans text-sm font-semibold tracking-widest uppercase text-primary-foreground/60 mb-6">
              02
            </p>
            
            <h3 className="font-serif text-title font-medium mb-4">
              Marketing Leadership Advisory
            </h3>
            
            <p className="font-sans text-base text-primary-foreground/80 mb-8 leading-relaxed">
              I work alongside CEOs to strengthen their marketing leadership.
              I help develop autonomous, impact-driven marketing leaders and secure long-term marketing effectiveness.
            </p>
            
            <div className="space-y-3 mb-10">
              <p className="font-sans text-sm font-semibold text-primary-foreground mb-3">Best for:</p>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground mt-2 flex-shrink-0" />
                <p className="font-sans text-sm text-primary-foreground/80">First Head of Marketing</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground mt-2 flex-shrink-0" />
                <p className="font-sans text-sm text-primary-foreground/80">Growing marketing teams</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground mt-2 flex-shrink-0" />
                <p className="font-sans text-sm text-primary-foreground/80">Strategic transitions</p>
              </div>
            </div>
            
            <button 
              onClick={onContactClick} 
              className="font-sans text-sm font-semibold text-primary-foreground border-b-2 border-primary-foreground pb-1 hover:opacity-70 transition-opacity"
            >
              Get in touch →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIHelp;
