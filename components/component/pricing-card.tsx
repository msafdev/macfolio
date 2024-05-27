import { cn } from "@/lib/utils";
import { Check, LucideIcon, Zap } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

type FeatureProps = {
  title: string;
  icon: LucideIcon;
};

export interface PricingProps {
  variant?: "default" | "primary" | "secondary";
  title?: string;
  description?: string;
  price?: number;
  icon?: LucideIcon;
  features?: FeatureProps[];
}

const PricingCard: React.FC<PricingProps> = ({
  variant = "default",
  title = "Landing Page",
  description = "High converting landing pages",
  price = 399,
  icon: Icon = Zap,
  features = [{ title: "High converting landing pages", icon: Check }],
}: PricingProps) => {
  const borderVariants = {
    default: "border-border",
    primary: "border-primary dark:border-border",
    secondary: "border-secondary",
  };

  const iconVariants = {
    default: "bg-primary-foreground text-primary",
    primary:
      "bg-muted text-muted-foreground dark:bg-popover dark:text-popover-foreground",
    secondary: "bg-secondary text-secondary-foreground",
  };

  const headerVariants = {
    default: "bg-muted border-border",
    primary: "bg-primary border-primary dark:bg-popover dark:border-border",
    secondary: "bg-secondary",
  };

  const textVariants = {
    default: "text-foreground",
    primary: "text-primary-foreground dark:text-popover-foreground",
    secondary: "text-secondary-foreground",
  };

  const subTextVariants = {
    default: "text-muted-foreground",
    primary: "text-primary-foreground/60 dark:text-popover-foreground/60",
    secondary: "text-secodary-foreground",
  };

  const buttonVariants = {
    default: "bg-primary text-primary-foreground",
    primary:
      "bg-primary-foreground text-primary dark:bg-accent dark:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground",
  };

  return (
    <div
      className={`flex flex-col flex-auto rounded-xl border-2 shadow-sm w-auto grow overflow-hidden ${borderVariants[variant]}`}
    >
      <div
        className={`flex flex-col p-5 border-b-2 gap-y-6 ${headerVariants[variant]}`}
      >
        <div className="flex gap-x-3 items-center">
          <div
            className={`flex h-fit p-2 border rounded-lg ${iconVariants[variant]}`}
          >
            <Icon className="w-5 h-5" />
          </div>
          <div className="flex flex-col gap-y-1">
            <h3
              className={`text-sm md:text-base font-medium leading-none ${textVariants[variant]}`}
            >
              {title}
            </h3>
            <p
              className={`text-xs md:text-sm leading-none ${subTextVariants[variant]}`}
            >
              {description}
            </p>
          </div>
        </div>
        <div className="flex items-end gap-x-4 justify-between">
          <p
            className={`text-lg leading-none md:text-2xl font-semibold ${textVariants[variant]}`}
          >
            $399
            <span
              className={`text-sm md:text-base font-medium ml-1.5 ${subTextVariants[variant]}`}
            >
              per project
            </span>
          </p>
          <Button
            className={`text-xs md:text-sm h-fit py-2 font-medium ${buttonVariants[variant]}`}
          >
            Start project
          </Button>
        </div>
      </div>
      <div className="flex flex-col w-full p-5 bg-white dark:bg-popover">
        <ul className="flex flex-col gap-y-2.5 font-medium h-full">
          {features.map((feature, index) => (
            <li key={index} className="flex gap-x-3 items-center">
              <feature.icon className="w-4 h-4 text-primary" />
              <div className="flex flex-col gap-y-1">
                <p
                  className={`text-sm ${
                    index > 2 ? "text-muted-foreground" : "text-foreground"
                  }`}
                >
                  {feature.title}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
