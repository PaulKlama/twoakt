const expertises = [
  {
    title: "Stratégie & Planning",
    description: "Définition du positionnement, planification marketing, go-to-market.",
  },
  {
    title: "Management d'équipes",
    description: "Structuration, recrutement, coaching, montée en compétences.",
  },
  {
    title: "Exécution opérationnelle",
    description: "Campagnes, contenu, demand gen, nurturing, conversion.",
  },
  {
    title: "Événementiel",
    description: "Organisation et pilotage d'événements physiques et digitaux.",
  },
  {
    title: "Prises de parole",
    description: "Podcasts, interventions événements, stratégie réseaux sociaux.",
  },
  {
    title: "Performance Ads",
    description: "Stratégie et pilotage des campagnes paid sur tous les canaux.",
  },
  {
    title: "SEO & LLM Search",
    description: "Optimisation pour les moteurs de recherche classiques et IA.",
  },
  {
    title: "Analytics & Data",
    description: "Mise en place des KPIs, dashboards, culture data-driven.",
  },
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-20 md:py-32 bg-secondary/30 scroll-mt-20">
      <div className="container">
        <div className="max-w-xl mb-16">
          <p className="font-sans text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-4">
            Expertise
          </p>
          <h2 className="text-headline font-serif font-medium text-foreground">
            Un périmètre d'intervention complet
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {expertises.map((expertise, index) => (
            <div 
              key={index}
              className="bg-background p-6 md:p-8 hover:bg-secondary/50 transition-colors"
            >
              <h3 className="font-serif text-lg font-medium text-foreground mb-3">
                {expertise.title}
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                {expertise.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
