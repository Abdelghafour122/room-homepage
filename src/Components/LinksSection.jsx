import React from "react";
import ImgChanger from "./ImgChanger";
import Links from "./Links";

const LinksSection = ({ image }) => {
  return (
    <div className="links-section">
      <Links />

      <img src="" alt="" />
      <div className="imgchanger-holder hide-in-desktop">
        <ImgChanger />
      </div>
    </div>
  );
};

export default LinksSection;
