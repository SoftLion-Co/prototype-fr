import React from "react";
import BlogsSection from "@/app/sections/blog_page/BlogsSection";
import InfoNavigationComponent from "@/components/InfoNavigationComponent";
import useGoogleAnalytics from "@/hooks/useGoogleAnalytics";

export async function generateMetadata({}) {
  return { title: "SoftLion | Blog" };
}

const Blogs = () => {
  useGoogleAnalytics();
  const links = [{ title: "Blog", href: "/blog" }];

  return (
    <React.Fragment>
      <InfoNavigationComponent links={links} />
      <BlogsSection />
    </React.Fragment>
  );
};

export default Blogs;
