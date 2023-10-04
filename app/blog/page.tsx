"use client";

import React, { useEffect } from "react";
import BlogsSection from "@/app/sections/blog_page/BlogsSection";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

const Blogs = () => {
  useEffect(() => {
    // Google tag (gtag.js)
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-YPC94QJXCN";
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }

      gtag("js", { "new Date()": new Date() });
      gtag("config", "G-YPC94QJXCN");
    };

    // Set document title
    document.title = "SoftLion | Blog";
  }, []);

  const links = [{ title: "Blog", href: "#" }];

  return (
    <div>
      <BlogsSection />
    </div>
  );
};

export default Blogs;
