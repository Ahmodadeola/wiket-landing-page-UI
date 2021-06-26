import React from "react";

const MobileNavContainer = ({ children }) => (
  <div
    className="
absolute
right-0
top-0
bg-gray-700
h-full
w-1/3
"
  >
    {children}
  </div>
);

const NavItemsContainer = ({ children }) => (
  <ul
    className="
flex flex-column
"
  >
    {children}
  </ul>
);

const NavItem = (item) => (
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

const MobileNav = () => {
  const links = ["Benefits", "Your Profile", "Connections", "Plans & Pricing"];

  return (
    <MobileNavContainer>
      <NavItemsContainer>
        {links.map((item, idx) => (
          <NavItem item={item} key={idx} />
        ))}
      </NavItemsContainer>
    </MobileNavContainer>
  );
};

export default MobileNav;
