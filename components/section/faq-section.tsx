import React from "react";
import Title from "../ui/title";
import Faq from "../component/faq";

const FaqSection = () => {
  return (
    <section className="flex flex-col w-full max-w-4xl items-center" id="faq">
      <Title
        title="FAQ"
        subtitle="Frequently asked questions"
        className="mb-6 md:mb-12"
      />
      <div className="flex flex-col gap-y-4 w-full">
        <Faq />
        <Faq />
        <Faq />
        <Faq />
      </div>
    </section>
  );
};

export default FaqSection;
