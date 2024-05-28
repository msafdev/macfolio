import React from "react";
import Profile from "./profile";

const TestimonialCard = ({
  description,
  imageUrl,
  imageAlt,
  name,
  subtitle,
}: {
  description: string;
  imageUrl: string;
  imageAlt: string;
  name: string;
  subtitle: string;
}) => {
  return (
    <div className="flex flex-col border-2 rounded-xl overflow-hidden">
      <Profile
        className="p-3 bg-muted text-muted-foreground"
        imageAlt={imageAlt}
        imageUrl={imageUrl}
        name={name}
        subtitle={subtitle}
      />
      <div className="p-3">
        <p className="text-sm md:text-xs lg:text-sm text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
