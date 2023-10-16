import React from "react";
import BlogsSection from "@/app/sections/blog_page/BlogsSection";

import useGoogleAnalytics from "@/hooks/useGoogleAnalytics";

export async function generateMetadata({}) {
  return { title: "SoftLion | Blog" };
}

const Blogs = () => {
  useGoogleAnalytics();

  return (
    <div>
      <BlogsSection />
    </div>
  );
};

export default Blogs;
