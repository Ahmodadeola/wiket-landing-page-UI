import React from "react";
import FloristImg from "../../../assets/jpg/header-img-florist.jpg";
import GardenerImg from "../../../assets/jpg/header-img-gardener.jpg";
import BaristaImg from "../../../assets/jpg/header-img-barista.jpg";
import PotteryImg from "../../../assets/jpg/header-img-pottery.jpg";
import GoggleImg from "../../../assets/svg/pin-01.svg";
import MarkerImg from "../../../assets/svg/pin-02.svg";
import HeaderLinePhone from "../../../assets/svg/header-line-phone-portrait.svg";
import HeaderLineDesktop from "../../../assets/svg/header-line-desktop.svg";
import "../../../assets/css/HeroSection/MiniCard.css";

const HeroSectionContainer = ({ children }) => (
  <div
    style={{ fontFamily: "SpoofTrial" }}
    className="md:w-2/5 mt-16 md:mt-12 relative"
  >
    {children}
  </div>
);
const MainCardContainer = ({ children }) => (
  <div className="relative md:pl-10 md:h-96 md:flex md:flex-col md:justify-between">
    {children}
  </div>
);
const CardContainer = ({ children }) => (
  <div className="mini-card p-1 bg-white rounded-lg">{children}</div>
);

const MainCardImage = ({ link, alt }) => (
  <div
    style={{ height: "26em", objectFit: "fill" }}
    className="w-full md:flex justify-center main-card-img"
  >
    <img
      src={link}
      alt={alt}
      style={{
        width: "100%",
        height: "auto",
        objectFit: "contain",
      }}
      className="mt-4 rounded-lg"
    />
  </div>
);

const CardImage = ({ link, alt }) => (
  <div style={{}} className="w-full card-image">
    <img
      src={link}
      alt={alt}
      style={{
        width: "100%",
        objectFit: "cover",
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
  <p style={{ color: "#004E4C" }} className="text-xs sub-text -mt-1">
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
  <div className="potter-card absolute ml-4 -mt-16 md:top-0 md:mt-12 md:right-0 md:-mr-10">
    <Card title="PotJect" subText="Pottery in Bangkok" link={PotteryImg} />
  </div>
);
const GardenerCard = () => (
  <div className="gardener-card absolute right-0 mt-16 md:top-0 md:left-0 md:mt-40 md:-ml-2">
    <Card title="GreenThumb" subText="Gardener in cheche" link={GardenerImg} />
  </div>
);
const CafeCard = () => (
  <div className="cafe-card absolute mt-40 md:top-0 md:mt-64 md:right-0 md:-mr-20">
    <Card title="Green Cafe" subText="Cafe in Bangkok" link={BaristaImg} />
  </div>
);

const HeaderLine = () => (
  <div className="absolute md:hidden ml-24 mt-6 md:right-0 md:-mr-10 z-0 md:top-0 md:mt-64">
    <img src={HeaderLinePhone} />
  </div>
);

const HeaderLineDe = () => (
  <div
    style={{
      zIndex: "-1",
      transform: "rotate(10deg)",
      transform: "scale(0.7, .8)",
      marginRight: "-14rem",
    }}
    className="absolute right-0 -mr-32 -mt-48 hidden md:block"
  >
    <img src={HeaderLineDesktop} />
  </div>
);

const Marker = () => (
  <div className="hidden absolute md:block md:top-0 md:mt-8 md:left-0 md:-ml-4">
    <img src={MarkerImg} />
  </div>
);
const Goggle = () => (
  <div className="hidden absolute md:block md:top-0 md:mt-48 md:right-0 md:-mr-16">
    <img src={GoggleImg} />
  </div>
);

const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <MainCardContainer>
        <div className="md:hidden">
          <TextContainer>
            <MainCardText>Hanging Garden</MainCardText>
            <MainSubText>Florist in Bangkok</MainSubText>
          </TextContainer>
        </div>

        <MainCardImage link={FloristImg} alt="Hanging garden" />
        <div className="hidden md:block">
          <TextContainer>
            <MainCardText>Hanging Garden</MainCardText>
            <MainSubText>Florist in Bangkok</MainSubText>
          </TextContainer>
        </div>
        <div>
          <Marker />
          <Goggle />
          <HeaderLine />
          <HeaderLineDe />
          <PotterCard />
          <GardenerCard />
          <CafeCard />
        </div>
      </MainCardContainer>
    </HeroSectionContainer>
  );
};

export default HeroSection;
