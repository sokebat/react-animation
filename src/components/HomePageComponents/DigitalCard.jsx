import React from "react";
import digitalcard from "../Images/digitalcard.jpg";
import ProductCard from "../Cards/ProductCard";
import { motion } from "framer-motion";

const DigitalCard = () => {
  const text = "DIGITAL   CARDS".split("");
  return (
    <div className="  my-5 mx-5 flex flex-col items-center justify-center   text-white">
      <p className=" text-center text-4xl font-bold my-5 text-orange-500 ">
        {text.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 10,
            }}
            key={i}
          >
            {el}
          </motion.span>
        ))}
      </p>
      <div className=" grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <ProductCard img={digitalcard} />
        <ProductCard img={digitalcard} />
        <ProductCard img={digitalcard} />
        <ProductCard img={digitalcard} />
        <ProductCard img={digitalcard} />
        <ProductCard img={digitalcard} />
        <ProductCard img={digitalcard} />
        <ProductCard img={digitalcard} />
      </div>
    </div>
  );
};

export default DigitalCard;
