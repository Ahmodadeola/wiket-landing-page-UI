import React from "react";
import ItemCard from "./ItemCard";
import { useMediaQuery } from "react-responsive";
import { useSpring, animated, config } from "@react-spring/web";
import BaristaImg from "../../../../assets/jpg/header-img-barista.jpg";
import Visibilitysensor from "react-visibility-sensor";

const CafeCard = ({ rf }) => {
  const props = useSpring({
    to: { opacity: 1, transform: "translate(0,0)" },
    from: { opacity: 0, transform: "translateY(300px)" },
    config: config.molasses,
    delay: 1500,
    ref: rf,
  });
  const mobilePropsInVisible = useSpring({
    from: { opacity: 1, transform: "translate(0,0)" },
    to: { opacity: 0, transform: "translate(0, 300px)" },
    config: config.molasses,
    delay: 1500,
    ref: rf,
  });
  const isLargeScreen = useMediaQuery({ minWidth: 768 });

  return (
    <Visibilitysensor partialVisibility>
      {({ isVisible }) => (
        <animated.div
          style={
            isLargeScreen ? props : isVisible ? props : mobilePropsInVisible
          }
          className="cafe-card absolute mt-40 md:top-0 md:mt-64 md:right-0 md:-mr-20"
        >
          <ItemCard
            title="Green Cafe"
            subText="Cafe in Bangkok"
            link={BaristaImg}
          />
        </animated.div>
      )}
    </Visibilitysensor>
  );
};

export default CafeCard;
