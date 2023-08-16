import s from "./page.module.scss";
import ResultSection from "../sections/project_page/ResultSection";
import RequestSection from "../sections/project_page/RequestSection";
import ProjectDescriptionSection from "../sections/project_page/ProjectDescriptionSection";

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <ProjectDescriptionSection />
      <ResultSection />
      <RequestSection />
    </div>
  );
};

export default Projects;
