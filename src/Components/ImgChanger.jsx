import React from "react";
import angleLeft from "../Images/icon-angle-left.svg";
import angleRight from "../Images/icon-angle-right.svg";

const ImgChanger = ({ onDecrement, onIncrement }) => {
  return (
    <>
      <button onClick={onDecrement}>
        <img src={angleLeft} alt="angle-left-icon" />
      </button>
      <button onClick={onIncrement}>
        <img src={angleRight} alt="angle-right-icon" />
      </button>
    </>
  );
};

export default ImgChanger;
