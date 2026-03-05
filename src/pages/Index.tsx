import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainSection from "@/components/PainSection";
import IdentificationSection from "@/components/IdentificationSection";
import BenefitsSection from "@/components/BenefitsSection";
import WorkshopSection from "@/components/WorkshopSection";
import TransformationSection from "@/components/TransformationSection";
import SignsSection from "@/components/SignsSection";
import ForWhomSection from "@/components/ForWhomSection";
import EventDetailsSection from "@/components/EventDetailsSection";
import InclusionsSection from "@/components/InclusionsSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import ScienceSection from "@/components/ScienceSection";
import UrgencySection from "@/components/UrgencySection";
import FaqSection from "@/components/FaqSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  const scrollRef = useScrollAnimation();

  return (
    <div ref={scrollRef} className="min-h-screen">
      <Navbar />
      <Hero />
      <PainSection />
      <IdentificationSection />
      <BenefitsSection />
      <WorkshopSection />
      <TransformationSection />
      <SignsSection />
      <ForWhomSection />
      <EventDetailsSection />
      <InclusionsSection />
      <PricingSection />
      <TestimonialsSection />
      <AboutSection />
      <ScienceSection />
      <UrgencySection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </div>
  );
};

export default Index;
