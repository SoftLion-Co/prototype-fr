import s from "./page.module.scss";
import ResultSection from "../sections/project_page/ResultSection";
import RequestSection from "../sections/project_page/RequestSection";

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <ResultSection />
      <RequestSection />
    </div>
  );
};

export default Projects;
