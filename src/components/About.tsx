const experiences = [
  "Scale-up post Série A",
  "Acquisition par SAP",
  "Start-up early stage (pré Série A)",
  "Fusion dans un groupe européen (Private Equity)",
];

const About = () => {
  return (
    <section id="apropos" className="py-20 md:py-32 scroll-mt-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <p className="font-sans text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-4">
              À propos
            </p>
            <h2 className="text-headline font-serif font-medium text-foreground mb-8">
              10 ans au cœur de la croissance B2B
            </h2>
            
            <div className="space-y-6">
              <p className="font-sans text-body-lg text-ink-light leading-relaxed">
                Phase Two est né d'une conviction : le marketing B2B mérite mieux que des solutions génériques. 
                Après une décennie passée à construire et scaler des équipes marketing dans des contextes 
                variés — de la start-up early stage à l'entreprise post-acquisition — j'ai choisi de 
                mettre cette expérience au service d'entreprises ambitieuses.
              </p>
              
              <p className="font-sans text-body-lg text-ink-light leading-relaxed">
                Mon terrain de jeu : la HR Tech et plus largement le B2B SaaS. 
                Mon approche : pragmatique, orientée impact, sans bullshit.
              </p>
            </div>
          </div>
          
          <div className="bg-primary text-primary-foreground p-8 md:p-12">
            <p className="font-serif text-xl font-medium mb-8">
              Expériences clés
            </p>
            
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 pb-4 border-b border-primary-foreground/20 last:border-0 last:pb-0"
                >
                  <span className="font-serif text-2xl text-primary-foreground/50">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="font-sans text-base text-primary-foreground/90 pt-1">
                    {exp}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
