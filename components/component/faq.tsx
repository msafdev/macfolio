"use client";

import { ArrowDown } from "lucide-react";
import React, { useState } from "react";

const Faq = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full flex flex-col bg-muted dark:bg-secondary border-2 overflow-hidden rounded-xl">
      <button
        onClick={toggleOpen}
        className="flex items-center justify-between w-full px-5 py-4 gap-x-4 text-left border-b-2"
      >
        <p className="text-foreground font-medium text-sm md:text-base">
          Lorem ipsum dolor sit amet?
        </p>
        <ArrowDown
          className={`w-5 h-5 transition-transform duration-500 ease-in-out ${
            isOpen ? "rotate-0" : "-rotate-90"
          }`}
        />
      </button>
      <div
        className={`bg-popover grid transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "grid-rows-[1fr] px-5 py-4" : "px-5 py-0 grid-rows-[0fr]"
        }`}
      >
        <p className="text-muted-foreground overflow-hidden">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error fugiat
          similique consequuntur commodi eligendi maxime.
        </p>
      </div>
    </div>
  );
};

export default Faq;
