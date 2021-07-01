import React from "react";
import ItemCard from "./ItemCard";
import { useSpring, animated, config } from "@react-spring/web";
import GardenerImg from "../../../../assets/jpg/header-img-gardener.jpg";
import Visibilitysensor from "react-visibility-sensor";

const GardenerCard = ({ rf }) => {
  const props = useSpring({
    to: { opacity: 1, transform: "translate(0,0)" },
    from: { opacity: 0, transform: "translateY(300px)" },
    config: config.molasses,
    delay: 1200,
    ref: rf,
  });
  return (
    <Visibilitysensor partialVisibility>
      {({ isVisible }) => (
        <animated.div
          style={props}
          className="gardener-card absolute right-0 mt-16 md:top-0 md:left-0 md:mt-40 md:-ml-2"
        >
          <ItemCard
            title="GreenThumb"
            subText="Gardener in cheche"
            link={GardenerImg}
          />
        </animated.div>
      )}
    </Visibilitysensor>
  );
};

export default GardenerCard;
