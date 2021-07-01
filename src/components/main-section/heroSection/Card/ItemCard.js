import React from "react";

const CardContainer = ({ children }) => (
  <div className="shadow-lg mini-card p-1 bg-white rounded-lg">{children}</div>
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

const TextContainer = ({ children }) => <div className="mt-2">{children}</div>;
const MainText = ({ children }) => (
  <p className="text-sm font-bold px-0 md:mt-1">{children}</p>
);

const SubText = ({ children }) => (
  <p style={{ color: "#004E4C" }} className="text-xs sub-text -mt-1">
    {children}
  </p>
);
const Card = ({ title, subText, link }) => (
  <CardContainer>
    <CardImage link={link} alt={title} />
    <TextContainer>
      <MainText>{title}</MainText>
      <SubText>{subText}</SubText>
    </TextContainer>
  </CardContainer>
);

export default Card;
