import React from "react";
import ImageLogo from "../../assets/svg/wiket-logo.svg";

const LogoContainer = ({ children }) => (
  <div
    className="flex
  items-center"
  >
    {children}
  </div>
);

const LogoImage = ({ children }) => (
  <div
    className="h-6 md:9
  display-inline"
  >
    {children}
  </div>
);

const logo = () => {
  return (
    <LogoContainer>
      <LogoImage>
        <img src={ImageLogo} alt="wiket-logo" />
      </LogoImage>
    </LogoContainer>
  );
};

export default logo;
