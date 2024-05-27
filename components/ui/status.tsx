import { cn } from "@/lib/utils";
import React from "react";

const Status = ({
  children = <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        `rounded-lg border py-1 px-3 font-medium text-sm bg-accent text-accent-foreground`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Status;
