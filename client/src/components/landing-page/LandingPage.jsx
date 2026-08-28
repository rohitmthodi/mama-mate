import React from "react";
import LandingHero from "./LandingHero";
import LandingFooter from "./LandingFooter";

const LandingPage = () => {
  return (
    <div className="min-h-screen text-gray-900 cursor-default">
      <LandingHero />
      <LandingFooter />
    </div>
  );
};

export default LandingPage;