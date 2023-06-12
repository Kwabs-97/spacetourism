/** @format */

import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Destination from "./Destination";

function Homepage() {
  return (
    <div className="bg-heropatternMobile sm:bg-heropatternTablet lg:bg-heropatternDesktop bg-cover bg-no-repeat min-h-screen  bg-center overflow-hidden p-0 m-0 overflow-y-hidden ">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default Homepage;
