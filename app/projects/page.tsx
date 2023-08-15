import s from "./page.module.scss";
import ResultSection from "../sections/project_page/ResultSection";
import RequestSection from "../sections/project_page/RequestSection";
import ProjectDescriptionSection from "../sections/project_page/ProjectDescriptionSection";
import ProjectContactUs from "../sections/project_page/ProjectContactUs";

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <ProjectDescriptionSection />
      <ResultSection />
      <RequestSection />
      <ProjectContactUs/>
    </div>
  );
};

export default Projects;
