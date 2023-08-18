"use client";
import s from "./page.module.scss";
import BlogsSection from "@/app/sections/blog_page/BlogsSection";

const Blogs = () => {
  const links = [{ title: "Blog", href: "#" }];

  return (
    <div>
      <BlogsSection />
    </div>
  );
};

export default Blogs;
