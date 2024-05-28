import { Check, LoaderCircle, Star } from "lucide-react";
import React from "react";

const AboutCard = () => {
  return (
    <div className="flex flex-col rounded-lg border-2 overflow-hidden w-full h-fit shadow-sm">
      <div className="flex w-full items-center p-3 gap-x-3 bg-muted border-b">
        <div className="flex bg-primary text-primary-foreground p-1.5 border rounded-md">
          <Star className="w-4 h-4" />
        </div>
        <p className="text-sm md:text-base font-medium text-foreground md:max-w-40">
          To do
        </p>
      </div>
      <ul className="p-3 text-xs flex flex-col gap-y-2 md:text-sm bg-white dark:bg-popover">
        <li className="flex gap-x-3 items-center text-muted-foreground">
          <Check className="w-3 h-3 shrink-0 text-foreground" />
          <p>Finish my portfolio</p>
        </li>
        <li className="flex gap-x-3 items-center text-muted-foreground">
          <Check className="w-3 h-3 shrink-0 text-foreground" />
          <p>Publish my first blog post</p>
        </li>
        <li className="flex gap-x-3 items-center text-muted-foreground">
          <LoaderCircle className="w-3 h-3 shrink-0 text-foreground animate-spin" />
          <p>Ship Tomodoro</p>
        </li>
        <li className="flex gap-x-3 items-center text-muted-foreground">
          <LoaderCircle className="w-3 h-3 shrink-0 text-foreground animate-spin" />
          <p>Reach 1k followers on X</p>
        </li>
        <li className="flex gap-x-3 items-center text-muted-foreground">
          <LoaderCircle className="w-3 h-3 shrink-0 text-foreground animate-spin" />
          <p>Ship more projects</p>
        </li>
      </ul>
    </div>
  );
};

export default AboutCard;
