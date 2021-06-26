import React from "react";
import MainSection from "../../components/main-section";
import Navbar from "../../components/navbar";

const HomepageContainer = ({ children }) => (
  <div
    className="
  h-full"
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