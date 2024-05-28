import React from "react";
import Status from "../ui/status";
import { Button } from "../ui/button";
import Link from "next/link";

const HomeSection = () => {
  return (
    <section className="flex flex-col w-full max-w-4xl items-center" id="home">
      <div className="flex flex-col w-full justify-center items-center text-center max-w-3xl">
        <Status className="mb-3 md:mb-6 border-2">
          <p className="font-medium text-muted-foreground">
            I'm open to work 🚀
          </p>
        </Status>
        <h1 className="text-2xl md:text-3xl font-medium mb-4 md:mb-6">
          Creating unique websites and digital experiences
        </h1>
        <p className="text-sm md:text-base font-medium text-muted-foreground mb-6 md:mb-8">
          With almost 2 years of experience, I've worked with startups and
          companies to craft unique digital experiences. I am currently making
          conversion-based and SEO optimized products to help businesses grow
          and flourish. I mainly craft my magic using{" "}
          <span className="text-semibold text-foreground">Next.js</span> and{" "}
          <span className="text-semibold text-foreground">Supabase</span>.
        </p>
        <div className="flex items-center justify-center gap-x-4 gap-y-4 flex-wrap">
          <Button className="border-2 py-1.5 h-fit" id="about">
            Explore more
          </Button>
          <Button
            className="border-2 py-1.5 h-fit bg-white dark:bg-secondary"
            variant="secondary"
            email="salmanalfarisi261002@gmail.com"
          >
            Send me a message
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
