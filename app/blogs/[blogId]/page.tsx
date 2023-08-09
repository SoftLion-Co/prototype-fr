import ImpressionSection from "../../sections/article_page/ImpressionSection";
import { ArticleSection } from "../../sections/article_page/ArticleSection";
import InfoNavigationComponent from "@/components/InfoNavigationComponent";
import OurTeamSetcion from "@/app/sections/home_page/OurTeamSection";

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
      <OurTeamSetcion/>
    </div>
  );
};

export default Blog;
