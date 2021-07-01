import React from "react";
import ItemCard from "./ItemCard";
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

  return (
    <Visibilitysensor partialVisibility>
      {({ isVisible }) => (
        <animated.div
          style={props}
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
