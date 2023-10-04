"use client";

import { Helmet } from "react-helmet";
import React, { useEffect } from "react";
import OurTeamSetcion from "@/app/sections/home_page/OurTeamSection";
import InfoNavigationComponent from "@/components/InfoNavigationComponent";
import AuthorBlogs from "@/app/sections/author_page/AuthorBlogs";
import AuthorSection from "@/app/sections/author_page/AuthorSection";
import { usePathname, redirect } from "next/navigation";
import { AuthorInterface } from "@/app/sections/author_page/AuthorInteface";
import authors from "@/data/blog/authors_data.json";
import getBlogsData from "@/hooks/getBlogsData";

const Author = () => {
  useEffect(() => {
    // Google tag (gtag.js)
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-YPC94QJXCN";

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-YPC94QJXCN');
    `;

    document.head.appendChild(script1);
    document.head.appendChild(script2);
  }, []);

  const id = usePathname().split("/").reverse()[0];
  const authorData: { [key: string]: AuthorInterface } = authors;
  const author = authorData[id];
  const blogData = getBlogsData();
  if (!author) {
    redirect(`/authors/${Object.keys(authorData)[0]}`);
  }
  const links = [{ title: author.name, href: "" }];
  const blogs = blogData.filter((item) => item.authorId === id);

  return (
    <div style={{ paddingBottom: "5%" }}>
      <Helmet key={window.location.pathname}>
        <title>SoftLion | Author</title>
      </Helmet>

      <InfoNavigationComponent links={links} />
      <AuthorSection
        name={author.name}
        imgSrc={author.imgSrc}
        occupation={author.occupation}
        description={author.generalInfo}
      />
      <AuthorBlogs articles={blogs}></AuthorBlogs>
      <OurTeamSetcion />
    </div>
  );
};

export default Author;
