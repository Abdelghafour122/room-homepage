import React, { useState } from "react";
import logo from "../Images/logo.svg";
import hamburger from "../Images/icon-hamburger.svg";
import close from "../Images/icon-close.svg";

const Links = () => {
  const [imageSrc, setImageSrc] = useState(hamburger);
  const handleClick = () => {
    setImageSrc((imgSrc) => (imgSrc === hamburger ? close : hamburger));
  };

  return (
    <nav className={`df ai-c ${imageSrc === close && "jc-c"}`}>
      <img src={logo} alt="room-logo" />
      <img
        className="hide-in-desktop"
        src={imageSrc}
        alt="menu-icon"
        onClick={handleClick}
      />
      <ul className="hide-in-mobile">
        <li>Home</li>
        <li>Shop</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <ul
        className={`mobile ${imageSrc === close ? "show-slow" : "hide-slow"} `}
      >
        <li>Home</li>
        <li>Shop</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Links;
