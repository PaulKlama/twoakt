const ConceptSection = () => {
  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-headline font-serif font-medium mb-8">
            La <em className="font-times italic">Phase Two</em>, c'est quoi ?
          </h2>
          
          <p className="font-sans text-lg md:text-xl leading-relaxed text-primary-foreground/80 mb-12">
            C'est ce moment charnière où votre entreprise a validé son marché, 
            mais où la croissance demande plus qu'un bon produit. Il faut structurer. 
            Professionnaliser. Accélérer.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="border-t border-primary-foreground/20 pt-6">
              <p className="font-serif text-2xl mb-3">Structuration</p>
              <p className="font-sans text-sm text-primary-foreground/70 leading-relaxed">
                Poser les fondations marketing solides pour supporter l'ambition.
              </p>
            </div>
            <div className="border-t border-primary-foreground/20 pt-6">
              <p className="font-serif text-2xl mb-3">Accélération</p>
              <p className="font-sans text-sm text-primary-foreground/70 leading-relaxed">
                Déployer les leviers de croissance avec méthode et impact.
              </p>
            </div>
            <div className="border-t border-primary-foreground/20 pt-6">
              <p className="font-serif text-2xl mb-3">Scale</p>
              <p className="font-sans text-sm text-primary-foreground/70 leading-relaxed">
                Industrialiser et piloter pour une croissance durable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;
