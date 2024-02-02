import React from "react";

import image from "../Images/herosectionimage.jpg";

const HeroSection = () => {
  return (
    <div className="  flex flex-col mt-12 py-3 items-center justify-center">
      <div className=" relative text-white ">
        <img src={image} alt="Image 1" className=" max-h-full" />
        <div className=" absolute top-52 left-20 w-96">
          <p className="  rounded p-1 ">2 April 2024</p>
          <p className=" text-2xl font-mono">
            {" "}
            Horizon Forbidden West Complete Edition
          </p>
          <button
            type="button"
            class="text-white bg-[#FF9119] rounded-xl mt-5
             hover:bg-[#FF9111]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9125]/50  text-sm px-5 py-2.5 text-center inline-flex items-center mb-2"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
