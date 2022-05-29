import React from "react";
import Description from "./Description";
import LinksSection from "./LinksSection";

const UpperSection = () => {
  return (
    <section className="upper-section">
      <LinksSection />
      <Description />
    </section>
  );
};

export default UpperSection;
