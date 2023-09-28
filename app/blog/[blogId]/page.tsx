import s from "./page.module.scss";
import ImpressionSection from "@/app/sections/article_page/ImpressionSection";
import ArticleSection from "@/app/sections/article_page/ArticleSection";
import InfoNavigationComponent from "@/components/InfoNavigationComponent";
import OurTeamSetcion from "@/app/sections/home_page/OurTeamSection";
import getBlogsData from "@/hooks/getBlogsData";
import blogsData from "@/data/blog/blogs_extended_data.json"; 


type BlogData = {
  [key: string]: {
    authorImg: string;
    articleName: string;
    articleimg: string;
    readTime: string;
    author: string;
    articles: ({ id: string; title: string; description: string; image: string } | { id: string; title: string; description: string; image?: undefined })[];
  };
};

interface BlogParams {
  blogId: string;
}

const Blog = ({ params }: { params: BlogParams }) => {

  const { blogId } = params;

  const response = (blogsData as BlogData)[blogId];

  if (!response) {
    return <div>Запис не знайдено</div>;
  }

  const links = [
    { title: "Blog", href: "/blogs" },
    { title: response.articleName, href: "#" },
  ];

  return (
    <div>
      <InfoNavigationComponent links={links} />
      <ArticleSection response={response}/>
      <ImpressionSection />
      <OurTeamSetcion />
    </div>
  );
};

export default Blog;
