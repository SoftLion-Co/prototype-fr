import React from "react";
import BlogsSection from "@/app/sections/blog_page/BlogsSection";
export async function generateMetadata({}) {
  return { title: "SoftLion | Blog" };
}

const Blogs = () => {
  return (
    <div>
      <BlogsSection />
    </div>
  );
};

export default Blogs;
