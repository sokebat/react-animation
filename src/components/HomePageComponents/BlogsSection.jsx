import React from "react";
import BlogCard from "../Cards/BlogCard";

const BlogsSection = () => {
  return (
    <div className=" px-5 my-5">
      <p className=" text-center font-bold text-4xl my-5 text-orange-500 ">Read Our Articles</p>

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
