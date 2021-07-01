import React from "react";
import { useSpring, animated, config } from "@react-spring/web";
import { useMediaQuery } from "react-responsive";

const TextSectionContainer = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const initStyle = { opacity: 0 };
  initStyle.transform = isDesktop ? "" : "translate(0, 100px)";
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: isDesktop ? 2000 : 1000,
    config: config.molasses,
  });
  return (
    <animated.div
      style={{ ...props, color: "#004E4C" }}
      className="text-container mt-12 md:w-2/5 md:h-96"
    >
      {children}
    </animated.div>
  );
};

const TopText = ({ children }) => (
  <div className="text-xl font-medium">{children}</div>
);

const BigText = ({ children }) => (
  <div className="text-5xl mb-4 font-bold leading-none">{children}</div>
);
const BriefText = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const initStyle = { opacity: 0 };
  initStyle.transform = isDesktop ? "translateY(0,0)" : "translate(0, 100px)";
  const props = useSpring({
    to: { opacity: 1, transform: "translate(0, 0)" },
    from: initStyle,
    delay: isDesktop ? 2500 : 1500,
    config: config.molasses,
  });
  return (
    <animated.div
      style={{ ...props, width: "17em" }}
      className="text-lg md:ml-12 md:text-sm font-normal md:relative md:mt-40"
    >
      {children}
    </animated.div>
  );
};

const TextSection = () => {
  return (
    <TextSectionContainer>
      <TopText>Explore new opportunities.</TopText>
      <BigText>
        <span style={{ color: "rgb(250 168 52)" }}>Grow</span> your business.
      </BigText>

      <BriefText>
        <span className="font-bold">
          Wiket is the first business to business network
        </span>{" "}
        which lets you connect to mind like people.
      </BriefText>
    </TextSectionContainer>
  );
};

export default TextSection;
