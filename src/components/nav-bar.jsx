"use client";
import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "./ui/resizable-navbar";

const navlinks = [
  {
    name: "About Me",
    link: "#about-me",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Contact Me",
    link: "#contact",
  },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar className="top-4">
      <NavBody>
        <div className="flex items-center">
          <img
            className="h-12 w-auto border-none rounded-[50px]"
            src="assets/images/my-logo.png"
            alt="Logo"
          />
        </div>
        <NavItems items={navlinks} />
      </NavBody>
      <MobileNav>
        <MobileNavHeader>
          <div className="flex items-center">
            <img
              className="h-12 w-auto border-none rounded-[50px]"
              src="assets/images/my-logo.png"
              alt="Logo"
            />
          </div>
          <MobileNavToggle isOpen={isOpen} onClick={toggle} />
        </MobileNavHeader>
        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {navlinks.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="block py-2 text-neutral-600 dark:text-neutral-300"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default NavBar;
