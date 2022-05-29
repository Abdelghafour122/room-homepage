import React from "react";
import angleLeft from "../Images/icon-angle-left.svg";
import angleRight from "../Images/icon-angle-right.svg";

const ImgChanger = () => {
  return (
    <div>
      <button>
        <img src={angleLeft} alt="angle-left-icon" />
      </button>
      <button>
        <img src={angleRight} alt="angle-right-icon" />
      </button>
    </div>
  );
};

export default ImgChanger;
