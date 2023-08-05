import ImpressionSection from "../../sections/article_page/ImpressionSection";
import { ArticleSection } from "../../sections/article_page/ArticleSection";
import InfoNavigationComponent from "@/components/InfoNavigationComponent";

const Blog = () => {
  const links = [
    { title: "Blog", href: "/blogs" },
    { title: "This blog", href: "#" },
  ];

  return (
    <div>
      <InfoNavigationComponent links={links} />
      <ArticleSection />
      <ImpressionSection />
    </div>
  );
};

export default Blog;
