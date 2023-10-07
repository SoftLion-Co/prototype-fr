import React from "react";
import OurProjectsSection from "../sections/projects_page/OurProjectsSection";
import InfoNavigationComponent from "@/components/InfoNavigationComponent";
export async function generateMetadata({}) {
  return { title: "SoftLion | Projects" };
}

const Projects = () => {
  const links = [{ title: "Projects", href: "/projects" }];

  return (
    <div>
      <InfoNavigationComponent links={links} />
      <OurProjectsSection />
    </div>
  );
};

export default Projects;
