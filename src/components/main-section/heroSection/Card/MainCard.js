import React from "react";
import CafeCard from "./CafeCard";
import GardenerCard from "./GardenerCard";
import PotterCard from "./PotterCard";
import { useMediaQuery } from "react-responsive";
import { useSpring, useSpringRef, useChain, animated } from "@react-spring/web";
import FloristImg from "../../../../assets/jpg/header-img-florist.jpg";
import GoggleImg from "../../../../assets/svg/pin-01.svg";
import MarkerImg from "../../../../assets/svg/pin-02.svg";
import HeaderLinePhone from "../../../../assets/svg/header-line-phone-portrait.svg";
import HeaderLineDesktop from "../../../../assets/svg/header-line-desktop.svg";

const MainCardContainer = ({ children, rf }) => {
  const isLargeScreen = useMediaQuery({ minWidth: 768 });
  const props = useSpring({
    to: { opacity: 1, transform: "translate(0,0)" },
    from: { opacity: 0, transform: "translate(0, 100px)" },
    delay: isLargeScreen ? 1000 : 2000,
    ref: rf,
  });
  return (
    <animated.div
      style={props}
      className="relative md:pl-10 md:h-96 md:flex md:flex-col md:justify-between"
    >
      {children}
    </animated.div>
  );
};

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

const MainCardText = ({ children }) => (
  <p style={{ color: "#004E4C" }} className="text-lg font-bold px-0">
    {children}
  </p>
);
const MainSubText = ({ children }) => <p className="text-sm">{children}</p>;
const TextContainer = ({ children }) => <div className="mt-2">{children}</div>;
const HeaderLine = () => (
  <div className="absolute md:hidden ml-24 mt-6 md:right-0 md:-mr-10 z-0 md:top-0 md:mt-64">
    <img src={HeaderLinePhone} alt="line phone" />
  </div>
);

const HeaderLineDe = () => (
  <div
    style={{
      transform: "rotate(3deg) scale(0.7, .8)",
      marginRight: "-12rem",
      marginTop: "-11.7rem",
    }}
    className="absolute right-0 -mr-32 hidden md:block"
  >
    <img src={HeaderLineDesktop} alt="line phone" />
  </div>
);

const Marker = () => (
  <div className="marker hidden absolute md:block md:top-0 md:mt-6 md:left-0 md:-ml-4">
    <img src={MarkerImg} alt="marker" />
  </div>
);
const Goggle = () => (
  <div className="goggle hidden absolute md:block md:top-0 md:mt-48 md:right-0 md:-mr-16">
    <img src={GoggleImg} alt="goggle" />
  </div>
);

const MainCard = () => {
  const mainSpringRef = useSpringRef();
  const springRef1 = useSpringRef();
  const springRef2 = useSpringRef();
  const springRef3 = useSpringRef();
  useChain([mainSpringRef, springRef1, springRef2, springRef3]);
  return (
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
  );
};
export default MainCard;
