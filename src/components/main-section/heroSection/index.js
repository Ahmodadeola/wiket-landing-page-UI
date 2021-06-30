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
import {
  animated,
  useSpring,
  config,
  useSpringRef,
  useChain,
} from "@react-spring/web";

const HeroSectionContainer = ({ children }) => (
  <div
    style={{ fontFamily: "SpoofTrial" }}
    className="md:w-2/5 mt-16 md:mt-12 relative"
  >
    {children}
  </div>
);
const MainCardContainer = ({ children, rf }) => {
  const props = useSpring({
    to: { opacity: 1, transform: "translate(0,0)" },
    from: { opacity: 0, transform: "translate(0, 100px)" },
    delay: 1000,
    ref: rf,
  });
  // const props = useSpring({});
  return (
    <animated.div
      style={props}
      className="relative md:pl-10 md:h-96 md:flex md:flex-col md:justify-between"
    >
      {children}
    </animated.div>
  );
};

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

const PotterCard = ({ rf }) => {
  const props = useSpring({
    to: { opacity: 1, transform: "translate(0,0)" },
    from: { opacity: 0, transform: "translate(0, 300px)" },
    config: config.molasses,
    delay: 1100,
    ref: rf,
  });
  return (
    <animated.div
      style={props}
      className="potter-card absolute ml-4 -mt-16 md:top-0 md:mt-12 md:right-0 md:-mr-10"
    >
      <Card title="PotJect" subText="Pottery in Bangkok" link={PotteryImg} />
    </animated.div>
  );
};

const GardenerCard = ({ rf }) => {
  const props = useSpring({
    to: { opacity: 1, transform: "translate(0,0)" },
    from: { opacity: 0, transform: "translate(0, 300px)" },
    config: config.molasses,
    delay: 1200,
    ref: rf,
  });
  return (
    <animated.div
      style={props}
      className="gardener-card absolute right-0 mt-16 md:top-0 md:left-0 md:mt-40 md:-ml-2"
    >
      <Card
        title="GreenThumb"
        subText="Gardener in cheche"
        link={GardenerImg}
      />
    </animated.div>
  );
};
const CafeCard = ({ rf }) => {
  const props = useSpring({
    to: { opacity: 1, transform: "translate(0,0)" },
    from: { opacity: 0, transform: "translate(0, 300px)" },
    config: config.slow,
    delay: 1500,
    ref: rf,
  });
  return (
    <animated.div
      style={props}
      className="cafe-card absolute mt-40 md:top-0 md:mt-64 md:right-0 md:-mr-20"
    >
      <Card title="Green Cafe" subText="Cafe in Bangkok" link={BaristaImg} />
    </animated.div>
  );
};

const HeaderLine = () => (
  <div className="absolute md:hidden ml-24 mt-6 md:right-0 md:-mr-10 z-0 md:top-0 md:mt-64">
    <img src={HeaderLinePhone} />
  </div>
);

const HeaderLineDe = () => (
  <div
    style={{
      transform: "rotate(10deg)",
      transform: "scale(0.7, .8)",
      marginRight: "-12rem",
      marginTop: "-11rem",
    }}
    className="absolute right-0 -mr-32 hidden md:block"
  >
    <img src={HeaderLineDesktop} />
  </div>
);

const Marker = () => (
  <div className="marker hidden absolute md:block md:top-0 md:mt-6 md:left-0 md:-ml-4">
    <img src={MarkerImg} />
  </div>
);
const Goggle = () => (
  <div className="goggle hidden absolute md:block md:top-0 md:mt-48 md:right-0 md:-mr-16">
    <img src={GoggleImg} />
  </div>
);

const HeroSection = () => {
  const mainSpringRef = useSpringRef();
  const springRef1 = useSpringRef();
  const springRef2 = useSpringRef();
  const springRef3 = useSpringRef();
  useChain([mainSpringRef, springRef1, springRef2, springRef3]);
  return (
    <HeroSectionContainer>
      <MainCardContainer rf={mainSpringRef}>
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
          <PotterCard rf={springRef1} />
          <GardenerCard rf={springRef2} />
          <CafeCard rf={springRef3} />
        </div>
      </MainCardContainer>
    </HeroSectionContainer>
  );
};

export default HeroSection;
