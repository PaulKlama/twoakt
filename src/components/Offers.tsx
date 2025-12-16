import logoGrowBlack from "@/assets/logo-grow-black.svg";
import logoScaleWhite from "@/assets/logo-scale-white.svg";
interface OffersProps {
  onContactClick: () => void;
}
const Offers = ({
  onContactClick
}: OffersProps) => {
  return <section id="offres" className="py-20 md:py-32 scroll-mt-20">
      <div className="container">
        <div className="max-w-xl mb-16">
          <p className="font-sans text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-4">
            Nos offres
          </p>
          <h2 className="text-headline font-serif font-medium text-foreground">
            Deux formats d'accompagnement
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Two Grow */}
          <div className="group bg-secondary/50 p-8 md:p-12 border border-border hover:border-foreground/30 transition-all duration-300">
            <img alt="Two Grow" className="h-8 w-auto mb-8" src="/lovable-uploads/c4b72bae-6b81-408a-9859-2b19fe06960e.png" />
            
            <h3 className="font-serif text-title font-medium text-foreground mb-4">
              Structuration
            </h3>
            
            <p className="font-sans text-base text-ink-light mb-8 leading-relaxed">Pour les entreprises qui ont besoin de poser des fondations marketing solides. Stratégie, processus, outils, équipe : on structure tout ce qui doit l'être pour supporter votre ambition.</p>
            
            <div className="space-y-3 mb-10">
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <p className="font-sans text-sm text-ink-light">Audit et diagnostic marketing</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <p className="font-sans text-sm text-ink-light">Définition de la stratégie et du positionnement</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <p className="font-sans text-sm text-ink-light">Mise en place des process et outils</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                <p className="font-sans text-sm text-ink-light">Accompagnement au recrutement d'équipe</p>
              </div>
            </div>
            
            <button onClick={onContactClick} className="font-sans text-sm font-semibold text-foreground border-b-2 border-foreground pb-1 hover:opacity-70 transition-opacity">
              En savoir plus →
            </button>
          </div>
          
          {/* Two Scale */}
          <div className="group bg-primary text-primary-foreground p-8 md:p-12 border border-primary">
            <img alt="Two Scale" className="h-8 w-auto mb-8" src="/lovable-uploads/c6bee803-d78e-434b-add6-646f3f1a5580.png" />
            
            <h3 className="font-serif text-title font-medium mb-4">
              Accélération & Pilotage
            </h3>
            
            <p className="font-sans text-base text-primary-foreground/80 mb-8 leading-relaxed">
              Pour les entreprises prêtes à accélérer. Exécution opérationnelle, 
              pilotage de la performance, optimisation continue. 
              On passe à l'échelle ensemble.
            </p>
            
            <div className="space-y-3 mb-10">
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground mt-2 flex-shrink-0" />
                <p className="font-sans text-sm text-primary-foreground/80">Pilotage opérationnel du marketing</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground mt-2 flex-shrink-0" />
                <p className="font-sans text-sm text-primary-foreground/80">Déploiement des campagnes et du contenu</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground mt-2 flex-shrink-0" />
                <p className="font-sans text-sm text-primary-foreground/80">Gestion des événements et prises de parole</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground mt-2 flex-shrink-0" />
                <p className="font-sans text-sm text-primary-foreground/80">Performance Ads et SEO / LLM search</p>
              </div>
            </div>
            
            <button onClick={onContactClick} className="font-sans text-sm font-semibold text-primary-foreground border-b-2 border-primary-foreground pb-1 hover:opacity-70 transition-opacity">
              En savoir plus →
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default Offers;