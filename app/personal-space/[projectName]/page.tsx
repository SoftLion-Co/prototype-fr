"use client";
import React from "react";
import s from "./page.module.scss";
import InfoNavigationComponent from "@/components/InfoNavigationComponent";
import ProjectSection from "@/app/sections/user_project_page/ProjectSection";
import SidebarMenu from "@/components/personal-space/SidebarMenu";

interface SidebarMenuParams {
  projectName: string;
}

const ProjectPersonal = ({ params }: { params: SidebarMenuParams }) => {
  const projectName = decodeURIComponent(params.projectName);

  const links = [{ title: projectName, href: "#" }];

  return (
    <>
      <div className={s.infoNavigat}>
        <InfoNavigationComponent links={links} />
      </div>
      <div className={s.project}>
        <SidebarMenu />
        <div className={s.project__container}>
          <ProjectSection projectName={projectName} />
        </div>
      </div>
    </>
  );
};

export default ProjectPersonal;
