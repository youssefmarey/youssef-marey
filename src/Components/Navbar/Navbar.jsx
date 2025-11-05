import React, { useState } from "react";
import { navItems, socialLink } from "../../constant/data";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import { RiCloseLine, RiMenuLine } from "@remixicon/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handelClick = () => setIsOpen(!isOpen);
  const [activeLink, setActiveLink] = useState(navItems[0].id);
  const handelLinkClick = (id) => {
    setIsOpen(false);
    setActiveLink(id);
  };
  return (
    <header className="fixed top-0 left-0 w-full pt-3 z-40">
      <div className="container">
        <div className="flex items-center justify-between bg-zinc-100/80 p-4 rounded-full border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 backdrop-blur-lg">
          {/* Social Links */}
          <div className="flex items-center gap-3.5">
            {socialLink.map((item) => (
              <a
                href={item.link}
                target="_blank"
                className="hover:text-emerald-600 transition-colors"
                key={item.id}
              >
                <item.icon />
              </a>
            ))}
          </div>

          {/* Mobile Menu */}
          <ul
            className={`lg:hidden absolute top-full right-6 bg-zinc-200 min-w-36 mt-3 rounded-lg p-5 space-y-3 font-medium scale-y-0 transition-transform origin-top-right dark:bg-zinc-800 ${
              isOpen ? "scale-y-100" : ""
            } `}
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`hover:text-emerald-600 transition-colors font-medium ${
                    activeLink === item.id ? "text-emerald-600" : ""
                  }`}
                  onClick={() => handelLinkClick(item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`font-semibold text-zinc-800 dark:text-zinc-400 hover:!text-emerald-700 transition-colors ${
                    activeLink === item.id ? "!text-emerald-600" : ""
                  }`}
                  onClick={() => handelLinkClick(item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Btns */}

          <div className="flex items-center gap-2.5">
            <ToggleTheme />
            <button className="lg:hidden" onClick={handelClick}>
              {isOpen ? <RiCloseLine /> : <RiMenuLine />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
