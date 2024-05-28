import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const Profile = ({
  className,
  imageUrl,
  imageAlt,
  name,
  subtitle,
}: {
  className?: string;
  imageUrl: string;
  imageAlt: string;
  name: string;
  subtitle: string;
}) => {
  const fallbackName =
    name && typeof name === "string"
      ? name
          .split(" ")
          .map((n) => n[0])
          .join("") || name[0]
      : "";

  return (
    <div className={cn("flex gap-x-4 items-center", className)}>
      {/* Avatar */}
      <Avatar className="rounded-xl">
        <AvatarImage alt={imageAlt} src={imageUrl} className="rounded-xl" />
        <AvatarFallback className="rounded-xl">{fallbackName}</AvatarFallback>
      </Avatar>
      <div className="flex-col gap-y-1 flex">
        <h1 className="text-sm font-semibold leading-none text-foreground">
          {name}
        </h1>
        <p className="text-xs text-muted-foreground leading-none">{subtitle}</p>
      </div>
    </div>
  );
};

export default Profile;
