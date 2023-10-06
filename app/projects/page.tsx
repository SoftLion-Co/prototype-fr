import React from "react";
import OurProjectsSection from "../sections/projects_page/OurProjectsSection";
import InfoNavigationComponent from "@/components/InfoNavigationComponent";
import UseClientComponent from "@/hooks/useClientComponent";

const Projects = () => {
  const links = [{ title: "Projects", href: "/projects" }];
  const title = "Projects";

  return (
    <div>
      <UseClientComponent title={title} />
      <InfoNavigationComponent links={links} />
      <OurProjectsSection />
    </div>
  );
};

export default Projects;
