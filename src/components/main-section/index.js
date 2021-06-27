import React from "react";
import TextSection from "./textSection/index";
import HeroSection from "./heroSection/index";

const SectionContainer = ({ children }) => (
  <div className="md:w-2/3 mx-auto">{children}</div>
);

const mainSection = () => {
  return (
    <SectionContainer>
      <TextSection />
      <HeroSection />
    </SectionContainer>
  );
};

export default mainSection;
