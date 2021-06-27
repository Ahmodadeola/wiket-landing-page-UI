import React from "react";
import TextSection from "./textSection/index";
import HeroSection from "./heroSection/index";

const SectionContainer = ({ children }) => (
  <div className="md:w-2/3 md:mt-5 mx-auto md:flex md:flex-row-reverse justify-between md:h-2/3">
    {children}
  </div>
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
