interface HeroProps {
  onContactClick: () => void;
}

const Hero = ({ onContactClick }: HeroProps) => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container">
        <div className="max-w-4xl">
          <p className="font-sans text-sm md:text-base font-semibold tracking-widest uppercase text-muted-foreground mb-6 animate-fade-in">
            Marketing Studio B2B
          </p>
          
          <h1 className="text-display font-serif font-medium text-foreground mb-8 animate-fade-in-up opacity-0 delay-100">
            Passez à la<br />
            <em className="italic">phase deux</em>
          </h1>
          
          <p className="font-sans text-body-lg text-ink-light max-w-2xl mb-10 animate-fade-in-up opacity-0 delay-200">
            Phase Two accompagne les entreprises B2B dans leurs moments de croissance critiques. 
            Structuration. Accélération. Scale.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0 delay-300">
            <button 
              onClick={onContactClick}
              className="font-sans font-semibold px-8 py-4 bg-primary text-primary-foreground hover:bg-ink-light transition-colors text-base"
            >
              Discutons de votre projet
            </button>
            <a 
              href="#offres"
              className="font-sans font-medium px-8 py-4 border border-foreground/20 text-foreground hover:border-foreground transition-colors text-base text-center"
            >
              Découvrir les offres
            </a>
          </div>
        </div>
        
        <div className="mt-20 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 animate-fade-in-up opacity-0 delay-400">
          <div className="border-l-2 border-foreground/20 pl-4">
            <p className="font-serif text-3xl md:text-4xl font-medium text-foreground">10+</p>
            <p className="font-sans text-sm text-muted-foreground mt-1">années d'expérience</p>
          </div>
          <div className="border-l-2 border-foreground/20 pl-4">
            <p className="font-serif text-3xl md:text-4xl font-medium text-foreground">B2B</p>
            <p className="font-sans text-sm text-muted-foreground mt-1">focus exclusif</p>
          </div>
          <div className="border-l-2 border-foreground/20 pl-4">
            <p className="font-serif text-3xl md:text-4xl font-medium text-foreground">HR Tech</p>
            <p className="font-sans text-sm text-muted-foreground mt-1">expertise sectorielle</p>
          </div>
          <div className="border-l-2 border-foreground/20 pl-4">
            <p className="font-serif text-3xl md:text-4xl font-medium text-foreground">Scale</p>
            <p className="font-sans text-sm text-muted-foreground mt-1">up to enterprise</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
