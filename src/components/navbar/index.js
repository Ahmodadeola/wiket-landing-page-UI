import React, { useState } from "react";
import Logo from "../Logo/index";
import Menu from "../../assets/svg/menu.svg";
import MobileNav from "./mobilenav/index";
import { useMediaQuery } from "react-responsive";

const NavbarContainer = ({ children }) => (
  <nav
    style={{ backgroundColor: "antiquewhite" }}
    className="
    nav-container
    flex
    justify-between
    items-center
    mx-auto
    md:px-10
    py-4
     z-10
    fixed 
    w-full
"
  >
    {children}
  </nav>
);

const NavItems = ({ children }) => (
  <ul
    className="
md:flex
items-center
hidden
"
  >
    {children}
  </ul>
);

const NavItem = ({ item, isButton }) =>
  !isButton ? (
    <a href="/#">
      <li className="mr-8 font-medium text-green-800 cursor-pointer">{item}</li>
    </a>
  ) : (
    <a href="/#">
      <button
        className="mr-8 font-medium
      rounded px-3 py-2 bg-yellow-600 text-white"
      >
        {item}
      </button>
    </a>
  );

const NavItemButton = ({ item }) => (
  <button
    style={{ backgroundColor: "#FAA834" }}
    className="
     font-medium
     text-sm
    rounded-lg px-3 py-2 text-white
"
  >
    {item}
  </button>
);

const MobileNavContainer = ({ children, isVisible, toggle }) => {
  return (
    <>
      <span className="md:hidden">
        <NavItemButton item="Get started" isButton={true} />
      </span>
      <div onClick={() => toggle(true)}>
        <img src={Menu} alt="Menu icon" className="w-10 md:hidden" />
      </div>

      <MobileNav isVisible={isVisible} hideMenu={() => toggle(false)} />
    </>
  );
};

const navbar = () => {
  const links = ["Benefits", "Your Profile", "Connections", "Plans & Pricing"];
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <NavbarContainer>
      <Logo />
      <NavItems>
        {links.map((item, idx) => (
          <NavItem item={item} key={idx} />
        ))}
        <NavItemButton item="Get started" />
      </NavItems>
      {isMobile && (
        <MobileNavContainer isVisible={isVisible} toggle={setIsVisible} />
      )}
    </NavbarContainer>
  );
};

export default navbar;
