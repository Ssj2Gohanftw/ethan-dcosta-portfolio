import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const navlinks = [
  {
    id: 1,
    navlink: "About Me",
    href: "#about-me",
  },
  {
    id: 2,
    navlink: "Skills",
    href: "#skills",
  },
  {
    id: 3,
    navlink: "Projects",
    href: "#projects",
  },
  {
    id: 4,
    navlink: "Contact Me",
    href: "#contact",
  },
];
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-[#333] text-white mb-20">
      <nav className="flex items-center justify-between px-4 sm:px-10 md:px-20 h-20">
        <div className="flex items-center">
          <img
            className="h-16 w-auto border-none rounded-[50px]"
            src="assets/images/my-logo.png"
            alt=""
          />
        </div>
        <div className="md:hidden">
          <Button onClick={toggle} aria-label="Toggle Menu">
            {!isOpen ? <Menu /> : <X />}
          </Button>
        </div>

        <ul
          className={`${
            isOpen ? "flex z-10" : "hidden"
          } flex-col md:flex md:flex-row gap-6 justify-center items-center absolute top-20 left-0 w-full bg-gray-800/70 backdrop-blur-lg md:static md:w-auto md:bg-transparent`}
        >
          {navlinks.map((navlink) => (
            <li key={navlink.id} className="">
              <a
                href={navlink.href}
                className="block py-2 md:py-0 hover:text-blue-400"
              >
                {navlink.navlink}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
