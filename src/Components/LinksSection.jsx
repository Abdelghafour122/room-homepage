import React from "react";
import ImgChanger from "./ImgChanger";
import Links from "./Links";

const LinksSection = ({ image, mobileImg }) => {
  return (
    <div className="links-section df">
      <Links />
      <img className="hide-in-mobile" src={image} alt="hero-background" />
      <img
        className="hide-in-desktop"
        src={mobileImg}
        alt="hero-background-mobile"
      />
      <div className="imgchanger-holder df ai-c hide-in-desktop">
        <ImgChanger />
      </div>
    </div>
  );
};

export default LinksSection;
