import React from "react";
import Status from "../ui/status";
import { Button } from "../ui/button";

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
          With 5+ years of experience I'm currently making conversion-focused
          and SEO-optimized websites to help businesses stand out from the
          crowd. I also craft things in Framer and React, and I'm also a
          computer science major.
        </p>
        <div className="flex items-center justify-center gap-x-4 gap-y-4 flex-wrap">
          <Button className="border-2 py-1.5 h-fit">Explore more</Button>
          <Button className="border-2 py-1.5 h-fit bg-white dark:bg-secondary" variant="secondary">
            info@johndoe.com
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
