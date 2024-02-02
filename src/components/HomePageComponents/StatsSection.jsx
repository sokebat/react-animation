import React from "react";
import { motion } from "framer-motion";

const StatsSection = () => {
  return (
    <section className="text-white container">
      <div className="px-4 py-12 sm:px-6 md:py-16">
        <motion.div
          initial={{ opacity: 0.4 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: 1.5,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.h2 className="text-3xl font-bold sm:text-4xl">
            Trusted by eCommerce Businesses
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 sm:text-xl"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            dolores laborum labore provident impedit esse recusandae facere
            libero harum sequi.
          </motion.p>
        </motion.div>

        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <motion.div
              whileHover={{
                scale: 1.05,
                textShadow: "0px 0px 8px rgb(0,0,555)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay:   0.3}}
              className="flex flex-col rounded-lg border items-center justify-center border-gray-100 px-4 py-8 text-center"
            >
              <dt className="order-last text-lg font-medium">Total Sales</dt>
              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                $4.8m
              </dd>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
                textShadow: "0px 0px 8px rgb(0,0,555)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5,  delay: 0.4 }}
              className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
            >
              <dt className="order-last text-lg font-medium">
                Official Addons
              </dt>
              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                24
              </dd>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
                textShadow: "0px 0px 8px rgb(0,0,555)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5,  delay: 0.5 }}
              className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
            >
              <dt className="order-last text-lg font-medium">Total Addons</dt>
              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                86
              </dd>
            </motion.div>

            <motion.button
              whileHover={{
                scale: 1.05,
                textShadow: "0px 0px 8px rgb(0,0,555)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-full p-2"
            >
              Order Now
            </motion.button>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
