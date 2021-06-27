import React from "react";
import FloristImg from "../../../assets/jpg/header-img-florist.jpg";
import GardenerImg from "../../../assets/jpg/header-img-gardener.jpg";
import BaristaImg from "../../../assets/jpg/header-img-barista.jpg";
import PotteryImg from "../../../assets/jpg/header-img-pottery.jpg";

const HeroSectionContainer = ({ children }) => (
  <div style={{ fontFamily: "SpoofTrial" }} className="md:w-2/5 mt-12 md:mt-2">
    {children}
  </div>
);
const MainCardContainer = ({ children }) => (
  <div className="md:h-96 md:flex md:justify-between items-start md:flex-col-reverse">
    {children}
  </div>
);
const CardContainer = ({ children }) => (
  <div className="px-2 w-20 h-25">{children}</div>
);

const CardImage = ({ link, alt }) => (
  <div style={{}} className="w-full md:h-3/5">
    <img
      src={link}
      alt={alt}
      style={{
        width: "100%",
        height: "auto",
        borderRadius: "2em",
      }}
      className="w-2/3 md:h-96"
    />
  </div>
);
const MainText = ({ children }) => (
  <p style={{ color: "#004E4C" }} className="text-lg font-bold px-0">
    {children}
  </p>
);
const SubText = ({ children }) => <p className="">{children}</p>;
const TextContainer = ({ children }) => <div className="">{children}</div>;

const Card = ({ title, subText }) => (
  <CardContainer>
    <CardImage />
    <MainText>{title}</MainText>
    <SubText>{subText}</SubText>
  </CardContainer>
);

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
