import React from "react";
import arrow from "../Images/icon-arrow.svg";
import ImgChanger from "./ImgChanger";

const Description = ({ heading, paragraph }) => {
  return (
    <div className="description">
      <h1>Discover innovative ways to decorate</h1>
      <p>
        We provide unmatched quality, comfort, and style for property owners
        across the country. Our experts combine form and function in bringing
        your vision to life. Create a room in your own style with our collection
        and make your property a reflection of you and what you love.
      </p>
      <button>
        Shop now
        <img src={arrow} alt="arrow-right" />
      </button>
      <div className="imgchanger-holder hide-in-mobile">
        <ImgChanger />
      </div>
    </div>
  );
};

export default Description;
