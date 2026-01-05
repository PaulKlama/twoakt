const targets = [
  {
    title: "Éditeurs SaaS early stage",
    description: "Vous lancez votre solution et avez besoin de poser les bases d'un marketing qui parle à vos clients.",
  },
  {
    title: "Scale-ups B2B Tech",
    description: "Vous avez trouvé votre product-market fit et devez professionnaliser votre marketing pour accélérer.",
  },
  {
    title: "Entreprises B2B en transformation",
    description: "Vous ciblez les décideurs et avez besoin d'un marketing qui comprend leurs enjeux métier.",
  },
];

const Targets = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        <div className="max-w-xl mb-16">
          <p className="font-sans text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-4">
            Pour qui ?
          </p>
          <h2 className="text-headline font-serif font-medium text-foreground">
            Entreprises B2B Tech
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {targets.map((target, index) => (
            <div 
              key={index}
              className="border-l-2 border-foreground/20 pl-6"
            >
              <h3 className="font-serif text-xl font-medium text-foreground mb-4">
                {target.title}
              </h3>
              <p className="font-sans text-base text-muted-foreground leading-relaxed">
                {target.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Targets;