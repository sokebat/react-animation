import React from "react";
import image from "../Images/heroImage.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative text-white w-full">
      <img src={image} alt="Image 1" className="max-h-full w-full" />
      <div className="absolute top-1/2 left-1/2 sm:left-1/4  transform -translate-x-1/2 -translate-y-1/2 max-w-72 sm:w-full md:w-96 text-center sm:text-left">
        <p className="rounded p-1 bg-opacity-70 text-sm sm:text-base">
          2 April 2024
        </p>
        <p className="text-md sm:text-2xl md:text-3xl font-mono">
          Horizon Forbidden West Complete Edition
        </p>
        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(0,0,555)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          type="button"
          className="text-white bg-[#FF9119] rounded-xl sm:mt-2 md:mt-5 hover:bg-[#FF9111]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9125]/50 text-sm sm:text-base px-5 py-2.5 text-center inline-flex items-center mb-2"
        >
          Buy Now
        </motion.button>
      </div>
    </div>
  );
};

export default HeroSection;
