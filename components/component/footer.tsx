import React from "react";

const Footer = () => {
  return (
    <div className="w-full border-t flex gap-x-8 pad-x py-5 justify-between">
      <code className="text-muted-foreground">© 2024 Msafdev</code>
      <div className="flex items-center gap-x-6">
        <a href="/" className="text-muted-foreground hover:text-accent">
          Privacy policy
        </a>
        <a href="/" className="text-muted-foreground hover:text-accent">
          Get in touch
        </a>
        <a href="/" className="text-muted-foreground hover:text-accent">
          Get this template
        </a>
      </div>
    </div>
  );
};

export default Footer;
