import React from "react";
import FloristImg from "../../../assets/jpg/header-img-florist.jpg";
import GardenerImg from "../../../assets/jpg/header-img-gardener.jpg";
import BaristaImg from "../../../assets/jpg/header-img-barista.jpg";
import PotteryImg from "../../../assets/jpg/header-img-pottery.jpg";
import HeaderLinePhone from "../../../assets/svg/header-line-phone-portrait.svg";
import HeaderLineDesktop from "../../../assets/svg/header-line-desktop.svg";

const HeroSectionContainer = ({ children }) => (
  <div
    style={{ fontFamily: "SpoofTrial" }}
    className="md:w-2/5 mt-12 md:mt-4 relative"
  >
    {children}
  </div>
);
const MainCardContainer = ({ children }) => (
  <div className="md:h-96 md:flex md:flex-col-reverse md:justify-between">
    {children}
  </div>
);
const CardContainer = ({ children }) => (
  <div style={{ height: "9.5rem" }} className="p-1 w-32 bg-white rounded-lg">
    {children}
  </div>
);

const MainCardImage = ({ link, alt }) => (
  <div style={{}} className="w-full md:h-5/6 md:mt-10 md:flex justify-center">
    <img
      src={link}
      alt={alt}
      style={{
        width: "100%",
        height: "auto",
        // maxHeight: "40em",
        borderRadius: "2em",
      }}
      className="w-2/3 md:h-32 mt-4"
    />
  </div>
);

const CardImage = ({ link, alt }) => (
  <div style={{ height: "5.9rem" }} className="w-full ">
    <img
      src={link}
      alt={alt}
      style={{
        width: "100%",
        height: "6em",
      }}
      className="rounded"
    />
  </div>
);
const MainCardText = ({ children }) => (
  <p style={{ color: "#004E4C" }} className="text-lg font-bold px-0">
    {children}
  </p>
);
const MainText = ({ children }) => (
  <p className="text-sm font-bold px-0 md:mt-1">{children}</p>
);

const MainSubText = ({ children }) => <p className="text-sm">{children}</p>;
const SubText = ({ children }) => (
  <p style={{ color: "#004E4C" }} className="text-sm md:text-xs -mt-1">
    {children}
  </p>
);
const TextContainer = ({ children }) => <div className="mt-2">{children}</div>;

const Card = ({ title, subText, link }) => (
  <CardContainer>
    <CardImage link={link} alt={title} />
    <TextContainer>
      <MainText>{title}</MainText>
      <SubText>{subText}</SubText>
    </TextContainer>
  </CardContainer>
);

const PotterCard = () => (
  <div className="absolute ml-4 -mt-16">
    <Card title="PotJect" subText="Pottery in Bangkok" link={PotteryImg} />
  </div>
);
const GardenerCard = () => (
  <div className="absolute right-0 mt-16">
    <Card title="GreenThumb" subText="Gardener in cheche" link={GardenerImg} />
  </div>
);
const CafeCard = () => (
  <div className="absolute mt-40">
    <Card title="Green Cafe" subText="Cafe in Bangkok" link={BaristaImg} />
  </div>
);

const HeaderLine = () => (
  <div className="absolute ml-10 mt-4">
    <img src={HeaderLinePhone} />
  </div>
);

const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <MainCardContainer>
        <TextContainer>
          <MainCardText>Hanging Garden</MainCardText>
          <MainSubText>Florist in Bangkok</MainSubText>
        </TextContainer>
        <MainCardImage link={FloristImg} alt="Hanging garden" />
      </MainCardContainer>
      <div>
        <HeaderLine />
        <PotterCard />
        <GardenerCard />
        <CafeCard />
      </div>
    </HeroSectionContainer>
  );
};

export default HeroSection;
