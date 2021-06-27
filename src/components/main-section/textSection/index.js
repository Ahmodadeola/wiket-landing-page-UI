import React from "react";

const TextSectionContainer = ({ children }) => (
  <div style={{ color: "#004E4C" }} className="my-10">
    {children}
  </div>
);

const TopText = ({ children }) => (
  <div className="text-xl font-medium">{children}</div>
);

const BigText = ({ children }) => (
  <div className="text-5xl mb-4 font-bold leading-none">{children}</div>
);
const BriefText = ({ children }) => (
  <div style={{ width: "17em" }} className="text-lg font-normal">
    {children}
  </div>
);

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