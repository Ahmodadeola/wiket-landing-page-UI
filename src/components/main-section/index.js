import React from "react";
import TextSection from "./textSection/index";
import HeroSection from "./heroSection/index";

const SectionContainer = ({ children }) => (
  <div className="md:w-2/3 mx-auto pt-10 md:mt-auto md:flex md:flex-row-reverse justify-between md:h-/3">
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
