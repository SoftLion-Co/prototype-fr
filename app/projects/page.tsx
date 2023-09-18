import s from "./page.module.scss";
import OurProjectsSection from "../sections/projects_page/OurProjectsSection";
import InfoNavigationComponent from "@/components/InfoNavigationComponent";

const Projects = () => {
  const links = [{ title: "Projects", href: "/projects" }];

  return (
    <div>
      <InfoNavigationComponent links={links}/>
      <OurProjectsSection />
    </div>
  );
};

export default Projects;
