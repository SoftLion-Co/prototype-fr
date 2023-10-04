"use client";

import React, { useEffect } from "react";
import BlogsSection from "@/app/sections/blog_page/BlogsSection";
import { Helmet } from "react-helmet";

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
  }, []);

  const links = [{ title: "Blog", href: "#" }];

  return (
    <div>
      <Helmet key={window.location.pathname}>
        <title>SoftLion | Blog</title>
      </Helmet>

      <BlogsSection />
    </div>
  );
};

export default Blogs;
