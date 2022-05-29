import React, { useState, useEffect } from "react";
import data from "../data";
import Description from "./Description";
import LinksSection from "./LinksSection";

const UpperSection = () => {
  const [dataIndex, setDataIndex] = useState(0);
  const [image, setImage] = useState(data[0].img);
  const [mobileImg, setMobileImg] = useState(data[0].mobileImg);
  const [head, setHead] = useState(data[0].heading);
  const [para, setPara] = useState(data[0].paragraph);

  useEffect(() => {
    data.forEach((d, ind) => {
      if (ind === dataIndex) {
        setImage(data[ind].img);
        setMobileImg(data[ind].mobileImg);
        setHead(data[ind].heading);
        setPara(data[ind].paragraph);
      }
    });
  }, [dataIndex]);

  const handleIncrement = () => {
    dataIndex === 2
      ? setDataIndex(0)
      : setDataIndex((prevIndex) => prevIndex + 1);
  };
  const handleDecrement = () => {
    dataIndex === 0
      ? setDataIndex(2)
      : setDataIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <section className="upper-section">
      <LinksSection image={image} mobileImg={mobileImg} />
      <Description
        onDecrement={handleDecrement}
        onIncrement={handleIncrement}
        heading={head}
        paragraph={para}
      />
    </section>
  );
};

export default UpperSection;
