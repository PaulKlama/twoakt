import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ConceptSection from "@/components/ConceptSection";
import Offers from "@/components/Offers";
import Expertise from "@/components/Expertise";
import About from "@/components/About";
import Targets from "@/components/Targets";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

const Index = () => {
  const [contactOpen, setContactOpen] = useState(false);

  const handleContactClick = () => {
    setContactOpen(true);
  };

  return (
    <main className="min-h-screen">
      <Header onContactClick={handleContactClick} />
      <Hero onContactClick={handleContactClick} />
      <ConceptSection />
      <Offers onContactClick={handleContactClick} />
      <Expertise />
      <About />
      <Targets />
      <CTASection onContactClick={handleContactClick} />
      <Footer />
      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </main>
  );
};

export default Index;
