import React from "react";
import BlogsSection from "@/app/sections/blog_page/BlogsSection";
import UseClientComponent from "@/hooks/useClientComponent";

const Blogs = () => {
  const title = "Blog";

  return (
    <div>
      <UseClientComponent title={title} />
      <BlogsSection />
    </div>
  );
};

export default Blogs;
