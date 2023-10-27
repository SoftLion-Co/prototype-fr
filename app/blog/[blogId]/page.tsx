import React from "react";
import InformationSection from "@/app/sections/article_page/ImpressionSection";
import ArticleSection from "@/app/sections/article_page/ArticleSection";
import InfoNavigationComponent from "@/components/InfoNavigationComponent";
import OurTeamSection from "@/app/sections/home_page/OurTeamSection";
import blogsData from "@/data/blog/blogs_extended_data.json";

import useGoogleAnalytics from "@/hooks/useGoogleAnalytics";

type BlogData = {
  [key: string]: {
    authorImg: string;
    articleName: string;
    articleimg: string;
    readTime: string;
    author: string;
    authorId: string;
    articles: (
      | { id: string; title: string; description: string; image: string }
      | { id: string; title: string; description: string; image?: undefined }
    )[];
  };
};

interface BlogParams {
  blogId: string;
  id: string;
}

const Blog = ({ params }: { params: BlogParams }) => {
  useGoogleAnalytics();

  const { blogId } = params;

  const response = (blogsData as BlogData)[blogId];

  if (!response) {
    return <div>Запис не знайдено</div>;
  }

  const links = [
    { title: "Blog", href: "/blog" },
    { title: response.articleName, href: "#" },
  ];

  const metadata = {
    title: response.articleName,
  };

  return (
    <div>
      <head>
        <title>{metadata.title}</title>
      </head>

      <InfoNavigationComponent links={links} />
      <ArticleSection response={response} />
      <InformationSection />
      <OurTeamSection />
    </div>
  );
};

export default Blog;
