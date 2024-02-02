import React from "react";
import { motion } from "framer-motion";

const ProductCard = (props) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.04,
        boxShadow: "0px 0px 8px rgb(255,255,255)",
      }}
      className=" flex flex-col items-center justify-center w-[300px] bg-gray-700 rounded-xl text-white"
    >
      <img src={props.img} alt="" class=" w-[300px] object-fit rounded-xl" />
      <h3 class=" mt-2 group-hover:underline group-hover:underline-offset-4">
        Small Headphones
      </h3>
      <div class=" flex  gap-4 text-sm p-3">
        <p class="mt-1.5 text-xs  w-[70%]">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </p>

        <p class="text-green-600 font-bold text-xl ">$299</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
