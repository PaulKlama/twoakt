const experiences = [{
  title: "Scale-up post Série A",
  detail: "Croissance accélérée en B2B SaaS"
}, {
  title: "SuccessFactors / SAP",
  detail: "Leader mondial des solutions RH"
}, {
  title: "Start-up early stage",
  detail: "Pré Série A, premiers clients grands comptes"
}, {
  title: "Groupe européen (PE)",
  detail: "Fusion et transformation digitale"
}];
const About = () => {
  return <section id="apropos" className="py-20 md:py-32 scroll-mt-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <p className="font-sans text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-4">
              À propos
            </p>
            <h2 className="text-headline font-serif font-medium text-foreground mb-8">
              10 ans au cœur du B2B Tech
            </h2>
            
            <div className="space-y-6">
              <p className="font-sans text-body-lg text-ink-light leading-relaxed">Avant de parler à vos clients, j'ai appris à les comprendre. 
Depuis plus de dix ans, je fais du marketing en B2B Tech, aux côtés des équipes commerciales et produit. Podcasts, événements et échanges terrain m'ont permis de comprendre les priorités et contraintes des décideurs. 
J'ai exercé ce métier dans des contextes très variés, de la start-up pré-Série A à des environnements corporate post-acquisition par SAP.
Si la phase 1 a été d'écouter, comprendre et apprendre, ma phase 2 consiste à accompagner les entreprises avec un marketing qui transforme cette connaissance en impact concret. C'est ça, <em className="font-times italic">Phase Two</em>.
            </p>
              
              
            </div>
          </div>
          
          <div className="bg-primary text-primary-foreground p-8 md:p-12">
            <p className="font-serif text-xl font-medium mb-8">
              Expériences clés
            </p>
            
            <div className="space-y-4">
              {experiences.map((exp, index) => <div key={index} className="flex items-start gap-4 pb-4 border-b border-primary-foreground/20 last:border-0 last:pb-0">
                  <span className="font-serif text-2xl text-primary-foreground/50">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="pt-1">
                    <p className="font-sans text-base text-primary-foreground/90 font-medium">
                      {exp.title}
                    </p>
                    <p className="font-sans text-sm text-primary-foreground/60">
                      {exp.detail}
                    </p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;