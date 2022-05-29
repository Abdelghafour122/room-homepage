import React from "react";
import leftImg from "../Images/image-about-dark.jpg";
import rightImg from "../Images/image-about-light.jpg";

const LowerSection = () => {
  return (
    <section className="lower-section">
      <div className="left-img">
        <img src={leftImg} alt="about-dark" />
      </div>
      <div className="center-text">
        <h2>About our furniture</h2>
        <p>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <div className="right-img">
        <img src={rightImg} alt="about-light" />
      </div>
    </section>
  );
};

export default LowerSection;
