import React from "react";

import acc from "../Images/ExclusiveImages/accesories.png";
import console from "../Images/ExclusiveImages/CONSOLES.png";
import videogames from "../Images/ExclusiveImages/VIDEOGAMES.png";
import merchandise from "../Images/ExclusiveImages/MERCHANDISE.png";
import { motion } from "framer-motion";

const ExclusiveDeals = () => {
  return (
    <div className=" w-full flex flex-col justify-center items-center mt-5 ">
      <motion.p
        initial={{ opacity: 0.4 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.25,
          delay: 1.5,
        }}
        className="   text-4xl font-bold my-5 text-orange-500 "
      >
        EXCLUSIVE DEALS{" "}
      </motion.p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-white font-bold text-lg">
        <motion.div
          initial={{ opacity: 0.4 }}
          whileInView={{ opacity: 1 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
          }}
          transition={{ duration: 0.25, delay: 0.4 }}
          className=" rounded-xl"
        >
          <img src={acc} alt="Image 1" className=" max-h-full rounded-xl" />
          <p className="  text-center my-2"> Accesories</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.4 }}
          whileInView={{ opacity: 1 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
          }}
          transition={{ duration: 0.25, delay: 0.4 }}
          className=" rounded-xl"
        >
          <img src={console} alt="Image 1" className=" max-h-full rounded-xl" />
          <p className="  text-center my-2"> Consoles</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.4 }}
          whileInView={{ opacity: 1 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
          }}
          transition={{ duration: 0.25, delay: 0.4 }}
          className=" rounded-xl"
        >
          <img
            src={videogames}
            alt="Image 1"
            className=" max-h-full rounded-xl"
          />
          <p className="  text-center my-2"> Video Games</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.4 }}
          whileInView={{ opacity: 1 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
          }}
          transition={{ duration: 0.25, delay: 0.4 }}
          className=" rounded-xl"
        >
          <img
            src={merchandise}
            alt="Image 1"
            className=" max-h-full rounded-xl"
          />
          <p className="  text-center my-2"> Merchandise</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ExclusiveDeals;
