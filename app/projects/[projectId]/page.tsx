import s from "./page.module.scss";
import ResultSection from "@/app/sections/project_page/ResultSection";
import RequestSection from "@/app/sections/project_page/RequestSection";
import ProjectDescriptionSection from "@/app/sections/project_page/ProjectDescriptionSection";
import SolutionSection from "@/app/sections/project_page/SolutionSection";
import BlogSection from "@/app/sections/home_page/BlogSection";
import ProjectContactUs from "@/app/sections/project_page/ProjectContactUs";


const Project = () => {
  return (
    <div className={s.page}>
      <ProjectDescriptionSection />
      <RequestSection />
      <SolutionSection />
      <ResultSection />
      <BlogSection />
      <ProjectContactUs/>
    </div>
  );
};

export default Project;
