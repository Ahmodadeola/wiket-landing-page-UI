import React from "react";
import MainSection from "../../components/main-section";
import Navbar from "../../components/navbar";

const HomepageContainer = ({ children }) => (
  <div
    style={{ backgroundColor: "rgb(250 168 52 / 12%)" }}
    className="
  h-screen w-full px-6"
  >
    {children}
  </div>
);

function Homepage() {
  return (
    <HomepageContainer>
      <Navbar />
      <MainSection />
    </HomepageContainer>
  );
}

export default Homepage;
