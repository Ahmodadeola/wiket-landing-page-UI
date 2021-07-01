import React from "react";
import CancelIcon from "../../../assets/svg/cancel.svg";
import { useSpring, animated } from "@react-spring/web";

const MobileNavContainer = ({ children }) => (
  <div
    className="
    md:hidden

z-20
"
  >
    {children}
  </div>
);

const NavItemsContainer = ({ children, hideMenu, isVisible }) => {
  const props = useSpring({
    from: { opacity: isVisible ? 0 : 1, right: isVisible ? "-200px" : "0" },
    to: { opacity: isVisible ? 1 : 0, right: isVisible ? "0" : "-200px" },
    delay: 300,
  });
  return (
    <animated.div
      style={props}
      className="pr-10 pt-5 absolute
    right-0
    top-0
    bg-gray-400
    h-screen w-2/3"
    >
      <img
        src={CancelIcon}
        alt="cancel icon"
        className="w-8 h-8 float-right cursor-pointer"
        onClick={hideMenu}
      />
      <ul
        className="flex flex-col mt-10
"
      >
        {children}
      </ul>
    </animated.div>
  );
};

const NavItem = ({ item }) => (
  <a href="/#">
    <li
      className="
pl-4
py-6
"
    >
      {item}
    </li>
  </a>
);

const MobileNav = ({ isVisible, hideMenu }) => {
  const links = [
    "Benefits",
    "Your Profile",
    "Connections",
    "Plans & Pricing",
    "Get started",
  ];
  return (
    <animated.div>
      <MobileNavContainer>
        <NavItemsContainer isVisible={isVisible} hideMenu={hideMenu}>
          {links.map((item, idx) => (
            <NavItem item={item} key={idx} />
          ))}
        </NavItemsContainer>
      </MobileNavContainer>{" "}
    </animated.div>
  );
};

export default MobileNav;
