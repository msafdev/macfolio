import { cn } from "@/lib/utils";
import { LucideIcon, Zap } from "lucide-react";
import React from "react";

const ServiceCard = ({
  className,
  icon: Icon = Zap,
  title = "Optimized for speed and SEO",
  description = "Not only I work fast, but the websites created by me also work fast. Optimized for load times while also keeping an eye on SEO.",
}: {
  className?: string;
  icon?: LucideIcon;
  title?: string;
  description?: string;
}) => {
  return (
    <div
      className={cn(
        `flex flex-col rounded-lg border-2 overflow-hidden w-full h-full shadow-sm`,
        className
      )}
    >
      <div className="flex w-full items-center p-4 gap-x-3 bg-muted border-b">
        <div className="flex bg-sky-100 text-blue-400 border-sky-200 p-1.5 border rounded-md">
          <Icon className="w-4 h-4 md:w-5 md:h-5" />
        </div>
        <p className="text-xs md:text-sm font-medium text-foreground md:max-w-40">
          {title}
        </p>
      </div>
      <p className="p-4 text-xs md:text-sm text-muted-foreground leading-tight h-fit bg-white dark:bg-popover">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
