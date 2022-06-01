import React from "react";
import logo from "../Images/logo.svg";
import hamburger from "../Images/icon-hamburger.svg";
const Links = () => {
  return (
    <nav className="df ai-c">
      <img src={logo} alt="room-logo" />
      <img
        className="hide-in-desktop"
        src={hamburger}
        alt="hamburger-menu-icon"
      />
      <ul className="df ai-c">
        <li>Home</li>
        <li>Shop</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Links;
