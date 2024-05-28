import React from "react";

const Footer = () => {
  return (
    <div className="w-full border-t flex gap-x-8 gap-y-4 pad-x py-5 justify-between flex-wrap">
      <code className="text-muted-foreground w-auto grow">© 2024 Msafdev</code>
      <div className="flex items-center gap-x-4 md:gap-x-6 justify-between w-auto md:w-fit grow sm:grow-0">
        <a href="/" className="text-muted-foreground hover:text-accent text-xs w-fit md:text-sm">
          Privacy policy
        </a>
        <a href="/" className="text-muted-foreground hover:text-accent text-xs w-fit md:text-sm">
          Get in touch
        </a>
        <a href="/" className="text-muted-foreground hover:text-accent text-xs w-fit md:text-sm">
          Get this template
        </a>
      </div>
    </div>
  );
};

export default Footer;
