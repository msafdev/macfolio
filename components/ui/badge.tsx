import { cn } from "@/lib/utils";
import React from "react";

const Badge = ({
  children = "Badge",
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("font-medium text-secondary-foreground bg-secondary border rounded-md px-4 py-1.5", className)}>
      <p className="">{children}</p>
    </div>
  );
};

export default Badge;
