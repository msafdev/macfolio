import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const Profile = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex gap-x-4 items-center", className)}>
      {/* Avatar */}
      <Avatar className="rounded-lg">
        <AvatarImage
          src="https://github.com/msafdev.png"
          className="rounded-lg"
        />
        <AvatarFallback className="rounded-lg">MS</AvatarFallback>
      </Avatar>
      <div className="flex-col gap-y-1 flex">
        <h1 className="text-sm font-semibold leading-none text-foreground">John</h1>
        <p className="text-xs text-muted-foreground leading-none">
          Software Engineer
        </p>
      </div>
    </div>
  );
};

export default Profile;
