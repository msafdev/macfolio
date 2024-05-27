import React from "react";
import Title from "../ui/title";
import PricingCard, { PricingProps } from "../component/pricing-card";
import { Check, Plus, Rocket, Sparkle, Sparkles } from "lucide-react";
import { Button } from "../ui/button";

const Prices: PricingProps[] = [
  {
    title: "Landing page",
    description: "High converting landing pages",
    price: 399,
    features: [
      { title: "Conversion-focused 1-pager", icon: Check },
      { title: "Up to 8 sections", icon: Check },
      { title: "Responsive, unique design", icon: Check },
      { title: "Framer development", icon: Check },
      { title: "High-converting copy", icon: Check },
      { title: "Site optimization", icon: Check },
      { title: "On-page SEO", icon: Check },
      { title: "Private communication channel", icon: Check },
      { title: "Unlimited revisions", icon: Check },
      { title: "Updates delivered every 48 hours", icon: Check },
      { title: "Delivered in 1-2 weeks", icon: Check },
      { title: "50% advance, 50% on final", icon: Check },
    ],
  },
  {
    title: "Multi-page website",
    description: "For businesses and personal brands",
    price: 899,
    features: [
      { title: "Up to 6 pages", icon: Check },
      { title: "Additional pages: $99/page", icon: Check },
      { title: "Responsive, unique design", icon: Check },
      { title: "Framer development", icon: Check },
      { title: "High-converting copy", icon: Check },
      { title: "Site optimization", icon: Check },
      { title: "On-page SEO", icon: Check },
      { title: "Private communication channel", icon: Check },
      { title: "Unlimited revisions", icon: Check },
      { title: "Updates delivered every 48 hours", icon: Check },
      { title: "Delivered in 2-4 weeks", icon: Check },
      { title: "50% advance, 50% on final", icon: Check },
    ],
    icon: Rocket,
    variant: "primary",
  },
];

const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="flex flex-col w-full max-w-4xl items-center"
    >
      <Title
        title="PricingCard"
        subtitle="Fixed prices, no hidden fees"
        className="mb-6 md:mb-12"
      />
      {/* Cards */}
      <div className="flex items-center w-full gap-4 md:gap-6 flex-wrap">
        {Prices.map((price, index) => (
          <PricingCard key={index} {...price} variant={price.variant} />
        ))}
        <div className="flex flex-col gap-y-4 md:gap-y-6 w-auto grow">
          <div className="flex flex-col gap-y-4 md:gap-y-6 w-auto flex-auto h-auto grow bg-white dark:bg-muted rounded-xl border-2 p-4">
            <div className="flex gap-x-3 items-center">
              <div className="flex h-fit w-fit bg-primary text-primary-foreground p-2 border rounded-lg">
                <Sparkle className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-y-1">
                <h3 className="text-base font-medium leading-none text-foreground">
                  Optional extras
                </h3>
                <p className="text-sm leading-none text-muted-foreground">
                  Game changing additions if requested
                </p>
              </div>
            </div>
            <ul className="text-muted-foreground font-medium text-sm flex flex-col gap-y-2.5">
              <li className="flex items-center gap-x-2">
                <Plus className="w-4 h-4" />
                Site setup (domain, cloud storage, ect.)
              </li>
              <li className="flex items-center gap-x-2">
                <Plus className="w-4 h-4" />
                Only development (you already have a design)
              </li>
              <li className="flex items-center gap-x-2">
                <Plus className="w-4 h-4" />
                CMS integration
              </li>
              <li className="flex items-center gap-x-2">
                <Plus className="w-4 h-4" />
                Payment integration
              </li>
            </ul>
            <div className="flex items-end gap-x-4 justify-between">
              <p className="text-lg leading-none md:text-2xl font-semibold">
                $???
                <span className="text-muted-foreground text-sm md:text-base font-medium ml-1.5">
                  per extras
                </span>
              </p>
              <Button className="text-xs md:text-sm h-fit py-2 font-medium">
                Get quotes
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 md:gap-y-6 w-auto flex-auto h-auto grow bg-white dark:bg-muted rounded-xl border-2 p-4">
            <div className="flex gap-x-3 items-center">
              <div className="flex h-fit w-fit bg-primary text-primary-foreground p-2 border rounded-lg">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-y-1">
                <h3 className="text-base font-medium leading-none text-foreground">
                  Custom request
                </h3>
                <p className="text-sm leading-none text-muted-foreground">
                  If you have something truly unique in mind
                </p>
              </div>
            </div>
            <p className="text-muted-foreground font-medium text-sm">
              Do you have a different scope, or you are seeking something else?
              Feel free to reach out.
            </p>
            <div className="flex items-end gap-x-4 justify-between">
              <p className="text-lg leading-none md:text-2xl font-semibold">
                $???
                <span className="text-muted-foreground text-sm md:text-base font-medium ml-1.5">
                  per project
                </span>
              </p>
              <Button className="text-xs md:text-sm h-fit py-2 font-medium">
                Get quotes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
