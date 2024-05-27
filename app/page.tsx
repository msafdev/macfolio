// Sections
import HomeSection from "@/components/section/home-section";
import ServiceSection from "@/components/section/service-section";
import PricingSection from "@/components/section/pricing-section";
import TestimonialSection from "@/components/section/testimonial-section";
import AboutSection from "@/components/section/about-section";
import FaqSection from "@/components/section/faq-section";

// Components
import Window from "@/components/component/window";

export default function Home() {
  return (
    <main className="flex flex-col pad-x py-6 md:py-24 items-center gap-y-8 md:gap-y-16">
      <HomeSection />
      <Window />
      <AboutSection />
      <ServiceSection />
      <TestimonialSection />
      <PricingSection />
      <FaqSection />
    </main>
  );
}
