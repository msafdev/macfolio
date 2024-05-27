import { cn } from "@/lib/utils";
import React from "react";

const Title = ({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) => {
  return (
    <div className={cn("flex gap-x-4 items-center w-full", className)}>
      <div className="w-auto grow h-[2px] bg-border"/>
      <div className="flex flex-col items-center text-center">
        <h1 className="text-xl md:text-3xl font-medium">{title}</h1>
        <p className="text-xs md:text-sm text-muted-foreground">{subtitle}</p>
      </div>
      <div className="w-auto grow h-[2px] bg-border"/>
    </div>
  );
};

export default Title;
