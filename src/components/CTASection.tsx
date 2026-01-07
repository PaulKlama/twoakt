interface CTASectionProps {
  onContactClick: () => void;
}

const CTASection = ({ onContactClick }: CTASectionProps) => {
  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-headline font-serif font-medium mb-6">
            Ready to move forward?
          </h2>
          
          <p className="font-sans text-2xl md:text-3xl font-serif italic text-primary-foreground/90 mb-10">
            Let's act.
          </p>
          
          <button 
            onClick={onContactClick}
            className="font-sans font-semibold px-10 py-4 bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-colors text-base"
          >
            Book a call
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
