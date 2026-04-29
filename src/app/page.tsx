import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ValueProposition from "@/components/ValueProposition";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import QuoteWizard from "@/components/QuoteWizard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ValueProposition />
      <Services />
      <Portfolio />
      <Testimonials />
      <QuoteWizard />
    </div>
  );
}
