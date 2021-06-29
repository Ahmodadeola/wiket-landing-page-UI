import React from "react";
import Logo from "../Logo/index";
import Menu from "../../assets/svg/menu.svg";

const NavbarContainer = ({ children }) => (
  <nav
    className="
    flex
    justify-between
    items-center
    mx-auto
    md:px-10
    py-4
    max-w-screen-4xl
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
  <div
    className="
pl-5 flex
justify-between
items-center
w-1/2
md:hidden
"
  >
    <NavItemButton item="Get started" className="" isButton={true} />
    <img src={Menu} className="w-8" />
  </div>
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
