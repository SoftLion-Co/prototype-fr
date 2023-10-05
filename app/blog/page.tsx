import React from "react";
import BlogsSection from "@/app/sections/blog_page/BlogsSection";
import UseClientComponent from "@/hooks/useClientComponent";

const Blogs = (argument?: string) => {
  const title = "Blog";

  return (
    <div>
      <UseClientComponent argument={argument} title={title} />
      <BlogsSection />
    </div>
  );
};

export default Blogs;
