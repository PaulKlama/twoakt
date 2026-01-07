const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 scroll-mt-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <p className="font-sans text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-4">
              About
            </p>
            <h2 className="text-headline font-serif font-medium text-foreground mb-8">
              Why I understand HR Tech
            </h2>
            
            <div className="space-y-6">
              <p className="font-sans text-body-lg text-ink-light leading-relaxed">
                I've spent over ten years building and scaling marketing in HR Tech.
              </p>
              <p className="font-sans text-base text-ink-light leading-relaxed">
                I've worked closely with HR teams — through podcasts, events and field conversations — to understand their constraints, priorities, and decision-making.
              </p>
              <p className="font-sans text-base text-ink-light leading-relaxed">
                From early-stage startups to global leaders, post-acquisition environments and private equity-backed groups, I've seen how marketing needs to adapt at every phase of growth.
              </p>
            </div>
          </div>
          
          <div className="bg-primary text-primary-foreground p-8 md:p-12">
            <p className="font-sans text-sm font-semibold tracking-widest uppercase text-primary-foreground/60 mb-6">
              Act Two
            </p>
            <h3 className="font-serif text-2xl font-medium mb-6">
              Why twoakt
            </h3>
            
            <div className="space-y-4">
              <p className="font-sans text-base text-primary-foreground/80 leading-relaxed">
                Act One was about listening, learning, and understanding HR.
              </p>
              <p className="font-sans text-base text-primary-foreground/80 leading-relaxed">
                Act Two is about acting — turning insight into structure, momentum, and results.
              </p>
              <p className="font-sans text-lg text-primary-foreground font-medium mt-6">
                twoakt is where experience meets action.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
