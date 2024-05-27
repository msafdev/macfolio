import React from "react";
import ServiceCard from "../component/service-card";
import Title from "../ui/title";
import { Globe, Headset, Palette, Phone, TrendingUp, Zap } from "lucide-react";

export const Services = [
  {
    title: "Optimized for speed and SEO",
    description:
      "Not only I work fast, but the websites created by me also work fast. Optimized and performant, at any time.",
    icon: Zap,
  },
  {
    title: "Responsive and mobile-first",
    description:
      "I create websites that work on all devices. No matter the screen size, the website will look great.",
    icon: Phone,
  },
  {
    title: "Modern design and UI/UX",
    description:
      "I create modern and clean designs that are easy to use and navigate. I keep up with the latest trends in tech.",
    icon: Palette,
  },
  {
    title: "Internationalization and localization",
    description:
      "I create websites in multiple languages and make sure they are accessible to everyone, no matter the language.",
    icon: Globe,
  },
  {
    title: "Business growth and analytics",
    description:
      "I can help you grow your businesses or brands by analyzing the data and making informed decisions.",
    icon: TrendingUp,
  },
  {
    title: "Support and maintenance",
    description:
      "I provide support and maintenance for the websites I create. I can also help you with any issues you might have.",
    icon: Headset,
  },
];

const ServiceSection = () => {
  return (
    <section className="flex flex-col w-full max-w-4xl items-center" id="service">
      <Title
        title="Services"
        subtitle="Grow your business with me"
        className="mb-6 md:mb-12"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
        {Services.map((feature, index) => (
          <ServiceCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
