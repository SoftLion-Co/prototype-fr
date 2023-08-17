import s from "./page.module.scss";
import ResultSection from "@/app/sections/project_page/ResultSection";
import RequestSection from "@/app/sections/project_page/RequestSection";
import ProjectDescriptionSection from "@/app/sections/project_page/ProjectDescriptionSection";

const Project = () => {
  return (
    <div>
      <ProjectDescriptionSection />
      <ResultSection />
      <RequestSection />
    </div>
  );
};

export default Project;
