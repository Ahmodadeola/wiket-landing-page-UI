import React from "react";
import Logo from "../Logo/index";
import Menu from "../../assets/svg/menu.svg";

const NavbarContainer = ({ children }) => (
  <nav
    style={{ backgroundColor: "antiquewhite" }}
    className="
    flex
    justify-between
    items-center
    mx-auto
    w-full
    md:pl-10
    md:pr-20
    py-4
    pr-12 z-10
    fixed 
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
      <li className="mr-8 font-medium text-green-800">{item}</li>
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

const MobileNavContainer = ({ children }) => (
  <>
    <span className="md:hidden">
      <NavItemButton item="Get started" isButton={true} />
    </span>
    <img src={Menu} className="w-8 md:hidden" />
  </>
);
const navbar = () => {
  const links = ["Benefits", "Your Profile", "Connections", "Plans & Pricing"];

  return (
    <NavbarContainer>
      <Logo />
      <NavItems>
        {links.map((item, idx) => (
          <NavItem item={item} key={idx} />
        ))}
        <NavItemButton item="Get started" />
      </NavItems>
      <MobileNavContainer />
    </NavbarContainer>
  );
};

export default navbar;
