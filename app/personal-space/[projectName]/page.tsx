"use client";

import InfoNavigationComponent from "@/components/InfoNavigationComponent";
import ProjectSection from "@/app/sections/user_project_page/ProjectSection";
import SidebarMenu from "@/components/personal-space/SidebarMenu";
import СustomLoaderComponent from "@/app/personal-space/components/СustomLoaderComponent";

import { useOrderProjectData } from "@/hooks/useOrderProjectData";
import s from "./page.module.scss";

interface SidebarMenuParams {
  projectName: string;
}

const ProjectPersonal = ({ params }: { params: SidebarMenuParams }) => {
  const { isLoading, error } = useOrderProjectData();
  const projectName = decodeURIComponent(params.projectName);

  const links = [{ title: projectName, href: "#" }];
  if (isLoading) {
    return <СustomLoaderComponent />;
  }
  return (
    <div className={s.wrapper}>
      <div className={s.infoNavigat}>
        <InfoNavigationComponent links={links} />
      </div>

      <div className={s.section}>
        <div className={s.section__sidebar}>
          <SidebarMenu />
        </div>
        <ProjectSection projectName={projectName} />
      </div>
    </div>
  );
};

export default ProjectPersonal;
