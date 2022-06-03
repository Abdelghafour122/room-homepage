import React from "react";
import arrow from "../Images/icon-arrow.svg";
import ImgChanger from "./ImgChanger";

const Description = ({ heading, paragraph, onIncrement, onDecrement }) => {
  return (
    <div className="description df fd-c ai-fs jc-c">
      <h1>{heading}</h1>
      <p>{paragraph}</p>
      <button className="shop df ai-c jc-c">
        Shop now
        <img src={arrow} alt="arrow-right" />
      </button>
      <div className="imgchanger-holder df ai-c hide-in-mobile">
        <ImgChanger onIncrement={onIncrement} onDecrement={onDecrement} />
      </div>
    </div>
  );
};

export default Description;
