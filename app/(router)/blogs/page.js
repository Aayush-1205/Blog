'use client'
import React from "react";
import { BlogList, WelcomeBanner } from "../_components";

const Blog = () => {
  return (
    <div className="grid grid-cols-1 p-5 md:grid-cols-4">
      {/* Left */}
      <div className="col-span-4">
        <WelcomeBanner />
        <BlogList />
      </div>

      {/* Right */}
      {/* <div className="">Right</div> */}
    </div>
  );
};

export default Blog;
