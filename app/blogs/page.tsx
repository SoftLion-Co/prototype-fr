import ImpressionSection from "../sections/article_page/ImpressionSection";
import { ArticleSection } from "../sections/article_page/ArticleSection";
import s from "./page.module.scss";
import OurTeamSetcion from "../sections/home_page/OurTeamSetcion";

const Blogs = () => {
  return (
    <div>
      <h1>Blogs</h1>
      <ArticleSection />
      <ImpressionSection />
      <OurTeamSetcion/>
    </div>
  );
};

export default Blogs;
