import React from "react";
import OurProjectsSection from "../sections/projects_page/OurProjectsSection";
import InfoNavigationComponent from "@/components/InfoNavigationComponent";

import useGoogleAnalytics from "@/hooks/useGoogleAnalytics";

export async function generateMetadata({}) {
  return { title: "SoftLion | Projects" };
}

const Projects = () => {
  useGoogleAnalytics();

  const links = [{ title: "Projects", href: "/projects" }];

  return (
    <React.Fragment>
      <InfoNavigationComponent links={links} />
      <OurProjectsSection />
    </React.Fragment>
  );
};

export default Projects;
