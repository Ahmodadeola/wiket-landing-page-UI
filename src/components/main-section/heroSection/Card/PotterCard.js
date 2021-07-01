import React from "react";
import ItemCard from "./ItemCard";
import { useSpring, animated, config } from "@react-spring/web";
import PotteryImg from "../../../../assets/jpg/header-img-pottery.jpg";
import Visibilitysensor from "react-visibility-sensor";

const PotterCard = ({ rf }) => {
  const props = useSpring({
    to: { opacity: 1, transform: "translate(0,0)" },
    from: { opacity: 0, transform: "translateY(300px)" },
    config: config.molasses,
    delay: 1100,
    ref: rf,
  });

  return (
    <Visibilitysensor partialVisibility>
      {({ isVisible }) => (
        <animated.div
          style={props}
          className="potter-card absolute ml-4 -mt-16 md:top-0 md:mt-12 md:right-0 md:-mr-10"
        >
          <ItemCard
            title="PotJect"
            subText="Pottery in Bangkok"
            link={PotteryImg}
          />
        </animated.div>
      )}
    </Visibilitysensor>
  );
};

export default PotterCard;
