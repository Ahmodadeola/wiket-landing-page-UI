import React from "react";
import "../../../assets/css/HeroSection/MiniCard.css";

import MainCard from "./Card/MainCard";

const HeroSectionContainer = ({ children }) => (
  <div
    style={{ fontFamily: "SpoofTrial" }}
    className="md:w-2/5 mt-16 md:mt-12 relative"
  >
    {children}
  </div>
);

const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <MainCard />
    </HeroSectionContainer>
  );
};

export default HeroSection;
