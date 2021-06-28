import React from "react";
import FloristImg from "../../../assets/jpg/header-img-florist.jpg";
import GardenerImg from "../../../assets/jpg/header-img-gardener.jpg";
import BaristaImg from "../../../assets/jpg/header-img-barista.jpg";
import PotteryImg from "../../../assets/jpg/header-img-pottery.jpg";
import GoggleImg from "../../../assets/svg/pin-01.svg";
import MarkerImg from "../../../assets/svg/pin-02.svg";
import HeaderLinePhone from "../../../assets/svg/header-line-phone-portrait.svg";
// import HeaderLineDesktop from "../../../assets/svg/header-line-desktop.svg";
import "../../../assets/css/HeroSection/MiniCard.css";

const HeroSectionContainer = ({ children }) => (
  <div
    style={{ fontFamily: "SpoofTrial" }}
    className="md:w-2/5 mt-16 md:mt-4 relative"
  >
    {children}
  </div>
);
const MainCardContainer = ({ children }) => (
  <div className="md:h-96 md:flex md:flex-col md:justify-between">
    {children}
  </div>
);
const CardContainer = ({ children }) => (
  <div className="mini-card p-1 w-32 bg-white rounded-lg">{children}</div>
);

const MainCardImage = ({ link, alt }) => (
  <div
    style={{ height: "26em" }}
    className="w-full md:flex justify-center main-card-img"
  >
    <img
      src={link}
      alt={alt}
      style={{
        width: "100%",
        height: "auto",
        // maxHeight: "40em",
        // borderRadius: "2em",
      }}
      className="w-2/3 md:h-2/3 mt-4 rounded-lg"
    />
  </div>
);

const CardImage = ({ link, alt }) => (
  <div className="w-full card-image">
    <img
      src={link}
      alt={alt}
      style={{
        width: "100%",
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
  <div className="absolute ml-4 -mt-16 md:top-0 md:mt-12 md:right-0 md:-mr-16">
    <Card title="PotJect" subText="Pottery in Bangkok" link={PotteryImg} />
  </div>
);
const GardenerCard = () => (
  <div className="absolute right-0 mt-16 md:top-0 md:left-0 md:mt-40 md:-ml-16">
    <Card title="GreenThumb" subText="Gardener in cheche" link={GardenerImg} />
  </div>
);
const CafeCard = () => (
  <div className="absolute mt-40 md:top-0 md:mt-64 md:right-0 md:-mr-24">
    <Card title="Green Cafe" subText="Cafe in Bangkok" link={BaristaImg} />
  </div>
);

const HeaderLine = () => (
  <div className="absolute ml-24 mt-6">
    <img src={HeaderLinePhone} />
  </div>
);

// const HeaderLineDe = () => (
//   <div className="absolute ml-24 mt-6">
//     <img src={HeaderLineDesktop} />
//   </div>
// );

const Marker = () => (
  <div className="hidden absolute md:block md:top-0 md:mt-12 md:left-0 md:-ml-16">
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
      </MainCardContainer>
      <div>
        <Marker />
        <Goggle />
        {/* <HeaderLineDesktop /> */}
        <HeaderLine />
        <PotterCard />
        <GardenerCard />
        <CafeCard />
      </div>
    </HeroSectionContainer>
  );
};

export default HeroSection;
