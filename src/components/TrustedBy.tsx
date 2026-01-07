const TrustedBy = () => {
  // Placeholder logos - structure ready for real logos
  const companies = [
    "Company 1",
    "Company 2", 
    "Company 3",
    "Company 4",
    "Company 5",
  ];

  return (
    <section className="py-16 border-b border-border">
      <div className="container">
        <p className="font-sans text-sm font-medium text-muted-foreground text-center mb-10 tracking-wide uppercase">
          Trusted by HR Tech leaders
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {companies.map((company, index) => (
            <div 
              key={index}
              className="font-sans text-lg font-medium text-muted-foreground/40 hover:text-muted-foreground transition-colors"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
