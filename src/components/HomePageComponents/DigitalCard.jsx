import React from "react";
import digitalcard from "../Images/digitalcard.jpg";
import ProductCard from "../Cards/ProductCard";

const DigitalCard = () => {
  return (
    <div className="  my-5  text-white">
      <p  className=" text-center text-4xl font-bold my-5 text-orange-500 ">DIGITAL CARDS</p>
      <div className=" flex  justify-around">
        <ProductCard img={digitalcard} />
        <ProductCard img={digitalcard} />
        <ProductCard img={digitalcard} />
        <ProductCard img={digitalcard} />
      </div>
    </div>
  );
};

export default DigitalCard;
