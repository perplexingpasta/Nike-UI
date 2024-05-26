import { headerLogo } from "../assets/images";
// import { hamburger } from "../assets/icons";
import { navLinks } from "../constants/index.js";
import hamburgerDark from "../assets/icons/hamburger-white.svg";
import closeDark from "../assets/icons/close-dark.svg";
import { useState } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="padding-x absolute z-20 w-full py-8">
      <nav className="max-container flex items-center justify-between">
        <a href="/">
          <img src={headerLogo} alt="Header Logo" width={160} height={29} />
        </a>
        <ul className="flex flex-1 items-center justify-center gap-16 max-lg:hidden xl:ml-96">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat text-xl leading-normal text-slate-gray hover:font-bold"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* OLD HAMBURGER */}
        {/* <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div> */}

        {/* HAMBURGER FUNCTIONALITY */}
        <div className="flex flex-1 items-center justify-end lg:hidden">
          <img
            src={toggle ? closeDark : hamburgerDark}
            alt=""
            className="mr-4 h-[28px] w-[28px]"
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } sidebar absolute right-0 top-20 mx-4 my-2 min-w-36 rounded-xl bg-gray-300 p-6`}
          >
            <ul className="flex flex-1 list-none flex-col items-start justify-end gap-6">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-montserrat text-xl leading-normal text-gray-900 hover:text-coral-red hover:font-semibold transition-all"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
