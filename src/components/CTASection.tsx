interface CTASectionProps {
  onContactClick: () => void;
}

const CTASection = ({ onContactClick }: CTASectionProps) => {
  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-headline font-serif font-medium mb-6">
            Prêt à passer à la phase deux ?
          </h2>
          
          <p className="font-sans text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto">
            Discutons de vos enjeux et voyons comment Phase Two peut vous accompagner 
            dans votre prochaine phase de croissance.
          </p>
          
          <button 
            onClick={onContactClick}
            className="font-sans font-semibold px-10 py-4 bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-colors text-base"
          >
            Prendre contact
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
