import React from "react";
import Profile from "./profile";
import { ChevronsRight, Menu } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./theme-toggle";

const Links = [
  { name: "Home", href: "/" },
  { divider: true },
  { name: "About", href: "/" },
  { divider: true },
  { name: "Pricing", href: "/" },
  { divider: true },
  { name: "Contact", href: "/" },
];

const Nav = () => {
  return (
    <header className="w-full border-b pad-x py-3 flex justify-center sticky top-0 bg-background z-10">
      <div className="flex items-center justify-between gap-x-8 max-w-4xl w-full">
        {/* Logo */}
        <Profile />
        {/* Navigation */}
        <nav className="flex items-center gap-x-2 md:gap-x-8">
          <button className="md:hidden bg-muted hover:bg-secondary hover:text-secondary-foreground text-muted-foreground border rounded-lg p-1.5">
            <Menu size={20} />
          </button>

          <ul className="md:flex gap-x-4 items-center hidden">
            {Links.map((link, index) => {
              if (link.divider) {
                return (
                  <li key={index} className="translate-y-px">
                    <ChevronsRight size={14} />
                  </li>
                );
              }
              return (
                <li key={index}>
                  <Link
                    href={link.href || "/"}
                    className="font-medium text-muted-foreground hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <ModeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Nav;
