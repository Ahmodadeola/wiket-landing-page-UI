import React from "react";
import FloristImg from "../../../assets/jpg/header-img-florist.jpg";

const HeroSectionContainer = ({ children }) => (
  <div
    style={{ fontFamily: "SpoofTrial" }}
    className="

"
  >
    {children}
  </div>
);
const MainCardContainer = ({ children }) => (
  <div className="h-60">{children}</div>
);

const CardContainer = ({ children }) => <div className="px-0">{children}</div>;
const CardImage = ({ link, alt }) => (
  <div style={{}} className="w-full">
    <img
      src={link}
      alt={alt}
      style={{
        width: "100%",
        height: "auto",
        maxHeight: "max-content",
        borderRadius: "2em",
      }}
      className=""
    />
  </div>
);

const MainText = ({ children }) => (
  <p style={{ color: "#004E4C" }} className="text-lg font-bold px-0">
    {children}
  </p>
);
const SubText = ({ children }) => <p className="">{children}</p>;

const TextContainer = ({ children }) => <div className="mb-4">{children}</div>;

const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <MainCardContainer>
        <TextContainer>
          <MainText>Hanging Garden</MainText>
          <SubText>Florist in Banghok</SubText>
        </TextContainer>
        <CardImage link={FloristImg} alt="Hanging garden" />
      </MainCardContainer>
    </HeroSectionContainer>
  );
};

export default HeroSection;
