import React from "react";
import { heroSlides } from "@/data";
import components from "@/components";
import SubscribePopUp from "@/components/SubscribePopUp";

const HomePage = () => {
  return (
    <div>
      <components.Hero slides={heroSlides} />
      <components.Service />
      <components.Expectation />
      <components.Latest />
      <components.Testimonials />
      <SubscribePopUp />
    </div>
  );
};

export default HomePage;
