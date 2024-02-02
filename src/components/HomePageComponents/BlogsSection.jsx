import React from "react";
import BlogCard from "../Cards/BlogCard";
import { motion } from "framer-motion";

const BlogsSection = () => {
  return (
    <div className=" px-5 my-5">
      <motion.p
        initial={{ opacity: 0.4 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.25,
          delay: 1.5,
        }}
        className=" text-center font-bold text-4xl my-5 text-orange-500 "
      >
        Read Our Articles
      </motion.p>

      <div className=" grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default BlogsSection;
