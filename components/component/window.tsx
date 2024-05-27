import React from "react";
import Marquee from "../ui/marquee";
import { ReviewCard, reviews } from "./review";
import DotPattern from "../ui/dot-pattern";
import { cn } from "@/lib/utils";

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const Window = () => {
  return (
    <div className="w-full h-fit border-2 rounded-xl overflow-hidden max-w-4xl shadow-sm flex flex-col">
      <div className="border-b bg-border py-4 px-6 flex items-center gap-x-4">
        <div className="flex items-center gap-x-2">
          <div className="w-3 h-3 bg-red-400 rounded-full border border-red-700" />
          <div className="w-3 h-3 bg-yellow-400 rounded-full border border-yellow-700" />
          <div className="w-3 h-3 bg-green-400 rounded-full border border-green-700" />
        </div>
        <p className="text-sm font-medium text-muted-foreground ">
          <span className="hidden md:inline">
            Portfolio<span className="mx-3">\\</span>
          </span>
          <span className="text-foreground">Happy Clients!</span>
        </p>
      </div>
      <div className="w-full h-auto aspect-video flex flex-col justify-center relative bg-white dark:bg-popover py-8">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
          )}
        />
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s] hidden md:flex">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:20s] hidden md:flex">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Window;
